/*!
 * 3dmol v2.0.3
 * JavaScript/TypeScript molecular visualization library
 * Author: David Koes and contributors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["3Dmol.ui"] = factory();
	else
		root["3Dmol.ui"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.0",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			return elem.textContent;
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (see trac-13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented
// as part of Sizzle so let's maintain them in the 3.x line
// for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * $3Dmol.UI - UI creates panels in the viewer to assist control of the viewport
 * @constructor 
 * @param {$3Dmol.StateManager} stateManager StateManager is required to have interaction between glviewer and the ui. 
 * @param {Object} config Loads the user defined parameters to generate the ui
 * @param {Object} parentElement Refers the parent division used to hold the canvas for 3Dmol.js 
 */
$3Dmol.UI = (function () {

  /*
       The dictionaries are for dropdown menus and validation of the viewer
   */


  // prop : It is used to add the option for property in context menu in the 3dmol ui
  // the code for prop can be found under /ui/ui.js -> UI -> ContextMenu -> setProperties -> submit.ui.on 
  // gui : It is used to generate forms for different features in the 3dmol ui
  // the code for gui can be found under /ui/form.js -> Form (Form defination)
  // floatType : separates integer from float since these are used in 
  // input validation of the 3dmol ui
  var validAtomSpecs = {
    "resn": { type: "string", valid: true, prop: true, gui: true }, // Parent residue name
    "x": { type: "number", floatType: true, valid: false, step: 0.1, prop: true }, // Atom's x coordinate
    "y": { type: "number", floatType: true, valid: false, step: 0.1, prop: true }, // Atom's y coordinate
    "z": { type: "number", floatType: true, valid: false, step: 0.1, prop: true }, // Atom's z coordinate
    "color": { type: "color", gui: false }, // Atom's color, as hex code
    "surfaceColor": { type: "color", gui: false }, // Hex code for color to be used for surface patch over this atom
    "elem": { type: "element", gui: true, prop: true }, // Element abbreviation (e.g. 'H', 'Ca', etc)
    "hetflag": { type: "boolean", valid: false, gui: true }, // Set to true if atom is a heteroatom
    "chain": { type: "string", gui: true, prop: true }, // Chain this atom belongs to, if specified in input file (e.g 'A' for chain A)
    "resi": { type: "array_range", gui: true }, // Residue number 
    "icode": { type: "number", valid: false, step: 0.1 },
    "rescode": { type: "number", valid: false, step: 0.1, prop: true },
    "serial": { type: "number", valid: false, step: 0.1 }, // Atom's serial id numbermodels
    "atom": { type: "string", valid: false, gui: true, prop: true }, // Atom name; may be more specific than 'elem' (e.g 'CA' for alpha carbon)
    "bonds": { type: "array", valid: false }, // Array of atom ids this atom is bonded to
    "ss": { type: "string", valid: false }, // Secondary structure identifier (for cartoon render; e.g. 'h' for helix)
    "singleBonds": { type: "boolean", valid: false }, // true if this atom forms only single bonds or no bonds at all
    "bondOrder": { type: "array", valid: false }, // Array of this atom's bond orders, corresponding to bonds identfied by 'bonds'
    "properties": { type: "properties", valid: false }, // Optional mapping of additional properties
    "b": { type: "number", floatType: true, valid: false, step: 0.1, prop: true }, // Atom b factor data
    "pdbline": { type: "string", valid: false }, // If applicable, this atom's record entry from the input PDB file (used to output new PDB from models)
    "clickable": { type: "boolean", valid: false, gui: false }, // Set this flag to true to enable click selection handling for this atom
    "contextMenuEnabled": { type: "boolean", valid: false, gui: false }, // Set this flag to true to enable click selection handling for this atom
    "callback": { type: "function", valid: false }, // Callback click handler function to be executed on this atom and its parent viewer
    "invert": { type: "boolean", valid: false }, // for selection, inverts the meaning of the selection
    //unsure about this
    "reflectivity": { type: "number", floatType: true, gui: false, step: 0.1 }, //for describing the reflectivity of a model
    "altLoc": { type: "invalid", valid: false }, //alternative location, e.g. in PDB
    "sym": { type: 'number', gui: false }, //which symmetry
  };

  //type is irrelivent here becuase htey are are invalid
  var validExtras = {  // valid atom specs are ok too
    "model": { type: "string", valid: false }, // a single model or list of models from which atoms should be selected
    "bonds": { type: "number", valid: false, gui: true }, // overloaded to select number of bonds, e.g. {bonds: 0} will select all nonbonded atoms
    "predicate": { type: "string", valid: false }, // user supplied function that gets passed an {AtomSpec} and should return true if the atom should be selected
    "invert": { type: "boolean", valid: false, gui: true }, // if set, inverts the meaning of the selection
    "byres": { type: "boolean", valid: false, gui: true }, // if set, expands the selection to include all atoms of any residue that has any atom selected
    "expand": { type: "number", valid: false, gui: false }, // expands the selection to include all atoms within a given distance from the selection
    "within": { type: "string", valid: false }, // intersects the selection with the set of atoms within a given distance from another selection
    "and": { type: "string", valid: false }, // and boolean logic
    "or": { type: "string", valid: false }, // or boolean logic
    "not": { type: "string", valid: false }, // not boolean logic
  };

  var validAtomSelectionSpecs = $3Dmol.extend({}, validAtomSpecs);
  validAtomSelectionSpecs = $3Dmol.extend(validAtomSelectionSpecs, validExtras);

  var validLineSpec = {
    "hidden": { type: "boolean", gui: true },
    "linewidth": { type: "number", floatType: true, gui: true, step: 0.1, default: 1.0 },
    "colorscheme": { type: "colorscheme", gui: true },
    "color": { type: "color", gui: true },
    "opacity": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0, max: 1 },
  };

  var validCrossSpec = {
    "hidden": { type: "boolean", gui: true },
    "linewidth": { type: "number", floatType: true, gui: false, step: 0.1, default: 1.0, min: 0 },//deprecated
    "colorscheme": { type: "colorscheme", gui: true },
    "color": { type: "color", gui: true },
    "radius": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0.1 },
    "scale": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0 },
    "opacity": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0, max: 1 },
  };

  var validStickSpec = {
    "hidden": { type: "boolean", gui: true },
    "colorscheme": { type: "colorscheme", gui: true },
    "color": { type: "color", gui: true },
    "radius": { type: "number", floatType: true, gui: true, step: 0.1, default: 0.25, min: 0.1 },
    "singleBonds": { type: "boolean", gui: true },
    "opacity": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0, max: 1 },
  };

  var validSphereSpec = {
    "hidden": { type: "boolean", gui: false }, // needed in the new gui it has separate function to hide the spheres
    "singleBonds": { type: "boolean", gui: true },
    "colorscheme": { type: "colorscheme", gui: true },
    "color": { type: "color", gui: true },
    "radius": { type: "number", floatType: true, gui: true, step: 0.1, default: 1.5, min: 0 },
    "scale": { type: "number", floatType: true, gui: true, step: 0.1, default: 1.0, min: 0.1 },
    "opacity": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0, max: 1 },
  };

  var validCartoonSpec = {
    "style": { validItems: ["trace", "oval", "rectangle", "parabola", "edged"], gui: true },
    "color": { type: "color", gui: true, spectrum: true },
    "arrows": { type: "boolean", gui: true },
    "ribbon": { type: "boolean", gui: true },
    "hidden": { type: "boolean", gui: true },
    "tubes": { type: "boolean", gui: true },
    "thickness": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0 },
    "width": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0 },
    "opacity": { type: "number", floatType: true, gui: true, step: 0.1, default: 1, min: 0, max: 1 },
  };

  var validAtomStyleSpecs = {
    "line": { validItems: validLineSpec, type: "form", gui: true }, // draw bonds as lines
    "cross": { validItems: validCrossSpec, type: "form", gui: true }, // draw atoms as crossed lines (aka stars)
    "stick": { validItems: validStickSpec, type: "form", gui: true }, // draw bonds as capped cylinders
    "sphere": { validItems: validSphereSpec, type: "form", gui: true }, // draw atoms as spheres
    "cartoon": { validItems: validCartoonSpec, type: "form", gui: true }, // draw cartoon representation of secondary structure
    "colorfunc": { validItems: null, type: "js", valid: false },
    "clicksphere": { validItems: validSphereSpec, type: "form" } //invisible style for click handling
  };

  var validSurfaceSpecs = {
    "opacity": { type: "number", floatType: true, gui: true, step: 0.01, default: 1, min: 0, max: 1 },
    "colorscheme": { type: "colorscheme", gui: true },
    "color": { type: "color", gui: true },
    "voldata": { type: "number", floatType: true, gui: false },
    "volscheme": { type: "number", floatType: true, gui: false },
    "map": { type: "number", gui: false }
  };


  function UI(stateManager, config, parentElement) {
    config = config || {}

    // Extract the viewer and then render it
    var icons = new $3Dmol.UI.Icons();
    var _editingForm = null;
    var mainParent = $(parentElement[0]);
    // Generates the necessary UI elements
    var HEIGHT = config.height;
    this.tools = generateUI(config);

    /**
     * Creates all the jquery object of different UI features
     */
    function generateUI() {
      var modelToolBar = new ModelToolbar();
      mainParent.append(modelToolBar.ui);
      setLocation(mainParent, modelToolBar.ui, 'left', 'top');
      // modelToolBar.updateInputLength();

      var contextMenu = new ContextMenu();
      mainParent.append(contextMenu.ui);
      setPosition(contextMenu.ui, 100, 100)

      var surfaceMenu = new SurfaceMenu();
      mainParent.append(surfaceMenu.ui);
      setLocation(mainParent, surfaceMenu.ui, 'right', 'top', 0, modelToolBar.ui.height() + 5);


      var selectionBox = new SelectionBox(icons.select);
      mainParent.append(selectionBox.ui);
      setLocation(mainParent, selectionBox.ui, 'left', 'top', 0, modelToolBar.ui.height() + 5);

      // Fixing Context Menu Behaviour
      selectionBox.ui.on('mousedown', () => {
        stateManager.exitContextMenu();
      });

      surfaceMenu.ui.on('mousedown', () => {
        stateManager.exitContextMenu();
      });

      return {
        modelToolBar: modelToolBar,
        selectionBox: selectionBox,
        contextMenu: contextMenu,
        surfaceMenu: surfaceMenu
      }
    }

    /**
     * Resize the panel with respect to the new viewport
     * 
     * @function $3Dmol.UI#resize
     */
    this.resize = function () {
      var selectionBox = this.tools.selectionBox;
      var surfaceMenu = this.tools.surfaceMenu;
      var modelToolBar = this.tools.modelToolBar;
      var HEIGHT = mainParent.height();

      setLocation(mainParent, modelToolBar.ui, 'left', 'top');
      // modelToolBar.updateInputLength();
      setLocation(mainParent, selectionBox.ui, 'left', 'top', 0, modelToolBar.ui.height() + 5);
      selectionBox.updateScrollBox(HEIGHT);
      setLocation(mainParent, surfaceMenu.ui, 'right', 'top', 0, modelToolBar.ui.height() + 5);
      surfaceMenu.updateScrollBox(HEIGHT);
    }

    /*
     * ModelToolbar is part of $3Dmol.UI to edit or change the model loaded into the viewer
     * 
     * @function ModelToolbar
     */
    function ModelToolbar() {
      var boundingBox = this.ui = $('<div></div>');

      boundingBox.css({
        'position': 'relative',
        'min-width': '150px'
      });


      var modelButton = new button(icons.molecule, 20, { tooltip: 'Toggle Model Selection Bar' });
      boundingBox.append(modelButton.ui);

      modelButton.ui.css({
        'display': 'inline-block',
        'top': '3px',
      });

      var control = {
        urlType: {
          active: true,
          value: null,
          key: 'Model type'
        },

        url: {
          active: true,
          value: null,
          key: 'Url'
        },
      };

      var surroundingBox = $('<div></div>');

      surroundingBox.css({
        'display': 'inline-block',
        'background': '#e4e4e4',
        'padding': '2px',
        'border-radius': '3px',
        // 'width' : '90%'
      });

      boundingBox.append(surroundingBox);

      var currentModelBox = $('<div></div>');
      currentModelBox.css({

      });

      var currentModel = $('<div></div>');
      currentModel.css({
        'display': 'inline-block',
        'font-family': 'Arial',
        'font-size': '12px',
        'font-weight': 'bold',
        // 'padding' : '3px'
      });

      currentModelBox.append(currentModel);

      var changeButton = new button(icons.change, 16, { tooltip: 'Change Model', backgroundColor: 'white', bfr: 0.5 });
      changeButton.ui.css({
        'display': 'inline-block',
        'margin-left': '4px',
      });
      currentModelBox.append(changeButton.ui);

      currentModelBox.hide();
      surroundingBox.append(currentModelBox);

      var formBox = $('<div></div>');
      surroundingBox.append(formBox);

      var dbs = 'pdb,mmtf,cid'.split(',');
      var list = this.list = new $3Dmol.UI.Form.ListInput(control.urlType, dbs);
      list.showAlertBox = false;

      list.ui.css({
        'display': 'inline-block',
      })

      formBox.append(list.ui);

      var input = this.url = new $3Dmol.UI.Form.Input(control.url);
      formBox.append(input.ui);

      input.ui.css({
        'display': 'inline-block',
        'width': '125px'
      });

      // input.setWidth(125);

      var submitButton = new button(icons.tick, 16, { bfr: 0.5, backgroundColor: 'lightgreen', tooltip: 'Add Model' });
      submitButton.ui.css({
        'margin': '0px'
      })
      formBox.append(submitButton.ui);

      this.updateInputLength = function () {
        // var width = parentElement.width()*0.3;
        // boundingBox.width(width);
        // input.setWidth(width - 12);
      }

      modelButton.ui.on('click', () => {
        surroundingBox.toggle();
      });

      submitButton.ui.on('click', function () {
        var validateDb = list.validate();
        var validateId = input.validate();

        if (validateId && validateDb) {
          stateManager.addModel(control);
        }

      });

      /*
       * Sets the title in the ui with specified value
       * 
       * @function ModelToolbar#setModel 
       * @param {String} heading Name of the molecule that is to be displayed on the title
       */
      this.setModel = function (heading) {
        currentModel.text(heading);
        currentModelBox.show();
        formBox.hide();
      }

      changeButton.ui.on('click', function () {
        currentModelBox.hide();
        formBox.show();
        input.setValue('');
      });

      boundingBox.on('keypress', function (e) {
        if (e.key == 'Enter' || e.key == 'Return') {
          submitButton.ui.trigger('click')
        }
      });
    }


    /*
     * Selection box creates the UI panel to manipulate selections and style that are drawn 
     * on the viewport
     * 
     * @function SelectionBox  
     * @param {$3Dmol.UI.Icons} icon takes the svg code for the icon that is to be used to display
     * selection box
     * @return {Object}  Jquery element of div
     */
    function SelectionBox(icon, side = 'left') {
      var selectionBox = this.ui = $('<div></div>');
      _editingForm = false;
      var selectionObjects = [];

      var selections = $('<div></div>');
      var scrollBox = $('<div></div>');

      selections.css('opacity', '0.9');

      var showArea = $('<div></div>');
      var addArea = $('<div></div>');
      var plusButton = new button(icons.plus, 20, { tooltip: 'Add New Selection' });
      plusButton.ui.css('margin', '0px');

      var hideButton = new button(icon, 20, { tooltip: 'Toggle Selection Menu' });
      this.selectionObjects = [];

      // Content
      selectionBox.append(hideButton.ui);
      selectionBox.append(showArea);
      selectionBox.css('position', 'absolute');

      scrollBox.append(selections);
      showArea.append(scrollBox);
      addArea.append(plusButton.ui);

      var alertBox = new AlertBox();
      showArea.append(alertBox.ui);
      showArea.append(addArea);
      alertBox.ui.css('width', 162);

      // CSS
      if (side == 'left') {
        selectionBox.css('text-align', 'left');
      }
      else if (side == 'right') {
        selectionBox.css('text-align', 'right');
      }
      else {
        // Add alert box code
        selectionBox.css('text-align', 'right');
      }

      showArea.css('box-sizing', 'border-box');
      showArea.css('padding', '3px');
      // showArea.css('width', '162px');

      scrollBox.css('max-height', HEIGHT * 0.8);
      scrollBox.css('overflow-y', 'auto');
      scrollBox.css('overflow-x', 'visible');

      selections.css('box-sizing', 'content-box');

      this.updateScrollBox = function (height) {
        scrollBox.css('max-height', height * 0.8);
      }

      // Action
      var hidden = true;
      showArea.hide();

      hideButton.ui.click(toggleHide);

      function toggleHide() {
        if (hidden) {
          showArea.show(100);
        }
        else {
          showArea.hide(100);
        }
        hidden = !hidden;
      }

      /*
       * Card for manipulation of a selection form and related styles
       * 
       * @function Selection
       */
      function Selection() {
        var boundingBox = this.ui = $('<div></div>');
        var sid = this.id = null;
        selectionObjects.push(this);
        boundingBox.css({
          'background': '#e8e8e8',
          'padding': '4px 4px 2px 4px',
          'border-radius': '6px',
          'margin-bottom': '3px',
          'position': 'relative',
          'width': '156px'
        });

        var header = $('<div></div>');
        boundingBox.append(header);
        var heading = $('<div></div>');
        var controls = $('<div></div>');

        header.append(heading, controls);
        heading.css({
          'font-family': 'Arial',
          'font-weight': 'bold',
          'font-size': '12px',
          'display': 'inline-block',
          'width': '60px'
        });

        controls.css({
          'display': 'inline-block'
        });

        header.hide();
        controls.editMode = false;

        var removeButton = new button(icons.minus, 16, { bfr: 0.5, backgroundColor: '#f06f6f', tooltip: 'Remove Selection' });
        var editButton = new button(icons.pencil, 16, { tooltip: 'Edit Selection' });
        var visibleButton = new button(icons.visible, 16, { tooltip: 'Show / Hide Selection' });

        controls.append(removeButton.ui)
        controls.append(editButton.ui);
        controls.append(visibleButton.ui);

        var parameters = $('<div></div>');
        boundingBox.append(parameters);

        var styleHolder = $('<div></div>');

        removeButton.ui.on('click', function () {
          stateManager.removeSelection(sid);
          boundingBox.detach();
          //delete this;
        });

        editButton.ui.on('click', function () {
          parameters.toggle();
        });

        var hidden = false;
        visibleButton.ui.on('click', () => {
          stateManager.toggleHide(sid);
          if (hidden) {
            hidden = false;
            visibleButton.setSVG(icons.visible);
          }
          else {
            hidden = true;
            visibleButton.setSVG(icons.invisible);
          }
        });

        var styleBox = new StyleBox();

        styleHolder.append(styleBox.ui);
        styleBox.ui.css({
          'position': 'static',
          // 'left' : '0',
          'width': 'px',
          'border-radius': '4px'
        });

        styleBox.ui.hide();

        var allControl = this.allSelector = {
          key: 'Select All Atom',
          value: null,
          active: true
        }

        var allCheckBox = new $3Dmol.UI.Form.Checkbox(allControl);
        parameters.append(allCheckBox.ui);


        var selectionFormControl = this.selectionValue = {
          key: 'Selection Spec',
          value: null,
          active: true
        }

        var selectionSpecForm = new $3Dmol.UI.Form(validAtomSelectionSpecs, selectionFormControl);
        parameters.append(selectionSpecForm.ui);

        var submitControls = $('<div></div>');
        var submit = new button(icons.tick, 16, { backgroundColor: 'lightgreen', tooltip: 'Submit' });
        var cancel = new button(icons.cross, 16, { backgroundColor: 'lightcoral', tooltip: 'Cancel' });
        submitControls.append(submit.ui, cancel.ui);


        var alertBox = new AlertBox();
        parameters.append(alertBox.ui);

        parameters.append(submitControls);
        boundingBox.append(styleHolder);

        allCheckBox.update = function () {
          selectionSpecForm.ui.toggle();
        }

        function finalizeSelection(id) {
          header.show();
          controls.editMode = true;
          sid = this.id = id;
          heading.text('Sel#' + id);
          boundingBox.attr('data-id', id);
          parameters.hide();
          styleBox.setSid(id);
          styleBox.ui.show();
        }

        function checkAndAddSelection(sid = null) {
          var validate = selectionSpecForm.validate();
          if (validate) {
            selectionSpecForm.getValue();
            var checkAtoms = stateManager.checkAtoms(selectionFormControl.value);

            if (Object.keys(selectionFormControl.value).length == 0) {
              alertBox.error('Please enter some input');
            }
            else {
              if (checkAtoms) {
                var id = stateManager.addSelection(selectionFormControl.value, sid);
                finalizeSelection(id);
                if (sid == null) _editingForm = false;
              }
              else {
                alertBox.error('No atom selected');
              }
            }
          }
          else {
            alertBox.error('Invalid Input');
          }
        }

        function removeSelf() {

          // delete selectionToRemove;
        }

        submit.ui.on('click', () => {
          if (controls.editMode == false) {
            if (allControl.value) {
              let id = stateManager.addSelection({});
              finalizeSelection(id);
              _editingForm = false;
            }
            else {
              checkAndAddSelection();
            }

          }
          else {
            if (allControl.value) {
              let id = sid;
              stateManager.addSelection({}, id);
              finalizeSelection(id);
            }
            else {
              let id = sid;
              checkAndAddSelection(id);
            }
          }
        });

        var self = this;

        cancel.ui.on('click', () => {
          if (controls.editMode) {
            parameters.hide();
          }
          else {
            boundingBox.detach();
            removeSelf(self);
            _editingForm = false;
          }
        });


        boundingBox.on('keyup', (e) => {
          if (e.key == 'Enter') {
            submit.ui.trigger('click');
          }
        });

        /*
         * @function Selection#setProperty
         * @param {string} id Id of the selection created in StateManager 
         * @param {Object} specs Defination of the selection that will be used to set default 
         * values in the form
         */
        this.setProperty = function (id, specs) {
          // check for all selection
          if (Object.keys(specs).length == 0) {
            allCheckBox.setValue(true)
          } else {
            selectionSpecForm.setValue(specs);
          }

          // finalize the selection 
          finalizeSelection(id);
        }

        /*
         * Adds style to the given selection 
         * 
         * @function Selection#addStyle 
         * @param {String} selId Id of the selection to inititate the StyleBox
         * @param {String} styleId Id of the style that is created through StateManager
         * @param {AtomStyleSpecs} styleSpecs 
         */
        this.addStyle = function (selId, styleId, styleSpecs) {
          styleBox.addStyle(selId, styleId, styleSpecs);
        }
      }

      plusButton.ui.on('click', () => {
        if (!_editingForm) {
          var newSelection = new Selection();
          selections.append(newSelection.ui);
          _editingForm = true;
        } else {
          alertBox.warning('Please complete the previous form');
        }

      });


      /*
       * Remove all the selection card from the ui
       */
      this.empty = function () {
        selections.empty();
        _editingForm = false;
      }

      /*
       * Adds or create new selection card
       * 
       * @function SelectionBox#editSelection
       * @param {String} id Id created in StateManager and passed down to this function during call
       * @param {AtomSelectionSpec} selSpec Selection spec that is used to generate the selection form
       * @param {String} styleId Id of style created in StateManager
       * @param {AtomStyleSpecs} styleSpec Style spec if specified add the selection to the current selection 
       */
      this.editSelection = function (id, selSpec, styleId, styleSpec) {
        // if selection does not exist create new 

        // This thing works but I am not sure how!

        // Search selection with id 
        var selectionUI = selections.children('[data-id=' + id + ']');

        if (selectionUI.length == 0) {
          var selection = new Selection();
          selection.setProperty(id, selSpec);
          selections.append(selection.ui);

          if (styleId != null) {
            selection.addStyle(id, styleId, styleSpec);
          }
        }

      }
    }


    /*
     * Creates StyleBox for listing out different styles inside the selection
     * 
     * @function StyleBox 
     * @param {String} selId Id of the selection for which the style box is created 
     * @param {String} side Alignment of text inside the box
     */
    function StyleBox(selId, side = 'left') {
      var styleBox = this.ui = $('<div></div>');
      _editingForm = false;
      var sid = this.sid = selId; // selection id

      this.setSid = function (id) {
        sid = this.sid = id;
      }

      var styles = $('<div></div>');
      var scrollBox = $('<div></div>');

      styles.css('opacity', '0.9');

      var showArea = $('<div></div>');
      var addArea = $('<div></div>');
      addArea.css('text-align', 'center');
      var plusButton = new button(icons.plus, 20, { tooltip: 'Add New Style' });
      plusButton.ui.css('margin', '0px');

      this.selectionObjects = [];

      // Content
      styleBox.append(showArea);
      styleBox.css('position', 'absolute');

      scrollBox.append(styles);
      showArea.append(scrollBox);

      var alertBox = new AlertBox();
      showArea.append(alertBox.ui);

      addArea.append(plusButton.ui);
      showArea.append(addArea);

      // CSS
      if (side == 'left') {
        styleBox.css('text-align', 'left');
      }
      else if (side == 'right') {
        styleBox.css('text-align', 'right');
      }
      else {
        // Add alert box code
        styleBox.css('text-align', 'right');
      }

      showArea.css('box-sizing', 'border-box');
      showArea.css('padding', '3px');
      // showArea.css('width', '162px');
      showArea.css('background-color', '#a4a4a4')
      showArea.css('border-radius', '4px');

      // scrollBox.css('max-height', HEIGHT*0.8);
      scrollBox.css('overflow', 'hidden');

      // styles.css('max-height', HEIGHT*0.8);
      // styles.css('overflow', 'auto');
      styles.css('box-sizing', 'content-box');


      /*
       * Style card to define the value of the style 
       * 
       * @param {string} sid Id of the selction for which the style box is created
       * and this stye will be added under that selection
       */
      function Style(sid) {
        var boundingBox = this.ui = $('<div></div>');
        var stid = this.id = null; // style id 
        boundingBox.css({
          'background': '#e8e8e8',
          'padding': '4px 4px 2px 4px',
          'border-radius': '6px',
          'margin-bottom': '3px',
          'position': 'relative'
        });

        var header = $('<div></div>');
        boundingBox.append(header);
        var heading = $('<div></div>');
        var controls = $('<div></div>');

        header.append(heading, controls);
        heading.css({
          'font-family': 'Arial',
          'font-weight': 'bold',
          'font-size': '12px',
          'display': 'inline-block',
          'width': '60px'
        });

        controls.css({
          'display': 'inline-block'
        });

        header.hide();
        controls.editMode = false;

        var removeButton = new button(icons.minus, 16, { bfr: 0.5, backgroundColor: '#f06f6f', tooltip: 'Remove Style' });
        var editButton = new button(icons.pencil, 16, { tooltip: 'Edit Style' });
        var visibleButton = new button(icons.visible, 16, { tooltip: 'Show / Hide Style' });

        controls.append(removeButton.ui)
        controls.append(editButton.ui);
        controls.append(visibleButton.ui);

        var parameters = $('<div></div>');
        boundingBox.append(parameters);

        removeButton.ui.on('click', { parent: this, stid: stid }, function () {
          stateManager.removeStyle(sid, stid);
          boundingBox.detach();
          //delete this;
        });

        editButton.ui.on('click', function () {
          parameters.toggle();
        });

        var hidden = false;
        visibleButton.ui.on('click', () => {
          stateManager.toggleHideStyle(sid, stid);
          if (hidden) {
            hidden = false;
            visibleButton.setSVG(icons.visible);
          }
          else {
            hidden = true;
            visibleButton.setSVG(icons.invisible);
          }
        });

        var styleFormControl = this.selectionValue = {
          key: 'Style Spec',
          value: null,
          active: true
        }

        var styleSpecForm = new $3Dmol.UI.Form(validAtomStyleSpecs, styleFormControl);
        parameters.append(styleSpecForm.ui);

        var submitControls = $('<div></div>');
        var submit = new button(icons.tick, 16, { backgroundColor: 'lightgreen', tooltip: 'Submit' });
        var cancel = new button(icons.cross, 16, { backgroundColor: 'lightcoral', tooltip: 'Cancel' });
        submitControls.append(submit.ui, cancel.ui);


        var alertBox = new AlertBox();
        parameters.append(alertBox.ui);

        parameters.append(submitControls);

        function finalizeStyle(id) {
          header.show();
          controls.editMode = true;
          stid = id;
          heading.text('Sty#' + id);
          parameters.hide();
        }

        function checkAndAddStyle(stid = null) {
          var validate = styleSpecForm.validate();
          if (validate) {
            styleSpecForm.getValue();

            if (Object.keys(styleFormControl.value).length == 0) {

              alertBox.error('Please enter some value');
            }
            else {
              var id = stateManager.addStyle(styleFormControl.value, sid, stid);
              finalizeStyle(id);
              if (stid == null) _editingForm = false;
            }

          }
          else {
            alertBox.error('Invalid Input');
          }
        }

        submit.ui.on('click', () => {
          if (controls.editMode == false) {
            checkAndAddStyle();
          }
          else {
            var id = stid
            styleSpecForm.getValue();

            if (Object.keys(styleFormControl.value).length == 0) {
              alertBox.error('Please enter some value');
            }
            else {
              checkAndAddStyle(id);
            }

          }
        });

        cancel.ui.on('click', () => {
          if (controls.editMode) {
            parameters.hide();
          }
          else {
            boundingBox.detach();
            //delete this;
          }
        });

        boundingBox.on('keyup', (e) => {
          if (e.key == 'Enter') {
            submit.ui.trigger('click');
          }
        });

        /**
         * @function Style#updateStyle 
         * @param {String} styleId Id of the style created by StateManager 
         * @param {AtomStyleSpecs} styleSpec Specs for defining the style and setting default values
         */
        this.updateStyle = function (styleId, styleSpec) {
          styleSpecForm.setValue(styleSpec);

          finalizeStyle(styleId);
        }

      }

      plusButton.ui.on('click', () => {
        if (!_editingForm) {
          var newStyle = new Style(sid);
          styles.append(newStyle.ui);
          _editingForm = true;
        }
        else {
          alertBox.warning('Please complete editing the current form');
        }
      });

      /**
       * @function StyleBox#addStyle
       * @param {String} selectionId Id of the selection for which styles will be created   
       * @param {String} styleId Id of the style part of the selection 
       * @param {AtomStyleSpecs} styleSpecs Style specs that will be used to create 
       * style for the specified selection and set default values in the Style card
       */
      this.addStyle = function (selectionId, styleId, styleSpecs) {
        var style = new Style(selectionId);
        styles.append(style.ui);
        style.updateStyle(styleId, styleSpecs);
      }
    }


    /*
     * Add alert messages to different panels 
     * 
     * @function AlertBox
     * @param {Object} config Configuraiton for alert box display
     */
    function AlertBox(config) {
      var boundingBox = this.ui = $('<div></div>');
      config = config || {}
      var delay = config.delay || 5000;
      var autohide = (config.autohide == undefined) ? true : config.autohide;

      boundingBox.css({
        'font-family': 'Arial',
        'font-size': '14px',
        'padding': '3px',
        'border-radius': '4px',
        'margin-top': '2px',
        'margin-bottm': '2px',
        'font-weight': 'bold',
        'text-align': 'center',
      });

      boundingBox.hide();

      function hide() {
        if (autohide) {
          setTimeout(() => {
            boundingBox.hide();
          }, delay);
        }
      }

      /**
       * Generate Internal alert message  
       * @param {String} msg Error Message 
       */
      this.error = function (msg) {
        boundingBox.css({
          'background': 'lightcoral',
          'color': 'darkred',
          'border': '1px solid darkred'
        });

        boundingBox.text(msg);
        boundingBox.show();

        hide();
      }

      /**
       * Generates Internal warning message
       * @param {String} msg Warming message 
       */
      this.warning = function (msg) {
        boundingBox.css({
          'background': '#fff3cd',
          'color': '#856409',
          'border': '1px solid #856409'
        });

        boundingBox.text(msg);
        boundingBox.show();

        hide();
      }

      /**
       * Generates Internal Info message 
       * @param {String} msg Info message
       */
      this.message = function (msg) {
        boundingBox.css({
          'background': 'lightgreen',
          'color': 'green',
          'border': '1px solid green'
        });

        boundingBox.text(msg);
        boundingBox.show();

        hide();
      }
    }

    /*
     * Creates the panel for manipulation of labels on the viewport
     * 
     * @function ContextMenu
     */
    function ContextMenu() {
      var boundingBox = this.ui = $('<div></div>');

      boundingBox.css('position', 'absolute');
      // boundingBox.css('border', '1px solid black');
      boundingBox.css('border-radius', '3px');
      boundingBox.css('background', '#f1f1f1');
      boundingBox.css('z-index', 99);
      var contentBox = $('<div></div>');
      contentBox.css('position', 'relative');
      boundingBox.css('opacity', '0.85');

      boundingBox.append(contentBox);
      contentBox.css({
        'background': '#f1f1f1',
        'border-radius': '4px',
        'padding': '4px',
        'width': '140px'
      });
      // Context Box
      // Remove Label Button 

      var labelMenuStyle = {
        'background': '#d3e2ee',
        'padding': '2px',
        'font-family': 'Arial',
        'font-weight': 'bold',
        'font-size': '12px',
        'border-radius': '2px',
        // 'margin-top':'3px'
      }

      var removeLabelMenu = $('<div></div>');
      removeLabelMenu.text('Remove Label');
      removeLabelMenu.css(labelMenuStyle);
      removeLabelMenu.css('margin-bottom', '3px');

      contentBox.append(removeLabelMenu);
      removeLabelMenu.hide();

      // Label Property List 
      var propertyKeys = Object.keys(validAtomSpecs);
      var propertyList = [];
      var propertyObjectList = [];

      propertyKeys.forEach((prop) => {
        var propObj = validAtomSpecs;
        if (propObj[prop].prop === true) {
          propertyList.push(prop);
        }
      });

      // Property Menu 
      var propertyMenu = $('<div></div>');
      contentBox.append(propertyMenu);

      /*
       * Property object used in property menu 
       * 
       * @function Property 
       * @param {String} key Name of the atom property
       * @param {*} value Value of the property 
       */
      function Property(key, value) {
        this.row = $('<tr></tr>');
        var propLabelValue = this.control = {
          key: '',
          value: null,
          active: true,
          name: key,
        }

        this.key = key;
        this.value = value;

        var checkbox = new $3Dmol.UI.Form.Checkbox(propLabelValue);
        var checkboxHolder = $('<td></td>');
        checkboxHolder.append(checkbox.ui);
        var keyHolder = $('<td></td>');
        var separatorHolder = $('<td></td>').text(':');
        var valueHolder = $('<td></td>');

        this.row.append(checkboxHolder, keyHolder, separatorHolder, valueHolder);

        keyHolder.text(key);

        if (typeof (value) == "number") {
          valueHolder.text(value.toFixed(2));
        } else {
          valueHolder.text(value.replace(/\^/g, ''));
        }

        console.log('Type of value', typeof (value), value);
      }

      /*
       * @param {AtomSpec} atom Value of different property of the atom, if the atom has prop : true
       * then that option is made visible in the context menu
       */
      function setProperties(atom) {
        propertyMenu.empty();
        propertyObjectList = [];

        var propertyTable = $('<table></table>');

        propertyList.forEach((prop) => {
          var propObj = new Property(prop, atom[prop]);
          propertyTable.append(propObj.row);
          propertyObjectList.push(propObj);
        });

        propertyMenu.append(propertyTable);

        var labelStyleHolder = $('<div><div>');

        var labelStyle = $('<div><div>');
        labelStyle.text('Style');
        labelStyle.css({
          'display': 'inline-block',
          'font-family': 'Arial',
          'font-size': '14px',
          'margin-right': '6px',
          'margin-left': '6px'
        });

        var stylesForLabel = new $3Dmol.UI.Form.ListInput(labelStyle, Object.keys($3Dmol.labelStyles));
        stylesForLabel.ui.css({
          'display': 'inline-block'
        });

        stylesForLabel.setValue('milk');

        labelStyleHolder.append(labelStyle, stylesForLabel.ui);
        propertyMenu.append(labelStyleHolder);

        var submit = new button(icons.tick, 18, { backgroundColor: 'lightgreen', tooltip: 'Submit' });
        var cancel = new button(icons.cross, 18, { backgroundColor: 'lightcoral', tooltip: 'Cancel' });

        var controlButtons = $('<div></div>');
        controlButtons.append(submit.ui, cancel.ui);
        // controlButtons.css('text-align', 'center');

        var alertBox = new AlertBox();
        propertyMenu.append(alertBox.ui);

        propertyMenu.append(controlButtons);


        submit.ui.on('click', () => {
          var props = processPropertyList();
          var labelStyleValidation = stylesForLabel.validate();

          if (props != null) {
            if (labelStyleValidation) {
              stateManager.addAtomLabel(props, atom, stylesForLabel.getValue().value);
              stateManager.exitContextMenu(false);
            }
            else {
              alertBox.error('Select style for label');
            }
          }
          else {
            alertBox.error('No value selected for label');
          }
        });

        cancel.ui.on('click', () => {
          stateManager.exitContextMenu();
        });
      }

      // Previous Labels 
      var labelHolder = $('<div></div>');
      contentBox.append(labelHolder);

      // Add Menu 
      var addMenu = $('<div></div>');
      contentBox.append(addMenu);
      addMenu.css('width', '100%');

      var addLabelMenu = $('<div></div>');
      addMenu.append(addLabelMenu);


      addLabelMenu.text('Add Label');
      addLabelMenu.css(labelMenuStyle);
      addLabelMenu.css('margin-bottom', '3px');
      addLabelMenu.hide();

      // Edit Menu
      var editMenu = $('<div></div>');
      contentBox.append(editMenu);

      contentBox.css({
        'position': 'relative',
      });

      editMenu.css({
        'background': '#dfdfdf',
        'border-radius': '3px',
        'font-family': 'Arial',
        'font-weight': 'bold',
        'font-size': '12px',
        // 'position': 'absolute',
        // 'left' : '105%',
        // 'top' : '0',,
        'box-sizing': 'border-box',
        'width': '100%',

      });
      editMenu.hide();

      var alertBox = new AlertBox({ autohide: false });
      contentBox.append(alertBox.ui);

      // Add Label Inputs 

      /*
       * Generate input elements that are used as form values in the context menu under addLabelForm
       * @returns {Object} that holds different input elements
       */
      function generateAddLabelForm() {
        var addLabelForm = $('<div></div>');

        var addLabelValue = {
          text: {
            key: 'Label Text',
            value: null,
            active: true,
          },

          style: {
            key: 'Style',
            value: null,
            active: true,
          },

          sel: {
            key: 'Selection',
            value: null,
            active: true,
          }
        }
        var formModifierControl = $('<div></div>');
        var removeButton = new button(icons.minus, 16);
        var tick = new button(icons.tick, 16, { backgroundColor: 'lightgreen', tooltip: 'Submit' });
        var cross = new button(icons.cross, 16, { backgroundColor: 'lightcoral', tooltip: 'Cancel' });
        formModifierControl.append(removeButton.ui, tick.ui, cross.ui);
        removeButton.ui.hide();
        addLabelForm.append(formModifierControl);

        var addLabelTextBox = $('<div></div>');
        var lt = $('<div></div>').text('Label Text');
        var addLabelTextInput = new $3Dmol.UI.Form.Input(addLabelValue.text);
        addLabelTextBox.append(lt, addLabelTextInput.ui);
        var width = 126//editMenu.innerWidth()*0.8;
        addLabelTextInput.setWidth(width);
        addLabelForm.append(addLabelTextBox);

        var addLabelStyleBox = $('<div></div>');
        var ls = $('<div></div>').text('Label Style');
        var addLabelStyleInput = new $3Dmol.UI.Form.ListInput(addLabelValue.style, Object.keys($3Dmol.labelStyles));
        addLabelStyleInput.setValue('milk');
        addLabelStyleBox.append(ls, addLabelStyleInput.ui);
        addLabelForm.append(addLabelStyleBox);

        var selectionList = stateManager.getSelectionList();

        var addLabelSelectionBox = $('<div></div>');
        var lsl = $('<div></div>').text('Label Selection');
        var addLabelSelectionInput = new $3Dmol.UI.Form.ListInput(addLabelValue.sel, selectionList);
        addLabelSelectionBox.append(lsl, addLabelSelectionInput.ui);
        addLabelForm.append(addLabelSelectionBox);

        // CSS 
        addLabelForm.css({
          'padding': '2px',

        });

        tick.ui.on('click', () => {
          var validate = true;

          if (!addLabelStyleInput.validate())
            validate = false;

          if (!addLabelTextInput.validate())
            validate = false;

          if (!addLabelSelectionInput.validate())
            validate = false;

          if (validate) {
            stateManager.addLabel(addLabelValue);
          }
        });

        cross.ui.on('click', () => {
          stateManager.exitContextMenu();
        });

        removeButton.ui.on('click', () => {
          stateManager.removeLabel()
        });

        addLabelForm.on('keyup', (e) => {
          if (e.key == 'Enter') {
            tick.ui.trigger('click');
          }
        });

        return {
          boundingBox: addLabelForm,
          text: addLabelTextInput,
          style: addLabelStyleInput,
          selection: addLabelSelectionInput,
          editMode: function () {
            removeButton.ui.show();
          }
        }
      }


      function processPropertyList() {
        var propsForLabel = {};

        propertyObjectList.forEach((propObj) => {
          if (propObj.control.value === true) {
            propsForLabel[propObj.key] = propObj.value;
          }
        });

        if (Object.keys(propsForLabel).length != 0) {
          return propsForLabel
        }
        else {
          return null;
        }
      }

      // Context Menu UI Funciton 
      boundingBox.hide();
      this.hidden = true;
      this.atom = null;

      removeLabelMenu.on('click', { atom: this.atom }, function () {
        stateManager.removeAtomLabel(removeLabelMenu.atom);
      });


      /**
       * Shows the context menu 
       * 
       * @function ContextMenu#show 
       * 
       * @param {Number} x x coordinate of the mouse
       * @param {Number} y y coordinate of the mouse in the viewport in pixels
       * @param {AtomSpec} atom Value of the atoms that is selected 
       * @param {Boolean} atomExist if atom label is previously added it is set true else false
       */
      this.show = function (x, y, atom, atomExist) {

        if (atomExist) {
          removeLabelMenu.show();
          removeLabelMenu.atom = atom;
        }
        else {
          removeLabelMenu.hide();
          removeLabelMenu.atom = null;
        }

        alertBox.ui.hide();
        addLabelMenu.hide();

        if (stateManager.getSelectionList().length == 0) {
          alertBox.message('Please create selections before adding label');
        } else {
          addLabelMenu.show();
        }

        unsetForm();
        setPosition(boundingBox, x, y);
        boundingBox.show();
        this.hidden = false;

        if (atom) {
          setProperties(atom);
          this.atom = atom;
        }
        else {
          propertyMenu.empty();
        }
      }

      /**
       * Hides the context menu and if needed process the propertyMenu
       * 
       * @function ContextMenu#hide
       * @param {Boolean} processContextMenu If true then submission of the property to add label is executed
       */

      this.hide = function (processContextMenu) {
        if (processContextMenu) {
          var propsForLabel = processPropertyList();
          if (propsForLabel != null) {
            stateManager.addAtomLabel(propsForLabel, this.atom);
          }
        }

        boundingBox.hide();
        this.hidden = true;
        unsetForm();
      }

      addLabelMenu.on('click', function () {
        var addLabelMenuForm = generateAddLabelForm();
        setForm(addLabelMenuForm);
      });

      function setForm(form) {
        editMenu.children().detach();
        editMenu.append(form.boundingBox);
        editMenu.show();
      }

      function unsetForm() {
        editMenu.children().detach();
        editMenu.hide();
      }
    }

    /*
     * Creates UI panel for surface manipulations
     * 
     * @function SurfaceMenu 
     */
    function SurfaceMenu() {
      var boundingBox = this.ui = $('<div></div>');
      var _editingForm = false;
      // Selection Layout

      boundingBox.css({
        'position': 'absolute',
        'width': '140px',
        'text-align': 'right'
      });

      var surfaceButton = new button(icons.surface, 20, { tooltip: 'Toggle Surface Menu' });

      boundingBox.append(surfaceButton.ui);


      var displayBox = $('<div></div>');
      boundingBox.append(displayBox);

      // Overflow fix 
      boundingBox.css({
        'overflow': 'visible',
      });

      var newSurfaceSpace = $('<div></div>');
      newSurfaceSpace.css({
        'max-height': HEIGHT * 0.8,
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
      });

      this.updateScrollBox = function (height) {
        newSurfaceSpace.css('max-height', height * 0.8);
      }
      // newSurfaceSpace.append(controlButton);
      // controlButton.hide();

      displayBox.append(newSurfaceSpace);

      var alertBox = new AlertBox();
      displayBox.append(alertBox.ui);

      var addArea = $('<div></div>');
      var addButton = new button(icons.plus, 20, { tooltip: 'Add New Surface' });
      addArea.append(addButton.ui);
      displayBox.append(addArea);
      displayBox.hide();

      var surfaces = this.surfaces = [];

      /*
       * Creates cards for manipulation of surface
       * 
       * @function Surface 
       */
      function Surface() {
        var control = {
          surfaceType: {
            key: 'Surface Type',
            value: null
          },
          surfaceStyle: {
            key: 'Surface Style',
            value: null
          },
          surfaceFor: {
            key: 'Selection Atoms',
            value: null
          },
          surfaceOf: {
            key: 'Surface Generating Atoms',
            value: null,
          },
        };

        var surfaceBox = this.ui = $('<div></div>');
        surfaceBox.css({
          'margin-top': '3px',
          'padding': '6px',
          'border-radius': '3px',
          'background-color': '#e8e8e8',
          // 'position':'relative',
          'width': '100%',
          'box-sizing': 'border-box',
          // 'left': "-100%",
          'opacity': 0.9,
          'text-align': 'left'
        });

        var heading = this.heading = $('<div></div>');
        var header = $('<div></div>');

        header.css({
          'text-align': 'right'
        })

        // Control Buttons
        var toolButtons = $('<div></div>');

        var editButton = new button(icons.pencil, 16, { tooltip: 'Edit Surface' });
        var removeButton = new button(icons.minus, 16, { bfr: 0.5, backgroundColor: '#f06f6f' });

        toolButtons.append(removeButton.ui);
        toolButtons.append(editButton.ui);

        toolButtons.editButton = editButton;
        toolButtons.removeButton = removeButton;
        toolButtons.editMode = false;

        var defaultTextStyle = {
          'font-weight': 'bold',
          'font-family': 'Arial',
          'font-size': '12px'
        }

        heading.css('display', 'inline-block');
        heading.css(defaultTextStyle);

        toolButtons.css('display', 'inline-block');
        header.hide();

        header.append(heading, toolButtons);
        surfaceBox.append(header);

        // toolButtons.hide();
        var surfacePropertyBox = $('<div></div>');
        surfaceBox.append(surfacePropertyBox);

        // Surface Type
        var surfaceType = $('<div></div>');

        var labelSurfaceType = $('<div></div>');
        labelSurfaceType.text('Surface Type');
        labelSurfaceType.css(defaultTextStyle);

        var listSurfaceType = new $3Dmol.UI.Form.ListInput(control.surfaceType, Object.keys($3Dmol.SurfaceType));


        surfaceType.append(labelSurfaceType, listSurfaceType.ui);
        surfacePropertyBox.append(surfaceType);

        listSurfaceType.setValue(Object.keys($3Dmol.SurfaceType)[0]);
        // Surface Style
        var surfaceStyle = $('<div></div>');

        var labelSurfaceStyle = $('<div></div>');
        // labelSurfaceStyle.text('Surface Style');

        var formSurfaceStyle = new $3Dmol.UI.Form(validSurfaceSpecs, control.surfaceStyle);

        surfaceStyle.append(labelSurfaceStyle, formSurfaceStyle.ui);
        surfacePropertyBox.append(surfaceStyle);

        // Surface Of
        var surfaceOf = $('<div></div>');

        var labelSurfaceOf = $('<div></div>');
        labelSurfaceOf.text('Surface Atoms');
        labelSurfaceOf.css(defaultTextStyle);

        var surfaceGeneratorAtomType = ['self', 'all'];
        var surfaceGeneratorDesc = {
          'self': 'Atoms in the selections will be used to generate the surface',
          'all': 'All the atoms will be used to generate the surface'
        }

        var listSurfaceOf = new $3Dmol.UI.Form.ListInput(control.surfaceOf, surfaceGeneratorAtomType);

        var hintbox = $('<div></div>');
        hintbox.css({
          'background-color': '#e4e4e4',
          'border': '1px solid grey',
          'color': 'grey',
          'padding': '2px',
          'border-radius': '3px',
          'font-family': 'Arial',
          'font-size': '12px',
          'font-weight': 'bold',
          'margin-top': '3px'
        });

        hintbox.hide();

        listSurfaceOf.update = function (control) {
          if (control.value == 'self') {
            hintbox.show();
            hintbox.text(surfaceGeneratorDesc['self']);
          }
          else if (control.value == 'all') {
            hintbox.show();
            hintbox.text(surfaceGeneratorDesc['all']);
          }
          else {
            hintbox.hide();
          }
        }

        listSurfaceOf.setValue('all');

        surfaceOf.append(labelSurfaceOf, listSurfaceOf.ui, hintbox);
        surfacePropertyBox.append(surfaceOf);

        // Surface For
        var selectionListElement = ['all'].concat(stateManager.getSelectionList());
        var surfaceFor = $('<div></div>');

        var labelSurfaceFor = $('<div></div>');
        labelSurfaceFor.text('Show Atoms');
        labelSurfaceFor.css(defaultTextStyle);

        var listSurfaceFor = new $3Dmol.UI.Form.ListInput(control.surfaceFor, selectionListElement);
        listSurfaceFor.setValue('all');

        surfaceFor.append(labelSurfaceFor, listSurfaceFor.ui);
        surfacePropertyBox.append(surfaceFor);

        var alertBox = new AlertBox();
        surfacePropertyBox.append(alertBox.ui);

        // Control Button
        var controlButton = $('<div></div>');
        var submit = new button(icons.tick, 16, { backgroundColor: 'lightgreen', tooltip: 'Submit' });
        var cancel = new button(icons.cross, 16, { backgroundColor: 'lightcoral', tooltip: 'Cancel' });
        controlButton.append(submit.ui);
        controlButton.append(cancel.ui);
        surfacePropertyBox.append(controlButton);

        // Functionality 
        removeButton.ui.on('click', { surfaceBox: surfaceBox }, function (e) {
          var id = e.data.surfaceBox.data('surf-id');
          surfaceBox.remove();
          stateManager.removeSurface(id);
        });

        editButton.ui.on('click', function () {
          surfacePropertyBox.toggle();

          // After creation of the surface box all the changes will be edit to the surfaces so on first submit toolButtons.editMode == true;
        });

        // Form Validation 

        var validateInput = this.validateInput = function () {
          var validated = true;

          if (!listSurfaceFor.validate()) {
            validated = false;
          }

          if (!listSurfaceOf.validate()) {
            validated = false;
          }

          if (!listSurfaceType.validate()) {
            validated = false;
          }

          if (!formSurfaceStyle.validate()) {
            validated = false;
          }

          return validated;
        }

        // edit this code to add on edit selection option to work
        // boundingBox.on('mouseenter', function(){
        //   selections = stateManager.getSelectionList();
        //   selectionListElement = selections.map( (m)=>{
        //     return m.id;
        //   });
        //   listSurfaceFor.updateList(selectionListElement);
        //   listSurfaceOf.updateList(selectionListElement);
        // });

        function finalize(id) {
          // element properties
          surfaceBox.data('surf-id', id);
          heading.text('surf#' + id);

          header.show();
          toolButtons.editMode = true;
          surfacePropertyBox.hide();
        }

        // Submit 
        submit.ui.on('click', {}, function () {
          listSurfaceFor.getValue();
          listSurfaceOf.getValue();
          listSurfaceType.getValue();
          formSurfaceStyle.getValue();

          if (validateInput()) {
            if (toolButtons.editMode === false) {
              var id = stateManager.addSurface(control);
              control.id = id;

              finalize(id);

              surfaces.push(this);
              _editingForm = false;
            }
            else {
              formSurfaceStyle.getValue();
              control.id = surfaceBox.data('surf-id');
              console.log('Edit surface called')
              stateManager.editSurface(control); // -> add updateSurface funciton to surfaceMenu
              surfacePropertyBox.hide();
            }
          }
          else {
            alertBox.error('Invalid Input');
          }
        });

        // Cancel Edit
        cancel.ui.on('click', {}, function () {
          if (toolButtons.editMode == false) {
            surfaceBox.detach();
            surfaceBox.remove();
            _editingForm = false;
          }
          else {
            surfacePropertyBox.hide();
            toolButtons.editMode = false;
          }
        });

        surfaceBox.on('keyup', (e) => {
          if (e.key == 'Enter') {
            submit.ui.trigger('click');
          }
        });

        /**
         * Finalizes the surface card with value specified in the surfaceSpec
         * 
         * @function Surface#editSurface 
         * @param {String} id Id of the surface generated by StateManager
         * @param {Object} surfaceSpec Different value of the surface menu
         */
        this.editSurface = function (id, surfaceSpec) {
          finalize(id);
          listSurfaceType.setValue(surfaceSpec.surfaceType.value);
          formSurfaceStyle.setValue(surfaceSpec.surfaceStyle.value);
          listSurfaceOf.setValue(surfaceSpec.surfaceOf.value);
          listSurfaceFor.setValue(surfaceSpec.surfaceFor.value);

          listSurfaceFor.getValue();
          listSurfaceOf.getValue();
          listSurfaceType.getValue();
          formSurfaceStyle.getValue();

        }

      }

      // Functionality

      // Surface addition

      addButton.ui.on('click', { surfaces: this }, function () {

        if (!_editingForm) {
          var newSurface = new Surface();
          newSurfaceSpace.append(newSurface.ui);
          _editingForm = true;
        } else {
          alertBox.warning('Please complete the previous form first');
        }


      });

      surfaceButton.ui.on('click', () => {
        displayBox.toggle();
      });

      /**
       * Clear all the surface cards 
       * @function SurfaceMenu#empty
       */

      this.empty = function () {
        newSurfaceSpace.empty();
        _editingForm = false;
      }

      /**
       * Add Surface in the Surface Menu 
       * 
       * @function SurfaceMenu#addSurface
       * @param {String} id Id of the surface generated in the StateManager
       * @param {Object} surfaceSpec Values of different property required for setting values in surface menu
       */
      this.addSurface = function (id, surfaceSpec) {
        var newSurface = new Surface();
        newSurfaceSpace.append(newSurface.ui);

        newSurface.editSurface(id, surfaceSpec);
      }
    }

    /*
     * Sets the css position property left and top for the element
     * 
     * @function setPosition
     * 
     * @param {object} jquery html element
     * @param {number} left : css left property
     * @param {number} top : css top peroperty
     */
    function setPosition(ele, left, top) {
      ele.css('left', left);
      ele.css('top', top);
    }


    /*
      * Sets the location of the element relative to the parseInt
      * as per position types
      * @function setLocation
      * 
      * @param  {Object} parent jquery object
      * @param  {Object} child  jquery object
      * @param  {String} x_type 'left|right'
      * @param  {String} y_type 'top|bottom'
      * @param  {Number} x_offset Offset x values in pixels
      * @param  {Number} y_offset Offset y values in pixels 
      */
    function setLocation(parent, child, x_type = 'left', y_type = 'top', x_offset = 0, y_offset = 0) {

      // p_ stands for parent
      child.css('z-index', 99);


      var p_width = getWidth(parent);
      var p_height = getHeight(parent);

      // c_ stand for child
      var c_width = child.outerWidth(); // includes padding and margin
      var c_height = child.outerHeight(); // includes padding and margin

      var padding = parseInt(parent.css('padding').replace('px', ''));
      padding = (padding) ? padding : 0;

      // Setting position
      var c_position = {
        left: 0,
        top: 0
      };

      if (x_type == 'left') {
        c_position.left = padding + x_offset;
      }
      else if (x_type == 'center') {
        c_position.left = p_width / 2 - c_width / 2 + x_offset;
      }
      else if (x_type == 'right') {
        c_position.left = p_width - c_width - padding + x_offset;
      }
      else {
        c_position.left = x_offset + padding;
      }

      if (y_type == 'top') {
        c_position.top = y_offset + padding;
      }
      else if (y_type == 'center') {
        c_position.top = p_height / 2 - c_height / 2 + y_offset;
      }
      else if (y_type == 'bottom') {
        c_position.top = p_height - c_height - y_offset - padding;
      }
      else {
        c_position.top = y_offset + padding;
      }

      setPosition(child, c_position.left, c_position.top);
    }

    // Copied from glviewer.js
    function getRect(container) {
      let div = container[0];
      let rect = div.getBoundingClientRect();
      if (rect.width == 0 && rect.height == 0 && div.style.display === 'none') {
        let oldpos = div.style.position;
        let oldvis = div.style.visibility;
        div.style.display = 'block';
        div.style.visibility = 'hidden';
        div.style.position = 'absolute';
        rect = div.getBoundingClientRect();
        div.style.display = 'none';
        div.style.visibility = oldvis;
        div.style.position = oldpos;
      }
      return rect;
    }


    function getHeight(container) {
      return getRect(container).height;
    }

    function getWidth(container) {
      return getRect(container).width;
    }

    /*
      * button - generates button with the given markup as contents
      * @param {String} svg SVG markup string that contains the content of the button
      * @param {Number} height Height of the content
      * @param {Object} config Various properties to define the button 
      * 
      */
    function button(svg, height, config) {
      config = config || {};
      var borderRadius = config.bfr * height || (height / 4); // body radius factor
      var bgColor = config.backgroundColor || 'rgb(177, 194, 203)';
      var color = config.color || 'black';
      var hoverable = config.hoverable || 'true';
      var tooltipText = config.tooltip || null;

      // Button instance
      var button = this.ui = $('<div></div>');
      var innerButton = $('<div></div>');
      button.append(innerButton);

      // CSS
      button.css('box-sizing', 'border-box');
      button.css('display', 'inline-block');
      button.css('margin', '3px');
      button.css('height', height);
      button.css('width', height);
      button.css('border-radius', borderRadius + 'px');

      //  button.css('padding', '3px');
      button.css('color', color);
      button.css('background', bgColor);

      innerButton.css('display', 'flex');
      innerButton.css('justify-content', 'center');
      innerButton.css('align-items', 'center');
      innerButton.css('padding', '2px');

      // content
      this.setSVG = function (svg) {
        innerButton.empty();
        var formatted_content = $(svg);
        innerButton.append(formatted_content);

      }

      this.setSVG(svg);

      // Hover

      // Setting up tool tip
      button.css({
        'position': 'relative'
      });


      // setting up tool tip
      if (tooltipText != null) {
        button.attr('title', tooltipText);
      }

      if (hoverable == 'true') {
        button.on('mouseenter',
          () => {
            button.css('box-shadow', '0px 0px 3px black');

          }).on('mouseleave',
            () => {
              button.css('box-shadow', 'none');

            }
          );

        // click
        button.on('mousedown', () => {
          button.css('box-shadow', '0px 0px 1px black');
        });

        button.on('mouseup', () => {
          button.css('box-shadow', '0px 0px 3px black');
        });

        button.on('mousemove', () => {
          // mouseX = e.clientX;
          // mouseY = e.clientY;
        });

      }
    }
  }

  return UI;
})();

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/ui/state.js ***!
  \*************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

/*
 * $3Dmol.StateManager - StateManager creates the space to preserve the state of the ui and sync it with the GLViewer
 * @constructor 
 * @param {$3Dmol.GLViewer} glviewer StateManager is required to have interaction between glviewer and the ui. 
 * @param {Object} config Loads the user defined parameters to generate the ui and handle state
 */
$3Dmol.StateManager = (function(){

  function States(glviewer, config){
    config = config || glviewer.getConfig();
    config.ui = true;

    var canvas = $(glviewer.getCanvas());
    var parentElement = $(glviewer.container);

    var height = parentElement.height();
    var width = parentElement.width();
    var offset = canvas.offset();

    var uiOverlayConfig = {
      height : height,
      width : width,
      offset : offset,
      ui : config.ui || undefined
    }

    // Selection Handlers
    var selections = {};

    // Surface handlers
    var surfaces = {};

    // Label Handlers
    var labels = {};

    var atomLabel = {};

    /**
     * Add Selection from the ui to glviewer
     * 
     * @function $3Dmol.StateManager#addSelection
     * @param {Object} spec Object that contains the output from the form 
     * @param {String} sid If surface id being edited then sid is set to some string
     * @returns String
     */
    this.addSelection = function(spec, sid = null){

      var id = sid || makeid(4);

      var selectionSpec = {
        spec : spec,
        styles : {},
        hidden : false
      };

      if(sid == null)
        selections[id] = selectionSpec;
      else 
        selections[id].spec = selectionSpec.spec;

      render();
      return id;
    }

    /**
     * Return true if the selections contain at least one atom
     * 
     * @function $3Dmol.StateManager#checkAtoms
     * @param {AtomSelectionSpec} sel Atom selection spec
     * @returns Boolean
     */
    this.checkAtoms = function(sel){
      var atoms = glviewer.selectedAtoms(sel);
      if( atoms.length > 0)
        return true

      return false;
    }

    /**
     * Toggle the hidden property of the selection 
     * @function $3Dmol.StateManager#toggleHide
     * @param {String} sid Selection id
     */
    this.toggleHide = function(sid){
      selections[sid].hidden = !selections[sid].hidden;
      render();
    }

    /**
     * Removes the selection
     * @param {String} id Selection id
     */
    this.removeSelection = function(id) {
      delete selections[id];
      render();
    }

    /**
     * Add style and renders it into the viewport
     * 
     * @function $3Dmol.StateManager#addStyle 
     * @param {String} spec Output object of style form 
     * @param {String} sid Selection Id
     * @param {String} stid Style Id
     * @returns String
     */
    this.addStyle = function( spec, sid, stid = null){
      var selection = selections[sid];
      
      
      var styleSpec = {
        spec : spec,
        hidden : false
      }
      
      var id = null; 
      
      if(stid == null) {
        id = makeid(4);
        selection.styles[id] = styleSpec
      }
      else {
        id = stid;
        selection.styles[id].spec = spec;
      }
      
      render();

      return id;
    }

    
    /**
     * Removes the style specified by stid
     * 
     * @function $3Dmol.StateManager#removeStyle 
     * @param {String} sid Selection id
     * @param {String} stid Style Id
     */
    this.removeStyle = function(sid, stid){
      delete selections[sid].styles[stid];
      render();
    }


    /**
     * Toggle hidden property of a style 
     * 
     * @function $3Dmol.StateManager#toggleHideStyle
     * @param {String} sid Selection Id
     * @param {String} stid Style Id 
     */
    this.toggleHideStyle = function(sid, stid){
      selections[sid].styles[stid].hidden = !selections[sid].styles[stid].hidden;
      render();
    }

    /**
     * Adds surface to the viewport
     * 
     * @function $3Dmol.StateManager#addSurface
     * @param {Object} property Surface output object
     * @param {Function} callback callback
     * @returns String
     */
    this.addSurface = function(property, callback){
      var id = makeid(4);
      property.id = id;

      var style = property.surfaceStyle.value;
      if(style == null)
        style = {};

      var sel = (property.surfaceFor.value == 'all') ? { spec : {} } : selections[property.surfaceFor.value];

      var generatorAtom = (property.surfaceOf.value == 'self')? sel.spec : {};


      glviewer.addSurface(
        $3Dmol.SurfaceType[property.surfaceType.value],
        style,
        sel.spec,
        generatorAtom
      ).then((surfParam)=>{
        surfaces[id] = surfParam[0];

        if(callback != undefined)
          callback(id, surfParam[0]);
      }, ()=>{

      });

      return id;
    }

    /**
     * Removes surface from the viewport 
     * @function $3Dmol.StateManager#removeSurface
     * @param {String} id Surface Id
     */
    this.removeSurface = function(id){
      glviewer.removeSurface(surfaces[id])

      delete surfaces[id];

    }

    /**
     * Edit the exisiting surface in the viewport
     * 
     * @function $3Dmol.StateManager#editSurface
     * @param {Object} surfaceProperty Surface Style
     */
    this.editSurface = function(surfaceProperty){
      var style = surfaceProperty.surfaceStyle.value || {}

      var sel = (surfaceProperty.surfaceFor.value == 'all') ? { spec : {} } : selections[surfaceProperty.surfaceFor.value];
      var generatorAtom = (surfaceProperty.surfaceOf.value == 'self')? sel.spec : {};

      glviewer.removeSurface(surfaces[surfaceProperty.id]);

      console.log(surfaceProperty);
      glviewer.addSurface(
        $3Dmol.SurfaceType[surfaceProperty.surfaceType.value],
        style,
        sel.spec,
        generatorAtom
      ).then((surfId)=>{
        surfaces[surfaceProperty.id] = surfId[0];
      });
    }

    /**
     * Returns the list of ids of selections that are created so far
     * @function $3Dmol.StateManager#getSelectionList
     * @returns <Array of selection ids>
     */
    this.getSelectionList = function(){
      return Object.keys(selections);
    }

    /**
     * Opens context menu when called from glviewer
     * 
     * @function $3Dmol.StateManager#openContextMenu
     * @param {AtomSpec} atom Atom spec obtained from context menu event
     * @param {Number} x x coordinate of mouse on viewport
     * @param {Number} y y coordinate of mouse on the viewport
     */
    this.openContextMenu = function(atom, x, y){ 
      var atomExist = false;

      if(atom){
        atomExist = Object.keys(atomLabel).find((i)=>{
          if (i == atom.index)
            return true;
          else 
            return false;
        });
  
        if(atomExist != undefined )
          atomExist = true;
        else 
          atomExist = false;
        
      }

      if(this.ui) this.ui.tools.contextMenu.show(x, y, atom, atomExist);    
    }

    glviewer.userContextMenuHandler = this.openContextMenu.bind(this);

    /**
     * Adds Label to the viewport specific to the selection
     * @function $3Dmol.StateManager#addLabel
     * @param {Object} labelValue Output object from label form of Context Menu
     */
    this.addLabel = function(labelValue){
      labels[labelValue.sel.value] = labels[labelValue.sel.value] || [];

      var labelProp = $3Dmol.labelStyles[labelValue.style.value];
      var selection = selections[labelValue.sel.value];

      var offset = labels[labelValue.sel.value].length;
      labelProp['screenOffset'] = new $3Dmol.Vector2(0, -1*offset*35);

      labels[labelValue.sel.value].push(glviewer.addLabel(labelValue.text.value, labelProp, selection.spec));

      this.ui.tools.contextMenu.hide();
    }

    /**
     * Adds atom label to the viewport
     * 
     * @function $3Dmol.StateManager#addAtomLabel
     * @param {Object} labelValue Output object from propertyMenu form of Context Menu
     * @param {AtomSpec} atom Atom spec that are to be added in the label 
     */
    this.addAtomLabel = function(labelValue, atom, styleName='milk'){
      var atomExist = Object.keys(atomLabel).find((i)=>{
        if (i == atom.index)
          return true;
        else 
          return false;
      });

      if(atomExist != undefined )
        atomExist = true;
      else 
        atomExist = false;


      if(atomExist){
        this.removeAtomLabel(atom);
      }

      
      atomLabel[atom.index] = atomLabel[atom.index] || null;
      
      var labelProp = $3Dmol.deepCopy($3Dmol.labelStyles[styleName]);
      labelProp.position = {
        x : atom.x, y : atom.y, z : atom.z
      }

      var labelText = [];
      for (let key in labelValue){
        labelText.push(`${key} : ${labelValue[key]}`);
      }
      labelText = labelText.join('\n');

      atomLabel[atom.index] = glviewer.addLabel(labelText, labelProp);
      
    }

    /**
     * Executes hide context menu and process the label if needed
     * 
     * @function $3Dmol.StateManager#exitContextMenu
     * @param {Boolean} processContextMenu Specify the need to process the values in the context menu
     */
    this.exitContextMenu = function(processContextMenu = false){
        if(this.ui) {
            this.ui.tools.contextMenu.hide(processContextMenu);
        }
    }

    glviewer.container.addEventListener('wheel', this.exitContextMenu.bind(this), { passive: false });

    /**
     * Removes the label specific to the selection 
     * 
     * (under development)
     */
    this.removeLabel = function(){
      // Add code to remove label 
      this.ui.tools.contextMenu.hide();
    }

    /**
     * Removes the atom label from the viewpoer 
     * @function $3Dmol.StateManager#removeAtomLabel
     * @param {AtomSpec} atom Atom spec
     */
    this.removeAtomLabel = function(atom){
      var label = atomLabel[atom.index];
      glviewer.removeLabel(label);
      delete atomLabel[atom.index]; 
      
      this.ui.tools.contextMenu.hide();
    }

    /**
     * Add model to the viewport
     * @function $3Dmol.StateManager#addModel
     * @param {Object} modelDesc Model Toolbar output
     */
    this.addModel = function(modelDesc){
      glviewer.removeAllModels();
      glviewer.removeAllSurfaces();
      glviewer.removeAllLabels();
      glviewer.removeAllShapes();

      var query = modelDesc.urlType.value + ':' + modelDesc.url.value;
      $3Dmol.download(query, glviewer, {}, ()=>{
        this.ui.tools.modelToolBar.setModel(modelDesc.url.value.toUpperCase());
      });

      // Remove all Selections
      selections = {};
      surfaces = {};
      atomLabel = {};
      labels = {};

      // Reset UI
      this.ui.tools.selectionBox.empty();
      this.ui.tools.surfaceMenu.empty();
    }

    // State Management helper function 
    function findSelectionBySpec(spec){
      var ids = Object.keys(selections);
      var matchingObjectIds = null;
      for(var i = 0; i < ids.length; i++){
        var lookSelection = selections[ids[i]].spec;

        var match = true;
        
        // looking for same parameters length 
        var parameters = Object.keys(spec);

        if( Object.keys(lookSelection).length == parameters.length){
          for(var j = 0; j < parameters.length; j++){
            if( lookSelection[parameters[j]] != spec[parameters[j]]){
              match = false;
              break;
            }
          }
        } else {
          match = false;
        }

        if(match){
          matchingObjectIds = ids[i];
          break;
        }
      }

      return matchingObjectIds;
    }

    // State managment function 

    /**
     * Updates the state variable for selections and styles and trigger ui to show the 
     * ui elements for these selections and styles.
     * 
     * @function $3Dmol.StateManager#createSelectionAndStyle
     * @param {AtomSelectionSpec} selSpec Atom Selection Spec
     * @param {AtomStyleSpec} styleSpec Atom Style Spec
     */
    this.createSelectionAndStyle = function(selSpec, styleSpec){

      var selId = findSelectionBySpec(selSpec);

      if(selId == null){
        selId = this.addSelection(selSpec);
      }

      var styleId = null;

      if(Object.keys(styleSpec).length != 0){
        styleId = this.addStyle(styleSpec, selId);
      }

      this.ui.tools.selectionBox.editSelection(selId, selSpec, styleId, styleSpec);
      
    };

    /**
     * Creates selection and add surface with reference to that selection 
     * and triggers updates in the ui
     * @function $3Dmol.StateManager#createSurface
     * @param {String} surfaceType Type of surface to be created
     * @param {AtomSelectionSpec} sel Atom selection spec
     * @param {AtomStyleSpec} style Atom style spec
     * @param {String} sid selection id
     */
    this.createSurface = function(surfaceType, sel, style, sid){
      var selId = findSelectionBySpec(sel);
      
      if(selId == null){
        selId = this.addSelection();

      }
      this.ui.tools.selectionBox.editSelection(selId, sel, null);

      surfaceType = Object.keys(style)[0];

      var surfaceInput = {
        surfaceType : {
          value : surfaceType
        },

        surfaceStyle : {
          value : style[surfaceType],
        },

        surfaceOf : {
          value : 'self'
        },

        surfaceFor : {
          value : selId
        }
      }

      var surfId = makeid(4);
      surfaces[surfId] = sid;

      this.ui.tools.surfaceMenu.addSurface(surfId, surfaceInput);

      // Create Surface UI
    };

    /**
     * Sets the value of title in ModelToolBar
     * @function $3Dmol.StateManager#setModelTitle
     * @param {String} title Model title
     */
    this.setModelTitle = function(title){
      this.ui.tools.modelToolBar.setModel(title);
    }

    canvas.on('click', ()=>{
      if(this.ui && this.ui.tools.contextMenu.hidden == false){
        this.ui.tools.contextMenu.hide();
      }
    });
    
    // Setting up UI generation 
    /**
     * Generates the ui and returns its reference
     * @returns $3Dmol.UI
     */
    this.showUI = function(){
      var ui = new $3Dmol.UI(this, uiOverlayConfig, parentElement);  
      return ui;
    };

    if(config.ui == true){
     this.ui = this.showUI(); 
    }

    this.initiateUI = function(){
      this.ui = new $3Dmol.UI(this, uiOverlayConfig, parentElement);
      render();
    }
    /**
     * Updates the UI on viewport change 
     * 
     * @function $3Dmol.StateManager#updateUI
     */
    this.updateUI = function(){
      if(this.ui){
        this.ui.resize();
      }
    };

    window.addEventListener("resize",this.updateUI.bind(this));

    if (typeof (window.ResizeObserver) !== "undefined") {
        this.divwatcher = new window.ResizeObserver(this.updateUI.bind(this));
        this.divwatcher.observe(glviewer.container);
    }

    
    // UI changes

    function render(){
      // glviewer.();
      glviewer.setStyle({});

      let selList = Object.keys(selections);

      selList.forEach( (selKey) =>{
        var sel = selections[selKey];

        if( !sel.hidden ) {
          var styleList = Object.keys(sel.styles);
          
          styleList.forEach((styleKey)=>{
            var style = sel.styles[styleKey];

            if( !style.hidden){
              glviewer.addStyle(sel.spec, style.spec);
            }
          });

          glviewer.setClickable(sel.spec, true, ()=>{});
          glviewer.enableContextMenu(sel.spec, true);
        }
        else {
          glviewer.setClickable(sel.spec, false, ()=>{});
          glviewer.enableContextMenu(sel.spec, false);
        }

      })

      glviewer.render();
    }

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
    }
  }

  return States;
})()

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/ui/icon.js ***!
  \************************/
/**
 * Generates the object to hold different icons present Icons : move, rotate, pencil, listArrow, option, minus, plus, painbrush, select, movie.play, move.pause, movie.stop, movie.next, move.previous, tick, cross, edit, remove, list, style, visible, invisible, mouse, nomouse, label, surface, molecule, change
 * @function $3Dmol.UI#Icons
 * 
 * 
 */
$3Dmol.UI.Icons = (function () {
  function Icons() {
    this.move = `<svg  id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M31.338,14.538L27.38,10.58C26.994,10.193,26.531,10,26,10c-1.188,0-2,1.016-2,2c0,0.516,0.186,0.986,0.58,1.38L25.2,14H18  V6.8l0.62,0.62C19.014,7.814,19.484,8,20,8c0.984,0,2-0.813,2-2c0-0.531-0.193-0.994-0.58-1.38l-3.973-3.974  C17.08,0.279,16.729,0,16,0s-1.135,0.334-1.463,0.662L10.58,4.62C10.193,5.006,10,5.469,10,6c0,1.188,1.016,2,2,2  c0.516,0,0.986-0.186,1.38-0.58L14,6.8V14H6.8l0.62-0.62C7.814,12.986,8,12.516,8,12c0-0.984-0.813-2-2-2  c-0.531,0-0.994,0.193-1.38,0.58l-3.958,3.958C0.334,14.866,0,15.271,0,16s0.279,1.08,0.646,1.447L4.62,21.42  C5.006,21.807,5.469,22,6,22c1.188,0,2-1.016,2-2c0-0.516-0.186-0.986-0.58-1.38L6.8,18H14v7.2l-0.62-0.62  C12.986,24.186,12.516,24,12,24c-0.984,0-2,0.813-2,2c0,0.531,0.193,0.994,0.58,1.38l3.957,3.958C14.865,31.666,15.271,32,16,32  s1.08-0.279,1.447-0.646l3.973-3.974C21.807,26.994,22,26.531,22,26c0-1.188-1.016-2-2-2c-0.516,0-0.986,0.186-1.38,0.58L18,25.2V18  h7.2l-0.62,0.62C24.186,19.014,24,19.484,24,20c0,0.984,0.813,2,2,2c0.531,0,0.994-0.193,1.38-0.58l3.974-3.973  C31.721,17.08,32,16.729,32,16S31.666,14.866,31.338,14.538z"/>
    </svg>
    `;


    this.rotate = `<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
    <style type="text/css">
    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    </style>
    <polyline class="st0" points="19,19 24,19 24,24 "/>
    <polyline class="st0" points="6,23 11,23 11,18 "/>
    <path class="st0" d="M24,19.4c-0.7,0.8-1.4,1.6-2.2,2.4c-7,7-15.3,10.2-18.5,7s-0.1-11.5,7-18.5s15.3-10.2,18.5-7
    c1.4,1.4,1.6,3.6,0.8,6.3"/>
    <path class="st0" d="M11,22.5c-0.3-0.2-0.5-0.5-0.8-0.8c-7-7-10.2-15.3-7-18.5s11.5-0.1,18.5,7s10.2,15.3,7,18.5
    c-1.7,1.7-4.8,1.6-8.4,0.1"/>
    </svg>`;

    this.pencil = `
    <svg
   viewBox="0 0 7.4083332 7.4083335"
   version="1.1"
   id="svg46458"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   sodipodi:docname="pencil.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview46460"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:document-units="mm"
     showgrid="false"
     units="px"
     inkscape:zoom="11.859035"
     inkscape:cx="39.252773"
     inkscape:cy="-0.54810532"
     inkscape:window-width="1920"
     inkscape:window-height="1017"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs46455" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       id="g46369"
       style="opacity:0.883991"
       transform="matrix(1.4892662,-0.15686655,0.15686655,1.4892662,-53.265394,-119.92352)">
      <g
         id="g49150"
         transform="matrix(0.91743541,0,0,0.91743541,23.648257,-4.2024208)"
         style="opacity:0.883991">
        <path
           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 3.8020268,100.20944 0.4890573,-1.325191 3.1552092,-2.461061 0.8203543,1.009666 -3.2340893,2.476838 z"
           id="path47163"
           sodipodi:nodetypes="cccccc" />
        <path
           style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 4.7012611,98.537178 -0.2738716,0.535677 0.5184006,-0.125499 -0.1893126,0.512722 0.5048334,-0.102546 -0.2287526,0.55216"
           id="path47167"
           sodipodi:nodetypes="cccccc" />
        <path
           style="fill:none;stroke:#000000;stroke-width:0.288395px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m 4.0143928,99.803763 0.189158,0.257937 -0.4015317,0.14774 z"
           id="path46061" />
      </g>
      <path
         style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 29.910684,84.806844 0.691621,0.847804"
         id="path46176" />
    </g>
  </g>
</svg>

    `;

    this.listArrow = `
    <svg
    viewBox="0 0 7.4083332 7.4083335"
    version="1.1"
    id="svg41603"
    inkscape:version="1.1 (c68e22c387, 2021-05-23)"
    sodipodi:docname="listArrow.svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
   <sodipodi:namedview
      id="namedview41605"
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1.0"
      inkscape:pageshadow="2"
      inkscape:pageopacity="0.0"
      inkscape:pagecheckerboard="0"
      inkscape:document-units="mm"
      showgrid="false"
      units="px"
      inkscape:zoom="16.771208"
      inkscape:cx="16.635653"
      inkscape:cy="11.120248"
      inkscape:window-width="1920"
      inkscape:window-height="1017"
      inkscape:window-x="-8"
      inkscape:window-y="-8"
      inkscape:window-maximized="1"
      inkscape:current-layer="layer1" />
   <defs
      id="defs41600" />
   <g
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      id="layer1">
     <path
        style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        d="M 1.991198,0.89301893 5.7166459,3.7041667 1.991198,6.5153145 Z"
        id="path42297"
        sodipodi:nodetypes="cccc" />
   </g>
 </svg>
 
    `;

    this.option = ` <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title>69.option</title><g id="_69.option" data-name="69.option"><rect class="cls-1" x="1" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="1" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="14" y="14" width="9" height="9" rx="2" ry="2"/><rect class="cls-1" x="1" y="14" width="9" height="9" rx="2" ry="2"/></g></svg>`;

    this.minus = `<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

    this.plus = `<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

    this.paintbrush = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 444.892 444.892" style="enable-background:new 0 0 444.892 444.892;" xml:space="preserve">
    <g id="XMLID_476_">
    <path id="XMLID_503_" d="M440.498,173.103c5.858-5.857,5.858-15.355,0-21.213l-22.511-22.511c-5.091-5.091-13.084-5.846-19.038-1.8
    l-47.332,32.17l31.975-47.652c3.993-5.951,3.219-13.897-1.85-18.964l-48.83-48.83c-4.508-4.508-11.372-5.675-17.114-2.908
    l-8.443,4.065l4.043-8.97c2.563-5.685,1.341-12.361-3.068-16.771L293.002,4.393c-5.857-5.857-15.355-5.857-21.213,0
    l-119.06,119.059l168.71,168.71L440.498,173.103z"/>
    <path id="XMLID_1199_" d="M130.56,145.622l-34.466,34.466c-2.813,2.813-4.394,6.628-4.394,10.606s1.58,7.794,4.394,10.606
    l32.694,32.694c6.299,6.299,9.354,14.992,8.382,23.849c-0.971,8.851-5.843,16.677-13.366,21.473
    C27.736,340.554,18.781,349.51,15.839,352.453c-21.119,21.118-21.119,55.48,0,76.6c21.14,21.14,55.504,21.098,76.6,0
    c2.944-2.943,11.902-11.902,73.136-107.965c4.784-7.505,12.607-12.366,21.462-13.339c8.883-0.969,17.575,2.071,23.859,8.354
    l32.694,32.694c5.857,5.857,15.356,5.857,21.213,0l34.467-34.467L130.56,145.622z M70.05,404.825c-8.28,8.28-21.704,8.28-29.983,0
    c-8.28-8.28-8.28-21.704,0-29.983c8.28-8.28,21.704-8.28,29.983,0C78.33,383.121,78.33,396.545,70.05,404.825z"/>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    `;

    this.select = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <g>
    <g>
    <path d="M416,149.333c-8.768,0-16.939,2.667-23.723,7.211C386.432,139.947,370.581,128,352,128
    c-8.768,0-16.939,2.667-23.723,7.211c-5.845-16.597-21.696-28.544-40.277-28.544c-7.765,0-15.061,2.091-21.333,5.739V42.667
    C266.667,19.136,247.531,0,224,0s-42.667,19.136-42.667,42.667v249.408l-58.645-29.333C113.856,258.325,103.957,256,94.08,256
    c-22.485,0-40.747,18.283-40.747,40.875c0,10.901,4.245,21.12,11.947,28.821l137.941,137.941C234.389,494.827,275.883,512,320,512
    c76.459,0,138.667-62.208,138.667-138.667V192C458.667,168.469,439.531,149.333,416,149.333z M437.333,373.333
    c0,64.704-52.651,117.333-117.355,117.333c-38.421,0-74.517-14.955-101.653-42.133L80.363,310.592
    c-3.669-3.648-5.696-8.533-5.696-13.845c0-10.709,8.704-19.413,19.413-19.413c6.592,0,13.163,1.557,19.072,4.501l74.091,37.035
    c3.307,1.643,7.253,1.472,10.368-0.469c3.136-1.941,5.056-5.376,5.056-9.067V42.667c0-11.755,9.557-21.333,21.333-21.333
    s21.333,9.579,21.333,21.333v202.667c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-96
    c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v96c0,5.888,4.779,10.667,10.667,10.667
    s10.667-4.779,10.667-10.667v-74.667c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v74.667
    c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V192c0-11.755,9.557-21.333,21.333-21.333
    s21.333,9.579,21.333,21.333V373.333z"/>
    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;

    this.movie = {};
    this.movie.play = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
    <g id="XMLID_228_">
    <path id="XMLID_229_" d="M236.95,152.281l-108-67.501c-4.624-2.89-10.453-3.044-15.222-0.4C108.959,87.024,106,92.047,106,97.5v135
    c0,5.453,2.959,10.476,7.728,13.12c2.266,1.256,4.77,1.88,7.271,1.88c2.763,0,5.523-0.763,7.95-2.28l108-67.499
    c4.386-2.741,7.05-7.548,7.05-12.72C244,159.829,241.336,155.022,236.95,152.281z"/>
    <path id="XMLID_230_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
    c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;

    this.movie.stop = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
    <g id="XMLID_223_">
    <path id="XMLID_224_" d="M225.75,89.25h-121.5c-8.284,0-15,6.716-15,15v121.5c0,8.284,6.716,15,15,15h121.5c8.284,0,15-6.716,15-15
    v-121.5C240.75,95.966,234.034,89.25,225.75,89.25z"/>
    <path id="XMLID_225_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
    c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;

    this.movie.pause = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 271.953 271.953" style="enable-background:new 0 0 271.953 271.953;" xml:space="preserve">
    <g>
    <g>
    <path style="fill:#010002;" d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977
    S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22
    s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z"/>
    <path style="fill:#010002;" d="M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598
    c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z"/>
    <path style="fill:#010002;" d="M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598
    S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z"/>
    </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;
    this.movie.next = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

    <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 30.05 30.05"
    style="enable-background:new 0 0 30.05 30.05;"
    xml:space="preserve"
    sodipodi:docname="next.svg"
    inkscape:version="1.1 (c68e22c387, 2021-05-23)"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"><defs
    id="defs73" /><sodipodi:namedview
    id="namedview71"
    pagecolor="#ffffff"
    bordercolor="#666666"
    borderopacity="1.0"
    inkscape:pageshadow="2"
    inkscape:pageopacity="0.0"
    inkscape:pagecheckerboard="0"
    showgrid="false"
    inkscape:zoom="19.851347"
    inkscape:cx="11.938737"
    inkscape:cy="15.79238"
    inkscape:window-width="1920"
    inkscape:window-height="1017"
    inkscape:window-x="-8"
    inkscape:window-y="-8"
    inkscape:window-maximized="1"
    inkscape:current-layer="Capa_1" />
    <g
    id="g38"
    transform="rotate(180,15.025,15.025)">
    <path
    d="m 20.814,11 c -0.193,-0.102 -0.43,-0.086 -0.604,0.041 l -2.383,1.73 v -1.258 c 0,-0.217 -0.121,-0.42 -0.32,-0.514 -0.191,-0.102 -0.424,-0.086 -0.602,0.041 l -4.834,3.512 c -0.15,0.109 -0.242,0.287 -0.242,0.473 0,0.184 0.092,0.357 0.242,0.471 l 4.834,3.508 c 0.102,0.076 0.221,0.111 0.342,0.111 0.088,0 0.18,-0.018 0.26,-0.066 0.199,-0.1 0.32,-0.295 0.32,-0.516 v -1.26 l 2.383,1.73 c 0.098,0.076 0.221,0.111 0.34,0.111 0.094,0 0.182,-0.018 0.264,-0.066 0.197,-0.1 0.318,-0.295 0.318,-0.516 v -7.02 C 21.133,11.297 21.012,11.094 20.814,11 Z"
    id="path2" />
    <path
    d="M 15.027,0 C 6.729,0 0,6.729 0,15.025 0,23.326 6.729,30.05 15.027,30.05 23.325,30.05 30.05,23.325 30.05,15.025 30.051,6.729 23.326,0 15.027,0 Z m 0,27.539 C 8.115,27.539 2.509,21.935 2.509,15.025 2.509,8.115 8.115,2.51 15.027,2.51 c 6.914,0 12.516,5.605 12.516,12.516 0,6.911 -5.602,12.513 -12.516,12.513 z"
    id="path4" />
    <path
    d="M 10.617,11.146 H 9.225 c -0.168,0 -0.305,0.137 -0.305,0.305 v 7.146 c 0,0.168 0.137,0.309 0.305,0.309 h 1.393 c 0.17,0 0.307,-0.141 0.307,-0.309 v -7.146 c -0.001,-0.168 -0.138,-0.305 -0.308,-0.305 z"
    id="path6" />
    <g
    id="g8">
    </g>
    <g
    id="g10">
    </g>
    <g
    id="g12">
    </g>
    <g
    id="g14">
    </g>
    <g
    id="g16">
    </g>
    <g
    id="g18">
    </g>
    <g
    id="g20">
    </g>
    <g
    id="g22">
    </g>
    <g
    id="g24">
    </g>
    <g
    id="g26">
    </g>
    <g
    id="g28">
    </g>
    <g
    id="g30">
    </g>
    <g
    id="g32">
    </g>
    <g
    id="g34">
    </g>
    <g
    id="g36">
    </g>
    </g>
    <g
    id="g40"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g42"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g44"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g46"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g48"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g50"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g52"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g54"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g56"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g58"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g60"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g62"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g64"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g66"
    transform="rotate(180,15.025,15.025)">
    </g>
    <g
    id="g68"
    transform="rotate(180,15.025,15.025)">
    </g>
    </svg>
    `;
    this.movie.previous = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 30.05 30.05" style="enable-background:new 0 0 30.05 30.05;" xml:space="preserve">
    <g>
    <path d="M20.814,11c-0.193-0.102-0.43-0.086-0.604,0.041l-2.383,1.73v-1.258c0-0.217-0.121-0.42-0.32-0.514
    c-0.191-0.102-0.424-0.086-0.602,0.041l-4.834,3.512c-0.15,0.109-0.242,0.287-0.242,0.473c0,0.184,0.092,0.357,0.242,0.471
    l4.834,3.508c0.102,0.076,0.221,0.111,0.342,0.111c0.088,0,0.18-0.018,0.26-0.066c0.199-0.1,0.32-0.295,0.32-0.516v-1.26
    l2.383,1.73c0.098,0.076,0.221,0.111,0.34,0.111c0.094,0,0.182-0.018,0.264-0.066c0.197-0.1,0.318-0.295,0.318-0.516v-7.02
    C21.133,11.297,21.012,11.094,20.814,11z"/>
    <path d="M15.027,0C6.729,0,0,6.729,0,15.025C0,23.326,6.729,30.05,15.027,30.05S30.05,23.325,30.05,15.025
    C30.051,6.729,23.326,0,15.027,0z M15.027,27.539c-6.912,0-12.518-5.604-12.518-12.514S8.115,2.51,15.027,2.51
    c6.914,0,12.516,5.605,12.516,12.516S21.941,27.539,15.027,27.539z"/>
    <path d="M10.617,11.146H9.225c-0.168,0-0.305,0.137-0.305,0.305v7.146c0,0.168,0.137,0.309,0.305,0.309h1.393
    c0.17,0,0.307-0.141,0.307-0.309v-7.146C10.924,11.283,10.787,11.146,10.617,11.146z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;


    this.tick = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <g>
      <g>
        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M386.594,226.664
          L252.747,360.511c-7.551,7.551-17.795,11.794-28.475,11.794s-20.923-4.243-28.475-11.795l-70.388-70.389
          c-15.726-15.726-15.726-41.223,0.001-56.95c15.727-15.725,41.224-15.726,56.95,0.001l41.913,41.915l105.371-105.371
          c15.727-15.726,41.223-15.726,56.951,0.001C402.319,185.44,402.319,210.938,386.594,226.664z"/>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;

    this.cross = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
    <g>
      <g>
        <path d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.239,455,455,353.25,455,227.5
          C455.001,101.761,353.251,0,227.5,0z M310.759,268.333c11.715,11.716,11.715,30.711,0,42.427
          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787L227.5,269.927l-40.832,40.832
          c-5.858,5.858-13.536,8.787-21.213,8.787s-15.355-2.929-21.213-8.787c-11.715-11.716-11.715-30.711,0-42.427l40.832-40.832
          l-40.832-40.832c-11.715-11.716-11.715-30.711,0-42.427c11.716-11.716,30.711-11.716,42.427,0l40.832,40.832l40.832-40.832
          c11.716-11.716,30.711-11.716,42.427,0c11.715,11.716,11.715,30.711,0,42.427L269.927,227.5L310.759,268.333z"/>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;

    this.edit = `
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 490.008 490.008" style="enable-background:new 0 0 490.008 490.008;" xml:space="preserve">
    <g>
      <g>
        <g>
          <path d="M156.7,142.865h88.6c11.5,0,20.8-9.4,20.8-20.9s-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9
            C135.9,133.465,145.3,142.865,156.7,142.865z"/>
          <path d="M266.1,223.165c0-11.5-9.4-20.9-20.8-20.9h-88.6c-11.5,0-20.8,9.4-20.8,20.9s9.4,20.9,20.8,20.9h88.6
            C256.8,244.065,266.1,234.665,266.1,223.165z"/>
          <ellipse cx="94.2" cy="122.065" rx="20.5" ry="20.5"/>
          <ellipse cx="94.2" cy="223.165" rx="20.5" ry="20.5"/>
        </g>
        <path d="M483.7,258.965l-81.3-81.3c-8.3-8.3-20.8-8.3-29.2,0l-24.3,24.2v-168.5c0-18.4-14.9-33.3-33.3-33.3H33.3
          c-18.4,0-33.3,15-33.3,33.3v281c0,18.4,14.9,33.3,33.3,33.3h169l-4.1,4c-2.1,3.1-4.2,6.3-5.2,10.4l-20.8,102.2
          c-3.9,20.1,10.4,28.2,24,25l102.1-20.9c4.2,0,7.3-2.1,10.4-5.2l175-175.1C487.9,284.065,495.5,272.165,483.7,258.965z M40,307.765
          v-267.7h269v201.5l-66.5,66.1H40V307.765z M283.7,428.965l-65.6,13.6l13.5-65.7l155.2-155.3l53.1,52.1L283.7,428.965z"/>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    `;

    this.remove = `
    
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 310.285 310.285" style="enable-background:new 0 0 310.285 310.285;" xml:space="preserve">
<path d="M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142
	C310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32
	c0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

    `;

    this.list = `
   <?xml version="1.0" encoding="iso-8859-1"?>
   <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
   <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 458.18 458.18" style="enable-background:new 0 0 458.18 458.18;" xml:space="preserve">
   <g>
     <path d="M36.09,5.948c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052
       c18.803,0,34.052-15.25,34.052-34.052C70.142,21.196,54.893,5.948,36.09,5.948z"/>
     <path d="M147.537,80h268.604c22.092,0,40-17.908,40-40s-17.908-40-40-40H147.537c-22.092,0-40,17.908-40,40S125.445,80,147.537,80z
       "/>
     <path d="M36.09,132.008c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.052,34.052,34.052c18.803,0,34.052-15.249,34.052-34.052
       S54.893,132.008,36.09,132.008z"/>
     <path d="M416.142,126.06H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40
       S438.233,126.06,416.142,126.06z"/>
     <path d="M36.09,258.068c-18.803,0-34.052,15.248-34.052,34.051c0,18.803,15.249,34.052,34.052,34.052
       c18.803,0,34.052-15.249,34.052-34.052C70.142,273.316,54.893,258.068,36.09,258.068z"/>
     <path d="M416.142,252.119H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40
       S438.233,252.119,416.142,252.119z"/>
     <path d="M36.09,384.128c-18.803,0-34.052,15.248-34.052,34.051s15.249,34.053,34.052,34.053c18.803,0,34.052-15.25,34.052-34.053
       S54.893,384.128,36.09,384.128z"/>
     <path d="M416.142,378.18H147.537c-22.092,0-40,17.908-40,40s17.908,40,40,40h268.604c22.092,0,40-17.908,40-40
       S438.233,378.18,416.142,378.18z"/>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg>
   `;

    this.style = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z" fill="black"/>
   <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z" fill="black"/>
   <path d="M18 6V12H16V8L12 8V6L18 6Z" fill="black"/>
   <path d="M12 18H6L6 12H8L8 16H12V18Z" fill="black"/>
   </svg>
   `;


    this.visible = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 98.48 98.48" style="enable-background:new 0 0 98.48 98.48;" xml:space="preserve"
 >
<g>
 <path d="M97.204,45.788c-0.865-1.02-21.537-24.945-47.963-24.945c-26.427,0-47.098,23.925-47.965,24.946
   c-1.701,2-1.701,4.902,0.001,6.904c0.866,1.02,21.537,24.944,47.964,24.944c26.426,0,47.098-23.926,47.964-24.946
   C98.906,50.691,98.906,47.789,97.204,45.788z M57.313,35.215c1.777-0.97,4.255,0.143,5.534,2.485
   c1.279,2.343,0.875,5.029-0.902,5.999c-1.776,0.971-4.255-0.143-5.535-2.485C55.132,38.871,55.535,36.185,57.313,35.215z
    M49.241,68.969c-18.46,0-33.995-14.177-39.372-19.729c3.631-3.75,11.898-11.429,22.567-16.021
   c-2.081,3.166-3.301,6.949-3.301,11.021c0,11.104,9.001,20.105,20.105,20.105s20.106-9.001,20.106-20.105
   c0-4.072-1.219-7.855-3.3-11.021C76.715,37.812,84.981,45.49,88.612,49.24C83.235,54.795,67.7,68.969,49.241,68.969z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g></svg>`;

    this.invisible = `<svg
version="1.1"
id="Capa_1"
x="0px"
y="0px"
viewBox="0 0 98.48 98.481"
style="enable-background:new 0 0 98.48 98.481;"
xml:space="preserve"
sodipodi:docname="invisible.svg"
inkscape:version="1.1 (c68e22c387, 2021-05-23)"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg"><defs
id="defs45" /><sodipodi:namedview
id="namedview43"
pagecolor="#ffffff"
bordercolor="#666666"
borderopacity="1.0"
inkscape:pageshadow="2"
inkscape:pageopacity="0.0"
inkscape:pagecheckerboard="0"
showgrid="false"
inkscape:zoom="2.9869357"
inkscape:cx="4.8544735"
inkscape:cy="41.346722"
inkscape:window-width="1920"
inkscape:window-height="1017"
inkscape:window-x="-8"
inkscape:window-y="-8"
inkscape:window-maximized="1"
inkscape:current-layer="g8" />
<g
id="g10">
<g
id="g8">
 
 
 <g
id="g843"><path
  d="M69.322,44.716L49.715,64.323C60.438,64.072,69.071,55.438,69.322,44.716z"
  id="path2" /><path
  d="M97.204,45.789c-0.449-0.529-6.245-7.23-15.402-13.554l-6.2,6.2c5.99,3.954,10.559,8.275,13.011,10.806    C83.235,54.795,67.7,68.969,49.241,68.969c-1.334,0-2.651-0.082-3.952-0.222l-7.439,7.438c3.639,0.91,7.449,1.451,11.391,1.451    c26.426,0,47.098-23.927,47.964-24.946C98.906,50.692,98.906,47.79,97.204,45.789z"
  id="path4" /><path
  d="M90.651,15.901c0-0.266-0.104-0.52-0.293-0.707l-7.071-7.07c-0.391-0.391-1.022-0.391-1.414,0L66.045,23.952    c-5.202-1.893-10.855-3.108-16.804-3.108c-26.427,0-47.098,23.926-47.965,24.946c-1.701,2-1.701,4.902,0.001,6.903    c0.517,0.606,8.083,9.354,19.707,16.319l-12.86,12.86c-0.188,0.188-0.293,0.441-0.293,0.707c0,0.267,0.105,0.521,0.293,0.707    l7.071,7.07c0.195,0.194,0.451,0.293,0.707,0.293c0.256,0,0.512-0.099,0.707-0.293l73.75-73.75    C90.546,16.421,90.651,16.167,90.651,15.901z M9.869,49.241C13.5,45.49,21.767,37.812,32.436,33.22    c-2.081,3.166-3.301,6.949-3.301,11.021c0,4.665,1.601,8.945,4.27,12.352l-6.124,6.123C19.129,58.196,12.89,52.361,9.869,49.241z"
  id="path6" /></g>
</g>
</g>
<g
id="g12">
</g>
<g
id="g14">
</g>
<g
id="g16">
</g>
<g
id="g18">
</g>
<g
id="g20">
</g>
<g
id="g22">
</g>
<g
id="g24">
</g>
<g
id="g26">
</g>
<g
id="g28">
</g>
<g
id="g30">
</g>
<g
id="g32">
</g>
<g
id="g34">
</g>
<g
id="g36">
</g>
<g
id="g38">
</g>
<g
id="g40">
</g></svg>`;
    this.mouse = `<svg
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 260.366 260.366"
  style="enable-background:new 0 0 260.366 260.366;"
  xml:space="preserve"
  sodipodi:docname="arrow-svgrepo-com.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"><defs
  id="defs37" /><sodipodi:namedview
  id="namedview35"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  inkscape:pageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  showgrid="false"
  inkscape:zoom="3.2339092"
  inkscape:cx="130.183"
  inkscape:cy="130.33761"
  inkscape:window-width="1920"
  inkscape:window-height="1027"
  inkscape:window-x="-8"
  inkscape:window-y="-8"
  inkscape:window-maximized="1"
  inkscape:current-layer="Capa_1" />
  <path
  d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"
  id="path2"
  style="fill:#000000;fill-opacity:1" />
  <g
  id="g4">
  </g>
  <g
  id="g6">
  </g>
  <g
  id="g8">
  </g>
  <g
  id="g10">
  </g>
  <g
  id="g12">
  </g>
  <g
  id="g14">
  </g>
  <g
  id="g16">
  </g>
  <g
  id="g18">
  </g>
  <g
  id="g20">
  </g>
  <g
  id="g22">
  </g>
  <g
  id="g24">
  </g>
  <g
  id="g26">
  </g>
  <g
  id="g28">
  </g>
  <g
  id="g30">
  </g>
  <g
  id="g32">
  </g>
  <path
  style="fill:#000000;fill-opacity:1;stroke-width:38.318;stroke-linecap:round;stroke:#000000;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
  d="m 176.25727,198.8633 c -23.68772,-23.64674 -24.49906,-24.41991 -26.7503,-25.49175 -4.55216,-2.16733 -9.11388,-2.17055 -13.60334,-0.01 -2.22046,1.06878 -3.10891,1.90403 -20.87257,19.62262 L 96.477662,211.49087 67.898364,125.92225 C 52.17975,78.859514 39.258366,40.178943 39.184177,39.965428 39.077696,39.658977 210.191,96.551715 210.7197,96.998548 c 0.0763,0.06445 -7.87234,8.148712 -17.66356,17.965012 -11.29533,11.32428 -18.11231,18.38875 -18.65061,19.32772 -2.62177,4.57321 -2.71438,10.25944 -0.24786,15.21817 0.59716,1.20053 6.23919,7.02408 25.242,26.05407 l 24.47294,24.50796 -11.59335,11.5891 -11.59335,11.58911 z"
  id="path1252" /></svg>`;

    this.nomouse = `<svg
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 260.366 260.366"
  style="enable-background:new 0 0 260.366 260.366;"
  xml:space="preserve"
  sodipodi:docname="noarrow.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"><defs
  id="defs37" /><sodipodi:namedview
  id="namedview35"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  inkscape:pageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  showgrid="false"
  inkscape:zoom="3.2339092"
  inkscape:cx="148.11795"
  inkscape:cy="169.91819"
  inkscape:window-width="1920"
  inkscape:window-height="1027"
  inkscape:window-x="-8"
  inkscape:window-y="-8"
  inkscape:window-maximized="1"
  inkscape:current-layer="Capa_1" />

  <g
  id="g4">
  </g>
  <g
  id="g6">
  </g>
  <g
  id="g8">
  </g>
  <g
  id="g10">
  </g>
  <g
  id="g12">
  </g>
  <g
  id="g14">
  </g>
  <g
  id="g16">
  </g>
  <g
  id="g18">
  </g>
  <g
  id="g20">
  </g>
  <g
  id="g22">
  </g>
  <g
  id="g24">
  </g>
  <g
  id="g26">
  </g>
  <g
  id="g28">
  </g>
  <g
  id="g30">
  </g>
  <g
  id="g32">
  </g>
  <rect
  style="fill:#000000;stroke:#000000;stroke-width:46.339;stroke-linecap:round"
  id="rect859"
  width="0.74869555"
  height="280.91412"
  x="179.77588"
  y="-127.59808"
  rx="12.106069"
  ry="12.080462"
  transform="matrix(0.74419993,0.66795693,-0.68686231,0.72678756,0,0)" /><g
  id="g1327"><path
    d="M255.972,189.463l-47.347-47.348l41.082-41.082c3.675-3.675,5.186-8.989,3.993-14.047c-1.191-5.059-4.917-9.14-9.846-10.786  L19.754,1.316c-5.393-1.804-11.341-0.401-15.36,3.62c-4.021,4.021-5.422,9.968-3.62,15.36l74.885,224.101  c1.646,4.929,5.728,8.654,10.786,9.846c5.053,1.193,10.371-0.317,14.047-3.993l42.165-42.165l47.348,47.347  c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394l44.755-44.755C261.83,204.819,261.83,195.321,255.972,189.463z   M200.611,223.612l-47.348-47.347c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.465-10.606,4.394l-35.624,35.624L38.752,39.294  l172.595,57.674l-34.541,34.541c-5.858,5.857-5.858,15.355,0,21.213l47.347,47.348L200.611,223.612z"
    id="path2"
    style="fill:#000000;fill-opacity:1" /><path
    style="fill:#000000;stroke:#000000;stroke-width:47.3953;stroke-linecap:round"
    d="M 175.54224,197.81395 C 141.49161,163.76332 143.2267,163.93691 115.08233,191.76514 L 96.477662,210.16082 68.362417,125.87737 C 52.899031,79.521474 40.41104,41.430054 40.611324,41.22977 40.811607,41.029486 78.915195,53.517478 125.28596,68.980863 l 84.31049,28.115246 -17.78399,17.934951 c -19.09866,19.26078 -21.49193,23.16051 -19.17388,31.24308 0.79101,2.75809 8.75682,11.60498 25.8883,28.75178 l 24.74573,24.76783 -11.46147,11.41381 -11.46147,11.41382 z"
    id="path1058" /></g></svg>`;

    this.nolabel = `<svg
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 37.628 37.628"
  style="enable-background:new 0 0 37.628 37.628;"
  xml:space="preserve"
  sodipodi:docname="nolabel.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"><defs
  id="defs39" /><sodipodi:namedview
  id="namedview37"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  inkscape:pageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  showgrid="false"
  inkscape:zoom="11.188477"
  inkscape:cx="7.1502135"
  inkscape:cy="14.523871"
  inkscape:window-x="-8"
  inkscape:window-y="-8"
  inkscape:window-maximized="1"
  inkscape:current-layer="Capa_1" />
  <g
  id="g4">
  <path
  d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089   c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067   c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731   c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181   c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156   C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595   c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"
  id="path2" />
  </g>
  <g
  id="g6">
  </g>
  <g
  id="g8">
  </g>
  <g
  id="g10">
  </g>
  <g
  id="g12">
  </g>
  <g
  id="g14">
  </g>
  <g
  id="g16">
  </g>
  <g
  id="g18">
  </g>
  <g
  id="g20">
  </g>
  <g
  id="g22">
  </g>
  <g
  id="g24">
  </g>
  <g
  id="g26">
  </g>
  <g
  id="g28">
  </g>
  <g
  id="g30">
  </g>
  <g
  id="g32">
  </g>
  <g
  id="g34">
  </g>
  <rect
  style="fill:#000000;stroke:none;stroke-width:106.948;stroke-linecap:round"
  id="rect1062"
  width="6.4875011"
  height="46.886227"
  x="23.606146"
  y="-23.715155"
  rx="3.1189909"
  ry="3.2421327"
  transform="matrix(0.68940354,0.7243775,-0.72076393,0.69318061,0,0)" /></svg>
  `;

    this.label = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 37.628 37.628" style="enable-background:new 0 0 37.628 37.628;"
    xml:space="preserve">
  <g>
    <path d="M36.895,23.758L25.092,35.562c-0.488,0.487-1.128,0.731-1.77,0.731c-0.211,0-0.419-0.037-0.625-0.089
      c0.418-0.107,0.815-0.315,1.145-0.644l11.803-11.804c0.979-0.977,0.979-2.56,0-3.534L17.488,2.067
      c-0.333-0.333-0.752-0.546-1.199-0.651l0.243-0.043c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156
      C37.872,21.199,37.872,22.782,36.895,23.758z M34.228,23.758L22.425,35.562c-0.488,0.487-1.128,0.731-1.77,0.731
      c-0.64,0-1.279-0.244-1.768-0.731L0.732,17.405c-0.578-0.578-0.837-1.401-0.694-2.206L1.822,5.181
      c0.184-1.031,0.992-1.839,2.023-2.023l10.019-1.784c0.807-0.142,1.629,0.116,2.206,0.694l18.156,18.156
      C35.206,21.199,35.206,22.782,34.228,23.758z M9.454,7.193c-0.985-1-2.595-1.012-3.595-0.027s-1.011,2.595-0.026,3.595
      c0.985,0.999,2.594,1.012,3.594,0.026C10.426,9.802,10.438,8.192,9.454,7.193z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>`;

    this.surface = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512.011 512.011" style="enable-background:new 0 0 512.011 512.011;" xml:space="preserve">
<g>
 <g>
   <g>
     <path d="M9.881,188.672l234.667,149.333c3.499,2.219,7.488,3.328,11.456,3.328c3.989,0,7.957-1.109,11.456-3.328l234.667-149.333
       c6.144-3.925,9.877-10.709,9.877-18.005c0-7.296-3.733-14.08-9.877-17.984L267.459,3.328c-6.997-4.437-15.915-4.437-22.912,0
       L9.881,152.683c-6.144,3.904-9.877,10.688-9.877,17.984C0.003,177.963,3.737,184.747,9.881,188.672z"/>
     <path d="M502.13,323.339l-66.069-42.048l-145.685,92.715c-10.347,6.549-22.208,10.005-34.368,10.005s-24.021-3.456-34.304-9.984
       L75.954,281.291L9.885,323.339c-6.144,3.925-9.877,10.709-9.877,18.005c0,7.296,3.733,14.08,9.877,17.984l234.667,149.355
       c3.499,2.219,7.467,3.328,11.456,3.328c3.968,0,7.957-1.109,11.456-3.328L502.13,359.328c6.144-3.904,9.877-10.688,9.877-17.984
       C512.008,334.048,508.274,327.264,502.13,323.339z"/>
   </g>
 </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;

    this.molecule = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
<g>
<g>
 <path d="M361.461,225.296c-11.33-8.988-20.694-20.332-27.358-33.296l-65.887,54.064c-13.889-11.727-30.673-20.423-49.582-24.736
   c-25.298-5.773-51.19-3.108-74.431,7.392l-8.563-12.027c-9.292,11.086-21.341,19.775-35.083,25.021l8.225,11.553
   c-15.352,15.449-26.146,34.892-31.11,56.652c-14.439,63.288,25.302,126.524,88.591,140.963c8.779,2.004,17.549,2.963,26.197,2.963
   c53.687,0,102.329-37.047,114.765-91.554c6.672-29.25,1.752-58.479-11.697-82.894L361.461,225.296z M182.458,391.885
   c-1.823,7.991-8.926,13.408-16.789,13.408c-1.27,0-2.56-0.142-3.85-0.437c-32.367-7.385-52.691-39.723-45.306-72.089
   c2.117-9.281,11.358-15.09,20.638-12.971c9.281,2.117,15.088,11.358,12.971,20.638c-1.528,6.701-0.356,13.597,3.301,19.416
   c3.657,5.82,9.363,9.867,16.063,11.396C178.768,373.364,184.575,382.605,182.458,391.885z"/>
</g>
</g>
<g>
<g>
 <path d="M443.878,60.382c-22.81-5.201-46.283-1.212-66.094,11.237c-19.81,12.451-33.586,31.87-38.789,54.68
   c-10.744,47.09,18.826,94.14,65.917,104.884v0.001c6.533,1.49,13.057,2.203,19.492,2.203c39.947,0,76.139-27.565,85.393-68.122
   C520.538,118.178,490.968,71.127,443.878,60.382z"/>
</g>
</g>
<g>
<g>
 <path d="M129.651,124.586c-9.977-15.877-25.542-26.918-43.824-31.088c-37.742-8.611-75.449,15.09-84.06,52.83
   s15.088,75.449,52.828,84.059c5.236,1.195,10.466,1.767,15.622,1.767c32.016,0,61.022-22.092,68.438-54.597
   C142.827,159.274,139.63,140.463,129.651,124.586z"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

    this.change = `<svg
  version="1.1"
  id="Layer_1"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background:new 0 0 512 512;"
  xml:space="preserve"
  sodipodi:docname="change.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"><defs
  id="defs47" /><sodipodi:namedview
  id="namedview45"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  inkscape:pageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  showgrid="false"
  inkscape:zoom="1"
  inkscape:cx="226"
  inkscape:cy="256.5"
  inkscape:window-width="1920"
  inkscape:window-height="1027"
  inkscape:window-x="-8"
  inkscape:window-y="-8"
  inkscape:window-maximized="1"
  inkscape:current-layer="Layer_1" />


<g
  id="g14">
</g>
<g
  id="g16">
</g>
<g
  id="g18">
</g>
<g
  id="g20">
</g>
<g
  id="g22">
</g>
<g
  id="g24">
</g>
<g
  id="g26">
</g>
<g
  id="g28">
</g>
<g
  id="g30">
</g>
<g
  id="g32">
</g>
<g
  id="g34">
</g>
<g
  id="g36">
</g>
<g
  id="g38">
</g>
<g
  id="g40">
</g>
<g
  id="g42">
</g>
<g
  id="g1800"
  transform="translate(-0.1537225,-4.3038075)"><path
    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    d="m 102.46172,128.30302 76.00859,-76.010515 0.15658,38.005766 0.1566,38.005769 h 153.53462 153.53462 v 38.00475 38.00475 H 256.15293 26.453131 Z"
    id="path1171" /><path
    style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:22.416;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    d="m 409.84573,392.3046 -76.00859,76.01051 -0.15658,-38.00576 -0.1566,-38.00577 H 179.98934 26.454715 V 354.29883 316.29408 H 256.15452 485.85431 Z"
    id="path1796" /></g></svg>`;

  }

  return Icons;
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/ui/form.js ***!
  \************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * This is a colection of contructor to make different input element
 * @function $3Dmol.UI#Form
 */
$3Dmol.UI.Form = (function () {
    /**
     * Create Color input
     * @function $3Dmol.UI#Form.Color
     * @param {Object} outerControl Reference object to store the value
     */
    Form.Color = function (outerControl) {
        var redDot = $('<div></div>');
        redDot.height(10);
        redDot.width(10);
        redDot.css('border-radius', '50%');
        redDot.css('background', 'red');
        redDot.css('margin-right', '3px');

        var blueDot = redDot.clone();
        blueDot.css('background', 'blue');

        var greenDot = redDot.clone();
        greenDot.css('background', 'green');

        var control = this.control = {
            R: {
                value: 0,
                min: 0,
                max: 255,
                label: redDot
            },
            G: {
                value: 0,
                min: 0,
                max: 255,
                label: greenDot
            },
            B: {
                value: 0,
                min: 0,
                max: 255,
                label: blueDot
            },
        };

        var surroundingBox = this.ui = $('<div></div>')
        var boundingBox = $('<div></div>');

        surroundingBox.append(boundingBox);

        var spectrumControl = {
            key: 'Spectrum',
            value: null
        }

        var spectrum = new Form.Checkbox(spectrumControl);

        boundingBox.append(spectrum.ui);

        spectrum.ui.css({
            'margin-left': '2px'
        })


        var RValue = new Form.Slider(control.R);
        var GValue = new Form.Slider(control.G);
        var BValue = new Form.Slider(control.B);

        var sliders = $('<div></div>');
        sliders.append(RValue.ui, GValue.ui, BValue.ui);

        var color = $('<div></div>');

        boundingBox.append(sliders);
        boundingBox.append(color);


        // CSS

        RValue.slide.css('color', 'red');

        // GValue.ui.css('display', 'block');
        GValue.slide.css('color', 'green');

        // BValue.ui.css('display', 'block');
        BValue.slide.css('color', 'blue');

        color.height(15);
        // color.width(50);
        color.css('margin-top', '6px');
        color.css('margin-bottom', '6px');
        color.css('border', '1px solid grey');
        color.css('border-radius', '500px');

        this.update = function () {};
        var self = this;
        // Functionality
        function updatePreview() {
            var c = `rgb(${control.R.value}, ${control.G.value}, ${control.B.value})`;
            color.css('background', c);
            outerControl.value = c;
            self.update(control);
        }

        RValue.update = GValue.update = BValue.update = updatePreview;
        updatePreview();

        spectrum.update = function (v) {
            sliders.toggle();

            if (v.value) {
                color.css({
                    'background': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
                });
                outerControl.value = 'spectrum';
            } else {
                updatePreview();
            }
        }

        this.getValue = function () {
            return outerControl;
        }

        this.validate = function () {
            return true;
        }

        this.setValue = function (colorValue) {

            if (colorValue == 'spectrum') {
                spectrum.setValue(true);
                spectrum.update(spectrumControl);
                sliders.hide();

                outerControl.value = 'spectrum';
            }
        }

        spectrum.ui.hide();

        this.enableSpectrum = function () {
            spectrum.ui.show();
        }
    }

    /**
     * Create ListInput input
     * @function $3Dmol.UI#Form.ListInput
     * @param {Object} control Reference object to store the value
     * @param {Array} listElements list of the elements through which options are generated
     */
    Form.ListInput = function (control, listElements) {
        // var label = $('<div></div>');
        // label.text(control.key);

        var surroundingBox = this.ui = $('<div></div>');
        var boundingBox = $('<div></div>');
        var itemList = listElements;
        // surroundingBox.append(label);
        surroundingBox.append(boundingBox);

        var select = $('<select></select>');
        select.css($3Dmol.defaultCSS.ListInput.select);

        boundingBox.append(select);

        this.showAlertBox = true;
        var failMessage = $('<div></div>');
        failMessage.text('Please select some value');
        failMessage.css({
            'color': 'crimson',
            'font-family': 'Arial',
            'font-weight': 'bold',
            'font-size': '10px'
        });
        failMessage.hide();
        boundingBox.append(failMessage);

        this.update = function () {}

        select.on('click', {
            parent: this
        }, (event) => {
            control.value = select.children('option:selected').val();
            event.data.parent.update(control);
        });

        this.getValue = () => {
            return control;
        }

        // this.preventAlertBox = function(){
        //     show
        // }

        this.validate = function () {
            if (control.value == 'select' || control.value == null) {
                (this.showAlertBox) ? failMessage.show(): null;
                select.css({
                    'box-shadow': '0px 0px 2px red'
                });
                return false;
            } else {
                failMessage.hide();
                boundingBox.css({
                    'box-shadow': 'none'
                });
                return true;
            }
        }

        this.setValue = function (val) {
            if (listElements.indexOf(val) != -1) {
                select.empty();
                var defaultOption = $('<option></option>');
                defaultOption.text('select');

                itemList.forEach((item) => {
                    var option = $('<option></option>');
                    option.text(item);
                    option.attr('value', item);
                    select.append(option);

                    if (val == item) {
                        option.prop('selected', true);
                    }
                });

                control.value = select.children('option:selected').val();
            } else {
                console.error('UI::Form::ListInput:incorrect value', val);
            }
        }

        this.updateList = function (newList) {
            select.empty();

            var defaultOption = $('<option></option>');
            defaultOption.text('select');
            defaultOption.attr('value', 'select');

            select.append(defaultOption);

            itemList = newList;
            itemList.forEach((item) => {
                var option = $('<option></option>');
                option.text(item);
                option.attr('value', item);
                select.append(option);
            });
        }

        this.updateList(itemList);
    }

    /**
     * Create text, numeric or range Input
     * @function $3Dmol.UI#Form.Input
     * @param {Object} control Reference object to store the value
     */
    Form.Input = function (control) {
        var surroundingBox = this.ui = $('<div></div>');
        var boundingBox = $('<div></div>');
        // surroundingBox.append(label);
        surroundingBox.append(boundingBox);

        var validationType = this.validationType = 'text';

        surroundingBox.css({
            'width': '100%',
            'box-sizing': 'border-box'
        })

        var input = this.domElement = $('<input type="text">');
        boundingBox.append(input);

        var alertBox = $('<div></div>');
        alertBox.css({
            'border': '1px solid darkred',
            'border-radius': '3px',
            'font-family': 'Arial',
            'font-size': '10px',
            'font-weight': 'bold',
            'margin': '2px',
            'margin-left': '4px',
            'padding': '2px',
            'color': 'darkred',
            'background': 'lightcoral'
        });

        var alertMessage = {
            'invalid-input': 'Invalid input please check the value entered',
        }

        boundingBox.append(alertBox);
        alertBox.hide();

        this.setWidth = function (width) {
            input.width(width - 6);
        }

        this.setWidth(75);

        input.css({
            // 'margin-left': '4px'
        });

        this.update = function () {

        }

        input.on('change', {
            parent: this,
            control: control
        }, (event) => {
            let inputString = input.val();

            if (inputString[inputString.length - 1] == ',') {
                inputString = inputString.slice(0, -1);
            }

            if (validationType == 'range') {
                control.value = inputString.split(',');
            } else {
                control.value = inputString;
            }

            // calling update function 
            event.data.parent.update(control);
        });

        input.on('select', () => {
           // selectedText = input.val().substring(e.target.selectionStart, e.target.selectionEnd);
        });


        this.getValue = () => {
            return control;
        }

        var error = this.error = function (msg) {
            alertBox.show();
            alertBox.text(msg)
        }

        this.setValue = function (val) {

            if (validationType == 'range') {
                var text = val.join(',');
                input.val(text);
            } else {
                input.val(val);
            }

            control.value = val;
        }



        function checkInputFloat() {
            var inputString = input.val();

            var dots = inputString.match(/\./g) || [];
            var checkString = inputString.replaceAll(/\./g, '').replaceAll(/[0-9]/g, '');

            if (dots.length > 1) {
                return false
            }

            if (checkString != '') return false;

            if (isNaN(parseFloat(inputString))) {
                return false;
            } else {
                return true;
            }
        }

        function checkInputNumber() {
            var inputString = input.val();

            var checkString = inputString.replaceAll(/[0-9]/g, '');

            if (checkString != '') return false;

            if (isNaN(parseInt(inputString))) {
                return false;
            } else {
                return true;
            }
        }

        // Parse Input Range Functions

        // Checks only number, comma and hyphen present
        function checkRangeTokens(inputString) {
            var finalString = inputString.replaceAll(',', '').replaceAll('-', '').replaceAll(/[0-9]/g, '').replaceAll(' ', '');

            if (finalString == '')
                return true;
            else
                return false;
        }

        function checkList(inputString) {
            inputString = inputString.replaceAll(' ', '');

            if (inputString[inputString.length - 1] == ',') {
                inputString = inputString.slice(0, -1);
            }


            var rangeList = inputString.split(',');

            // If dublicate comma return false;
            if (/,,/g.exec(inputString)) return false;

            // If first element not a number return false;
            if (isNaN(parseInt(rangeList[0]))) return false;

            var validRangeList = rangeList.map((rangeInput) => {
                return checkRangeInput(rangeInput);
            });

            return validRangeList.find((e) => {
                return e == false
            }) == undefined ? true : false;
        }

        function checkRangeInput(inputString) {
            var rangeInputs = inputString.split('-');
            if (rangeInputs.length > 2) {
                return false;
            } else {
                if (rangeInputs.length == 0) {
                    return true;
                } else if (rangeInputs.length == 1) {
                    if (isNaN(parseInt(rangeInputs[0])))
                        return false;
                    else
                        return true;
                } else if (rangeInputs.length == 2) {
                    if (isNaN(parseInt(rangeInputs[0])) || isNaN(parseInt(rangeInputs[1])))
                        return false;
                    else
                        return true;
                } else
                    return false;
            }
        }

        var checkInput = this.checkInput = function () {
            var inputString = input.val();

            if (validationType == 'number') {
                if (checkInputNumber()) {
                    alertBox.hide();
                    return true;
                } else {
                    error(alertMessage['invalid-input']);
                    return false;
                }
            } else if (validationType == 'float') {
                if (checkInputFloat()) {
                    alertBox.hide();
                    return true;
                } else {
                    error(alertMessage['invalid-input']);
                    return false;
                }
            } else if (validationType == 'range') {
                if (checkRangeTokens(inputString)) {
                    if (checkList(inputString)) {
                        alertBox.hide();
                        return true;
                    } else {
                        error(alertMessage['invalid-input']);
                        return false;
                    }
                } else {
                    error(alertMessage['invalid-input']);
                    return false;
                }

            } else {
                return true;
            }
        }

        this.validateOnlyNumber = function (floatType = false) {
            if (floatType) {
                validationType = 'float';
            } else {
                validationType = 'number';
            }

            input.on('keydown keyup paste cut', function () {
                checkInput();
            });
        }


        this.validateInputRange = function () {
            validationType = 'range';

            input.on('keydown keyup paste cut', () => {
                checkInput();
            });

        }

        this.isEmpty = function () {
            if (control.value == "") {
                return true;
            }
        }

        this.validate = function () {
            if ((control.active == true && control.value != null && control.value != "" && checkInput()) || (control.active == false)) {
                input.css('box-shadow', 'none');
                return true
            } else {
                input.css('box-shadow', '0px 0px 2px red');
                return false;
            }
        }

        // CSS 

        input.css($3Dmol.defaultCSS.Input.input);
        boundingBox.css($3Dmol.defaultCSS.Input.boundingBox);

    }

    /**
     * Create Checkbox input for boolean values
     * @function $3Dmol.UI#Form.Checkbox
     * @param {Object} control Reference object to store the value
     */
    Form.Checkbox = function (control) {
        var label = $('<div></div>');
        label.text(control.key);
        label.css($3Dmol.defaultCSS.TextDefault);

        var surroundingBox = this.ui = $('<div></div>');
        var boundingBox = $('<div></div>');
        surroundingBox.append(boundingBox);
        surroundingBox.append(label);

        var checkbox = $('<input type="checkbox" />');
        boundingBox.append(checkbox);

        this.click = () => {};

        this.update = function () {

        }

        this.getValue = () => {
            return control;
        }

        checkbox.on('click', {
            parent: this
        }, (event) => {
            control.value = checkbox.prop('checked');
            event.data.parent.update(control);
        });

        // CSS
        label.css('display', 'inline-block');
        boundingBox.css('display', 'inline-block')

        this.validate = function () {
            return true;
        }

        this.setValue = function (val) {
            checkbox.prop('checked', val);
            this.update(control);
            control.value = val;
        }
    }

    /**
     * Create input for values between two numbers
     * @function $3Dmol.UI#Form.Slider
     * @param {Object} control Reference object to store the value
     */
    Form.Slider = function (control) {
        var surroundingBox = this.ui = $('<div></div>');

        var boundingBox = $('<div></div>');
        surroundingBox.append(boundingBox);

        boundingBox.css('display', 'flex');
        var slide = this.slide = $('<input type="range">');
        slide.css('width', '100%');

        var min = control.min || 0;
        var max = control.max || 100;
        var step = control.step || 1;
        var defaultValue = control.default || min;
        var labelContent = control.label || '';

        var label = $('<div></div>');
        label.append(labelContent);
        boundingBox.append(label);

        slide.attr('min', min);
        slide.attr('max', max);
        slide.attr('step', step);
        slide.attr('value', defaultValue);
        control.value = defaultValue;
        boundingBox.append(slide);

        var setValue = false;

        this.update = function () {

        };

        this.getValue = () => {
            return control;
        }

        slide.on('mousedown', () => {
            setValue = true;
        });

        slide.on('mousemove', {
            parent: this
        }, (event) => {
            if (setValue) {
                control.value = slide.val();
                event.data.parent.update(control);
            }
        });

        slide.on('mouseup', () => {
            setValue = false;
        });

        // CSS
        boundingBox.css('align-items', 'center');
        boundingBox.height('21px');
        // boundingBox.css('border-radius', '2px');
        // label.css('line-height', '21px');
        slide.css('padding', '0px');
        slide.css('margin', '0px');

        this.validate = function () {
            return true;
        }

        this.setValue = function (val) {
            slide.val(val);
            control.value = slide.val();
        }


    }

    /**
     * Create empty element used for property that whose input cannot be taken
     * @function $3Dmol.UI#Form.EmptyElement
     * @param {Object} control Reference object to store the value
     */
    Form.EmptyElement = function (control) {
        this.ui = $('<div></div>');

        this.onUpdate = () => {
        }

        this.getValue = () => {
            return control;
        }

        this.validate = function () {
            return true;
        }
    }

    // mainControl param will be used to take in specName
    // in the form of key 
    // type will be 'form'
    // active will be used to activate deactivate form if more than one form
    /**
     * Creates Form input that takes input from different input element 
     * 
     * @function $3Dmol.UI#Form
     * @param {validSelectionSpec|validStyleSpec|validAtomSpec} specs the defination of spec is used as an input to generate the form
     * @param {Object} mainControl Reference of variable to store the value from the form
     */
    function Form(specs, mainControl) {
        specs = specs || {};
        var boundingBox = this.ui = $('<div></div>');

        var heading = $('<div></div>');
        heading.text(mainControl.key);

        // Styling heading 
        heading.css({
            'border-bottom': '1px solid black',
            'font-family': 'Arial',
            'font-size': '14px',
            'font-weight': 'bold',
            'padding-top': '2px',
            'padding-bottom': '4px'
        });

        boundingBox.append(heading);
        boundingBox.addClass('form');

        var inputs = this.inputs = [];
        // body.append(boundingBox);

        var keys = Object.keys(specs);
        keys.forEach((key) => {
            if (specs[key].gui) {
                var prop = new Property(key, specs[key].type);
                inputs.push(prop);
                boundingBox.append(prop.ui);
            }

        });

        this.update = function () {}

        var update = () => {
        };


        inputs.forEach((input) => {
            input.update = update;
        })

        this.getValue = function () {
            mainControl.value = {};

            inputs.forEach((input) => {
                var inputValue = input.getValue();

                if (inputValue.active) {
                    mainControl.value[inputValue.key] = inputValue.value;
                }
            });

            return mainControl;
        }

        var updateValues = function (inputControl) {
            mainControl.value[inputControl.key] = mainControl.value; //control =?
            update(mainControl);
        }

        this.validate = function () {
            var validations = inputs.map((i) => {

                if (i.active.getValue().value) {
                    return i.placeholder.validate();
                } else {
                    return true;
                }
            });


            if (validations.find(e => e == false) == undefined)
                return true;
            else {
                return false;
            }

        }

        this.setValue = function (val) {
            var keys = Object.keys(val);
            for (var i = 0; i < keys.length; i++) {
                var input = inputs.find((e) => {
                    if (e.control.key == keys[i])
                        return e;
                });



                input.placeholder.setValue(val[keys[i]]);
                input.active.setValue(true);
                input.placeholder.ui.show();
                input.control.active = true;
            }

            // mainControl.value = val;
            this.update(mainControl);
            this.getValue();
        }

        this.getInputs = function () {
            return inputs;
        }

        function Property(key, type) {
            var control = this.control = {
                value: null,
                type: type,
                key: key,
                active: false
            };
            var boundingBox = this.ui = $('<div></div>');
            this.placeholder = {
                ui: $('<div></div>')
            }; // default value for ui element 
            this.active = new Form.Checkbox({
                value: false,
                key: key
            });


            if (specs[key].type == 'string' || specs[key].type == 'element') {
                this.placeholder = new Form.Input(control);
                this.placeholder.ui.attr('type', 'text');
            } else if (specs[key].type == 'number') {

                var slider = false;

                if (specs[key].min != undefined && specs[key].max != undefined && specs[key].default != undefined) {
                    slider = true;
                }

                if (slider) {
                    // if( specs[key].min && spec[key].max){
                    control.min = specs[key].min;
                    control.max = specs[key].max;
                    control.default = specs[key].default;
                    control.step = specs[key].step || ((control.max - control.max) / 1000);
                    this.placeholder = new Form.Slider(control);
                } else {
                    this.placeholder = new Form.Input(control);
                    this.placeholder.ui.attr('type', 'text');
                    this.placeholder.validateOnlyNumber(specs[key].floatType);
                }
            } else if (specs[key].type == 'array_range') {
                this.placeholder = new Form.Input(control);
                this.placeholder.ui.attr('type', 'text');
                this.placeholder.validateInputRange();
            } else if (specs[key].type == 'color') {
                this.placeholder = new Form.Color(control);
                if (specs[key].spectrum) {
                    this.placeholder.enableSpectrum();
                }

            } else if (specs[key].type == 'boolean') {
                this.placeholder = new Form.Checkbox(control);

            } else if (specs[key].type == 'properties') {
                this.placeholder = new Form.Input(control);
                this.placeholder.ui.attr('type', 'text');

            } else if (specs[key].type == 'colorscheme') {
                this.placeholder = new Form.ListInput(control, Object.keys($3Dmol.builtinColorSchemes));
                this.placeholder.ui.attr('type', 'text');

            } else if (specs[key].type == undefined) {
                if (specs[key].validItems) {
                    this.placeholder = new Form.ListInput(control, specs[key].validItems);
                }

            } else if (specs[key].type == 'form') {
                this.placeholder = new Form(specs[key].validItems, control);
                this.placeholder.ui.append($('<div></div>').css($3Dmol.defaultCSS.LinkBreak));
            } else {
                this.placeholder = new Form.EmptyElement(control);
                // return new Form.EmptyElement(control);
            }

            this.getValue = function () {

                if (this.placeholder.getValue)
                    return this.placeholder.getValue();
                else
                    return null;
            }


            // Adding active control for the property
            var placeholder = this.placeholder;

            if (type != 'boolean') {
                placeholder.ui.hide();
                boundingBox.append(this.active.ui);
                this.active.update = function (c) {
                    (c.value) ? placeholder.ui.show(): placeholder.ui.hide();
                    control.active = c.value;
                }
            } else {
                this.placeholder.update = function (c) {
                    control.active = c.value;
                }
            }

            boundingBox.append(this.placeholder.ui);

            if (this.placeholder.onUpdate)
                this.placeholder.onUpdate(updateValues);
        }


    }



    return Form;
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./src/ui/defaultValues.js ***!
  \*********************************/
$3Dmol.labelStyles = {
  purple : {
    backgroundColor: 0x800080, 
    backgroundOpacity: 0.8
  },

  milk : {
    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['black'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['azure'],
    backgroundColor: $3Dmol.htmlColors['aliceblue'],
    backgroundOpacity: 0.9
  },

  blue : {
    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['aliceblue'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['darkviolet'],
    backgroundColor: $3Dmol.htmlColors['darkblue'],
    backgroundOpacity: 0.9
  },

  chocolate : {
    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['aliceblue'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['brown'],
    backgroundColor: $3Dmol.htmlColors['chocolate'],
    backgroundOpacity: 0.9
  },

  lime : {
    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['black'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['lightgreen'],
    backgroundColor: $3Dmol.htmlColors['lime'],
    backgroundOpacity: 0.9
  },

  rose : {
    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['black'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['mintcream'],
    backgroundColor: $3Dmol.htmlColors['mistyrose'],
    backgroundOpacity: 0.9
  },

  yellow : {

    font : 'Arial',
    fontSize: 12,
    fontColor: $3Dmol.htmlColors['black'],
    borderThickness: 1,
    borderColor: $3Dmol.htmlColors['orange'],
    backgroundColor: $3Dmol.htmlColors['yellow'],
    backgroundOpacity: 0.9
  },

};

$3Dmol.longPressDuration = 1500;

$3Dmol.defaultCSS = {
  ListInput : {
    select : {
      'width' : 'auto',
      'border' : 'none',
      'margin' : '0px',
      'font-family' : 'Arial',
      'padding' : '0px',
      'height' : '20px',
      'border-radius' : '4px',
      'box-sizing' : 'border-box'
    }
  },
  Input : {
    input : {
      'margin-bottom' : '0px',
      'padding' : '0px',
      'border-radius' : '4px',
      'font-family' : 'Arial',
      'width' : '96%'
    },

    boundingBox : {
      'margin-left' : '4px',
      'margin-right' : '',
    }
  },
  Checkbox : {},
  Slider : {},
  Color : {},
  TextDefault : {
    'font-family' : 'Arial',
    'margin-left' : '4px'
  },

  LinkBreak : {
    'height' : '3px',
    'border-bottom' : '1px solid #687193'
  }

}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});