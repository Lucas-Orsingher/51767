# 📘 Proyecto "Intérprete del Lenguaje Variar"

---

Este proyecto es un **analizador léxico, sintáctico e intérprete básico** para un lenguaje personalizado con estructuras como `variar`, `asignación` y `escribir`.

Está desarrollado en **JavaScript** utilizando **ANTLR4**, y permite traducir instrucciones escritas en este lenguaje a **JavaScript** y ejecutarlas.

🧠 ¿Qué hace el intérprete?
✅ Verifica errores léxicos y sintácticos.

⚠️ Muestra advertencias si hay errores de tipeo en palabras clave (como varia en lugar de variar).

🌳 Imprime el árbol de derivación.

📝 Genera código equivalente en JavaScript.

▶️ Ejecuta el código traducido directamente en consola.

## ⚙️ Requisitos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- Node.js  
- Java (JDK)  
- ANTLR4  
- Extensión **ANTLR4 Grammar Syntax Support** en Visual Studio Code (para depurar y ver el árbol)  

---

## 📥 ¿Cómo preparar el proyecto?

1. Cloná el repositorio: 

2. Abrí una terminal en la carpeta del proyecto
En VS Code: Terminal > New Terminal

O usá el atajo: Ctrl + ñ

La terminal se abrirá directamente en la raíz del proyecto e instalá las dependencias con:

**npm install**

---

## ▶️ ¿Cómo ejecutar el intérprete?

3. Copiá uno de los seis archivos que hay en la carpeta 'Ejemplos' y pegalo en input.txt. RECORDÁ GUARDAR (Ctrl + s)
4. Ejecutá el analizador

Al ejecutar este comando: **node index.js**

✅ Si no hay errores de sintaxis, verás un mensaje de entrada válida.

❌ Si hay errores, se mostrarán en rojo con línea y columna exacta.

🌳 Se imprimirá el árbol de derivación en formato de texto.

📝 Se mostrará el código JavaScript generado a partir del código fuente.

▶️ Se ejecutará el programa como un intérprete, mostrando los resultados en consola.

🔎 Ver el árbol gráficamente (opcional)

Presioná **F5** en VS Code o hacé clic en el botón Debug ANTLR4 Grammar (ícono de ▶️ con un bichito).

Asegurate de haber abierto el archivo AnalizadorVariar.g4 y tener seleccionada la regla inicial (AnalizadorVariar) arriba a la izquierda.

---

📊 Ver la tabla de tokens

Comando: **node generarTabla.js**

Este comando genera e imprime una tabla con los lexemas y tokens encontrados en el archivo input.txt.
