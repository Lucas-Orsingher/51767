import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import AnalizadorVariarLexer from "./generated/AnalizadorVariarLexer.js";
import AnalizadorVariarParser from "./generated/AnalizadorVariarParser.js";
import CustomErrorListener from "./CustomErrorListener.js";
import CustomVisitor from "./CustomVisitor.js";

async function main() {
  let input;

  // Leer desde input.txt o consola
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena();
  }

  // ✅ Verificar errores de tipeo en palabras clave
  detectarErroresOrtograficos(input);

  // Crear flujo de caracteres para el lexer
  const inputStream = CharStreams.fromString(input);
  const lexer = new AnalizadorVariarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new AnalizadorVariarParser(tokenStream);

  // Error listener personalizado
  const errorListener = new CustomErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  // Comenzar desde la regla inicial: programa
  const tree = parser.programa();

  // Mostrar errores si hay
  if (errorListener.hasErrors()) {
    console.error("\n❌ Se encontraron errores de sintaxis:");
    errorListener.getErrors().forEach((err) => {
      console.error(err);
    });
    return;
  }

  // Si no hubo errores
  console.log("\n✅ Entrada válida.");

  // Mostrar árbol de derivación
  const derivationTree = tree.toStringTree(parser.ruleNames);
  console.log("\n🌳 Árbol de derivación:");
  console.log(derivationTree);

  // Traducir a código JavaScript
  console.log("\n📝 Traducción a código JavaScript:");
  const visitor = new CustomVisitor(true); // true: modo traducción
  const jsCode = visitor.generateJS(tree);
  console.log(jsCode);

  // Ejecutar el código traducido
  console.log("\n▶️ Ejecutando como intérprete...");
  try {
    eval(jsCode);
  } catch (err) {
    console.error("❌ Error al ejecutar el código generado:", err.message);
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// 💡 Función para detectar errores ortográficos leves en palabras clave
function detectarErroresOrtograficos(input) {
  const palabrasClave = [
    "variar", "desde", "hasta", "hacer", "fin_variar",
    "escribir", "con", "paso"
  ];

  const palabras = input.split(/\b/);
  palabras.forEach((palabra) => {
    if (
      /^[a-zA-Z_]+$/.test(palabra) &&
      !palabrasClave.includes(palabra) &&
      palabra.length > 2
    ) {
      for (const clave of palabrasClave) {
        const dist = levenshtein(palabra, clave);
        if (dist <= 2) {
          console.warn(
            `⚠️  Advertencia: La palabra '${palabra}' podría ser un error de tipeo. ¿Quisiste escribir '${clave}'?`
          );
        }
      }
    }
  });
}

// Función de distancia de Levenshtein
function levenshtein(a, b) {
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

main().catch(console.error);

