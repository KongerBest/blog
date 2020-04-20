/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

define( [
	"./var/arr",
	"./var/document",
	"./var/getProto",
	"./var/slice",
	"./var/concat",
	"./var/push",
	"./var/indexOf",
	"./var/class2type",
	"./var/toString",
	"./var/hasOwn",
	"./var/fnToString",
	"./var/ObjectFunctionString",
	"./var/support",
	"./core/DOMEval"
], function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, DOMEval ) {

"use strict";

var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 0 only make sure we trim bom and nbsp rtrim="/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g," matches dashed string for camelizing rmsprefix="/^-ms-/," rdashalpha="/-([a-z])/g," used by jquery.camelcase as callback to replace() fcamelcase="function(" all, letter ) { return letter.touppercase(); }; jquery.fn="jQuery.prototype" = the current version of jquery being jquery: version, constructor: jquery, default length a object is length: 0, toarray: function() slice.call( this ); }, get nth element in matched set or whole clean array get: function( num all elements if ( null } just one from < ? this[ + this.length ] : ]; take an push it onto stack (returning new set) pushstack: elems build var ret="jQuery.merge(" this.constructor(), add old (as reference) ret.prevobject="this;" newly-formed ret; execute every set. each: jquery.each( this, map: this.pushstack( jquery.map( elem, i callback.call( i, elem slice: slice.apply( arguments first: this.eq( last: -1 eq: len="this.length," j="+i">= 0 && j < len ? [ this[ j ] ] : [] );
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
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
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
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

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

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

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

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 0 1 2 12 13 only (functionish regexp) return typeof obj="==" "object" || "function" ? class2type[ tostring.call( ) ] : obj; }, evaluates a script in global context globaleval: function( code { domeval( ); convert dashed to camelcase; used by the css and data modules support: ie <="9" - 11, edge microsoft forgot hump their vendor prefix (#9572) camelcase: string string.replace( rmsprefix, "ms-" ).replace( rdashalpha, fcamelcase each: obj, callback var length, i="0;" if ( isarraylike( length="obj.length;" for ; length; i++ callback.call( obj[ ], i, false break; } else android trim: text null "" + rtrim, results is internal usage makearray: arr, ret="results" []; arr !="null" object( jquery.merge( ret, "string" [ push.call( ret; inarray: elem, -1 indexof.call( only, phantomjs push.apply(_, arraylike) throws on ancient webkit merge: first, second len="+second.length," j="0," len; j++ first[ ]; first.length="i;" first; grep: elems, callback, invert callbackinverse, matches="[]," callbackexpect="!invert;" go through array, saving items that pass validator function callbackinverse="!callback(" elems[ matches.push( matches; arg map: value, translating each of new values elems value="callback(" ret.push( every key object, flatten any nested arrays concat.apply( [], guid counter objects guid: 1, bind context, optionally partially applying arguments. proxy: fn, tmp, args, proxy; tmp="fn[" fn="tmp;" quick check determine target callable, spec this typeerror, but we will just undefined. !jquery.isfunction( undefined; simulated args="slice.call(" arguments, proxy="function()" fn.apply( this, args.concat( slice.call( arguments }; set unique handler same original handler, so it can be removed proxy.guid="fn.guid" = fn.guid jquery.guid++; now: date.now, jquery.support not core other projects attach properties needs exist. support symbol="==" jquery.fn[ symbol.iterator populate class2type map jquery.each( "boolean number array date regexp object error symbol".split( " ), name "[object "]" real ios 8.2 (not reproducible simulator) `in` prevent jit (gh-2145) hasown isn't here due negatives regarding nodelist && "length" obj.length, type="jQuery.type(" jquery.iswindow( false; "array" "number"> 0 && ( length - 1 ) in obj;
}

return jQuery;
} );
</=2.3></=4.0>