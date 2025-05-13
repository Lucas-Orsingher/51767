import fs from "fs";
import { CharStreams, Token } from "antlr4";
import AnalizadorVariarLexer from "./generated/AnalizadorVariarLexer.js";

function generarTablaLexemasTokens(input) {
  const inputStream = CharStreams.fromString(input);
  const lexer = new AnalizadorVariarLexer(inputStream);

  console.log("📋 Tabla de Lexemas y Tokens:");
  console.log("--------------------------------------------------------");
  console.log("|     Lexema                 |     Token               |");
  console.log("--------------------------------------------------------");

  let token;
  while ((token = lexer.nextToken()).type !== Token.EOF) {
    const tokenType = token.type;
    const lexema = token.text;
    const tokenName =
      AnalizadorVariarLexer.symbolicNames[tokenType] || "UNKNOWN";

    const lexemaCol = lexema.padEnd(25);
    const tokenCol = tokenName.padEnd(20);
    console.log(`| ${lexemaCol} | ${tokenCol} |`);
  }

  console.log("--------------------------------------------------------");
}

function leerEntrada() {
  try {
    const contenido = fs.readFileSync("input.txt", "utf8");
    generarTablaLexemasTokens(contenido);
  } catch (error) {
    console.error("❌ No se pudo leer el archivo input.txt:", error.message);
  }
}

leerEntrada();
