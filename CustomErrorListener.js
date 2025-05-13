class CustomErrorListener {
  constructor() {
    this.errors = [];

    // Lista de tokens reservados válidos (palabras clave y operadores exactos)
    this.tokensReservados = new Set([
      "variar", "desde", "hasta", "hacer", "fin_variar",
      "escribir", "con", "paso",
      "<-", "+", "-", "*", "/", "(", ")"
    ]);
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const simbolo = offendingSymbol.text;
    let mensajeBase = `❌ Error de sintaxis en la línea ${line}, columna ${column}: Símbolo inesperado '${simbolo}'.`;

    if (msg.includes("extraneous input")) {
      mensajeBase = `❌ Error: Entrada inesperada '${simbolo}' en la línea ${line}, columna ${column}.`;
    } else if (msg.includes("missing")) {
      const esperado = msg.split(" ")[1];
      mensajeBase = `❌ Error: Faltaba '${esperado}' en la línea ${line}, columna ${column}.`;
    }

    // Solo sugerir si el símbolo no es un token reservado válido
    if (!this.tokensReservados.has(simbolo)) {
      const sugerencia = this.buscarSugerencia(simbolo);
      if (sugerencia) {
        const tipo = this.tokensReservados.has(sugerencia) ? (
          this.esOperador(sugerencia) ? "usar el operador" : "escribir"
        ) : "escribir";
        mensajeBase += ` ¿Quizás quisiste ${tipo} '${sugerencia}'?`;
      }
    }

    this.errors.push(mensajeBase);
  }

  buscarSugerencia(simbolo) {
    let mejor = null;
    let menorDistancia = Infinity;

    for (const token of this.tokensReservados) {
      const dist = this.levenshtein(simbolo, token);
      if (dist < menorDistancia && dist <= 2) {
        menorDistancia = dist;
        mejor = token;
      }
    }

    return mejor;
  }

  esOperador(s) {
    return ["<-", "+", "-", "*", "/", "(", ")"].includes(s);
  }

  levenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }

    return matrix[a.length][b.length];
  }

  getErrors() {
    return this.errors;
  }

  hasErrors() {
    return this.errors.length > 0;
  }
}

export default CustomErrorListener;
