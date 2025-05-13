// Generated from c:/Users/lucas/OneDrive/Escritorio/Analizador/51767/AnalizadorVariar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorVariarListener from './AnalizadorVariarListener.js';
import AnalizadorVariarVisitor from './AnalizadorVariarVisitor.js';

const serializedATN = [4,1,18,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,40,8,2,1,2,1,
2,1,2,1,2,1,3,5,3,47,8,3,10,3,12,3,50,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
6,1,6,1,6,5,6,62,8,6,10,6,12,6,65,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,73,8,7,
1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,10,13,75,0,19,1,0,0,0,2,
28,1,0,0,0,4,30,1,0,0,0,6,48,1,0,0,0,8,51,1,0,0,0,10,55,1,0,0,0,12,58,1,
0,0,0,14,72,1,0,0,0,16,74,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,
0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,
25,29,3,4,2,0,26,29,3,8,4,0,27,29,3,10,5,0,28,25,1,0,0,0,28,26,1,0,0,0,28,
27,1,0,0,0,29,3,1,0,0,0,30,31,5,1,0,0,31,32,3,16,8,0,32,33,5,2,0,0,33,34,
3,12,6,0,34,35,5,3,0,0,35,39,3,12,6,0,36,37,5,4,0,0,37,38,5,5,0,0,38,40,
3,12,6,0,39,36,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,6,0,0,42,43,3,
6,3,0,43,44,5,7,0,0,44,5,1,0,0,0,45,47,3,2,1,0,46,45,1,0,0,0,47,50,1,0,0,
0,48,46,1,0,0,0,48,49,1,0,0,0,49,7,1,0,0,0,50,48,1,0,0,0,51,52,3,16,8,0,
52,53,5,9,0,0,53,54,3,12,6,0,54,9,1,0,0,0,55,56,5,8,0,0,56,57,3,12,6,0,57,
11,1,0,0,0,58,63,3,14,7,0,59,60,7,0,0,0,60,62,3,14,7,0,61,59,1,0,0,0,62,
65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,13,1,0,0,0,65,63,1,0,0,0,66,73,
5,17,0,0,67,73,3,16,8,0,68,69,5,14,0,0,69,70,3,12,6,0,70,71,5,15,0,0,71,
73,1,0,0,0,72,66,1,0,0,0,72,67,1,0,0,0,72,68,1,0,0,0,73,15,1,0,0,0,74,75,
5,16,0,0,75,17,1,0,0,0,6,21,28,39,48,63,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorVariarParser extends antlr4.Parser {

    static grammarFileName = "AnalizadorVariar.g4";
    static literalNames = [ null, "'variar'", "'desde'", "'hasta'", "'con'", 
                            "'paso'", "'hacer'", "'fin_variar'", "'escribir'", 
                            "'<-'", "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, "VARIAR", "DESDE", "HASTA", "CON", "PASO", 
                             "HACER", "FIN_VARIAR", "ESCRIBIR", "ASIGNACION", 
                             "MAS", "MENOS", "POR", "DIV", "LPAREN", "RPAREN", 
                             "IDENTIFICADOR", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variar", "bloque", 
                         "asignacion", "salida", "expresion", "termino", 
                         "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorVariarParser.ruleNames;
        this.literalNames = AnalizadorVariarParser.literalNames;
        this.symbolicNames = AnalizadorVariarParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorVariarParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65794) !== 0));
	        this.state = 23;
	        this.match(AnalizadorVariarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorVariarParser.RULE_instruccion);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.variar();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.asignacion();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorVariarParser.RULE_variar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(AnalizadorVariarParser.VARIAR);
	        this.state = 31;
	        this.variable();
	        this.state = 32;
	        this.match(AnalizadorVariarParser.DESDE);
	        this.state = 33;
	        this.expresion();
	        this.state = 34;
	        this.match(AnalizadorVariarParser.HASTA);
	        this.state = 35;
	        this.expresion();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 36;
	            this.match(AnalizadorVariarParser.CON);
	            this.state = 37;
	            this.match(AnalizadorVariarParser.PASO);
	            this.state = 38;
	            this.expresion();
	        }

	        this.state = 41;
	        this.match(AnalizadorVariarParser.HACER);
	        this.state = 42;
	        this.bloque();
	        this.state = 43;
	        this.match(AnalizadorVariarParser.FIN_VARIAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorVariarParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65794) !== 0)) {
	            this.state = 45;
	            this.instruccion();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorVariarParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.variable();
	        this.state = 52;
	        this.match(AnalizadorVariarParser.ASIGNACION);
	        this.state = 53;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorVariarParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(AnalizadorVariarParser.ESCRIBIR);
	        this.state = 56;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorVariarParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.termino();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0)) {
	            this.state = 59;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 60;
	            this.termino();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorVariarParser.RULE_termino);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(AnalizadorVariarParser.NUMERO);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.variable();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(AnalizadorVariarParser.LPAREN);
	            this.state = 69;
	            this.expresion();
	            this.state = 70;
	            this.match(AnalizadorVariarParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorVariarParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(AnalizadorVariarParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorVariarParser.EOF = antlr4.Token.EOF;
AnalizadorVariarParser.VARIAR = 1;
AnalizadorVariarParser.DESDE = 2;
AnalizadorVariarParser.HASTA = 3;
AnalizadorVariarParser.CON = 4;
AnalizadorVariarParser.PASO = 5;
AnalizadorVariarParser.HACER = 6;
AnalizadorVariarParser.FIN_VARIAR = 7;
AnalizadorVariarParser.ESCRIBIR = 8;
AnalizadorVariarParser.ASIGNACION = 9;
AnalizadorVariarParser.MAS = 10;
AnalizadorVariarParser.MENOS = 11;
AnalizadorVariarParser.POR = 12;
AnalizadorVariarParser.DIV = 13;
AnalizadorVariarParser.LPAREN = 14;
AnalizadorVariarParser.RPAREN = 15;
AnalizadorVariarParser.IDENTIFICADOR = 16;
AnalizadorVariarParser.NUMERO = 17;
AnalizadorVariarParser.WS = 18;

AnalizadorVariarParser.RULE_programa = 0;
AnalizadorVariarParser.RULE_instruccion = 1;
AnalizadorVariarParser.RULE_variar = 2;
AnalizadorVariarParser.RULE_bloque = 3;
AnalizadorVariarParser.RULE_asignacion = 4;
AnalizadorVariarParser.RULE_salida = 5;
AnalizadorVariarParser.RULE_expresion = 6;
AnalizadorVariarParser.RULE_termino = 7;
AnalizadorVariarParser.RULE_variable = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(AnalizadorVariarParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_instruccion;
    }

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_variar;
    }

	VARIAR() {
	    return this.getToken(AnalizadorVariarParser.VARIAR, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	DESDE() {
	    return this.getToken(AnalizadorVariarParser.DESDE, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	HASTA() {
	    return this.getToken(AnalizadorVariarParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(AnalizadorVariarParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FIN_VARIAR() {
	    return this.getToken(AnalizadorVariarParser.FIN_VARIAR, 0);
	};

	CON() {
	    return this.getToken(AnalizadorVariarParser.CON, 0);
	};

	PASO() {
	    return this.getToken(AnalizadorVariarParser.PASO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterVariar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitVariar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitVariar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASIGNACION() {
	    return this.getToken(AnalizadorVariarParser.ASIGNACION, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_salida;
    }

	ESCRIBIR() {
	    return this.getToken(AnalizadorVariarParser.ESCRIBIR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	MAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorVariarParser.MAS);
	    } else {
	        return this.getToken(AnalizadorVariarParser.MAS, i);
	    }
	};


	MENOS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorVariarParser.MENOS);
	    } else {
	        return this.getToken(AnalizadorVariarParser.MENOS, i);
	    }
	};


	POR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorVariarParser.POR);
	    } else {
	        return this.getToken(AnalizadorVariarParser.POR, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorVariarParser.DIV);
	    } else {
	        return this.getToken(AnalizadorVariarParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(AnalizadorVariarParser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(AnalizadorVariarParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(AnalizadorVariarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorVariarParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorVariarParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorVariarListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVariarVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorVariarParser.ProgramaContext = ProgramaContext; 
AnalizadorVariarParser.InstruccionContext = InstruccionContext; 
AnalizadorVariarParser.VariarContext = VariarContext; 
AnalizadorVariarParser.BloqueContext = BloqueContext; 
AnalizadorVariarParser.AsignacionContext = AsignacionContext; 
AnalizadorVariarParser.SalidaContext = SalidaContext; 
AnalizadorVariarParser.ExpresionContext = ExpresionContext; 
AnalizadorVariarParser.TerminoContext = TerminoContext; 
AnalizadorVariarParser.VariableContext = VariableContext; 
