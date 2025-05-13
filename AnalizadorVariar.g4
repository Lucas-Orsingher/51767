grammar AnalizadorVariar;

// --------- Reglas del parser ---------

programa
    : instruccion+ EOF
    ;

instruccion
    : variar
    | asignacion
    | salida
    ;

variar
    : VARIAR variable DESDE expresion HASTA expresion (CON PASO expresion)? HACER bloque FIN_VARIAR
    ;

bloque
    : instruccion*
    ;

asignacion
    : variable ASIGNACION expresion
    ;

salida
    : ESCRIBIR expresion
    ;

expresion
    : termino ( (MAS | MENOS | POR | DIV) termino )*
    ;

termino
    : NUMERO
    | variable
    | LPAREN expresion RPAREN
    ;

variable
    : IDENTIFICADOR
    ;

// --------- Reglas del lexer ---------

VARIAR      : 'variar' ;
DESDE       : 'desde' ;
HASTA       : 'hasta' ;
CON         : 'con' ;
PASO        : 'paso' ;
HACER       : 'hacer' ;
FIN_VARIAR  : 'fin_variar' ;
ESCRIBIR    : 'escribir' ;

ASIGNACION  : '<-' ;
MAS         : '+' ;
MENOS       : '-' ;
POR         : '*' ;
DIV         : '/' ;
LPAREN      : '(' ;
RPAREN      : ')' ;

// Identificadores y números
IDENTIFICADOR : [a-zA-Z] [a-zA-Z0-9_]* ;
NUMERO        : [0-9]+ ;

// Espacios en blanco y saltos de línea
WS : [ \t\r\n]+ -> skip ;
