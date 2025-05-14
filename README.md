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

Node.js
Java (JDK)
ANTLR4
Extensión ANTLR4 Grammar Syntax Support en Visual Studio Code (para depurar y ver el árbol)
📥 ¿Cómo preparar el proyecto?
Cloná el repositorio:

Abra una terminal en la carpeta del proyecto En VS Code: Terminal > New Terminal

O usa el atajo: Ctrl + ñ

La terminal se abrirá directamente en la raíz del proyecto e instalará las dependencias con:

instalación de npm

▶️¿Cómo ejecutar el intérprete?
Copia uno de los seis archivos que hay en la carpeta 'Ejemplos' y pegalo en input.txt. GRABAR GUARDAR (Ctrl + s)
Ejecuta el analizador
Al ejecutar este comando: node index.js

✅ Si no hay errores de sintaxis, verás un mensaje de entrada válido.

❌ Si hay errores, se mostrarán en rojo con línea y columna exacta.

🌳 Se imprimirá el árbol de derivación en formato de texto.

📝 Se mostrará el código JavaScript generado a partir del código fuente.

▶️Se ejecutará el programa como un intérprete, mostrando los resultados en consola.

🔎 Ver el árbol gráficamente (opcional)

Presione F5 en VS Code o haga clic en el botón Debug ANTLR4 Grammar (ícono de▶️con un bichito).

Asegúrese de haber abierto el archivo AnalizadorVariar.g4 y tener seleccionada la regla inicial (AnalizadorVariar) arriba a la izquierda.

📊 Ver la tabla de tokens

Comando: node generarTabla.js

Este comando genera e imprime una tabla con los lexemas y tokens encontrados en el archivo input.txt.