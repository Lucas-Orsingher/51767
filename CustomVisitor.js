import AnalizadorVariarVisitor from "./generated/AnalizadorVariarVisitor.js";

class CustomVisitor extends AnalizadorVariarVisitor {
  constructor(translateMode = false) {
    super();
    this.translateMode = translateMode;
    this.variables = new Set(); // para rastrear variables ya declaradas
    this.output = "";
  }

  generateJS(tree) {
    this.output = "";
    this.visit(tree);
    return this.output;
  }

  visitPrograma(ctx) {
    ctx.instruccion().forEach((instr) => this.visit(instr));
  }

  visitAsignacion(ctx) {
    const varName = ctx.variable().getText();
    const expr = this.visit(ctx.expresion());

    if (!this.variables.has(varName)) {
      this.variables.add(varName);
      this.output += `let ${varName} = ${expr};\n`;
    } else {
      this.output += `${varName} = ${expr};\n`;
    }
  }

  visitSalida(ctx) {
    const expr = this.visit(ctx.expresion());
    this.output += `console.log(${expr});\n`;
  }

  visitVariar(ctx) {
    const varName = ctx.variable().getText();
    const desde = this.visit(ctx.expresion(0));
    const hasta = this.visit(ctx.expresion(1));
    const paso = ctx.expresion(2) ? this.visit(ctx.expresion(2)) : "1";

    // Bucle for traducido directamente con declaración
    this.output += `for (let ${varName} = ${desde}; ${varName} <= ${hasta}; ${varName} += ${paso}) {\n`;
    this.visit(ctx.bloque());
    this.output += `}\n`;
  }

  visitBloque(ctx) {
    ctx.instruccion().forEach(instr => this.visit(instr));
  }

  visitExpresion(ctx) {
    if (ctx.termino().length === 1) {
      return this.visit(ctx.termino(0));
    } else {
      let result = this.visit(ctx.termino(0));
      for (let i = 1; i < ctx.termino().length; i++) {
        const op = ctx.getChild(2 * i - 1).getText();
        const right = this.visit(ctx.termino(i));
        result = `(${result} ${op} ${right})`;
      }
      return result;
    }
  }

  visitTermino(ctx) {
    if (ctx.NUMERO()) {
      return ctx.NUMERO().getText();
    } else if (ctx.variable()) {
      return ctx.variable().getText();
    } else {
      return `(${this.visit(ctx.expresion())})`;
    }
  }
}

export default CustomVisitor;
