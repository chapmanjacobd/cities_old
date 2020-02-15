(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Main$City = function (id) {
	return function (n) {
		return function (s) {
			return function (c) {
				return function (u) {
					return function (lat) {
						return function (lon) {
							return function (dist) {
								return function (noise) {
									return function (popMax) {
										return function (rain) {
											return function (coVar) {
												return function (tmp) {
													return function (srad) {
														return function (wind) {
															return function (interesting) {
																return function (boring) {
																	return function (safety) {
																		return function (danger) {
																			return function (coastline) {
																				return function (tourismcount) {
																					return function (publicTransport) {
																						return function (slope) {
																							return function (popghs) {
																								return function (osmpop) {
																									return function (builtEnv) {
																										return function (groadsCount) {
																											return function (groadsAvgLength) {
																												return function (toilets) {
																													return function (food) {
																														return function (accessibilityToCity) {
																															return function (popd) {
																																return function (navw) {
																																	return function (globUrban) {
																																		return function (globCrop) {
																																			return function (globForest) {
																																				return function (globVe) {
																																					return function (globWet) {
																																						return function (osmn) {
																																							return function (dist_sum) {
																																								return function (osm_interesting_interesting_sum_sum) {
																																									return function (osm_boring_boring_sum) {
																																										return function (osm_safe_safety_sum) {
																																											return function (danger_sum) {
																																												return function (coastline_100m_count_sum) {
																																													return function (flickr2_lowview_count_total_sum) {
																																														return function (flickr2_medview_count_total_sum) {
																																															return function (flickr2_highview_count_total_sum) {
																																																return function (public_transport_sum) {
																																																	return function (slope100m__mean_sum) {
																																																		return function (ghs_gpw_pop_2015__sum_sum) {
																																																			return function (ghs_built_lds__mean_sum) {
																																																				return function (toilets_sum) {
																																																					return function (food_sum) {
																																																						return function (access_50k_mean_sum) {
																																																							return function (navwater2009__mean_sum) {
																																																								return function (globcover_urban_sum) {
																																																									return function (globcover_irrigated_cropland_sum) {
																																																										return function (globcover_rainfed_cropland_sum) {
																																																											return function (globcover_mosiac_cropland_sum) {
																																																												return function (dryadv3croplands1992_mean_sum) {
																																																													return function (globcover_semideciduous_sum) {
																																																														return function (globcover_closed_broadleaved_sum) {
																																																															return function (globcover_open_broadleaved_sum) {
																																																																return function (globcover_closed_needleleaved_sum) {
																																																																	return function (globcover_open_needleleaved_sum) {
																																																																		return function (globcover_mixed_broadleaved_sum) {
																																																																			return function (globcover_mosiac_forest_sum) {
																																																																				return function (globcover_mosiac_grassland_sum) {
																																																																					return function (globcover_shrubland_sum) {
																																																																						return function (globcover_herbaceous_vegetation_sum) {
																																																																							return function (globcover_mosiac_vegetation_sum) {
																																																																								return function (globcover_sparse_vegetation_sum) {
																																																																									return function (globcover_bare_sum) {
																																																																										return function (gm_ve_v2__mean_sum) {
																																																																											return function (globcover_regularly_flooded_forest_sum) {
																																																																												return function (globcover_permanently_flooded_forest_sum) {
																																																																													return function (globcover_marsh_sum) {
																																																																														return function (globcover_water_sum) {
																																																																															return function (glwd3_lake_sum) {
																																																																																return function (glwd3_reservoir_sum) {
																																																																																	return function (glwd3_river_sum) {
																																																																																		return function (lakes_glwd3_count_sum) {
																																																																																			return function (lakes_glwd3_mean_sum) {
																																																																																				return function (glwd_2_count_sum) {
																																																																																					return function (glwd_2_area_sum) {
																																																																																						return function (glwd_2_perim_sum) {
																																																																																							return function (globcover_ice_sum) {
																																																																																								return function (globcover_nodata_sum) {
																																																																																									return function (glwd3_marsh_sum) {
																																																																																										return function (glwd3_swamp_sum) {
																																																																																											return function (glwd3_mangrove_sum) {
																																																																																												return function (glwd3_wetland_sum) {
																																																																																													return function (glwd3_bog_sum) {
																																																																																														return function (glwd3_sometimes_wetland_sum) {
																																																																																															return function (glwd3_50_100_wetland_sum) {
																																																																																																return function (glwd3_25_50_wetland_sum) {
																																																																																																	return function (glwd3_0_25_wetland_sum) {
																																																																																																		return function (hotels_com_price_avg) {
																																																																																																			return function (hotels_com_price_min) {
																																																																																																				return function (hotels_com_count) {
																																																																																																					return function (hcid) {
																																																																																																						return function (hc_count) {
																																																																																																							return function (hc_price_min) {
																																																																																																								return {access_50k_mean_sum: access_50k_mean_sum, accessibilityToCity: accessibilityToCity, boring: boring, builtEnv: builtEnv, c: c, coVar: coVar, coastline: coastline, coastline_100m_count_sum: coastline_100m_count_sum, danger: danger, danger_sum: danger_sum, dist: dist, dist_sum: dist_sum, dryadv3croplands1992_mean_sum: dryadv3croplands1992_mean_sum, flickr2_highview_count_total_sum: flickr2_highview_count_total_sum, flickr2_lowview_count_total_sum: flickr2_lowview_count_total_sum, flickr2_medview_count_total_sum: flickr2_medview_count_total_sum, food: food, food_sum: food_sum, ghs_built_lds__mean_sum: ghs_built_lds__mean_sum, ghs_gpw_pop_2015__sum_sum: ghs_gpw_pop_2015__sum_sum, globCrop: globCrop, globForest: globForest, globUrban: globUrban, globVe: globVe, globWet: globWet, globcover_bare_sum: globcover_bare_sum, globcover_closed_broadleaved_sum: globcover_closed_broadleaved_sum, globcover_closed_needleleaved_sum: globcover_closed_needleleaved_sum, globcover_herbaceous_vegetation_sum: globcover_herbaceous_vegetation_sum, globcover_ice_sum: globcover_ice_sum, globcover_irrigated_cropland_sum: globcover_irrigated_cropland_sum, globcover_marsh_sum: globcover_marsh_sum, globcover_mixed_broadleaved_sum: globcover_mixed_broadleaved_sum, globcover_mosiac_cropland_sum: globcover_mosiac_cropland_sum, globcover_mosiac_forest_sum: globcover_mosiac_forest_sum, globcover_mosiac_grassland_sum: globcover_mosiac_grassland_sum, globcover_mosiac_vegetation_sum: globcover_mosiac_vegetation_sum, globcover_nodata_sum: globcover_nodata_sum, globcover_open_broadleaved_sum: globcover_open_broadleaved_sum, globcover_open_needleleaved_sum: globcover_open_needleleaved_sum, globcover_permanently_flooded_forest_sum: globcover_permanently_flooded_forest_sum, globcover_rainfed_cropland_sum: globcover_rainfed_cropland_sum, globcover_regularly_flooded_forest_sum: globcover_regularly_flooded_forest_sum, globcover_semideciduous_sum: globcover_semideciduous_sum, globcover_shrubland_sum: globcover_shrubland_sum, globcover_sparse_vegetation_sum: globcover_sparse_vegetation_sum, globcover_urban_sum: globcover_urban_sum, globcover_water_sum: globcover_water_sum, glwd3_0_25_wetland_sum: glwd3_0_25_wetland_sum, glwd3_25_50_wetland_sum: glwd3_25_50_wetland_sum, glwd3_50_100_wetland_sum: glwd3_50_100_wetland_sum, glwd3_bog_sum: glwd3_bog_sum, glwd3_lake_sum: glwd3_lake_sum, glwd3_mangrove_sum: glwd3_mangrove_sum, glwd3_marsh_sum: glwd3_marsh_sum, glwd3_reservoir_sum: glwd3_reservoir_sum, glwd3_river_sum: glwd3_river_sum, glwd3_sometimes_wetland_sum: glwd3_sometimes_wetland_sum, glwd3_swamp_sum: glwd3_swamp_sum, glwd3_wetland_sum: glwd3_wetland_sum, glwd_2_area_sum: glwd_2_area_sum, glwd_2_count_sum: glwd_2_count_sum, glwd_2_perim_sum: glwd_2_perim_sum, gm_ve_v2__mean_sum: gm_ve_v2__mean_sum, groadsAvgLength: groadsAvgLength, groadsCount: groadsCount, hc_count: hc_count, hc_price_min: hc_price_min, hcid: hcid, hotels_com_count: hotels_com_count, hotels_com_price_avg: hotels_com_price_avg, hotels_com_price_min: hotels_com_price_min, id: id, interesting: interesting, lakes_glwd3_count_sum: lakes_glwd3_count_sum, lakes_glwd3_mean_sum: lakes_glwd3_mean_sum, lat: lat, lon: lon, n: n, navw: navw, navwater2009__mean_sum: navwater2009__mean_sum, noise: noise, osm_boring_boring_sum: osm_boring_boring_sum, osm_interesting_interesting_sum_sum: osm_interesting_interesting_sum_sum, osm_safe_safety_sum: osm_safe_safety_sum, osmn: osmn, osmpop: osmpop, popMax: popMax, popd: popd, popghs: popghs, publicTransport: publicTransport, public_transport_sum: public_transport_sum, rain: rain, s: s, safety: safety, slope: slope, slope100m__mean_sum: slope100m__mean_sum, srad: srad, tmp: tmp, toilets: toilets, toilets_sum: toilets_sum, tourismcount: tourismcount, u: u, wind: wind};
																																																																																																							};
																																																																																																						};
																																																																																																					};
																																																																																																				};
																																																																																																			};
																																																																																																		};
																																																																																																	};
																																																																																																};
																																																																																															};
																																																																																														};
																																																																																													};
																																																																																												};
																																																																																											};
																																																																																										};
																																																																																									};
																																																																																								};
																																																																																							};
																																																																																						};
																																																																																					};
																																																																																				};
																																																																																			};
																																																																																		};
																																																																																	};
																																																																																};
																																																																															};
																																																																														};
																																																																													};
																																																																												};
																																																																											};
																																																																										};
																																																																									};
																																																																								};
																																																																							};
																																																																						};
																																																																					};
																																																																				};
																																																																			};
																																																																		};
																																																																	};
																																																																};
																																																															};
																																																														};
																																																													};
																																																												};
																																																											};
																																																										};
																																																									};
																																																								};
																																																							};
																																																						};
																																																					};
																																																				};
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Main$cities = _List_fromArray(
	[
		$author$project$Main$City(9)('New York')('New York')('United States of America')('US')('40.7519')('-73.9820')(20834)(59)(19040000)(
		_List_fromArray(
			[
				_List_fromArray(
				[80, 90, 98]),
				_List_fromArray(
				[73, 77, 80]),
				_List_fromArray(
				[99, 104, 109]),
				_List_fromArray(
				[90, 100, 111]),
				_List_fromArray(
				[92, 106, 116]),
				_List_fromArray(
				[67, 86, 98]),
				_List_fromArray(
				[87, 105, 119]),
				_List_fromArray(
				[104, 110, 118]),
				_List_fromArray(
				[79, 96, 111]),
				_List_fromArray(
				[81, 88, 98]),
				_List_fromArray(
				[93, 101, 113]),
				_List_fromArray(
				[92, 94, 99])
			]))(
		_List_fromArray(
			[9602, 10817, 14008]))(
		_List_fromArray(
			[
				_List_fromArray(
				[-810, -50, 570]),
				_List_fromArray(
				[-707, 49, 671]),
				_List_fromArray(
				[-247, 481, 1130]),
				_List_fromArray(
				[307, 1020, 1686]),
				_List_fromArray(
				[891, 1589, 2270]),
				_List_fromArray(
				[1380, 2091, 2768]),
				_List_fromArray(
				[1827, 2402, 2851]),
				_List_fromArray(
				[1773, 2329, 2778]),
				_List_fromArray(
				[1354, 1910, 2359]),
				_List_fromArray(
				[732, 1313, 1762]),
				_List_fromArray(
				[206, 797, 1245]),
				_List_fromArray(
				[-343, 250, 699])
			]))(
		_List_fromArray(
			[
				_List_fromArray(
				[5722, 6313, 6626]),
				_List_fromArray(
				[8620, 9476, 9879]),
				_List_fromArray(
				[12099, 12937, 13269]),
				_List_fromArray(
				[15952, 16559, 16786]),
				_List_fromArray(
				[18446, 19172, 19533]),
				_List_fromArray(
				[19978, 20787, 21430]),
				_List_fromArray(
				[19696, 20449, 21115]),
				_List_fromArray(
				[17601, 18171, 18699]),
				_List_fromArray(
				[14355, 14533, 14813]),
				_List_fromArray(
				[10422, 10648, 10945]),
				_List_fromArray(
				[6286, 6885, 7191]),
				_List_fromArray(
				[4927, 5571, 5888])
			]))(
		_List_fromArray(
			[
				_List_fromArray(
				[40000, 47612, 53000]),
				_List_fromArray(
				[41000, 48466, 53000]),
				_List_fromArray(
				[42000, 49270, 53000]),
				_List_fromArray(
				[41000, 47105, 50000]),
				_List_fromArray(
				[35000, 41014, 44000]),
				_List_fromArray(
				[33000, 38792, 41000]),
				_List_fromArray(
				[31000, 36092, 39000]),
				_List_fromArray(
				[29000, 34781, 38000]),
				_List_fromArray(
				[31000, 37433, 41000]),
				_List_fromArray(
				[33000, 39674, 44000]),
				_List_fromArray(
				[37000, 44386, 49000]),
				_List_fromArray(
				[38000, 46370, 52000])
			]))(
		_List_fromArray(
			[29, 1988, 20789]))(
		_List_fromArray(
			[4, 8099, 26464]))(
		_List_fromArray(
			[1, 2381, 88454]))(
		_List_fromArray(
			[-74839, 3814, 31436]))(
		_List_fromArray(
			[1, 28, 67]))(
		_List_fromArray(
			[5, 2400, 42928]))(
		_List_fromArray(
			[1, 46, 184]))(
		_List_fromArray(
			[0, 1198, 5712, 0, 36]))(
		_List_fromArray(
			[341, 49554, 242305]))(
		_List_fromArray(
			[484, 518520, 5076177]))(
		_List_fromArray(
			[16038, 776810, 1000000]))(
		_List_fromArray(
			[1, 7, 27]))(
		_List_fromArray(
			[0, 2, 20]))(
		_List_fromArray(
			[1, 7, 46]))(
		_List_fromArray(
			[1, 51, 676]))(
		_List_fromArray(
			[1, 22, 89]))(
		_List_fromArray(
			[
				_List_fromArray(
				[0, 2065, 5111]),
				_List_fromArray(
				[0, 2549, 6310]),
				_List_fromArray(
				[0, 3071, 7600]),
				_List_fromArray(
				[1948, 341020, 570628]),
				_List_fromArray(
				[38293, 3029059, 6671686]),
				_List_fromArray(
				[303070, 12464148, 31413921]),
				_List_fromArray(
				[682764, 21694831, 57495518]),
				_List_fromArray(
				[1372591, 33088380, 93904971])
			]))(
		_List_fromArray(
			[109, 115306, 400000, 151520121]))(
		_List_fromArray(
			[1, 57, 100]))(
		_List_fromArray(
			[34, 49, 130]))(
		_List_fromArray(
			[4, 37, 179]))(
		_List_fromArray(
			[7, 57, 292]))(
		_List_fromArray(
			[15, 333, 575]))(
		_List_fromArray(
			[26, 988, 2967]))(2001671)(360700)(227255)(1475981)(73650)(125)(40950)(26213)(1967)(6014)(1818816)(4573334)(37810690)(1233)(13073)(3137)(598126)(3705)(558)(237)(283)(4957)(8842)(0)(0)(0)(0)(0)(0)(0)(965)(15)(168)(0)(3)(8758)(87)(0)(18)(460)(10)(0)(0)(10)(5)(4)(109)(300)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(80)(30)(200)('place:Taipei')(200)(30)
	]);
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$Initialise = function (a) {
	return {$: 'Initialise', a: a};
};
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 'NotAsked'};
var $author$project$Selectize$Selectize$LDivider = function (a) {
	return {$: 'LDivider', a: a};
};
var $author$project$Selectize$Selectize$LEntry = F2(
	function (a, b) {
		return {$: 'LEntry', a: a, b: b};
	});
var $author$project$Selectize$Selectize$closed = F3(
	function (id, toLabel, entries) {
		var addLabel = function (e) {
			if (e.$ === 'Entry') {
				var a = e.a;
				return A2(
					$author$project$Selectize$Selectize$LEntry,
					a,
					toLabel(a));
			} else {
				var text = e.a;
				return $author$project$Selectize$Selectize$LDivider(text);
			}
		};
		var labeledEntries = A2($elm$core$List$map, addLabel, entries);
		return {entries: labeledEntries, entryHeights: _List_Nil, id: id, menuHeight: 0, mouseFocus: $elm$core$Maybe$Nothing, open: false, preventBlur: false, query: '', scrollTop: 0, zipList: $elm$core$Maybe$Nothing};
	});
var $author$project$Selectize$closed = F3(
	function (id, toLabel, entries) {
		return A3($author$project$Selectize$Selectize$closed, id, toLabel, entries);
	});
var $billstclair$elm_sortable_table$Table$State = F2(
	function (a, b) {
		return {$: 'State', a: a, b: b};
	});
var $billstclair$elm_sortable_table$Table$initialSort = function (header) {
	return A2($billstclair$elm_sortable_table$Table$State, header, false);
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Selectize$Selectize$Divider = function (a) {
	return {$: 'Divider', a: a};
};
var $author$project$Selectize$Selectize$divider = function (title) {
	return $author$project$Selectize$Selectize$Divider(title);
};
var $author$project$Selectize$divider = function (title) {
	return $author$project$Selectize$Selectize$divider(title);
};
var $author$project$Selectize$Selectize$Entry = function (a) {
	return {$: 'Entry', a: a};
};
var $author$project$Selectize$Selectize$entry = function (a) {
	return $author$project$Selectize$Selectize$Entry(a);
};
var $author$project$Selectize$entry = function (a) {
	return $author$project$Selectize$Selectize$entry(a);
};
var $author$project$SearchData$Search = F3(
	function (id, displayname, name) {
		return {displayname: displayname, id: id, name: name};
	});
var $author$project$SearchData$searchData = _List_fromArray(
	[
		A3($author$project$SearchData$Search, 'BD', 'Bangladesh', 'BangladeshBD'),
		A3($author$project$SearchData$Search, 'JP', 'Japan', 'JapanJP'),
		A3($author$project$SearchData$Search, 'KR', 'South Korea', 'South KoreaKR'),
		A3($author$project$SearchData$Search, 'TW', 'Taiwan', 'TaiwanTW'),
		A3($author$project$SearchData$Search, 'IN', 'India', 'IndiaIN'),
		A3($author$project$SearchData$Search, 'PK', 'Pakistan', 'PakistanPK'),
		A3($author$project$SearchData$Search, 'IL', 'Israel', 'IsraelIL')
	]);
var $author$project$Main$searchCategories = $elm$core$List$concat(
	_List_fromArray(
		[
			_List_fromArray(
			[
				$author$project$Selectize$divider('Countries')
			]),
			A2($elm$core$List$map, $author$project$Selectize$entry, $author$project$SearchData$searchData)
		]));
var $author$project$Main$init = function (city) {
	var model = {
		city: $krisajenkins$remotedata$RemoteData$NotAsked,
		maxboring: 3000,
		maxinteresting: 5000,
		searchData: $krisajenkins$remotedata$RemoteData$NotAsked,
		singleDateRangePicker: $elm$core$Maybe$Nothing,
		tableQuery: '',
		tableState: $billstclair$elm_sortable_table$Table$initialSort(''),
		textfieldMenu: A3(
			$author$project$Selectize$closed,
			'textfield-menu',
			function ($) {
				return $.displayname;
			},
			$author$project$Main$searchCategories),
		textfieldSelection: $elm$core$Maybe$Nothing
	};
	return _Utils_Tuple2(
		model,
		A2($elm$core$Task$perform, $author$project$Main$Initialise, $elm$time$Time$now));
};
var $author$project$Main$SingleDateRangePickerWithInputMsg = function (a) {
	return {$: 'SingleDateRangePickerWithInputMsg', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$DateSelect$GlobalClickHandler = {$: 'GlobalClickHandler'};
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $author$project$DateSelect$subscriptions = function (_v0) {
	var isFocused = _v0.isFocused;
	return isFocused ? $elm$browser$Browser$Events$onClick(
		$elm$json$Json$Decode$succeed($author$project$DateSelect$GlobalClickHandler)) : $elm$core$Platform$Sub$none;
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				function () {
				var _v0 = model.singleDateRangePicker;
				if (_v0.$ === 'Just') {
					var picker = _v0.a;
					return A2(
						$elm$core$Platform$Sub$map,
						$author$project$Main$SingleDateRangePickerWithInputMsg,
						$author$project$DateSelect$subscriptions(picker));
				} else {
					return $elm$core$Platform$Sub$none;
				}
			}()
			]));
};
var $author$project$Main$CityResponse = function (a) {
	return {$: 'CityResponse', a: a};
};
var $krisajenkins$remotedata$RemoteData$Loading = {$: 'Loading'};
var $author$project$Main$SearchResponse = function (a) {
	return {$: 'SearchResponse', a: a};
};
var $author$project$Main$SelectTextfieldCity = function (a) {
	return {$: 'SelectTextfieldCity', a: a};
};
var $author$project$Main$TextfieldMenuMsg = function (a) {
	return {$: 'TextfieldMenuMsg', a: a};
};
var $author$project$Main$andDo = F2(
	function (cmd, _v0) {
		var model = _v0.a;
		var cmds = _v0.b;
		return _Utils_Tuple2(
			model,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmds])));
	});
var $author$project$Main$apiUrl = 'https://unli.xyz/neighbourhoods/api';
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						$elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _v0 = A2($elm$json$Json$Decode$decodeValue, pathDecoder, input);
			if (_v0.$ === 'Ok') {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_v1.$ === 'Ok') {
					var finalResult = _v1.a;
					return $elm$json$Json$Decode$succeed(finalResult);
				} else {
					var finalErr = _v1.a;
					return $elm$json$Json$Decode$fail(
						$elm$json$Json$Decode$errorToString(finalErr));
				}
			} else {
				return $elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2($elm$json$Json$Decode$andThen, handleResult, $elm$json$Json$Decode$value);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				A2($elm$json$Json$Decode$field, key, $elm$json$Json$Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Main$cityPatternDecoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'hc_price_min',
	$elm$json$Json$Decode$int,
	0,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'hc_count',
		$elm$json$Json$Decode$int,
		0,
		A4(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'hcid',
			$elm$json$Json$Decode$string,
			'',
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'hotels_com_count',
				$elm$json$Json$Decode$int,
				0,
				A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'hotels_com_price_min',
					$elm$json$Json$Decode$int,
					0,
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'hotels_com_price_avg',
						$elm$json$Json$Decode$int,
						0,
						A4(
							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'glwd3_0_25_wetland_sum',
							$elm$json$Json$Decode$int,
							0,
							A4(
								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
								'glwd3_25_50_wetland_sum',
								$elm$json$Json$Decode$int,
								0,
								A4(
									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
									'glwd3_50_100_wetland_sum',
									$elm$json$Json$Decode$int,
									0,
									A4(
										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
										'glwd3_sometimes_wetland_sum',
										$elm$json$Json$Decode$int,
										0,
										A4(
											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
											'glwd3_bog_sum',
											$elm$json$Json$Decode$int,
											0,
											A4(
												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
												'glwd3_wetland_sum',
												$elm$json$Json$Decode$int,
												0,
												A4(
													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
													'glwd3_mangrove_sum',
													$elm$json$Json$Decode$int,
													0,
													A4(
														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
														'glwd3_swamp_sum',
														$elm$json$Json$Decode$int,
														0,
														A4(
															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
															'glwd3_marsh_sum',
															$elm$json$Json$Decode$int,
															0,
															A4(
																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																'globcover_nodata_sum',
																$elm$json$Json$Decode$int,
																0,
																A4(
																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																	'globcover_ice_sum',
																	$elm$json$Json$Decode$int,
																	0,
																	A4(
																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																		'glwd_2_perim_sum',
																		$elm$json$Json$Decode$int,
																		0,
																		A4(
																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																			'glwd_2_area_sum',
																			$elm$json$Json$Decode$int,
																			0,
																			A4(
																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																				'glwd_2_count_sum',
																				$elm$json$Json$Decode$int,
																				0,
																				A4(
																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																					'lakes_glwd3_mean_sum',
																					$elm$json$Json$Decode$int,
																					0,
																					A4(
																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																						'lakes_glwd3_count_sum',
																						$elm$json$Json$Decode$int,
																						0,
																						A4(
																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																							'glwd3_river_sum',
																							$elm$json$Json$Decode$int,
																							0,
																							A4(
																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																								'glwd3_reservoir_sum',
																								$elm$json$Json$Decode$int,
																								0,
																								A4(
																									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																									'glwd3_lake_sum',
																									$elm$json$Json$Decode$int,
																									0,
																									A4(
																										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																										'globcover_water_sum',
																										$elm$json$Json$Decode$int,
																										0,
																										A4(
																											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																											'globcover_marsh_sum',
																											$elm$json$Json$Decode$int,
																											0,
																											A4(
																												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																												'globcover_permanently_flooded_forest_sum',
																												$elm$json$Json$Decode$int,
																												0,
																												A4(
																													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																													'globcover_regularly_flooded_forest_sum',
																													$elm$json$Json$Decode$int,
																													0,
																													A4(
																														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																														'gm_ve_v2__mean_sum',
																														$elm$json$Json$Decode$int,
																														0,
																														A4(
																															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																															'globcover_bare_sum',
																															$elm$json$Json$Decode$int,
																															0,
																															A4(
																																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																'globcover_sparse_vegetation_sum',
																																$elm$json$Json$Decode$int,
																																0,
																																A4(
																																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																	'globcover_mosiac_vegetation_sum',
																																	$elm$json$Json$Decode$int,
																																	0,
																																	A4(
																																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																		'globcover_herbaceous_vegetation_sum',
																																		$elm$json$Json$Decode$int,
																																		0,
																																		A4(
																																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																			'globcover_shrubland_sum',
																																			$elm$json$Json$Decode$int,
																																			0,
																																			A4(
																																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																				'globcover_mosiac_grassland_sum',
																																				$elm$json$Json$Decode$int,
																																				0,
																																				A4(
																																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																					'globcover_mosiac_forest_sum',
																																					$elm$json$Json$Decode$int,
																																					0,
																																					A4(
																																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																						'globcover_mixed_broadleaved_sum',
																																						$elm$json$Json$Decode$int,
																																						0,
																																						A4(
																																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																							'globcover_open_needleleaved_sum',
																																							$elm$json$Json$Decode$int,
																																							0,
																																							A4(
																																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																								'globcover_closed_needleleaved_sum',
																																								$elm$json$Json$Decode$int,
																																								0,
																																								A4(
																																									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																									'globcover_open_broadleaved_sum',
																																									$elm$json$Json$Decode$int,
																																									0,
																																									A4(
																																										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																										'globcover_closed_broadleaved_sum',
																																										$elm$json$Json$Decode$int,
																																										0,
																																										A4(
																																											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																											'globcover_semideciduous_sum',
																																											$elm$json$Json$Decode$int,
																																											0,
																																											A4(
																																												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																												'dryadv3croplands1992_mean_sum',
																																												$elm$json$Json$Decode$int,
																																												0,
																																												A4(
																																													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																													'globcover_mosiac_cropland_sum',
																																													$elm$json$Json$Decode$int,
																																													0,
																																													A4(
																																														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																														'globcover_rainfed_cropland_sum',
																																														$elm$json$Json$Decode$int,
																																														0,
																																														A4(
																																															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																															'globcover_irrigated_cropland_sum',
																																															$elm$json$Json$Decode$int,
																																															0,
																																															A4(
																																																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																'globcover_urban_sum',
																																																$elm$json$Json$Decode$int,
																																																0,
																																																A4(
																																																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																	'navwater2009__mean_sum',
																																																	$elm$json$Json$Decode$int,
																																																	0,
																																																	A4(
																																																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																		'access_50k_mean_sum',
																																																		$elm$json$Json$Decode$int,
																																																		0,
																																																		A4(
																																																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																			'food_sum',
																																																			$elm$json$Json$Decode$int,
																																																			0,
																																																			A4(
																																																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																				'toilets_sum',
																																																				$elm$json$Json$Decode$int,
																																																				0,
																																																				A4(
																																																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																					'ghs_built_lds__mean_sum',
																																																					$elm$json$Json$Decode$int,
																																																					0,
																																																					A4(
																																																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																						'ghs_gpw_pop_2015__sum_sum',
																																																						$elm$json$Json$Decode$int,
																																																						0,
																																																						A4(
																																																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																							'slope100m__mean_sum',
																																																							$elm$json$Json$Decode$int,
																																																							0,
																																																							A4(
																																																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																								'public_transport_sum',
																																																								$elm$json$Json$Decode$int,
																																																								0,
																																																								A4(
																																																									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																									'flickr2_highview_count_total_sum',
																																																									$elm$json$Json$Decode$int,
																																																									0,
																																																									A4(
																																																										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																										'flickr2_medview_count_total_sum',
																																																										$elm$json$Json$Decode$int,
																																																										0,
																																																										A4(
																																																											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																											'flickr2_lowview_count_total_sum',
																																																											$elm$json$Json$Decode$int,
																																																											0,
																																																											A4(
																																																												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																												'coastline_100m_count_sum',
																																																												$elm$json$Json$Decode$int,
																																																												0,
																																																												A4(
																																																													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																													'danger_sum',
																																																													$elm$json$Json$Decode$int,
																																																													0,
																																																													A4(
																																																														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																														'osm_safe_safety_sum',
																																																														$elm$json$Json$Decode$int,
																																																														0,
																																																														A4(
																																																															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																															'osm_boring_boring_sum',
																																																															$elm$json$Json$Decode$int,
																																																															0,
																																																															A4(
																																																																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																'osm_interesting_interesting_sum_sum',
																																																																$elm$json$Json$Decode$int,
																																																																0,
																																																																A4(
																																																																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																	'dist_sum',
																																																																	$elm$json$Json$Decode$int,
																																																																	0,
																																																																	A4(
																																																																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																		'osmn',
																																																																		$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																		_List_fromArray(
																																																																			[0]),
																																																																		A4(
																																																																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																			'glob_wet',
																																																																			$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																			_List_fromArray(
																																																																				[0]),
																																																																			A4(
																																																																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																				'glob_ve',
																																																																				$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																				_List_fromArray(
																																																																					[0]),
																																																																				A4(
																																																																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																					'glob_forest',
																																																																					$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																					_List_fromArray(
																																																																						[0]),
																																																																					A4(
																																																																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																						'glob_crop',
																																																																						$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																						_List_fromArray(
																																																																							[0]),
																																																																						A4(
																																																																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																							'glob_urban',
																																																																							$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																							_List_fromArray(
																																																																								[0]),
																																																																							A4(
																																																																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																								'navw',
																																																																								$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																								_List_fromArray(
																																																																									[0]),
																																																																								A4(
																																																																									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																									'popd',
																																																																									$elm$json$Json$Decode$list(
																																																																										$elm$json$Json$Decode$list($elm$json$Json$Decode$int)),
																																																																									_List_fromArray(
																																																																										[
																																																																											_List_fromArray(
																																																																											[0]),
																																																																											_List_fromArray(
																																																																											[0])
																																																																										]),
																																																																									A4(
																																																																										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																										'accessibility_to_city',
																																																																										$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																										_List_fromArray(
																																																																											[0]),
																																																																										A4(
																																																																											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																											'food',
																																																																											$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																											_List_fromArray(
																																																																												[0]),
																																																																											A4(
																																																																												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																												'toilets',
																																																																												$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																												_List_fromArray(
																																																																													[0]),
																																																																												A4(
																																																																													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																													'groads_avg_length',
																																																																													$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																													_List_fromArray(
																																																																														[0]),
																																																																													A4(
																																																																														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																														'groads_count',
																																																																														$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																														_List_fromArray(
																																																																															[0]),
																																																																														A4(
																																																																															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																															'built_env',
																																																																															$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																															_List_fromArray(
																																																																																[0]),
																																																																															A4(
																																																																																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																'osmpop',
																																																																																$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																_List_fromArray(
																																																																																	[0]),
																																																																																A4(
																																																																																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																	'popghs',
																																																																																	$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																	_List_fromArray(
																																																																																		[0]),
																																																																																	A4(
																																																																																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																		'slope',
																																																																																		$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																		_List_fromArray(
																																																																																			[0]),
																																																																																		A4(
																																																																																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																			'public_transport',
																																																																																			$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																			_List_fromArray(
																																																																																				[0]),
																																																																																			A4(
																																																																																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																				'tourismcount',
																																																																																				$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																				_List_fromArray(
																																																																																					[0]),
																																																																																				A4(
																																																																																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																					'coastline',
																																																																																					$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																					_List_fromArray(
																																																																																						[0]),
																																																																																					A4(
																																																																																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																						'danger',
																																																																																						$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																						_List_fromArray(
																																																																																							[0]),
																																																																																						A4(
																																																																																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																							'safety',
																																																																																							$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																							_List_fromArray(
																																																																																								[0]),
																																																																																							A4(
																																																																																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																								'boring',
																																																																																								$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																								_List_fromArray(
																																																																																									[0]),
																																																																																								A4(
																																																																																									$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																									'interesting',
																																																																																									$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																									_List_fromArray(
																																																																																										[0]),
																																																																																									A4(
																																																																																										$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																										'wind',
																																																																																										$elm$json$Json$Decode$list(
																																																																																											$elm$json$Json$Decode$list($elm$json$Json$Decode$int)),
																																																																																										_List_fromArray(
																																																																																											[
																																																																																												_List_fromArray(
																																																																																												[0]),
																																																																																												_List_fromArray(
																																																																																												[0])
																																																																																											]),
																																																																																										A4(
																																																																																											$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																											'srad',
																																																																																											$elm$json$Json$Decode$list(
																																																																																												$elm$json$Json$Decode$list($elm$json$Json$Decode$int)),
																																																																																											_List_fromArray(
																																																																																												[
																																																																																													_List_fromArray(
																																																																																													[0]),
																																																																																													_List_fromArray(
																																																																																													[0])
																																																																																												]),
																																																																																											A4(
																																																																																												$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																												'tmp',
																																																																																												$elm$json$Json$Decode$list(
																																																																																													$elm$json$Json$Decode$list($elm$json$Json$Decode$int)),
																																																																																												_List_fromArray(
																																																																																													[
																																																																																														_List_fromArray(
																																																																																														[0]),
																																																																																														_List_fromArray(
																																																																																														[0])
																																																																																													]),
																																																																																												A4(
																																																																																													$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																													'co_var',
																																																																																													$elm$json$Json$Decode$list($elm$json$Json$Decode$int),
																																																																																													_List_fromArray(
																																																																																														[0]),
																																																																																													A4(
																																																																																														$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																														'rain',
																																																																																														$elm$json$Json$Decode$list(
																																																																																															$elm$json$Json$Decode$list($elm$json$Json$Decode$int)),
																																																																																														_List_fromArray(
																																																																																															[
																																																																																																_List_fromArray(
																																																																																																[0]),
																																																																																																_List_fromArray(
																																																																																																[0])
																																																																																															]),
																																																																																														A4(
																																																																																															$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																															'pop_max',
																																																																																															$elm$json$Json$Decode$int,
																																																																																															0,
																																																																																															A4(
																																																																																																$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																'noise',
																																																																																																$elm$json$Json$Decode$int,
																																																																																																0,
																																																																																																A4(
																																																																																																	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																	'dist',
																																																																																																	$elm$json$Json$Decode$int,
																																																																																																	0,
																																																																																																	A4(
																																																																																																		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																		'lon',
																																																																																																		$elm$json$Json$Decode$string,
																																																																																																		'',
																																																																																																		A4(
																																																																																																			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																			'lat',
																																																																																																			$elm$json$Json$Decode$string,
																																																																																																			'',
																																																																																																			A4(
																																																																																																				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																				'u',
																																																																																																				$elm$json$Json$Decode$string,
																																																																																																				'',
																																																																																																				A4(
																																																																																																					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																					'c',
																																																																																																					$elm$json$Json$Decode$string,
																																																																																																					'',
																																																																																																					A4(
																																																																																																						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																						's',
																																																																																																						$elm$json$Json$Decode$string,
																																																																																																						'',
																																																																																																						A4(
																																																																																																							$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																																																																																																							'n',
																																																																																																							$elm$json$Json$Decode$string,
																																																																																																							'',
																																																																																																							A3(
																																																																																																								$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																								'id',
																																																																																																								$elm$json$Json$Decode$int,
																																																																																																								$elm$json$Json$Decode$succeed($author$project$Main$City)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
var $author$project$Main$cityDecoder = $elm$json$Json$Decode$list($author$project$Main$cityPatternDecoder);
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {$: 'Failure', a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 'Success', a: a};
};
var $krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	if (result.$ === 'Err') {
		var e = result.a;
		return $krisajenkins$remotedata$RemoteData$Failure(e);
	} else {
		var x = result.a;
		return $krisajenkins$remotedata$RemoteData$Success(x);
	}
};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$riskyRequest = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: true, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $ohanhi$remotedata_http$RemoteData$Http$performRequest = function (_v0) {
	var risky = _v0.risky;
	return risky ? $elm$http$Http$riskyRequest : $elm$http$Http$request;
};
var $ohanhi$remotedata_http$RemoteData$Http$request = F6(
	function (method, config, url, tagger, decoder, body) {
		return A2(
			$ohanhi$remotedata_http$RemoteData$Http$performRequest,
			config,
			{
				body: body,
				expect: A2(
					$elm$http$Http$expectJson,
					A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, tagger),
					decoder),
				headers: config.headers,
				method: method,
				timeout: config.timeout,
				tracker: config.tracker,
				url: url
			});
	});
var $ohanhi$remotedata_http$RemoteData$Http$getWithConfig = F4(
	function (config, url, tagger, decoder) {
		return A6($ohanhi$remotedata_http$RemoteData$Http$request, 'GET', config, url, tagger, decoder, $elm$http$Http$emptyBody);
	});
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $ohanhi$remotedata_http$RemoteData$Http$acceptJson = A2($elm$http$Http$header, 'Accept', 'application/json');
var $ohanhi$remotedata_http$RemoteData$Http$defaultConfig = {
	headers: _List_fromArray(
		[$ohanhi$remotedata_http$RemoteData$Http$acceptJson]),
	risky: false,
	timeout: $elm$core$Maybe$Nothing,
	tracker: $elm$core$Maybe$Nothing
};
var $ohanhi$remotedata_http$RemoteData$Http$noCache = A2($elm$http$Http$header, 'Cache-Control', 'no-store, must-revalidate, no-cache, max-age=0');
var $ohanhi$remotedata_http$RemoteData$Http$noCacheConfig = _Utils_update(
	$ohanhi$remotedata_http$RemoteData$Http$defaultConfig,
	{
		headers: A2($elm$core$List$cons, $ohanhi$remotedata_http$RemoteData$Http$noCache, $ohanhi$remotedata_http$RemoteData$Http$defaultConfig.headers)
	});
var $ohanhi$remotedata_http$RemoteData$Http$get = $ohanhi$remotedata_http$RemoteData$Http$getWithConfig($ohanhi$remotedata_http$RemoteData$Http$noCacheConfig);
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit = function (a) {
	return {$: 'DateLimit', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Single = {$: 'Single'};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime = function (a) {
	return {$: 'DateTime', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date = function (a) {
	return {$: 'Date', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year = function (a) {
	return {$: 'Year', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt = function (_v0) {
	var day = _v0.a;
	return day;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day = function (a) {
	return {$: 'Day', a: a};
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear = function (_v0) {
	var _int = _v0.a;
	return (!A2($elm$core$Basics$modBy, 4, _int)) && ((!A2($elm$core$Basics$modBy, 400, _int)) || (!(!A2($elm$core$Basics$modBy, 100, _int))));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf = F2(
	function (year, month) {
		switch (month.$) {
			case 'Jan':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Feb':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(29) : $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(28);
			case 'Mar':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Apr':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'May':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Jun':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'Jul':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Aug':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Sep':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			case 'Oct':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
			case 'Nov':
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(30);
			default:
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(31);
		}
	});
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards = function (month) {
	switch (month.$) {
		case 'Jan':
			return $elm$time$Time$Dec;
		case 'Feb':
			return $elm$time$Time$Jan;
		case 'Mar':
			return $elm$time$Time$Feb;
		case 'Apr':
			return $elm$time$Time$Mar;
		case 'May':
			return $elm$time$Time$Apr;
		case 'Jun':
			return $elm$time$Time$May;
		case 'Jul':
			return $elm$time$Time$Jun;
		case 'Aug':
			return $elm$time$Time$Jul;
		case 'Sep':
			return $elm$time$Time$Aug;
		case 'Oct':
			return $elm$time$Time$Sep;
		case 'Nov':
			return $elm$time$Time$Oct;
		default:
			return $elm$time$Time$Nov;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt = function (_v0) {
	var year = _v0.a;
	return year;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth = function (_v0) {
	var date = _v0.a;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards(date.month);
	var updatedYear = function () {
		if (updatedMonth.$ === 'Dec') {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.year) - 1);
		} else {
			return date.year;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.day, lastDayOfUpdatedMonth);
		if (_v1.$ === 'GT') {
			return lastDayOfUpdatedMonth;
		} else {
			return date.day;
		}
	}();
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{day: updatedDay, month: updatedMonth, year: updatedYear});
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementMonth;
var $author$project$Extra$DateTime$decrementMonths = F2(
	function (count, dateTime) {
		decrementMonths:
		while (true) {
			if (count > 0) {
				var $temp$count = count - 1,
					$temp$dateTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth(dateTime);
				count = $temp$count;
				dateTime = $temp$dateTime;
				continue decrementMonths;
			} else {
				return dateTime;
			}
		}
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix = function (posix) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{
			day: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(
				A2($elm$time$Time$toDay, $elm$time$Time$utc, posix)),
			month: A2($elm$time$Time$toMonth, $elm$time$Time$utc, posix),
			year: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				A2($elm$time$Time$toYear, $elm$time$Time$utc, posix))
		});
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour = function (a) {
	return {$: 'Hour', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond = function (a) {
	return {$: 'Millisecond', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute = function (a) {
	return {$: 'Minute', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second = function (a) {
	return {$: 'Second', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromPosix = function (posix) {
	return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
		{
			hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(
				A2($elm$time$Time$toHour, $elm$time$Time$utc, posix)),
			milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(
				A2($elm$time$Time$toMillis, $elm$time$Time$utc, posix)),
			minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(
				A2($elm$time$Time$toMinute, $elm$time$Time$utc, posix)),
			seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(
				A2($elm$time$Time$toSecond, $elm$time$Time$utc, posix))
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix = function (timePosix) {
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(timePosix),
			time: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromPosix(timePosix)
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay = ((1000 * 60) * 60) * 24;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInYear = function (year) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 366) : ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 365);
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt = function (year) {
	return (year > 0) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(year)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceEpoch = function (_v0) {
	var year = _v0.a;
	var getTotalMillis = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$elm$core$List$sum,
			$elm$core$List$map($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInYear)),
		$elm$core$List$filterMap($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt));
	var epochYear = 1970;
	return (year >= 1970) ? getTotalMillis(
		A2($elm$core$List$range, epochYear, year - 1)) : (-getTotalMillis(
		A2($elm$core$List$range, year, epochYear - 1)));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheMonth = function (day) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(day) - 1);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$months = $elm$core$Array$fromList(
	_List_fromArray(
		[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]));
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getPrecedingMonths = function (month) {
	return $elm$core$Array$toList(
		A3(
			$elm$core$Array$slice,
			0,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(month) - 1,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$months));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheYear = F2(
	function (year, month) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (m, res) {
					return res + ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
						A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, m)));
				}),
			0,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getPrecedingMonths(month));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toMillis = function (_v0) {
	var year = _v0.a.year;
	var month = _v0.a.month;
	var day = _v0.a.day;
	return ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceEpoch(year) + A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheYear, year, month)) + $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceStartOfTheMonth(day);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix = A2($elm$core$Basics$composeL, $elm$time$Time$millisToPosix, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toMillis);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay = function (date) {
	var millis = $elm$time$Time$posixToMillis(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date)) + $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay;
	var newDate = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(
		$elm$time$Time$millisToPosix(millis));
	return newDate;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementDay = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementDay(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementDay;
var $author$project$Extra$DateTime$incrementDays = F2(
	function (days, dateTime) {
		incrementDays:
		while (true) {
			if (days > 0) {
				var $temp$days = days - 1,
					$temp$dateTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementDay(dateTime);
				days = $temp$days;
				dateTime = $temp$dateTime;
				continue incrementDays;
			} else {
				return dateTime;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthForward = function (month) {
	switch (month.$) {
		case 'Jan':
			return $elm$time$Time$Feb;
		case 'Feb':
			return $elm$time$Time$Mar;
		case 'Mar':
			return $elm$time$Time$Apr;
		case 'Apr':
			return $elm$time$Time$May;
		case 'May':
			return $elm$time$Time$Jun;
		case 'Jun':
			return $elm$time$Time$Jul;
		case 'Jul':
			return $elm$time$Time$Aug;
		case 'Aug':
			return $elm$time$Time$Sep;
		case 'Sep':
			return $elm$time$Time$Oct;
		case 'Oct':
			return $elm$time$Time$Nov;
		case 'Nov':
			return $elm$time$Time$Dec;
		default:
			return $elm$time$Time$Jan;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth = function (_v0) {
	var date = _v0.a;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthForward(date.month);
	var updatedYear = function () {
		if (updatedMonth.$ === 'Jan') {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.year) + 1);
		} else {
			return date.year;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.day, lastDayOfUpdatedMonth);
		if (_v1.$ === 'GT') {
			return lastDayOfUpdatedMonth;
		} else {
			return date.day;
		}
	}();
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
		{day: updatedDay, month: updatedMonth, year: updatedYear});
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementMonth;
var $author$project$Extra$DateTime$incrementMonths = F2(
	function (count, dateTime) {
		incrementMonths:
		while (true) {
			if (count > 0) {
				var $temp$count = count - 1,
					$temp$dateTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(dateTime);
				count = $temp$count;
				dateTime = $temp$dateTime;
				continue incrementMonths;
			} else {
				return dateTime;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar = {$: 'DoubleCalendar'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model = function (a) {
	return {$: 'Model', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset = {$: 'NoOffset'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers = {$: 'NoTimePickers'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected = {$: 'NoneSelected'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SingleCalendar = {$: 'SingleCalendar'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers = function (a) {
	return {$: 'TimePickers', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours = {$: 'Hours'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds = {$: 'Milliseconds'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes = {$: 'Minutes'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model = function (a) {
	return {$: 'Model', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds = {$: 'Seconds'};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours = function (_v0) {
	var hours = _v0.a.hours;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt = function (_v0) {
	var hours = _v0.a;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getHours = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds = function (_v0) {
	var milliseconds = _v0.a.milliseconds;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt = function (_v0) {
	var milliseconds = _v0.a;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes = function (_v0) {
	var minutes = _v0.a.minutes;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt = function (_v0) {
	var minutes = _v0.a;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds = function (_v0) {
	var seconds = _v0.a.seconds;
	return seconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt = function (_v0) {
	var seconds = _v0.a;
	return seconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds);
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$millisToString = function (millis) {
	return (millis < 10) ? ('00' + $elm$core$String$fromInt(millis)) : ((millis < 100) ? ('0' + $elm$core$String$fromInt(millis)) : $elm$core$String$fromInt(millis));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString = function (time) {
	return (time < 10) ? ('0' + $elm$core$String$fromInt(time)) : $elm$core$String$fromInt(time);
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString = function (timePart) {
	switch (timePart.$) {
		case 'Hours':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getHours);
		case 'Minutes':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes);
		case 'Seconds':
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds);
		default:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$millisToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds);
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise = function (_v0) {
	var pickerType = _v0.pickerType;
	var time = _v0.time;
	return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
		{
			hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
			milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
			minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
			pickerType: pickerType,
			seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime = F2(
	function (time, _v0) {
		var date = _v0.a.date;
		return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
			{date: date, time: time});
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate = function (_v0) {
	var date = _v0.a.date;
	return date;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth = function (_v0) {
	var month = _v0.a.month;
	return month;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt, $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear = function (_v0) {
	var year = _v0.a.year;
	return year;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getYear = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getYear = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getYear, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getYear = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getYear;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth = F2(
	function (lhs, rhs) {
		var yearsComparison = A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(lhs),
			$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(rhs));
		if (yearsComparison.$ === 'EQ') {
			return A2(
				$elm$core$Basics$compare,
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(lhs),
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(rhs));
		} else {
			return yearsComparison;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
	{
		hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(0),
		milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(0),
		minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(0),
		seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(0)
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$midnight = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate = function (_v0) {
	var today = _v0.today;
	var primaryDate = _v0.primaryDate;
	var dateLimit = _v0.dateLimit;
	var date = function () {
		if (primaryDate.$ === 'Just') {
			var d = primaryDate.a;
			return d;
		} else {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, $PanagiotisGeorgiadis$elm_datetime$Clock$midnight, today);
		}
	}();
	if (dateLimit.$ === 'DateLimit') {
		var minDate = dateLimit.a.minDate;
		var maxDate = dateLimit.a.maxDate;
		var isBetweenConstrains = (_Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date),
			$elm$core$Basics$LT) || _Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date),
			$elm$core$Basics$EQ)) && (_Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date),
			$elm$core$Basics$GT) || _Utils_eq(
			A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date),
			$elm$core$Basics$EQ));
		return isBetweenConstrains ? date : minDate;
	} else {
		return date;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise = F3(
	function (viewType, calendarConfig, timePickerConfig) {
		var today = calendarConfig.today;
		var dateLimit = calendarConfig.dateLimit;
		var dateRangeOffset = calendarConfig.dateRangeOffset;
		var viewType_ = function () {
			if (viewType.$ === 'Single') {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SingleCalendar;
			} else {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar;
			}
		}();
		var dateRangeOffset_ = function () {
			if (dateRangeOffset.$ === 'Just') {
				var minDateRangeLength = dateRangeOffset.a.minDateRangeLength;
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
					{invalidDates: _List_Nil, minDateRangeLength: minDateRangeLength});
			} else {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset;
			}
		}();
		var _v0 = function () {
			var dateTime = $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate(calendarConfig);
			if (timePickerConfig.$ === 'Just') {
				var pickerType = timePickerConfig.a.pickerType;
				var defaultTime = timePickerConfig.a.defaultTime;
				var pickerTitles = timePickerConfig.a.pickerTitles;
				var mirrorTimes = timePickerConfig.a.mirrorTimes;
				var timePicker = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise(
					{pickerType: pickerType, time: defaultTime});
				return _Utils_Tuple2(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, defaultTime, dateTime),
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
						{endPicker: timePicker, mirrorTimes: mirrorTimes, pickerTitles: pickerTitles, startPicker: timePicker}));
			} else {
				return _Utils_Tuple2(dateTime, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers);
			}
		}();
		var primaryDate_ = _v0.a;
		var timePickers = _v0.b;
		return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
			{dateLimit: dateLimit, dateRangeOffset: dateRangeOffset_, primaryDate: primaryDate_, range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected, timePickers: timePickers, today: today, viewType: viewType_});
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf = function (date) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(date),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date)));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf = function (_v0) {
	var date = _v0.a.date;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf(date);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected = function (a) {
	return {$: 'BothSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen = F2(
	function (a, b) {
		return {$: 'Chosen', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareMonths = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareYears = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay = function (_v0) {
	var date = _v0.a;
	return date.day;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compare = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple3(
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareYears,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(rhs)),
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareMonths,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(rhs)),
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays,
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay(lhs),
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay(rhs)));
		var yearsComparison = _v0.a;
		var monthsComparison = _v0.b;
		var daysComparison = _v0.c;
		if (yearsComparison.$ === 'EQ') {
			if (monthsComparison.$ === 'EQ') {
				return daysComparison;
			} else {
				return monthsComparison;
			}
		} else {
			return yearsComparison;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$compare = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compare;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$compareDates = F2(
	function (_v0, _v1) {
		var lhs = _v0.a;
		var rhs = _v1.a;
		return A2($PanagiotisGeorgiadis$elm_datetime$Calendar$compare, lhs.date, rhs.date);
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$compareDates;
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_ = F3(
	function (daysCount, prevDate, res) {
		getDateRange_:
		while (true) {
			var updatedRes = _Utils_ap(
				res,
				_List_fromArray(
					[prevDate]));
			if (daysCount > 0) {
				var _v0 = _Utils_Tuple2(
					daysCount - 1,
					$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementDay(prevDate));
				var updatedDaysCount = _v0.a;
				var updatedPrevDate = _v0.b;
				var $temp$daysCount = updatedDaysCount,
					$temp$prevDate = updatedPrevDate,
					$temp$res = updatedRes;
				daysCount = $temp$daysCount;
				prevDate = $temp$prevDate;
				res = $temp$res;
				continue getDateRange_;
			} else {
				return updatedRes;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange = F2(
	function (startDate, endDate) {
		var _v0 = _Utils_Tuple2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(startDate),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(endDate));
		var startPosix = _v0.a;
		var endPosix = _v0.b;
		var posixDiff = $elm$time$Time$posixToMillis(endPosix) - $elm$time$Time$posixToMillis(startPosix);
		var daysDiff = (((((((posixDiff / 1000) | 0) / 60) | 0) / 60) | 0) / 24) | 0;
		return (daysDiff > 0) ? A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_, daysDiff, startDate, _List_Nil) : A3(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange_,
			$elm$core$Basics$abs(daysDiff),
			endDate,
			_List_Nil);
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDateRange = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDateRange;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDateRange = F3(
	function (_v0, _v1, time) {
		var start = _v0.a;
		var end = _v1.a;
		return A2(
			$elm$core$List$map,
			function (date) {
				return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
					{date: date, time: time});
			},
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$getDateRange, start.date, end.date));
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDateRange;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementDay = function (date) {
	var millis = $elm$time$Time$posixToMillis(
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date)) - $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay;
	var newDate = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(
		$elm$time$Time$millisToPosix(millis));
	return newDate;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementDay = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
		{
			date: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementDay(date),
			time: time
		});
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementDay;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$decrementDays = F2(
	function (days, date) {
		decrementDays:
		while (true) {
			if (days > 0) {
				var $temp$days = days - 1,
					$temp$date = $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementDay(date);
				days = $temp$days;
				date = $temp$date;
				continue decrementDays;
			} else {
				return date;
			}
		}
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$incrementDays = F2(
	function (days, date) {
		incrementDays:
		while (true) {
			if (days > 0) {
				var $temp$days = days - 1,
					$temp$date = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementDay(date);
				days = $temp$days;
				date = $temp$date;
				continue incrementDays;
			} else {
				return date;
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset = function (model) {
	var range = model.range;
	var dateRangeOffset = model.dateRangeOffset;
	if (dateRangeOffset.$ === 'Offset') {
		var minDateRangeLength = dateRangeOffset.a.minDateRangeLength;
		var offsetConfig = function (invalidDates) {
			return {invalidDates: invalidDates, minDateRangeLength: minDateRangeLength};
		};
		if (range.$ === 'StartDateSelected') {
			var start = range.a;
			var isNotEqualToStartDate = function (d) {
				return !_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, d),
					$elm$core$Basics$EQ);
			};
			var invalidPastDates = A2(
				$elm$core$List$filter,
				isNotEqualToStartDate,
				$elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						A3(
							$PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange,
							start,
							A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$decrementDays, minDateRangeLength - 1, start),
							$PanagiotisGeorgiadis$elm_datetime$Clock$midnight))));
			var invalidFutureDates = A2(
				$elm$core$List$filter,
				isNotEqualToStartDate,
				$elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						$elm$core$List$reverse(
							A3(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange,
								start,
								A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$incrementDays, minDateRangeLength - 1, start),
								$PanagiotisGeorgiadis$elm_datetime$Clock$midnight)))));
			var invalidDates = _Utils_ap(invalidFutureDates, invalidPastDates);
			return _Utils_update(
				model,
				{
					dateRangeOffset: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(invalidDates))
				});
		} else {
			return _Utils_update(
				model,
				{
					dateRangeOffset: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(_List_Nil))
				});
		}
	} else {
		return model;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$setDateRange = F2(
	function (_v0, _v1) {
		var startDate = _v0.startDate;
		var endDate = _v0.endDate;
		var model = _v1.a;
		var isOutOfBounds = function (date) {
			var _v4 = model.dateLimit;
			if (_v4.$ === 'DateLimit') {
				var minDate = _v4.a.minDate;
				var maxDate = _v4.a.maxDate;
				return _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, minDate),
					$elm$core$Basics$LT) || _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, maxDate),
					$elm$core$Basics$GT);
			} else {
				return false;
			}
		};
		var isLessThanOffset = function () {
			var _v3 = model.dateRangeOffset;
			if (_v3.$ === 'Offset') {
				var minDateRangeLength = _v3.a.minDateRangeLength;
				var dateRange = A3($PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange, startDate, endDate, $PanagiotisGeorgiadis$elm_datetime$Clock$midnight);
				return _Utils_cmp(
					$elm$core$List$length(dateRange),
					minDateRangeLength) < 0;
			} else {
				return false;
			}
		}();
		if (isOutOfBounds(startDate) || (isOutOfBounds(endDate) || isLessThanOffset)) {
			return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model);
		} else {
			var _v2 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, startDate, endDate);
			switch (_v2.$) {
				case 'EQ':
					return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model);
				case 'LT':
					return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(
							_Utils_update(
								model,
								{
									range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, startDate, endDate))
								})));
				default:
					return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(
							_Utils_update(
								model,
								{
									range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, endDate, startDate))
								})));
			}
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate = F2(
	function (date, _v0) {
		var time = _v0.a.time;
		return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
			{date: date, time: time});
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayFromInt = F3(
	function (year, month, day) {
		var maxValidDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, month));
		return ((day > 0) && (!_Utils_eq(
			A2($elm$core$Basics$compare, day, maxValidDay),
			$elm$core$Basics$GT))) ? $elm$core$Maybe$Just(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(day)) : $elm$core$Maybe$Nothing;
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromYearMonthDay = F3(
	function (y, m, d) {
		var maxDay = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, y, m);
		var _v0 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, d, maxDay);
		if (_v0.$ === 'GT') {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
					{day: d, month: m, year: y}));
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawDay = F3(
	function (year, month, day) {
		return A2(
			$elm$core$Maybe$andThen,
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromYearMonthDay, year, month),
			A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayFromInt, year, month, day));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawParts = function (_v0) {
	var year = _v0.year;
	var month = _v0.month;
	var day = _v0.day;
	return A2(
		$elm$core$Maybe$andThen,
		function (y) {
			return A3($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawDay, y, month, day);
		},
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt(year));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$setDay = F2(
	function (day, date) {
		return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromRawParts(
			{
				day: day,
				month: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date),
				year: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(
					$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(date))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$setDay = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$setDay;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDay = F2(
	function (day, dateTime) {
		return A2(
			$elm$core$Maybe$map,
			function (d) {
				return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate, d, dateTime);
			},
			A2(
				$PanagiotisGeorgiadis$elm_datetime$Calendar$setDay,
				day,
				$PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate(dateTime)));
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDay;
var $author$project$DateSelect$init = function (todayPosix) {
	var today = $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix(todayPosix);
	var timePickerConfig = $elm$core$Maybe$Nothing;
	var defaultDateRange = {
		endDate: A2($author$project$Extra$DateTime$incrementDays, 22, today),
		startDate: A2($author$project$Extra$DateTime$incrementDays, 14, today)
	};
	var _v0 = function () {
		var _v1 = _Utils_Tuple2(
			A2($author$project$Extra$DateTime$decrementMonths, 1, today),
			A2($author$project$Extra$DateTime$incrementMonths, 36, today));
		var past = _v1.a;
		var future = _v1.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$Maybe$withDefault,
				past,
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setDay, 1, past)),
			A2(
				$elm$core$Maybe$withDefault,
				future,
				A2(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$setDay,
					$PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf(future),
					future)));
	}();
	var minDate = _v0.a;
	var maxDate = _v0.b;
	var calendarConfig = {
		dateLimit: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit(
			{maxDate: maxDate, minDate: minDate}),
		dateRangeOffset: $elm$core$Maybe$Just(
			{minDateRangeLength: 1}),
		primaryDate: $elm$core$Maybe$Nothing,
		today: today
	};
	var pickerInit = A3($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Single, calendarConfig, timePickerConfig);
	return {
		isFocused: false,
		picker: A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$setDateRange, defaultDateRange, pickerInit),
		selectedRange: $elm$core$Maybe$Just(defaultDateRange)
	};
};
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Selectize$Selectize$removeLabel = function (labeledEntry) {
	if (labeledEntry.$ === 'LEntry') {
		var a = labeledEntry.a;
		return $author$project$Selectize$Selectize$Entry(a);
	} else {
		var text = labeledEntry.a;
		return $author$project$Selectize$Selectize$Divider(text);
	}
};
var $author$project$Selectize$Selectize$zipHelper = F3(
	function (listA, listB, sum) {
		zipHelper:
		while (true) {
			var _v0 = _Utils_Tuple2(listA, listB);
			if (_v0.a.b && _v0.b.b) {
				var _v1 = _v0.a;
				var a = _v1.a;
				var restA = _v1.b;
				var _v2 = _v0.b;
				var b = _v2.a;
				var restB = _v2.b;
				var $temp$listA = restA,
					$temp$listB = restB,
					$temp$sum = A2(
					$elm$core$List$cons,
					_Utils_Tuple2(a, b),
					sum);
				listA = $temp$listA;
				listB = $temp$listB;
				sum = $temp$sum;
				continue zipHelper;
			} else {
				return sum;
			}
		}
	});
var $author$project$Selectize$Selectize$zip = F2(
	function (listA, listB) {
		return $elm$core$List$reverse(
			A3($author$project$Selectize$Selectize$zipHelper, listA, listB, _List_Nil));
	});
var $author$project$Selectize$Selectize$zipFirst = function (zipList) {
	var front = zipList.front;
	var current = zipList.current;
	var back = zipList.back;
	var currentTop = zipList.currentTop;
	if (current.a.$ === 'Divider') {
		if (!back.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var next = back.a;
			var rest = back.b;
			return $author$project$Selectize$Selectize$zipFirst(
				{
					back: rest,
					current: next,
					currentTop: currentTop + current.b,
					front: A2($elm$core$List$cons, current, front)
				});
		}
	} else {
		return $elm$core$Maybe$Just(zipList);
	}
};
var $author$project$Selectize$Selectize$fromList = F2(
	function (entries, entryHeights) {
		var _v0 = _Utils_Tuple2(
			A2($elm$core$List$map, $author$project$Selectize$Selectize$removeLabel, entries),
			entryHeights);
		if (_v0.a.b && _v0.b.b) {
			var _v1 = _v0.a;
			var firstEntry = _v1.a;
			var restEntries = _v1.b;
			var _v2 = _v0.b;
			var firstHeight = _v2.a;
			var restHeights = _v2.b;
			return $author$project$Selectize$Selectize$zipFirst(
				{
					back: A2($author$project$Selectize$Selectize$zip, restEntries, restHeights),
					current: _Utils_Tuple2(firstEntry, firstHeight),
					currentTop: 0,
					front: _List_Nil
				});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Selectize$Selectize$zipCurrentHeight = function (_v0) {
	var current = _v0.current;
	return current.b;
};
var $author$project$Selectize$Selectize$refresh = F4(
	function (state, id, toLabel, entries) {
		var newZipList = A2($author$project$Selectize$Selectize$fromList, state.entries, state.entryHeights);
		var top = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.currentTop;
				},
				newZipList));
		var height = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipCurrentHeight, newZipList));
		var addLabel = function (e) {
			if (e.$ === 'Entry') {
				var a = e.a;
				return A2(
					$author$project$Selectize$Selectize$LEntry,
					a,
					toLabel(a));
			} else {
				var text = e.a;
				return $author$project$Selectize$Selectize$LDivider(text);
			}
		};
		var labeledEntries = A2($elm$core$List$map, addLabel, entries);
		return _Utils_update(
			state,
			{entries: labeledEntries, menuHeight: 0, mouseFocus: $elm$core$Maybe$Nothing, zipList: newZipList});
	});
var $author$project$Selectize$refresh = F4(
	function (state, id, toLabel, entries) {
		return A4($author$project$Selectize$Selectize$refresh, state, id, toLabel, entries);
	});
var $author$project$Main$searchPatternDecoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'name',
	$elm$json$Json$Decode$string,
	'',
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'displayname',
		$elm$json$Json$Decode$string,
		'',
		A4(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'id',
			$elm$json$Json$Decode$string,
			'',
			$elm$json$Json$Decode$succeed($author$project$SearchData$Search))));
var $author$project$Main$searchDecoder = $elm$json$Json$Decode$list($author$project$Main$searchPatternDecoder);
var $author$project$DateSelect$PickerMsg = function (a) {
	return {$: 'PickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected = function (a) {
	return {$: 'DateRangeSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleTimePicker = {$: 'DoubleTimePicker'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None = {$: 'None'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg = function (a) {
	return {$: 'RangeEndPickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg = function (a) {
	return {$: 'RangeStartPickerMsg', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected = function (a) {
	return {$: 'StartDateSelected', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers = function (a) {
	return {$: 'SyncTimePickers', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually = F2(
	function (a, b) {
		return {$: 'Visually', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction = function (msg) {
	return A2(
		$elm$core$Task$perform,
		function (_v0) {
			return msg;
		},
		$elm$core$Task$succeed(_Utils_Tuple0));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime = function (_v0) {
	var time = _v0.a.time;
	return time;
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView = {$: 'ShowClockView'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView = function (_v0) {
	var viewType = _v0.viewType;
	var timePickers = _v0.timePickers;
	var _v1 = _Utils_Tuple2(viewType, timePickers);
	if ((_v1.a.$ === 'DoubleCalendar') && (_v1.b.$ === 'TimePickers')) {
		var _v2 = _v1.a;
		return $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView);
	} else {
		return $elm$core$Platform$Cmd$none;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None = {$: 'None'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime = function (a) {
	return {$: 'UpdatedTime', a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours = function (_v0) {
	var time = _v0.a;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.hours) - 1;
	return (newHours < 0) ? _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(23)
				})),
		true) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(newHours)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes = function (_v0) {
	var time = _v0.a;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.minutes) - 1;
	return (newMinutes < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(59)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(newMinutes)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds = function (_v0) {
	var time = _v0.a;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.seconds) - 1;
	return (newSeconds < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(59)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(newSeconds)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds = function (_v0) {
	var time = _v0.a;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.milliseconds) - 1;
	return (newMillis < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(999)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(newMillis)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		case 'HH_MM':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		case 'HH_MM_SS':
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
		default:
			var hoursStep = pickerType.a.hoursStep;
			return hoursStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			return 1;
		case 'HH_MM_SS':
			return 1;
		default:
			var millisecondsStep = pickerType.a.millisecondsStep;
			return millisecondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
		case 'HH_MM_SS':
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
		default:
			var minutesStep = pickerType.a.minutesStep;
			return minutesStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep = function (_v0) {
	var pickerType = _v0.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 1;
		case 'HH_MM':
			return 1;
		case 'HH_MM_SS':
			var secondsStep = pickerType.a.secondsStep;
			return secondsStep;
		default:
			var secondsStep = pickerType.a.secondsStep;
			return secondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours = function (_v0) {
	var time = _v0.a;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.hours) + 1;
	return (newHours >= 24) ? _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(0)
				})),
		true) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(newHours)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes = function (_v0) {
	var time = _v0.a;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.minutes) + 1;
	return (newMinutes >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(newMinutes)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds = function (_v0) {
	var time = _v0.a;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.seconds) + 1;
	return (newSeconds >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(newSeconds)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds = function (_v0) {
	var time = _v0.a;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.milliseconds) + 1;
	return (newMillis >= 1000) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(0)
				}))) : _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
			_Utils_update(
				time,
				{
					milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(newMillis)
				})),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime = F4(
	function (hours, minutes, seconds, milliseconds) {
		return {hours: hours, milliseconds: milliseconds, minutes: minutes, seconds: seconds};
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursFromInt = function (hours) {
	return ((hours >= 0) && (hours < 24)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour(hours)) : $elm$core$Maybe$Nothing;
};
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsFromInt = function (millis) {
	return ((millis >= 0) && (millis < 1000)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond(millis)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesFromInt = function (minutes) {
	return ((minutes >= 0) && (minutes < 60)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute(minutes)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsFromInt = function (seconds) {
	return ((seconds >= 0) && (seconds < 60)) ? $elm$core$Maybe$Just(
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second(seconds)) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts = function (_v0) {
	var hours = _v0.hours;
	var minutes = _v0.minutes;
	var seconds = _v0.seconds;
	var milliseconds = _v0.milliseconds;
	return A5(
		$elm$core$Maybe$map4,
		F4(
			function (h, m, s, mm) {
				return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time(
					A4($PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime, h, m, s, mm));
			}),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursFromInt(hours),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesFromInt(minutes),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsFromInt(seconds),
		$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsFromInt(milliseconds));
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setHours = F2(
	function (hours, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: hours,
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds = F2(
	function (milliseconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: milliseconds,
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes = F2(
	function (minutes, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: minutes,
				seconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds = F2(
	function (seconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				hours: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				milliseconds: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				minutes: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				seconds: seconds
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough = function (_v0) {
	stepThrough:
	while (true) {
		var n = _v0.n;
		var updateFn = _v0.updateFn;
		var time = _v0.time;
		var _v1 = _Utils_Tuple2(
			updateFn(time),
			n - 1);
		var time_ = _v1.a;
		var n_ = _v1.b;
		if (n_ <= 0) {
			return time_;
		} else {
			var $temp$_v0 = {n: n_, time: time_, updateFn: updateFn};
			_v0 = $temp$_v0;
			continue stepThrough;
		}
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime = F2(
	function (time, _v0) {
		var model = _v0.a;
		return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
			_Utils_update(
				model,
				{
					hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
					milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
					minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
					seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
					time: time
				}));
	});
var $elm$core$String$fromList = _String_fromList;
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$filterNonDigits = A2(
	$elm$core$Basics$composeL,
	A2(
		$elm$core$Basics$composeL,
		$elm$core$String$fromList,
		$elm$core$List$filter($elm$core$Char$isDigit)),
	$elm$core$String$toList);
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment = function (_v0) {
	var _default = _v0._default;
	var _new = _v0._new;
	var ceil = _v0.ceil;
	var _v1 = $elm$core$String$toInt(_new);
	if (_v1.$ === 'Just') {
		var v = _v1.a;
		return ((v >= 0) && (_Utils_cmp(v, ceil) < 0)) ? _new : _default;
	} else {
		return $elm$core$String$isEmpty(_new) ? _new : _default;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate = F3(
	function (_v0, timePart, newValue) {
		var hours = _v0.hours;
		var minutes = _v0.minutes;
		var seconds = _v0.seconds;
		var milliseconds = _v0.milliseconds;
		var sanitisedValue = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$filterNonDigits(newValue);
		var validationParams = F2(
			function (_default, ceil) {
				return {ceil: ceil, _default: _default, _new: sanitisedValue};
			});
		switch (timePart.$) {
			case 'Hours':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, hours, 24));
			case 'Minutes':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, minutes, 60));
			case 'Seconds':
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, seconds, 60));
			default:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, milliseconds, 1000));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update = F2(
	function (msg, _v0) {
		var model = _v0.a;
		switch (msg.$) {
			case 'InputHandler':
				var timePart = msg.a;
				var value = msg.b;
				var validatedValue = A3($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate, model, timePart, value);
				var updatedModel = function () {
					switch (timePart.$) {
						case 'Hours':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{hours: validatedValue}));
						case 'Minutes':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{minutes: validatedValue}));
						case 'Seconds':
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{seconds: validatedValue}));
						default:
							return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{milliseconds: validatedValue}));
					}
				}();
				return _Utils_Tuple3(updatedModel, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
			case 'Update':
				var timePart = msg.a;
				var value = msg.b;
				var updatedTime = function () {
					switch (timePart.$) {
						case 'Hours':
							return A2(
								$elm$core$Maybe$andThen,
								function (h) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setHours, h, model.time);
								},
								$elm$core$String$toInt(value));
						case 'Minutes':
							return A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes, m, model.time);
								},
								$elm$core$String$toInt(value));
						case 'Seconds':
							return A2(
								$elm$core$Maybe$andThen,
								function (s) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds, s, model.time);
								},
								$elm$core$String$toInt(value));
						default:
							return A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds, m, model.time);
								},
								$elm$core$String$toInt(value));
					}
				}();
				if (updatedTime.$ === 'Just') {
					var time = updatedTime.a;
					var updatedModel = function () {
						switch (timePart.$) {
							case 'Hours':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											hours: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, time),
											time: time
										}));
							case 'Minutes':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											minutes: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, time),
											time: time
										}));
							case 'Seconds':
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											seconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, time),
											time: time
										}));
							default:
								return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(
									_Utils_update(
										model,
										{
											milliseconds: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, time),
											time: time
										}));
						}
					}();
					return _Utils_Tuple3(
						updatedModel,
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
				}
			case 'Increment':
				var timePart = msg.a;
				var _v6 = function () {
					switch (timePart.$) {
						case 'Hours':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 'Minutes':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 'Seconds':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementSeconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep(model));
						default:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMilliseconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep(model));
					}
				}();
				var updateFn = _v6.a;
				var step = _v6.b;
				var time = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough(
					{n: step, time: model.time, updateFn: updateFn});
				return _Utils_Tuple3(
					A2(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime,
						time,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model)),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
			default:
				var timePart = msg.a;
				var _v8 = function () {
					switch (timePart.$) {
						case 'Hours':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 'Minutes':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 'Seconds':
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementSeconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep(model));
						default:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMilliseconds),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep(model));
					}
				}();
				var updateFn = _v8.a;
				var step = _v8.b;
				var time = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough(
					{n: step, time: model.time, updateFn: updateFn});
				return _Utils_Tuple3(
					A2(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime,
						time,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model(model)),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update = F2(
	function (msg, _v0) {
		var model = _v0.a;
		switch (msg.$) {
			case 'PreviousMonth':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth(model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'NextMonth':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'SelectDate':
				var date = msg.a;
				var updateModel = function (start) {
					var _v6 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					switch (_v6.$) {
						case 'EQ':
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
						case 'LT':
							var _v7 = function () {
								var _v8 = model.timePickers;
								if (_v8.$ === 'TimePickers') {
									var startPicker = _v8.a.startPicker;
									var endPicker = _v8.a.endPicker;
									return _Utils_Tuple2(
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker),
											start),
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(endPicker),
											date));
								} else {
									return _Utils_Tuple2(start, date);
								}
							}();
							var start_ = _v7.a;
							var end_ = _v7.b;
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{endDate: end_, startDate: start_})));
						default:
							var _v9 = function () {
								var _v10 = model.timePickers;
								if (_v10.$ === 'TimePickers') {
									var startPicker = _v10.a.startPicker;
									var endPicker = _v10.a.endPicker;
									return _Utils_Tuple2(
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker),
											date),
										A2(
											$PanagiotisGeorgiadis$elm_datetime$DateTime$setTime,
											$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(endPicker),
											start));
								} else {
									return _Utils_Tuple2(date, start);
								}
							}();
							var start_ = _v9.a;
							var end_ = _v9.b;
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{endDate: end_, startDate: start_})));
					}
				};
				var _v2 = function () {
					var _v3 = model.range;
					switch (_v3.$) {
						case 'StartDateSelected':
							var start = _v3.a;
							return updateModel(start);
						case 'BothSelected':
							if (_v3.a.$ === 'Visually') {
								var _v4 = _v3.a;
								var start = _v4.a;
								var end = _v4.b;
								return updateModel(start);
							} else {
								var _v5 = _v3.a;
								var start = _v5.a;
								var end = _v5.b;
								return _Utils_Tuple3(
									_Utils_update(
										model,
										{
											range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
										}),
									$elm$core$Platform$Cmd$none,
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
							}
						default:
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
									}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				}();
				var model_ = _v2.a;
				var cmd = _v2.b;
				var extMsg = _v2.c;
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(model_)),
					cmd,
					extMsg);
			case 'UpdateVisualSelection':
				var date = msg.a;
				var updateModel = function (start) {
					var _v13 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					if (_v13.$ === 'EQ') {
						return _Utils_update(
							model,
							{
								range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
							});
					} else {
						return _Utils_update(
							model,
							{
								range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
									A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually, start, date))
							});
					}
				};
				var updatedModel = function () {
					var _v11 = model.range;
					_v11$2:
					while (true) {
						switch (_v11.$) {
							case 'StartDateSelected':
								var start = _v11.a;
								return updateModel(start);
							case 'BothSelected':
								if (_v11.a.$ === 'Visually') {
									var _v12 = _v11.a;
									var start = _v12.a;
									return updateModel(start);
								} else {
									break _v11$2;
								}
							default:
								break _v11$2;
						}
					}
					return model;
				}();
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(updatedModel),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ResetVisualSelection':
				var _v14 = model.range;
				if ((_v14.$ === 'BothSelected') && (_v14.a.$ === 'Visually')) {
					var _v15 = _v14.a;
					var start = _v15.a;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
								})),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'ShowClockView':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{viewType: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleTimePicker})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ShowCalendarView':
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{viewType: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 'ToggleTimeMirroring':
				var _v16 = model.timePickers;
				if (_v16.$ === 'TimePickers') {
					var pickers = _v16.a;
					var startPicker = pickers.startPicker;
					var mirrorTimes = pickers.mirrorTimes;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{mirrorTimes: !mirrorTimes}))
								})),
						$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker))),
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'SyncTimePickers':
				var time = msg.a;
				var _v17 = model.timePickers;
				if (_v17.$ === 'TimePickers') {
					var pickers = _v17.a;
					var startPicker = pickers.startPicker;
					var endPicker = pickers.endPicker;
					var mirrorTimes = pickers.mirrorTimes;
					if (mirrorTimes) {
						var updateFn = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime(time);
						var _v18 = function () {
							var _v19 = model.range;
							if ((_v19.$ === 'BothSelected') && (_v19.a.$ === 'Chosen')) {
								var _v20 = _v19.a;
								var start = _v20.a;
								var end = _v20.b;
								var _v21 = _Utils_Tuple2(
									A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, start),
									A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, end));
								var updatedStartDate = _v21.a;
								var updatedEndDate = _v21.b;
								return _Utils_Tuple2(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, updatedStartDate, updatedEndDate)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: updatedEndDate, startDate: updatedStartDate})));
							} else {
								return _Utils_Tuple2(model.range, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						}();
						var range = _v18.a;
						var extMsg = _v18.b;
						return _Utils_Tuple3(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
								_Utils_update(
									model,
									{
										range: range,
										timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
											_Utils_update(
												pickers,
												{
													endPicker: updateFn(endPicker),
													startPicker: updateFn(startPicker)
												}))
									})),
							$elm$core$Platform$Cmd$none,
							extMsg);
					} else {
						return _Utils_Tuple3(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
							$elm$core$Platform$Cmd$none,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'RangeStartPickerMsg':
				var subMsg = msg.a;
				var _v22 = model.timePickers;
				if (_v22.$ === 'TimePickers') {
					var pickers = _v22.a;
					var startPicker = pickers.startPicker;
					var _v23 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, startPicker);
					var subModel = _v23.a;
					var subCmd = _v23.b;
					var extMsg = _v23.c;
					var _v24 = function () {
						var _v25 = _Utils_Tuple2(extMsg, model.range);
						if (_v25.a.$ === 'UpdatedTime') {
							if ((_v25.b.$ === 'BothSelected') && (_v25.b.a.$ === 'Chosen')) {
								var time = _v25.a.a;
								var _v26 = _v25.b.a;
								var start = _v26.a;
								var end = _v26.b;
								var updatedStart = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, start);
								return _Utils_Tuple3(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, updatedStart, end)),
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: end, startDate: updatedStart})));
							} else {
								var time = _v25.a.a;
								return _Utils_Tuple3(
									model.range,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.range, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v24.a;
					var cmd = _v24.b;
					var externalMsg = _v24.c;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: range,
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{startPicker: subModel}))
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 'RangeEndPickerMsg':
				var subMsg = msg.a;
				var _v27 = model.timePickers;
				if (_v27.$ === 'TimePickers') {
					var pickers = _v27.a;
					var endPicker = pickers.endPicker;
					var _v28 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, endPicker);
					var subModel = _v28.a;
					var subCmd = _v28.b;
					var extMsg = _v28.c;
					var _v29 = function () {
						var _v30 = _Utils_Tuple2(extMsg, model.range);
						if (_v30.a.$ === 'UpdatedTime') {
							if ((_v30.b.$ === 'BothSelected') && (_v30.b.a.$ === 'Chosen')) {
								var time = _v30.a.a;
								var _v31 = _v30.b.a;
								var start = _v31.a;
								var end = _v31.b;
								var updatedEnd = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, time, end);
								return _Utils_Tuple3(
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
										A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start, updatedEnd)),
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
										$elm$core$Maybe$Just(
											{endDate: updatedEnd, startDate: start})));
							} else {
								var time = _v30.a.a;
								return _Utils_Tuple3(
									model.range,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.range, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v29.a;
					var cmd = _v29.b;
					var externalMsg = _v29.c;
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
							_Utils_update(
								model,
								{
									range: range,
									timePickers: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{endPicker: subModel}))
								})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(model),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			default:
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
						_Utils_update(
							model,
							{
								primaryDate: A2(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$setDate,
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDate(model.today),
									model.primaryDate)
							})),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
		}
	});
var $author$project$DateSelect$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'PickerMsg':
				var subMsg = msg.a;
				var _v1 = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update, subMsg, model.picker);
				var updated = _v1.a;
				var subCmd = _v1.b;
				var extMsg = _v1.c;
				var selectedRange = function () {
					if (extMsg.$ === 'None') {
						return model.selectedRange;
					} else {
						var dateRange = extMsg.a;
						return dateRange;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{picker: updated, selectedRange: selectedRange}),
					A2($elm$core$Platform$Cmd$map, $author$project$DateSelect$PickerMsg, subCmd));
			case 'FocusHandler':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: true}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{isFocused: false}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Selectize$Selectize$NoOp = {$: 'NoOp'};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$blur = _Browser_call('blur');
var $author$project$Selectize$Selectize$textfieldId = function (id) {
	return id + '__textfield';
};
var $author$project$Selectize$Selectize$blur = function (id) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $author$project$Selectize$Selectize$NoOp;
		},
		$elm$browser$Browser$Dom$blur(
			$author$project$Selectize$Selectize$textfieldId(id)));
};
var $author$project$Selectize$Selectize$currentEntry = function (_v0) {
	var current = _v0.current;
	if (current.a.$ === 'Entry') {
		var a = current.a.a;
		return $elm$core$Maybe$Just(a);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Selectize$Selectize$focus = function (id) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $author$project$Selectize$Selectize$NoOp;
		},
		$elm$browser$Browser$Dom$focus(
			$author$project$Selectize$Selectize$textfieldId(id)));
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Selectize$Selectize$contains = F2(
	function (query, label) {
		return A2(
			$elm$core$String$contains,
			$elm$core$String$toLower(query),
			$elm$core$String$toLower(label));
	});
var $author$project$Selectize$Selectize$fromListWithFilter = F3(
	function (query, entries, entryHeights) {
		var filtered = A2(
			$elm$core$List$filterMap,
			function (_v1) {
				var e = _v1.a;
				var height = _v1.b;
				if (e.$ === 'LEntry') {
					var a = e.a;
					var label = e.b;
					return A2($author$project$Selectize$Selectize$contains, query, label) ? $elm$core$Maybe$Just(
						_Utils_Tuple2(
							$author$project$Selectize$Selectize$Entry(a),
							height)) : $elm$core$Maybe$Nothing;
				} else {
					var text = e.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							$author$project$Selectize$Selectize$Divider(text),
							height));
				}
			},
			A2($author$project$Selectize$Selectize$zip, entries, entryHeights));
		if (filtered.b) {
			var first = filtered.a;
			var rest = filtered.b;
			return $author$project$Selectize$Selectize$zipFirst(
				{back: rest, current: first, currentTop: 0, front: _List_Nil});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Selectize$Selectize$zipNext = function (zipList) {
	var front = zipList.front;
	var current = zipList.current;
	var back = zipList.back;
	var currentTop = zipList.currentTop;
	if (!back.b) {
		return zipList;
	} else {
		var next = back.a;
		var rest = back.b;
		return A2(
			$elm$core$Maybe$withDefault,
			zipList,
			$author$project$Selectize$Selectize$zipFirst(
				{
					back: rest,
					current: next,
					currentTop: currentTop + current.b,
					front: A2($elm$core$List$cons, current, front)
				}));
	}
};
var $author$project$Selectize$Selectize$moveForwardToHelper = F2(
	function (a, zipList) {
		if (_Utils_eq(
			zipList.current.a,
			$author$project$Selectize$Selectize$Entry(a))) {
			return $elm$core$Maybe$Just(zipList);
		} else {
			var _v0 = zipList.back;
			if (!_v0.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				return A2(
					$author$project$Selectize$Selectize$moveForwardToHelper,
					a,
					$author$project$Selectize$Selectize$zipNext(zipList));
			}
		}
	});
var $author$project$Selectize$Selectize$moveForwardTo = F2(
	function (a, zipList) {
		return A2(
			$elm$core$Maybe$withDefault,
			zipList,
			A2($author$project$Selectize$Selectize$moveForwardToHelper, a, zipList));
	});
var $author$project$Selectize$Selectize$reset = function (state) {
	return _Utils_update(
		state,
		{mouseFocus: $elm$core$Maybe$Nothing, open: false, query: '', zipList: $elm$core$Maybe$Nothing});
};
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $author$project$Selectize$Selectize$menuId = function (id) {
	return id + '__menu';
};
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Selectize$Selectize$scroll = F2(
	function (id, y) {
		return A2(
			$elm$core$Task$attempt,
			function (_v0) {
				return $author$project$Selectize$Selectize$NoOp;
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					var viewport = _v1.viewport;
					return A3(
						$elm$browser$Browser$Dom$setViewportOf,
						$author$project$Selectize$Selectize$menuId(id),
						viewport.x,
						y);
				},
				$elm$browser$Browser$Dom$getViewportOf(
					$author$project$Selectize$Selectize$menuId(id))));
	});
var $author$project$Selectize$Selectize$scrollToKeyboardFocus = F3(
	function (id, scrollTop, _v0) {
		var state = _v0.a;
		var cmd = _v0.b;
		var maybeMsg = _v0.c;
		var _v1 = state.zipList;
		if (_v1.$ === 'Just') {
			var zipList = _v1.a;
			var top = zipList.currentTop;
			var height = $author$project$Selectize$Selectize$zipCurrentHeight(zipList);
			var y = (_Utils_cmp(top, scrollTop) < 0) ? top : ((_Utils_cmp(top + height, scrollTop + state.menuHeight) > 0) ? ((top + height) - state.menuHeight) : scrollTop);
			return _Utils_Tuple3(
				state,
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2($author$project$Selectize$Selectize$scroll, id, y),
							cmd
						])),
				maybeMsg);
		} else {
			return _Utils_Tuple3(state, cmd, maybeMsg);
		}
	});
var $author$project$Selectize$Selectize$selectFirst = F2(
	function (entries, a) {
		selectFirst:
		while (true) {
			if (!entries.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = entries.a;
				var rest = entries.b;
				if (first.$ === 'LEntry') {
					var value = first.a;
					var label = first.b;
					if (_Utils_eq(a, value)) {
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(a, label));
					} else {
						var $temp$entries = rest,
							$temp$a = a;
						entries = $temp$entries;
						a = $temp$a;
						continue selectFirst;
					}
				} else {
					var $temp$entries = rest,
						$temp$a = a;
					entries = $temp$entries;
					a = $temp$a;
					continue selectFirst;
				}
			}
		}
	});
var $author$project$Selectize$Selectize$zipReverseFirst = function (zipList) {
	var front = zipList.front;
	var current = zipList.current;
	var back = zipList.back;
	var currentTop = zipList.currentTop;
	if (current.a.$ === 'Divider') {
		if (!front.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var previous = front.a;
			var rest = front.b;
			return $author$project$Selectize$Selectize$zipReverseFirst(
				{
					back: A2($elm$core$List$cons, current, back),
					current: previous,
					currentTop: currentTop - previous.b,
					front: rest
				});
		}
	} else {
		return $elm$core$Maybe$Just(zipList);
	}
};
var $author$project$Selectize$Selectize$zipPrevious = function (zipList) {
	var front = zipList.front;
	var current = zipList.current;
	var back = zipList.back;
	var currentTop = zipList.currentTop;
	if (!front.b) {
		return zipList;
	} else {
		var previous = front.a;
		var rest = front.b;
		return A2(
			$elm$core$Maybe$withDefault,
			zipList,
			$author$project$Selectize$Selectize$zipReverseFirst(
				{
					back: A2($elm$core$List$cons, current, back),
					current: previous,
					currentTop: currentTop - previous.b,
					front: rest
				}));
	}
};
var $author$project$Selectize$Selectize$updateKeyboardFocus = F3(
	function (select, movement, state) {
		var newZipList = function () {
			switch (movement.$) {
				case 'Up':
					return A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipPrevious, state.zipList);
				case 'Down':
					return A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipNext, state.zipList);
				default:
					return state.zipList;
			}
		}();
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{zipList: newZipList}),
			$elm$core$Platform$Cmd$none,
			$elm$core$Maybe$Just(
				select($elm$core$Maybe$Nothing)));
	});
var $author$project$Selectize$Selectize$update = F4(
	function (select, maybeSelection, state, msg) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple3(state, $elm$core$Platform$Cmd$none, $elm$core$Maybe$Nothing);
			case 'OpenMenu':
				var heights = msg.a;
				var scrollTop = msg.b;
				var newZipList = A2(
					$elm$core$Maybe$map,
					function () {
						if (maybeSelection.$ === 'Just') {
							var a = maybeSelection.a;
							return $author$project$Selectize$Selectize$moveForwardTo(a);
						} else {
							return $elm$core$Basics$identity;
						}
					}(),
					A2($author$project$Selectize$Selectize$fromList, state.entries, heights.entries));
				var top = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.currentTop;
						},
						newZipList));
				var height = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipCurrentHeight, newZipList));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{entryHeights: heights.entries, menuHeight: heights.menu, mouseFocus: $elm$core$Maybe$Nothing, open: true, query: '', scrollTop: scrollTop, zipList: newZipList}),
					A2($author$project$Selectize$Selectize$scroll, state.id, top - ((heights.menu - height) / 2)),
					$elm$core$Maybe$Nothing);
			case 'CloseMenu':
				return state.preventBlur ? _Utils_Tuple3(state, $elm$core$Platform$Cmd$none, $elm$core$Maybe$Nothing) : _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 'FocusTextfield':
				return _Utils_Tuple3(
					state,
					$author$project$Selectize$Selectize$focus(state.id),
					$elm$core$Maybe$Nothing);
			case 'BlurTextfield':
				return _Utils_Tuple3(
					state,
					$author$project$Selectize$Selectize$blur(state.id),
					$elm$core$Maybe$Nothing);
			case 'PreventClosing':
				var preventBlur = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{preventBlur: preventBlur}),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 'SetQuery':
				var newQuery = msg.a;
				var newZipList = A3($author$project$Selectize$Selectize$fromListWithFilter, newQuery, state.entries, state.entryHeights);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{mouseFocus: $elm$core$Maybe$Nothing, query: newQuery, zipList: newZipList}),
					A2($author$project$Selectize$Selectize$scroll, state.id, 0),
					$elm$core$Maybe$Just(
						select($elm$core$Maybe$Nothing)));
			case 'SetMouseFocus':
				var newFocus = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{mouseFocus: newFocus}),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 'Select':
				var a = msg.a;
				var selection = A2($author$project$Selectize$Selectize$selectFirst, state.entries, a);
				return _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Just(
						select(
							$elm$core$Maybe$Just(a))));
			case 'SetKeyboardFocus':
				var movement = msg.a;
				var scrollTop = msg.b;
				return A3(
					$author$project$Selectize$Selectize$scrollToKeyboardFocus,
					state.id,
					scrollTop,
					A3($author$project$Selectize$Selectize$updateKeyboardFocus, select, movement, state));
			case 'SelectKeyboardFocusAndBlur':
				var selection = A2(
					$elm$core$Maybe$andThen,
					$author$project$Selectize$Selectize$selectFirst(state.entries),
					A2($elm$core$Maybe$andThen, $author$project$Selectize$Selectize$currentEntry, state.zipList));
				return _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$author$project$Selectize$Selectize$blur(state.id),
					$elm$core$Maybe$Just(
						select(
							A2($elm$core$Maybe$andThen, $author$project$Selectize$Selectize$currentEntry, state.zipList))));
			default:
				return _Utils_Tuple3(
					state,
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Just(
						select($elm$core$Maybe$Nothing)));
		}
	});
var $author$project$Selectize$update = F4(
	function (select, selection, state, msg) {
		return A4($author$project$Selectize$Selectize$update, select, selection, state, msg);
	});
var $krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		switch (data.$) {
			case 'Success':
				var value = data.a;
				return $krisajenkins$remotedata$RemoteData$Success(
					f(value));
			case 'Loading':
				return $krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return $krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				var error = data.a;
				return $krisajenkins$remotedata$RemoteData$Failure(error);
		}
	});
var $krisajenkins$remotedata$RemoteData$withDefault = F2(
	function (_default, data) {
		if (data.$ === 'Success') {
			var x = data.a;
			return x;
		} else {
			return _default;
		}
	});
var $krisajenkins$remotedata$RemoteData$toMaybe = A2(
	$elm$core$Basics$composeR,
	$krisajenkins$remotedata$RemoteData$map($elm$core$Maybe$Just),
	$krisajenkins$remotedata$RemoteData$withDefault($elm$core$Maybe$Nothing));
var $author$project$Main$webDataToList = function (wd) {
	return A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		$krisajenkins$remotedata$RemoteData$toMaybe(wd));
};
var $author$project$Main$update = F2(
	function (msg, model) {
		var defaultSearch = _Utils_Tuple2(
			_Utils_update(
				model,
				{
					textfieldMenu: A3(
						$author$project$Selectize$closed,
						'textfield-menu',
						function ($) {
							return $.displayname;
						},
						$author$project$Main$searchCategories)
				}),
			$elm$core$Platform$Cmd$none);
		switch (msg.$) {
			case 'SearchResponse':
				switch (msg.a.$) {
					case 'Success':
						var data = msg.a;
						var items = data.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									textfieldMenu: A4(
										$author$project$Selectize$refresh,
										model.textfieldMenu,
										'textfield-menu',
										function ($) {
											return $.displayname;
										},
										$elm$core$List$concat(
											_List_fromArray(
												[
													_List_fromArray(
													[
														$author$project$Selectize$divider('Countries')
													]),
													A2(
													$elm$core$List$map,
													$author$project$Selectize$entry,
													$author$project$Main$webDataToList(data))
												])))
								}),
							$elm$core$Platform$Cmd$none);
					case 'NotAsked':
						var data = msg.a;
						return defaultSearch;
					case 'Loading':
						var data = msg.a;
						return defaultSearch;
					default:
						var data = msg.a;
						return defaultSearch;
				}
			case 'CityResponse':
				var data = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							city: data,
							maxboring: A2(
								$elm$core$Maybe$withDefault,
								0,
								$elm$core$List$maximum(
									A2(
										$elm$core$List$concatMap,
										function ($) {
											return $.boring;
										},
										$author$project$Main$webDataToList(data)))),
							maxinteresting: A2(
								$elm$core$Maybe$withDefault,
								0,
								$elm$core$List$maximum(
									A2(
										$elm$core$List$concatMap,
										function ($) {
											return $.interesting;
										},
										$author$project$Main$webDataToList(data))))
						}),
					$elm$core$Platform$Cmd$none);
			case 'Initialise':
				var todayPosix = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							singleDateRangePicker: $elm$core$Maybe$Just(
								$author$project$DateSelect$init(todayPosix))
						}),
					$elm$core$Platform$Cmd$none);
			case 'SingleDateRangePickerWithInputMsg':
				var subMsg = msg.a;
				var _v1 = model.singleDateRangePicker;
				if (_v1.$ === 'Just') {
					var picker = _v1.a;
					var _v2 = A2($author$project$DateSelect$update, subMsg, picker);
					var subModel = _v2.a;
					var subCmd = _v2.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								singleDateRangePicker: $elm$core$Maybe$Just(subModel)
							}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$SingleDateRangePickerWithInputMsg, subCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'SetTableQuery':
				var newQuery = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tableQuery: newQuery}),
					$elm$core$Platform$Cmd$none);
			case 'SetTableState':
				var newState = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tableState: newState}),
					$elm$core$Platform$Cmd$none);
			case 'SelectTextfieldCity':
				var newSelection = msg.a;
				if (newSelection.$ === 'Nothing') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{textfieldSelection: newSelection}),
						A3($ohanhi$remotedata_http$RemoteData$Http$get, $author$project$Main$apiUrl + ('/searchCountry?input=' + model.textfieldMenu.query), $author$project$Main$SearchResponse, $author$project$Main$searchDecoder));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								city: $krisajenkins$remotedata$RemoteData$Loading,
								tableQuery: '',
								tableState: $billstclair$elm_sortable_table$Table$initialSort(''),
								textfieldSelection: newSelection
							}),
						A3(
							$ohanhi$remotedata_http$RemoteData$Http$get,
							$author$project$Main$apiUrl + ('/getCities?k=' + A2(
								$elm$core$Maybe$withDefault,
								'',
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.id;
									},
									newSelection))),
							$author$project$Main$CityResponse,
							$author$project$Main$cityDecoder));
				}
			default:
				var selectizeMsg = msg.a;
				var _v4 = A4($author$project$Selectize$update, $author$project$Main$SelectTextfieldCity, model.textfieldSelection, model.textfieldMenu, selectizeMsg);
				var newMenu = _v4.a;
				var menuCmd = _v4.b;
				var maybeMsg = _v4.c;
				var cmd = A2($elm$core$Platform$Cmd$map, $author$project$Main$TextfieldMenuMsg, menuCmd);
				var newModel = _Utils_update(
					model,
					{textfieldMenu: newMenu});
				if (maybeMsg.$ === 'Just') {
					var nextMsg = maybeMsg.a;
					return A2(
						$author$project$Main$andDo,
						cmd,
						A2($author$project$Main$update, nextMsg, newModel));
				} else {
					return _Utils_Tuple2(newModel, cmd);
				}
		}
	});
var $elm$html$Html$br = _VirtualDom_node('br');
var $author$project$Main$SetTableState = function (a) {
	return {$: 'SetTableState', a: a};
};
var $billstclair$elm_sortable_table$Table$DecOrInc = function (a) {
	return {$: 'DecOrInc', a: a};
};
var $elm$core$List$sortBy = _List_sortBy;
var $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$DecOrInc(
		$elm$core$List$sortBy(toComparable));
};
var $billstclair$elm_sortable_table$Table$IncOrDec = function (a) {
	return {$: 'IncOrDec', a: a};
};
var $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$IncOrDec(
		$elm$core$List$sortBy(toComparable));
};
var $billstclair$elm_sortable_table$Table$Column = function (a) {
	return {$: 'Column', a: a};
};
var $billstclair$elm_sortable_table$Table$veryCustomColumn = $billstclair$elm_sortable_table$Table$Column;
var $billstclair$elm_sortable_table$Table$HtmlDetails = F2(
	function (attributes, children) {
		return {attributes: attributes, children: children};
	});
var $cuducos$elm_format_number$Parser$FormattedNumber = F5(
	function (original, integers, decimals, prefix, suffix) {
		return {decimals: decimals, integers: integers, original: original, prefix: prefix, suffix: suffix};
	});
var $cuducos$elm_format_number$Parser$Negative = {$: 'Negative'};
var $cuducos$elm_format_number$Parser$Positive = {$: 'Positive'};
var $cuducos$elm_format_number$Parser$Zero = {$: 'Zero'};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $cuducos$elm_format_number$Parser$classify = function (formatted) {
	var onlyZeros = A2(
		$elm$core$String$all,
		function (_char) {
			return _Utils_eq(
				_char,
				_Utils_chr('0'));
		},
		$elm$core$String$concat(
			A2(
				$elm$core$List$append,
				formatted.integers,
				$elm$core$List$singleton(formatted.decimals))));
	return onlyZeros ? $cuducos$elm_format_number$Parser$Zero : ((formatted.original < 0) ? $cuducos$elm_format_number$Parser$Negative : $cuducos$elm_format_number$Parser$Positive);
};
var $elm$core$String$filter = _String_filter;
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				_Utils_chr('0'),
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$String$reverse = _String_reverse;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				$elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					$elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _v0.a.a.valueOf()) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $cuducos$elm_format_number$Parser$splitThousands = function (integers) {
	var reversedSplitThousands = function (value) {
		return ($elm$core$String$length(value) > 3) ? A2(
			$elm$core$List$cons,
			A2($elm$core$String$right, 3, value),
			reversedSplitThousands(
				A2($elm$core$String$dropRight, 3, value))) : _List_fromArray(
			[value]);
	};
	return $elm$core$List$reverse(
		reversedSplitThousands(integers));
};
var $cuducos$elm_format_number$Parser$parse = F2(
	function (locale, original) {
		var parts = A2(
			$elm$core$String$split,
			'.',
			A2($myrho$elm_round$Round$round, locale.decimals, original));
		var integers = $cuducos$elm_format_number$Parser$splitThousands(
			A2(
				$elm$core$String$filter,
				$elm$core$Char$isDigit,
				A2(
					$elm$core$Maybe$withDefault,
					'0',
					$elm$core$List$head(parts))));
		var decimals = A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(
				A2($elm$core$List$drop, 1, parts)));
		var partial = A5($cuducos$elm_format_number$Parser$FormattedNumber, original, integers, decimals, '', '');
		var _v0 = $cuducos$elm_format_number$Parser$classify(partial);
		switch (_v0.$) {
			case 'Negative':
				return _Utils_update(
					partial,
					{prefix: locale.negativePrefix, suffix: locale.negativeSuffix});
			case 'Positive':
				return _Utils_update(
					partial,
					{prefix: locale.positivePrefix, suffix: locale.positiveSuffix});
			default:
				return _Utils_update(
					partial,
					{prefix: locale.zeroPrefix, suffix: locale.zeroSuffix});
		}
	});
var $cuducos$elm_format_number$Stringfy$formatDecimals = F2(
	function (locale, decimals) {
		return (decimals === '') ? '' : _Utils_ap(locale.decimalSeparator, decimals);
	});
var $cuducos$elm_format_number$Stringfy$removeZeros = function (decimals) {
	return (A2($elm$core$String$right, 1, decimals) !== '0') ? decimals : $cuducos$elm_format_number$Stringfy$removeZeros(
		A2($elm$core$String$dropRight, 1, decimals));
};
var $cuducos$elm_format_number$Stringfy$humanizeDecimals = F3(
	function (locale, strategy, decimals) {
		if ((decimals === '') || _Utils_eq(
			A2($elm$core$String$repeat, locale.decimals, '0'),
			decimals)) {
			return '';
		} else {
			if (strategy.$ === 'KeepZeros') {
				return _Utils_ap(locale.decimalSeparator, decimals);
			} else {
				return A2(
					$cuducos$elm_format_number$Stringfy$formatDecimals,
					locale,
					$cuducos$elm_format_number$Stringfy$removeZeros(decimals));
			}
		}
	});
var $cuducos$elm_format_number$Stringfy$stringfy = F3(
	function (locale, strategy, formatted) {
		var stringfyDecimals = function () {
			if (strategy.$ === 'Just') {
				var strategy_ = strategy.a;
				return A2($cuducos$elm_format_number$Stringfy$humanizeDecimals, locale, strategy_);
			} else {
				return $cuducos$elm_format_number$Stringfy$formatDecimals(locale);
			}
		}();
		var integers = A2($elm$core$String$join, locale.thousandSeparator, formatted.integers);
		var decimals = stringfyDecimals(formatted.decimals);
		return $elm$core$String$concat(
			_List_fromArray(
				[formatted.prefix, integers, decimals, formatted.suffix]));
	});
var $cuducos$elm_format_number$FormatNumber$format = F2(
	function (locale, number_) {
		return A3(
			$cuducos$elm_format_number$Stringfy$stringfy,
			locale,
			$elm$core$Maybe$Nothing,
			A2($cuducos$elm_format_number$Parser$parse, locale, number_));
	});
var $cuducos$elm_format_number$FormatNumber$Locales$Locale = F9(
	function (decimals, thousandSeparator, decimalSeparator, negativePrefix, negativeSuffix, positivePrefix, positiveSuffix, zeroPrefix, zeroSuffix) {
		return {decimalSeparator: decimalSeparator, decimals: decimals, negativePrefix: negativePrefix, negativeSuffix: negativeSuffix, positivePrefix: positivePrefix, positiveSuffix: positiveSuffix, thousandSeparator: thousandSeparator, zeroPrefix: zeroPrefix, zeroSuffix: zeroSuffix};
	});
var $cuducos$elm_format_number$FormatNumber$Locales$usLocale = A9($cuducos$elm_format_number$FormatNumber$Locales$Locale, 2, ',', '.', '−', '', '', '', '', '');
var $author$project$Main$sharesLocale = _Utils_update(
	$cuducos$elm_format_number$FormatNumber$Locales$usLocale,
	{decimals: 0});
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Main$viewBarChartThousands = F3(
	function (barChartPrefix, barChartLabel, barChartPercent) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('horizontalBarChart'),
							A2(
							$elm$html$Html$Attributes$style,
							'background',
							'#0000 linear-gradient(to right, #2fc123 0%, #00a200 ' + ($elm$core$String$fromInt(barChartPercent) + ('%, #ececec ' + ($elm$core$String$fromInt(barChartPercent) + '%, #ececec 100%) repeat scroll 0% 0%'))))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							_Utils_ap(
								barChartPrefix,
								A2(
									$cuducos$elm_format_number$FormatNumber$format,
									$author$project$Main$sharesLocale,
									A2(
										$elm$core$Maybe$withDefault,
										0.0,
										$elm$core$String$toFloat(barChartLabel)))))
						]))
				]));
	});
var $author$project$Main$barChartColumn = F4(
	function (name, prefix, value, maxValue) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: (prefix === '$') ? $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy(value) : $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(value),
				viewData: function (data) {
					return A3(
						$author$project$Main$viewBarChartThousands,
						prefix,
						$elm$core$String$fromInt(
							value(data)),
						((100 * value(data)) / maxValue) | 0);
				}
			});
	});
var $billstclair$elm_sortable_table$Table$Config = function (a) {
	return {$: 'Config', a: a};
};
var $billstclair$elm_sortable_table$Table$simpleRowAttrs = function (_v0) {
	return _List_Nil;
};
var $billstclair$elm_sortable_table$Table$nbsp = $elm$core$String$fromList(
	_List_fromArray(
		[
			$elm$core$Char$fromCode(160)
		]));
var $billstclair$elm_sortable_table$Table$darkGrey = function (symbol) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#555')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				_Utils_ap($billstclair$elm_sortable_table$Table$nbsp, symbol))
			]));
};
var $billstclair$elm_sortable_table$Table$lightGrey = function (symbol) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#ccc')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				_Utils_ap($billstclair$elm_sortable_table$Table$nbsp, symbol))
			]));
};
var $elm$html$Html$th = _VirtualDom_node('th');
var $billstclair$elm_sortable_table$Table$simpleTheadHelp = function (_v0) {
	var name = _v0.a;
	var status = _v0.b;
	var click = _v0.c;
	var content = function () {
		switch (status.$) {
			case 'Unsortable':
				return _List_fromArray(
					[
						$elm$html$Html$text(name)
					]);
			case 'Sortable':
				var selected = status.a;
				return _List_fromArray(
					[
						$elm$html$Html$text(name),
						selected ? $billstclair$elm_sortable_table$Table$darkGrey('↓') : $billstclair$elm_sortable_table$Table$lightGrey('↓')
					]);
			default:
				if (status.a.$ === 'Nothing') {
					var _v2 = status.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name),
							$billstclair$elm_sortable_table$Table$lightGrey('↕')
						]);
				} else {
					var isReversed = status.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name),
							$billstclair$elm_sortable_table$Table$darkGrey(
							isReversed ? '↑' : '↓')
						]);
				}
		}
	}();
	return A2(
		$elm$html$Html$th,
		_List_fromArray(
			[click]),
		content);
};
var $billstclair$elm_sortable_table$Table$simpleThead = function (headers) {
	return A2(
		$billstclair$elm_sortable_table$Table$HtmlDetails,
		_List_Nil,
		A2($elm$core$List$map, $billstclair$elm_sortable_table$Table$simpleTheadHelp, headers));
};
var $billstclair$elm_sortable_table$Table$defaultCustomizations = {caption: $elm$core$Maybe$Nothing, rowAttrs: $billstclair$elm_sortable_table$Table$simpleRowAttrs, tableAttrs: _List_Nil, tbodyAttrs: _List_Nil, tfoot: $elm$core$Maybe$Nothing, thead: $billstclair$elm_sortable_table$Table$simpleThead};
var $billstclair$elm_sortable_table$Table$config = function (_v0) {
	var toId = _v0.toId;
	var toMsg = _v0.toMsg;
	var columns = _v0.columns;
	return $billstclair$elm_sortable_table$Table$Config(
		{
			columns: A2(
				$elm$core$List$map,
				function (_v1) {
					var cData = _v1.a;
					return cData;
				},
				columns),
			customizations: $billstclair$elm_sortable_table$Table$defaultCustomizations,
			toId: toId,
			toMsg: toMsg
		});
};
var $billstclair$elm_sortable_table$Table$Increasing = function (a) {
	return {$: 'Increasing', a: a};
};
var $billstclair$elm_sortable_table$Table$increasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$Increasing(
		$elm$core$List$sortBy(toComparable));
};
var $author$project$Main$viewBarChart = F2(
	function (barChartLabel, barChartPercent) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('horizontalBarChart'),
							A2(
							$elm$html$Html$Attributes$style,
							'background',
							'#0000 linear-gradient(to right, #008b8b 0%, #008b8b ' + ($elm$core$String$fromInt(barChartPercent) + ('%, #ececec ' + ($elm$core$String$fromInt(barChartPercent) + '%, #ececec 100%) repeat scroll 0% 0%'))))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(barChartLabel)
						]))
				]));
	});
var $author$project$Main$distColumn = F3(
	function (name, value, maxValue) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$increasingBy(value),
				viewData: function (data) {
					return A2(
						$author$project$Main$viewBarChart,
						$elm$core$String$fromInt(
							(value(data) / 1000) | 0) + ' km',
						((100 * value(data)) / maxValue) | 0);
				}
			});
	});
var $author$project$Main$viewDoubleBarChart = F4(
	function (barChartLabelBad, barChartPercentBad, barChartLabelGood, barChartPercentGood) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('horizontalBarChart'),
							A2(
							$elm$html$Html$Attributes$style,
							'background',
							'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(236, 236, 236) ' + ($elm$core$String$fromInt(barChartPercentBad) + ('%, rgb(200, 200, 200) ' + ($elm$core$String$fromInt(barChartPercentBad) + ('%, rgb(181, 177, 177) 50%, rgb(0, 162, 0) 50%, rgb(178, 193, 174) ' + ($elm$core$String$fromInt(barChartPercentGood) + ('%, rgb(236, 236, 236) ' + ($elm$core$String$fromInt(barChartPercentGood) + '%) repeat-y scroll 50% 100%')))))))),
							A2($elm$html$Html$Attributes$style, 'background-position', '50% 100%'),
							A2($elm$html$Html$Attributes$style, 'background-repeat', 'repeat-y'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'marginRight', '20px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(barChartLabelBad)
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(barChartLabelGood)
								]))
						]))
				]));
	});
var $author$project$Main$doubleBarChartColumn = F5(
	function (name, valueBad, maxValueBad, valueGood, maxValueGood) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
					A2($elm$core$String$contains, 'Risk', name) ? function (data) {
						return (valueBad(data) > 20) ? (valueGood(data) - (3 * valueBad(data))) : valueGood(data);
					} : function (data) {
						return (_Utils_cmp(
							valueGood(data),
							2 * valueBad(data)) > 0) ? (valueGood(data) * 2) : valueGood(data);
					}),
				viewData: function (data) {
					return A4(
						$author$project$Main$viewDoubleBarChart,
						$elm$core$String$fromInt(
							valueBad(data)),
						50 - $elm$core$Basics$abs(
							(valueBad(data) / ((maxValueBad / 100) | 0)) | 0),
						$elm$core$String$fromInt(
							valueGood(data)),
						((valueGood(data) / ((maxValueGood / 100) | 0)) | 0) + 50);
				}
			});
	});
var $author$project$Main$mwd = $elm$core$Maybe$withDefault(0);
var $author$project$Main$viewDoubleBarTripleChart = F8(
	function (barChartLabelBad, barChartPercentBadMin, barChartPercentBadAvg, barChartPercentBadMax, barChartLabelGood, barChartPercentGoodMin, barChartPercentGoodAvg, barChartPercentGoodMax) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('horizontalBarChart'),
							A2(
							$elm$html$Html$Attributes$style,
							'background',
							'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(236, 236, 236) ' + ($elm$core$String$fromInt(barChartPercentBadMax) + ('%, rgb(200, 200, 200) ' + ($elm$core$String$fromInt(barChartPercentBadMax) + ('%, rgb(181, 177, 177) 50%, rgb(0, 162, 0) 50%, rgb(178, 193, 174) ' + ($elm$core$String$fromInt(barChartPercentGoodMax) + ('%, rgb(236, 236, 236) ' + ($elm$core$String$fromInt(barChartPercentGoodMax) + '%) repeat-y scroll 50% 100%')))))))),
							A2($elm$html$Html$Attributes$style, 'background-position', '50% 100%'),
							A2($elm$html$Html$Attributes$style, 'background-repeat', 'repeat-y'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'marginRight', '20px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(barChartLabelBad))
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(barChartLabelGood))
								]))
						]))
				]));
	});
var $author$project$Main$doubleBarTripleChartColumn = F5(
	function (name, valueBad, maxValueBad, valueGood, maxValueGood) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
					A2($elm$core$String$contains, 'Risk', name) ? function (data) {
						return ($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueBad(data))) > 20) ? ($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))) - (3 * $author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueBad(data))))) : $author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data)));
					} : function (data) {
						return (_Utils_cmp(
							$author$project$Main$mwd(
								A2(
									$elm$core$Array$get,
									1,
									valueGood(data))),
							2 * $author$project$Main$mwd(
								A2(
									$elm$core$Array$get,
									1,
									valueBad(data)))) > 0) ? ($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))) * 2) : $author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data)));
					}),
				viewData: function (data) {
					return A8(
						$author$project$Main$viewDoubleBarTripleChart,
						$author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueBad(data))),
						50 - (($elm$core$Basics$abs(
							$author$project$Main$mwd(
								A2(
									$elm$core$Array$get,
									0,
									valueBad(data)))) / maxValueBad) | 0),
						50 - (($elm$core$Basics$abs(
							$author$project$Main$mwd(
								A2(
									$elm$core$Array$get,
									1,
									valueBad(data)))) / maxValueBad) | 0),
						50 - (($elm$core$Basics$abs(
							$author$project$Main$mwd(
								A2(
									$elm$core$Array$get,
									2,
									valueBad(data)))) / maxValueBad) | 0),
						$author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))),
						50 + (($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								0,
								valueGood(data))) / maxValueGood) | 0),
						50 + (($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))) / maxValueGood) | 0),
						50 + (($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								2,
								valueGood(data))) / maxValueGood) | 0));
				}
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDay = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt, $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDay);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDay = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getDay, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDay = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDay;
var $author$project$Extra$TimeUtils$monthToIntString = function (month) {
	switch (month.$) {
		case 'Jan':
			return '01';
		case 'Feb':
			return '02';
		case 'Mar':
			return '03';
		case 'Apr':
			return '04';
		case 'May':
			return '05';
		case 'Jun':
			return '06';
		case 'Jul':
			return '07';
		case 'Aug':
			return '08';
		case 'Sep':
			return '09';
		case 'Oct':
			return '10';
		case 'Nov':
			return '11';
		default:
			return '12';
	}
};
var $author$project$DateSelect$endDateString = function (_v0) {
	var picker = _v0.picker;
	var selectedRange = _v0.selectedRange;
	var isFocused = _v0.isFocused;
	if (selectedRange.$ === 'Just') {
		var startDate = selectedRange.a.startDate;
		var endDate = selectedRange.a.endDate;
		return A2(
			$elm$core$String$join,
			'-',
			_List_fromArray(
				[
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(endDate)),
					$author$project$Extra$TimeUtils$monthToIntString(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(endDate)),
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(endDate))
				]));
	} else {
		return '';
	}
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Main$viewflags = function (flags) {
	return A2(
		$billstclair$elm_sortable_table$Table$HtmlDetails,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('static/blank.gif'),
						$elm$html$Html$Attributes$class(
						'flag flag-' + $elm$core$String$toLower(flags))
					]),
				_List_Nil)
			]));
};
var $author$project$Main$flagColumn = F2(
	function (name, toflags) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(toflags),
				viewData: function (data) {
					return $author$project$Main$viewflags(
						toflags(data));
				}
			});
	});
var $billstclair$elm_sortable_table$Table$None = {$: 'None'};
var $billstclair$elm_sortable_table$Table$unsortable = $billstclair$elm_sortable_table$Table$None;
var $elm$html$Html$i = _VirtualDom_node('i');
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$Main$viewMaterialUILink = F2(
	function (link, icon) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(link),
							$elm$html$Html$Attributes$target('_blank'),
							$elm$html$Html$Attributes$rel('nofollow')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$i,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('md-dark md-36 material-icons MuiIconButton-root')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(icon)
								]))
						]))
				]));
	});
var $author$project$Main$materialUIColumn = F3(
	function (name, value, icon) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$unsortable,
				viewData: function (data) {
					return A2(
						$author$project$Main$viewMaterialUILink,
						value(data),
						icon);
				}
			});
	});
var $billstclair$elm_sortable_table$Table$Decreasing = function (a) {
	return {$: 'Decreasing', a: a};
};
var $billstclair$elm_sortable_table$Table$decreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$Decreasing(
		$elm$core$List$sortBy(toComparable));
};
var $author$project$Main$noiseColumn = F3(
	function (name, value, maxValue) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$decreasingBy(value),
				viewData: function (data) {
					return A2(
						$author$project$Main$viewBarChart,
						(!value(data)) ? '--' : ($elm$core$String$fromInt(
							value(data)) + ' db'),
						50 + (((-55) + ((!value(data)) ? 45 : value(data))) * 3));
				}
			});
	});
var $author$project$Main$viewSingleBarTripleChart = F4(
	function (barChartLabelGood, barChartPercentGoodMin, barChartPercentGoodAvg, barChartPercentGoodMax) {
		return A2(
			$billstclair$elm_sortable_table$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('horizontalBarChart'),
							A2(
							$elm$html$Html$Attributes$style,
							'background',
							'rgba(0, 0, 0, 0) linear-gradient(to right, #00a200 ' + ($elm$core$String$fromInt(barChartPercentGoodMin) + ('%,  #00a200 ' + ($elm$core$String$fromInt(barChartPercentGoodAvg) + ('%,  #eee ' + ($elm$core$String$fromInt(barChartPercentGoodAvg) + ('%,  #999 ' + ($elm$core$String$fromInt(barChartPercentGoodMax) + ('%, #fff ' + ($elm$core$String$fromInt(barChartPercentGoodMax) + '% ) repeat-y scroll 50% 100%')))))))))),
							A2($elm$html$Html$Attributes$style, 'background-position', '50% 100%'),
							A2($elm$html$Html$Attributes$style, 'background-repeat', 'repeat-y'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(barChartLabelGood))
								]))
						]))
				]));
	});
var $author$project$Main$singleBarTripleChartColumn = F3(
	function (name, valueGood, maxValueGood) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
					function (data) {
						return $author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data)));
					}),
				viewData: function (data) {
					return A4(
						$author$project$Main$viewSingleBarTripleChart,
						$author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))),
						($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								0,
								valueGood(data))) / 10) | 0,
						($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data))) / 1000) | 0,
						($author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								2,
								valueGood(data))) / 1000) | 0);
				}
			});
	});
var $author$project$DateSelect$startDateString = function (_v0) {
	var picker = _v0.picker;
	var selectedRange = _v0.selectedRange;
	var isFocused = _v0.isFocused;
	if (selectedRange.$ === 'Just') {
		var startDate = selectedRange.a.startDate;
		var endDate = selectedRange.a.endDate;
		return A2(
			$elm$core$String$join,
			'-',
			_List_fromArray(
				[
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(startDate)),
					$author$project$Extra$TimeUtils$monthToIntString(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(startDate)),
					$elm$core$String$fromInt(
					$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(startDate))
				]));
	} else {
		return '';
	}
};
var $billstclair$elm_sortable_table$Table$textDetails = function (str) {
	return A2(
		$billstclair$elm_sortable_table$Table$HtmlDetails,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $billstclair$elm_sortable_table$Table$stringColumn = F2(
	function (name, toStr) {
		return $billstclair$elm_sortable_table$Table$Column(
			{
				name: name,
				sorter: $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy(toStr),
				viewData: A2($elm$core$Basics$composeL, $billstclair$elm_sortable_table$Table$textDetails, toStr)
			});
	});
var $author$project$Main$config = function (model) {
	return $billstclair$elm_sortable_table$Table$config(
		{
			columns: _List_fromArray(
				[
					A2(
					$author$project$Main$flagColumn,
					'Flag',
					function ($) {
						return $.u;
					}),
					A2(
					$billstclair$elm_sortable_table$Table$stringColumn,
					'Name',
					function ($) {
						return $.n;
					}),
					A3(
					$author$project$Main$materialUIColumn,
					'Map',
					function (rec) {
						return 'https://www.google.com/maps/@' + (rec.lat + (',' + (rec.lon + (',' + '12z/'))));
					},
					'map'),
					A3(
					$author$project$Main$materialUIColumn,
					'Search',
					function (rec) {
						return 'https://google.com/search?q=' + (rec.n + (', ' + rec.s));
					},
					'search'),
					A3(
					$author$project$Main$materialUIColumn,
					'Video',
					function (rec) {
						return 'https://youtube.com/search?q=' + (rec.n + (', ' + rec.s));
					},
					'video_library'),
					A3(
					$author$project$Main$materialUIColumn,
					'Hotels',
					function (rec) {
						return ($elm$core$String$length(rec.hcid) > 1) ? ('https://www.hotelscombined.com/Hotels/Search?destination=' + (rec.hcid + ('&radius=6mi&checkin=' + (A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Maybe$map, $author$project$DateSelect$startDateString, model.singleDateRangePicker)) + ('&checkout=' + (A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Maybe$map, $author$project$DateSelect$endDateString, model.singleDateRangePicker)) + ('&Rooms=1&adults_1=1' + '&pageSize=15&pageIndex=0&sort=MinRate-asc&showSoldOut=false?a_aid=208728'))))))) : 'https://www.hotelscombined.com/?a_aid=208728';
					},
					'hotel'),
					A4(
					$author$project$Main$barChartColumn,
					'Hotel $ min',
					'$',
					function ($) {
						return $.hc_price_min;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.hc_price_min;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com $ min',
					'$',
					function ($) {
						return $.hotels_com_price_min;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.hotels_com_price_min;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com $ avg',
					'$',
					function ($) {
						return $.hotels_com_price_avg;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.hotels_com_price_avg;
								},
								$author$project$Main$cities)))),
					A5(
					$author$project$Main$doubleBarTripleChartColumn,
					'Avg Boring & Interesting',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.boring;
							}(data));
					},
					1000,
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.interesting;
							}(data));
					},
					1500),
					A5(
					$author$project$Main$doubleBarChartColumn,
					'Sum Boring & Interesting',
					function (rec) {
						return (rec.osm_boring_boring_sum / 100) | 0;
					},
					2000,
					function (rec) {
						return (rec.osm_interesting_interesting_sum_sum / 100) | 0;
					},
					3000),
					A5(
					$author$project$Main$doubleBarTripleChartColumn,
					'Avg Risk & Safety',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.danger;
							}(data));
					},
					1000,
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.safety;
							}(data));
					},
					1500),
					A5(
					$author$project$Main$doubleBarChartColumn,
					'Sum Risk & Safety',
					function (rec) {
						return (rec.danger_sum / 10) | 0;
					},
					20000,
					function (rec) {
						return (rec.osm_safe_safety_sum / 10) | 0;
					},
					30000),
					A3(
					$author$project$Main$distColumn,
					'Avg Distance to City Center',
					function ($) {
						return $.dist;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.dist;
								},
								$author$project$Main$cities)))),
					A3(
					$author$project$Main$singleBarTripleChartColumn,
					'Population (GHSL)',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.popghs;
							}(data));
					},
					2000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Public Transport',
					'',
					function (rec) {
						return $elm$core$List$sum(rec.publicTransport);
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function (rec) {
									return $elm$core$List$sum(rec.publicTransport);
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Tourism',
					'',
					function (rec) {
						return $elm$core$List$sum(rec.tourismcount);
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function (rec) {
									return $elm$core$List$sum(rec.tourismcount);
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Solo Tourists',
					'',
					function ($) {
						return $.flickr2_lowview_count_total_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.flickr2_lowview_count_total_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Family Tourists',
					'',
					function ($) {
						return $.flickr2_medview_count_total_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.flickr2_medview_count_total_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Celebrity Tourists',
					'',
					function ($) {
						return $.flickr2_highview_count_total_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.flickr2_highview_count_total_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels Count',
					'',
					function ($) {
						return $.hc_count;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.hc_count;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com Count',
					'',
					function ($) {
						return $.hotels_com_count;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.hotels_com_count;
								},
								$author$project$Main$cities)))),
					A3(
					$author$project$Main$singleBarTripleChartColumn,
					'Avg Restaurants',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.food;
							}(data));
					},
					1),
					A3(
					$author$project$Main$noiseColumn,
					'Avg Noise',
					function ($) {
						return $.noise;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.noise;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Township Area',
					'',
					function (rec) {
						return (rec.dist_sum / 1000) | 0;
					},
					10000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Coastline',
					'',
					function ($) {
						return $.coastline_100m_count_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.coastline_100m_count_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total navwater',
					'',
					function ($) {
						return $.navwater2009__mean_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.navwater2009__mean_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Public Transport',
					'',
					function ($) {
						return $.public_transport_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.public_transport_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Slope Variation',
					'',
					function (rec) {
						return (rec.slope100m__mean_sum / 100) | 0;
					},
					30000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Toilets',
					'',
					function ($) {
						return $.toilets_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.toilets_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Restaurants',
					'',
					function ($) {
						return $.food_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.food_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Access to City',
					'',
					function ($) {
						return $.access_50k_mean_sum;
					},
					10000),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_water',
					'',
					function ($) {
						return $.globcover_water_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.globcover_water_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_lake',
					'',
					function ($) {
						return $.glwd3_lake_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.glwd3_lake_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_river',
					'',
					function ($) {
						return $.glwd3_river_sum;
					},
					30),
					A4(
					$author$project$Main$barChartColumn,
					'Total lakes_glwd3_mean',
					'',
					function ($) {
						return $.lakes_glwd3_mean_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.lakes_glwd3_mean_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd_2_area',
					'',
					function ($) {
						return $.glwd_2_area_sum;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.glwd_2_area_sum;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_ice',
					'',
					function ($) {
						return $.globcover_ice_sum;
					},
					20),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_nodata',
					'',
					function ($) {
						return $.globcover_nodata_sum;
					},
					50),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_marsh',
					'',
					function (rec) {
						return (rec.glwd3_marsh_sum + rec.glwd3_swamp_sum) + rec.glwd3_bog_sum;
					},
					100),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_mangrove',
					'',
					function (rec) {
						return ((((rec.glwd3_mangrove_sum + rec.glwd3_wetland_sum) + rec.glwd3_sometimes_wetland_sum) + rec.glwd3_50_100_wetland_sum) + rec.glwd3_25_50_wetland_sum) + rec.glwd3_0_25_wetland_sum;
					},
					500)
				]),
			toId: function ($) {
				return $.n;
			},
			toMsg: $author$project$Main$SetTableState
		});
};
var $author$project$HttpExtra$errorToString = function (err) {
	switch (err.$) {
		case 'Timeout':
			return 'Timeout exceeded';
		case 'NetworkError':
			return 'Network error';
		case 'BadStatus':
			var resp = err.a;
			return 'Bad status' + $elm$core$String$fromInt(resp);
		case 'BadBody':
			var text = err.a;
			return 'Unexpected response from api: ' + text;
		default:
			var url = err.a;
			return 'Malformed url: ' + url;
	}
};
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$DateSelect$FocusHandler = {$: 'FocusHandler'};
var $author$project$DateSelect$NoOp = {$: 'NoOp'};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDayDiff = F2(
	function (startDate, endDate) {
		var _v0 = _Utils_Tuple2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(startDate),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(endDate));
		var startPosix = _v0.a;
		var endPosix = _v0.b;
		var posixDiff = $elm$time$Time$posixToMillis(endPosix) - $elm$time$Time$posixToMillis(startPosix);
		return (posixDiff / $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay) | 0;
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDayDiff = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDayDiff;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDayDiff = F2(
	function (_v0, _v1) {
		var lhs = _v0.a;
		var rhs = _v1.a;
		return A2($PanagiotisGeorgiadis$elm_datetime$Calendar$getDayDiff, lhs.date, rhs.date);
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDayDiff = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDayDiff;
var $author$project$Extra$TimeUtils$monthToString = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $elm$html$Html$Events$onFocus = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'focus',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$readonly = $elm$html$Html$Attributes$boolProperty('readOnly');
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection = {$: 'ResetVisualSelection'};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Right = {$: 'Right'};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Size = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SelectDate = function (a) {
	return {$: 'SelectDate', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$UpdateVisualSelection = function (a) {
	return {$: 'UpdateVisualSelection', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfDisabled = F2(
	function (_v0, date) {
		var today = _v0.a.today;
		var dateLimit = _v0.a.dateLimit;
		var isLesserThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$LT);
		};
		var isGreaterThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$GT);
		};
		var isEqualToDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$EQ);
		};
		if (dateLimit.$ === 'NoLimit') {
			return false;
		} else {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return isLesserThanDate(minDate) || isGreaterThanDate(maxDate);
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid = F2(
	function (_v0, date) {
		var dateRangeOffset = _v0.a.dateRangeOffset;
		if (dateRangeOffset.$ === 'Offset') {
			var invalidDates = dateRangeOffset.a.invalidDates;
			return A2(
				$elm$core$List$any,
				function (d) {
					return _Utils_eq(
						A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, d),
						$elm$core$Basics$EQ);
				},
				invalidDates);
		} else {
			return false;
		}
	});
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Mon = {$: 'Mon'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return $elm$time$Time$Thu;
			case 1:
				return $elm$time$Time$Fri;
			case 2:
				return $elm$time$Time$Sat;
			case 3:
				return $elm$time$Time$Sun;
			case 4:
				return $elm$time$Time$Mon;
			case 5:
				return $elm$time$Time$Tue;
			default:
				return $elm$time$Time$Wed;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getWeekday = function (date) {
	return A2(
		$elm$time$Time$toWeekday,
		$elm$time$Time$utc,
		$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$toPosix(date));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getWeekday = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getWeekday;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getWeekday = function (_v0) {
	var dateTime = _v0.a;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$getWeekday(dateTime.date);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getWeekday;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToString = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToStringCondensed = A2(
	$elm$core$Basics$composeL,
	$elm$core$String$left(3),
	$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToString);
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$weekdayToString = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$weekdayToStringCondensed = A2(
	$elm$core$Basics$composeL,
	$elm$core$String$left(3),
	$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$weekdayToString);
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate = function (dateTime) {
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$weekdayToStringCondensed(
				$PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday(dateTime)),
				$elm$core$String$fromInt(
				$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(dateTime)),
				$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToStringCondensed(
				$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(dateTime)),
				$elm$core$String$fromInt(
				$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(dateTime))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$dateHtml = F2(
	function (model, date) {
		var today = model.a.today;
		var range = model.a.range;
		var isLesserThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$LT);
		};
		var isInvalid = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid, model, date);
		var isGreaterThanDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$GT);
		};
		var isPartOfTheDateRange = function () {
			var isDateBetween = F2(
				function (start, end) {
					return (isGreaterThanDate(start) && isLesserThanDate(end)) || (isLesserThanDate(start) && isGreaterThanDate(end));
				});
			if (range.$ === 'BothSelected') {
				if (range.a.$ === 'Visually') {
					var _v8 = range.a;
					var start = _v8.a;
					var shadowEnd = _v8.b;
					return A2(isDateBetween, start, shadowEnd);
				} else {
					var _v9 = range.a;
					var start = _v9.a;
					var end = _v9.b;
					return A2(isDateBetween, start, end);
				}
			} else {
				return false;
			}
		}();
		var isEqualToDate = function (date_) {
			return _Utils_eq(
				A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_),
				$elm$core$Basics$EQ);
		};
		var isToday = isEqualToDate(today);
		var isDisabled = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfDisabled, model, date);
		if (isDisabled || isInvalid) {
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('date', true),
								_Utils_Tuple2('today', isToday),
								_Utils_Tuple2('disabled', isDisabled),
								_Utils_Tuple2('invalid', isInvalid),
								_Utils_Tuple2('date-range', isPartOfTheDateRange)
							])),
						$elm$html$Html$Attributes$title(
						$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate(date))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date-inner')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(date)))
							]))
					]));
		} else {
			var isSelected = function () {
				if (range.$ === 'StartDateSelected') {
					var start = range.a;
					return isEqualToDate(start);
				} else {
					return false;
				}
			}();
			var _v0 = function () {
				if (range.$ === 'BothSelected') {
					if (range.a.$ === 'Visually') {
						var _v2 = range.a;
						var start = _v2.a;
						var end = _v2.b;
						var _v3 = function () {
							var _v4 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, end);
							if (_v4.$ === 'LT') {
								return _Utils_Tuple2(start, end);
							} else {
								return _Utils_Tuple2(end, start);
							}
						}();
						var start_ = _v3.a;
						var end_ = _v3.b;
						return isEqualToDate(start_) ? _Utils_Tuple2(true, false) : (isEqualToDate(end_) ? _Utils_Tuple2(false, true) : _Utils_Tuple2(false, false));
					} else {
						var _v5 = range.a;
						var start = _v5.a;
						var end = _v5.b;
						return _Utils_Tuple2(
							isEqualToDate(start),
							isEqualToDate(end));
					}
				} else {
					return _Utils_Tuple2(false, false);
				}
			}();
			var isStart = _v0.a;
			var isEnd = _v0.b;
			var dateClassList = _List_fromArray(
				[
					_Utils_Tuple2('date', true),
					_Utils_Tuple2('today', isToday),
					_Utils_Tuple2('selected', isSelected || (isStart || isEnd)),
					_Utils_Tuple2('date-range', isPartOfTheDateRange),
					_Utils_Tuple2('date-range-start', isStart),
					_Utils_Tuple2('date-range-end', isEnd)
				]);
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(dateClassList),
						$elm$html$Html$Attributes$title(
						$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate(date)),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SelectDate(date)),
						$elm$html$Html$Events$onMouseOver(
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$UpdateVisualSelection(date))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date-inner')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$elm$core$String$fromInt(
									$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(date)))
							]))
					]));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('empty-date')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDatesInMonth = function (_v0) {
	var year = _v0.a.year;
	var month = _v0.a.month;
	var lastDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, month));
	return A2(
		$elm$core$List$map,
		function (day) {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date(
				{
					day: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day(day),
					month: month,
					year: year
				});
		},
		A2($elm$core$List$range, 1, lastDayOfTheMonth));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth = function (_v0) {
	var date = _v0.a.date;
	var time = _v0.a.time;
	return A2(
		$elm$core$List$map,
		function (date_) {
			return $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime(
				{date: date_, time: time});
		},
		$PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth(date));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$setDay(1);
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$precedingWeekdays = function (weekday) {
	switch (weekday.$) {
		case 'Sun':
			return 0;
		case 'Mon':
			return 1;
		case 'Tue':
			return 2;
		case 'Wed':
			return 3;
		case 'Thu':
			return 4;
		case 'Fri':
			return 5;
		default:
			return 6;
	}
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $PanagiotisGeorgiadis$elm_datepicker$Common$totalCalendarCells = 6 * 7;
var $PanagiotisGeorgiadis$elm_datepicker$Common$weekdaysHtml = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('weekdays')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Su')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Mo')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Tu')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('We')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Th')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Fr')
				])),
			A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Sa')
				]))
		]));
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView = function (model) {
	var primaryDate = model.a.primaryDate;
	var precedingWeekdaysCount = function () {
		var _v0 = $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth(primaryDate);
		if (_v0.$ === 'Just') {
			var firstDayOfTheMonth = _v0.a;
			return $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$precedingWeekdays(
				$PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday(firstDayOfTheMonth));
		} else {
			return 0;
		}
	}();
	var precedingDatesHtml = A2($elm$core$List$repeat, precedingWeekdaysCount, $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml);
	var monthDates = $PanagiotisGeorgiadis$elm_datetime$DateTime$getDatesInMonth(primaryDate);
	var followingDates = ($PanagiotisGeorgiadis$elm_datepicker$Common$totalCalendarCells - precedingWeekdaysCount) - $elm$core$List$length(monthDates);
	var followingDatesHtml = A2($elm$core$List$repeat, followingDates, $PanagiotisGeorgiadis$elm_datepicker$Common$emptyDateHtml);
	var datesHtml = A2(
		$elm$core$List$map,
		$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$dateHtml(model),
		monthDates);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('calendar')
			]),
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$Common$weekdaysHtml,
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('calendar_')
					]),
				_Utils_ap(
					precedingDatesHtml,
					_Utils_ap(datesHtml, followingDatesHtml)))
			]));
};
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none = A2($elm$html$Html$Attributes$property, '', $elm$json$Json$Encode$null);
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $PanagiotisGeorgiadis$elm_datepicker$Icons$chevron = F2(
	function (direction, size) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points('2.82 4.59 12 13.75 21.18 4.59 24 7.41 12 19.41 0 7.41'),
							function () {
							switch (direction.$) {
								case 'Up':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 'Down':
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 'Left':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)');
								default:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000)');
							}
						}()
						]),
					_List_Nil)
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Left = {$: 'Left'};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText = function (date) {
	var _v0 = _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(date),
		$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(date));
	var month = _v0.a;
	var year = _v0.b;
	return $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToString(month) + (' ' + $elm$core$String$fromInt(year));
};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml = function (msg) {
	if (msg.$ === 'Just') {
		var m = msg.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('today-button'),
					$elm$html$Html$Events$onClick(m)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Today')
				]));
	} else {
		return $elm$html$Html$text('');
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$triangle = F2(
	function (direction, size) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$polygon,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$points('0 6 12 18 24 6'),
							function () {
							switch (direction.$) {
								case 'Down':
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 'Up':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 'Left':
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)');
								default:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000)');
							}
						}()
						]),
					_List_Nil)
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$doubleMonthPickerView = function (_v0) {
	var date = _v0.date;
	var previousButtonHandler = _v0.previousButtonHandler;
	var nextButtonHandler = _v0.nextButtonHandler;
	var todayButtonHandler = _v0.todayButtonHandler;
	var previousButtonHtml = function () {
		if (previousButtonHandler.$ === 'Just') {
			var action = previousButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextMonthDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(date);
	var nextButtonHtml = function () {
		if (nextButtonHandler.$ === 'Just') {
			var action = nextButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('double-month-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('previous-month')
					]),
				_List_fromArray(
					[
						previousButtonHtml,
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('month-name')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText(date))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('next-month')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('month-name')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(
								$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText(nextMonthDate))
							])),
						nextButtonHtml
					])),
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml(todayButtonHandler)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth = {$: 'NextMonth'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth = {$: 'PreviousMonth'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$MoveToToday = {$: 'MoveToToday'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$MoveToToday) : $elm$core$Maybe$Nothing;
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updatePrimaryDate = F2(
	function (dt, _v0) {
		var model = _v0.a;
		return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model(
			_Utils_update(
				model,
				{primaryDate: dt}));
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleCalendarView = function (model) {
	var today = model.a.today;
	var primaryDate = model.a.primaryDate;
	var dateLimit = model.a.dateLimit;
	var range = model.a.range;
	var timePickers = model.a.timePickers;
	var switchViewButton = function () {
		if ((range.$ === 'BothSelected') && (range.a.$ === 'Chosen')) {
			var _v4 = range.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('switch-view-button'),
						$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('switch-view-button disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
					]));
		}
	}();
	var nextDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(primaryDate);
	var nextModel = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updatePrimaryDate, nextDate, model);
	var _v0 = function () {
		if (dateLimit.$ === 'DateLimit') {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return _Utils_Tuple3(
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
					$elm$core$Basics$LT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, nextDate),
					$elm$core$Basics$GT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today),
					$elm$core$Basics$LT) && _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today),
					$elm$core$Basics$GT));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		date: primaryDate,
		nextButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		previousButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		todayButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('double-calendar-view no-select'),
				$elm$html$Html$Events$onMouseLeave($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection)
			]),
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$doubleMonthPickerView(pickerConfig),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(model),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(nextModel),
				function () {
				if (timePickers.$ === 'NoTimePickers') {
					return $elm$html$Html$text('');
				} else {
					return switchViewButton;
				}
			}()
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowCalendarView = {$: 'ShowCalendarView'};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ToggleTimeMirroring = {$: 'ToggleTimeMirroring'};
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $PanagiotisGeorgiadis$elm_datepicker$Icons$blankCheckboxPath = A2(
	$elm$svg$Svg$path,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$d('M2.66666667,0 C1.2092496,0 0,1.2092496 0,2.66666667 L0,21.3333333 C0,22.7907507 1.2092496,24 2.66666667,24 L21.3333333,24 C22.7907507,24 24,22.7907507 24,21.3333333 L24,2.66666667 C24,1.2092496 22.7907507,0 21.3333333,0 L2.66666667,0 Z M2,2 L22,2 L22,22 L2,22 L2,2 Z')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datepicker$Icons$tickedCheckboxPath = A2(
	$elm$svg$Svg$path,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$d('M21.3333333,0 L2.66666667,0 C1.19333333,0 0,1.19333333 0,2.66666667 L0,21.3333333 C0,22.8066667 1.19333333,24 2.66666667,24 L21.3333333,24 C22.8066667,24 24,22.8066667 24,21.3333333 L24,2.66666667 C24,1.19333333 22.8066667,0 21.3333333,0 Z M10.276,18.276 C9.75466667,18.7973333 8.91066667,18.7973333 8.39066667,18.276 L4,13.8853333 C3.48,13.3653333 3.48,12.52 4,12 C4.52,11.48 5.36533333,11.48 5.88533333,12 L9.33333333,15.448 L18.1146667,6.66666667 C18.6346667,6.14666667 19.48,6.14666667 20,6.66666667 C20.52,7.18666667 20.52,8.032 20,8.552 L10.276,18.276 Z')
		]),
	_List_Nil);
var $PanagiotisGeorgiadis$elm_datepicker$Icons$checkbox = F2(
	function (size, isChecked) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(size.width),
					$elm$svg$Svg$Attributes$height(size.height),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					isChecked ? $PanagiotisGeorgiadis$elm_datepicker$Icons$tickedCheckboxPath : $PanagiotisGeorgiadis$elm_datepicker$Icons$blankCheckboxPath
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString = function (_v0) {
	var pickerType = _v0.a.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return 'hh';
		case 'HH_MM':
			return 'hh_mm';
		case 'HH_MM_SS':
			return 'hh_mm_ss';
		default:
			return 'hh_mm_ss_mmmm';
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toHumanReadableTime = function (_v0) {
	var pickerType = _v0.a.pickerType;
	var hours = _v0.a.hours;
	var minutes = _v0.a.minutes;
	var seconds = _v0.a.seconds;
	var milliseconds = _v0.a.milliseconds;
	switch (pickerType.$) {
		case 'HH':
			return hours;
		case 'HH_MM':
			return A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[hours, minutes]));
		case 'HH_MM_SS':
			return A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[hours, minutes, seconds]));
		default:
			return A2(
				$elm$core$String$join,
				'.',
				_List_fromArray(
					[
						A2(
						$elm$core$String$join,
						':',
						_List_fromArray(
							[hours, minutes, seconds])),
						milliseconds
					]));
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement = function (a) {
	return {$: 'Decrement', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Down = {$: 'Down'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment = function (a) {
	return {$: 'Increment', a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler = F2(
	function (a, b) {
		return {$: 'InputHandler', a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Up = {$: 'Up'};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update = F2(
	function (a, b) {
		return {$: 'Update', a: a, b: b};
	});
var $elm$html$Html$Attributes$maxlength = function (n) {
	return A2(
		_VirtualDom_attribute,
		'maxlength',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Events$onBlur = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'blur',
		$elm$json$Json$Decode$succeed(msg));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker = function (_v0) {
	var hours = _v0.a.hours;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('hours-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours, hours)),
						$elm$html$Html$Attributes$value(hours),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisSegmentSeparator = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('time-separator no-select')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('.')
		]));
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisecondsPicker = function (_v0) {
	var milliseconds = _v0.a.milliseconds;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('milliseconds-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds, milliseconds)),
						$elm$html$Html$Attributes$value(milliseconds),
						$elm$html$Html$Attributes$maxlength(3)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker = function (_v0) {
	var minutes = _v0.a.minutes;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('minutes-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes, minutes)),
						$elm$html$Html$Attributes$value(minutes),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker = function (_v0) {
	var seconds = _v0.a.seconds;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('seconds-picker')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Up,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds, seconds)),
						$elm$html$Html$Attributes$value(seconds),
						$elm$html$Html$Attributes$maxlength(2)
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Down,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator = A2(
	$elm$html$Html$span,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('time-separator no-select')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text(':')
		]));
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$view = function (model) {
	var pickerType = model.a.pickerType;
	switch (pickerType.$) {
		case 'HH':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model)
					]));
		case 'HH_MM':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model)
					]));
		case 'HH_MM_SS':
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker(model)
					]));
		default:
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-picker')
					]),
				_List_fromArray(
					[
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$timeSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker(model),
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisSegmentSeparator,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$millisecondsPicker(model)
					]));
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$view;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView = function (_v0) {
	var range = _v0.a.range;
	var timePickers = _v0.a.timePickers;
	var viewType = _v0.a.viewType;
	if (timePickers.$ === 'TimePickers') {
		var startPicker = timePickers.a.startPicker;
		var endPicker = timePickers.a.endPicker;
		var pickerTitles = timePickers.a.pickerTitles;
		var mirrorTimes = timePickers.a.mirrorTimes;
		var titleHtml = function (str) {
			return $elm$core$String$isEmpty(str) ? $elm$html$Html$text('') : A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('header')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(str)
					]));
		};
		var pickerTypeString = function () {
			if (viewType.$ === 'SingleCalendar') {
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString(startPicker);
			} else {
				return '';
			}
		}();
		var displayDateHtml = F2(
			function (date, timePicker) {
				if (date.$ === 'Just') {
					var d = date.a;
					var dateTimeStr = A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[
								$PanagiotisGeorgiadis$elm_datepicker$Utils$Time$toHumanReadableDate(d),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toHumanReadableTime(timePicker)
							]));
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('date')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(dateTimeStr)
							]));
				} else {
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('placeholder')
							]),
						_List_Nil);
				}
			});
		var _v2 = function () {
			if ((range.$ === 'BothSelected') && (range.a.$ === 'Chosen')) {
				var _v4 = range.a;
				var start = _v4.a;
				var end = _v4.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Just(start),
					$elm$core$Maybe$Just(end));
			} else {
				return _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
			}
		}();
		var rangeStart = _v2.a;
		var rangeEnd = _v2.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('double-clock-view ' + pickerTypeString)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('time-picker-container no-select')
						]),
					_List_fromArray(
						[
							titleHtml(pickerTitles.start),
							A2(displayDateHtml, rangeStart, startPicker),
							A2(
							$elm$html$Html$map,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg,
							$PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view(startPicker)),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('checkbox'),
									$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ToggleTimeMirroring)
								]),
							_List_fromArray(
								[
									A2(
									$PanagiotisGeorgiadis$elm_datepicker$Icons$checkbox,
									A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '16', '16'),
									mirrorTimes),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('text')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											'Same as ' + $elm$core$String$toLower(pickerTitles.end))
										]))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('time-picker-container no-select')
						]),
					_List_fromArray(
						[
							titleHtml(pickerTitles.end),
							A2(displayDateHtml, rangeEnd, endPicker),
							A2(
							$elm$html$Html$map,
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg,
							$PanagiotisGeorgiadis$elm_datepicker$TimePicker$View$view(endPicker)),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('filler')
								]),
							_List_Nil)
						])),
					function () {
					if (viewType.$ === 'DoubleTimePicker') {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('switch-view-button'),
									$elm$html$Html$Events$onClick($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowCalendarView)
								]),
							_List_fromArray(
								[
									A2(
									$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
									$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
									A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}()
				]));
	} else {
		return $elm$html$Html$text('');
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$singleMonthPickerView = function (_v0) {
	var date = _v0.date;
	var previousButtonHandler = _v0.previousButtonHandler;
	var nextButtonHandler = _v0.nextButtonHandler;
	var todayButtonHandler = _v0.todayButtonHandler;
	var previousButtonHtml = function () {
		if (previousButtonHandler.$ === 'Just') {
			var action = previousButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Left,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextButtonHtml = function () {
		if (nextButtonHandler.$ === 'Just') {
			var action = nextButtonHandler.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action'),
						$elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('action disabled')
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$triangle,
						$PanagiotisGeorgiadis$elm_datepicker$Icons$Right,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('single-month-picker')
			]),
		_List_fromArray(
			[
				previousButtonHtml,
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('month-name')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText(date))
					])),
				nextButtonHtml,
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml(todayButtonHandler)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$singleCalendarView = function (model) {
	var today = model.a.today;
	var primaryDate = model.a.primaryDate;
	var dateLimit = model.a.dateLimit;
	var _v0 = function () {
		if (dateLimit.$ === 'DateLimit') {
			var minDate = dateLimit.a.minDate;
			var maxDate = dateLimit.a.maxDate;
			return _Utils_Tuple3(
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
					$elm$core$Basics$LT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, primaryDate),
					$elm$core$Basics$GT),
				_Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today),
					$elm$core$Basics$LT) && _Utils_eq(
					A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today),
					$elm$core$Basics$GT));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		date: primaryDate,
		nextButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		previousButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		todayButtonHandler: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('single-calendar-view no-select'),
				$elm$html$Html$Events$onMouseLeave($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection)
			]),
		_List_fromArray(
			[
				$PanagiotisGeorgiadis$elm_datepicker$MonthPicker$singleMonthPickerView(pickerConfig),
				$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$calendarView(model)
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$view = function (model) {
	var viewType = model.a.viewType;
	var range = model.a.range;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('date-range-picker')
			]),
		function () {
			switch (viewType.$) {
				case 'SingleCalendar':
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$singleCalendarView(model),
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView(model)
						]);
				case 'DoubleCalendar':
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleCalendarView(model)
						]);
				default:
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView(model)
						]);
			}
		}());
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$view = $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$view;
var $author$project$DateSelect$view = function (_v0) {
	var picker = _v0.picker;
	var selectedRange = _v0.selectedRange;
	var isFocused = _v0.isFocused;
	var dateValue = function () {
		if (selectedRange.$ === 'Just') {
			var startDate = selectedRange.a.startDate;
			var endDate = selectedRange.a.endDate;
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					[
						$elm$core$String$fromInt(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(startDate)),
						$author$project$Extra$TimeUtils$monthToString(
						$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(startDate)),
						_Utils_ap(
						$elm$core$String$fromInt(
							$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(startDate)),
						_Utils_ap(
							_Utils_eq(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(startDate),
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(endDate)) ? '-' : (' - ' + ($author$project$Extra$TimeUtils$monthToString(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(endDate)) + ' ')),
							$elm$core$String$fromInt(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getDay(endDate)))),
						'(' + ($elm$core$String$fromInt(
						A2($PanagiotisGeorgiadis$elm_datetime$DateTime$getDayDiff, startDate, endDate)) + ' days)')
					]));
		} else {
			return '';
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('section')
			]),
		_List_fromArray(
			[
				A2($elm$html$Html$h3, _List_Nil, _List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('input-group'),
						A2(
						$elm$html$Html$Events$stopPropagationOn,
						'click',
						$elm$json$Json$Decode$succeed(
							_Utils_Tuple2($author$project$DateSelect$NoOp, true)))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Events$onFocus($author$project$DateSelect$FocusHandler),
								$elm$html$Html$Attributes$value(dateValue),
								$elm$html$Html$Attributes$readonly(true),
								A2($elm$html$Html$Attributes$style, 'width', '30em')
							]),
						_List_Nil),
						isFocused ? A2(
						$elm$html$Html$map,
						$author$project$DateSelect$PickerMsg,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$view(picker)) : $elm$html$Html$text('')
					])),
				A2($elm$html$Html$br, _List_Nil, _List_Nil)
			]));
};
var $author$project$Selectize$Selectize$PreventClosing = function (a) {
	return {$: 'PreventClosing', a: a};
};
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
var $author$project$Selectize$Selectize$noOp = function (attrs) {
	return A2(
		$elm$core$List$map,
		$elm$html$Html$Attributes$map(
			function (_v0) {
				return $author$project$Selectize$Selectize$NoOp;
			}),
		attrs);
};
var $author$project$Selectize$Selectize$Select = function (a) {
	return {$: 'Select', a: a};
};
var $author$project$Selectize$Selectize$SetMouseFocus = function (a) {
	return {$: 'SetMouseFocus', a: a};
};
var $author$project$Selectize$Selectize$mapToNoOp = $elm$html$Html$map(
	function (_v0) {
		return $author$project$Selectize$Selectize$NoOp;
	});
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Selectize$Selectize$viewEntry = F4(
	function (config, keyboardFocused, mouseFocus, e) {
		var _v0 = function () {
			if (e.$ === 'Entry') {
				var actualEntry = e.a;
				return A3(
					config.entry,
					actualEntry,
					_Utils_eq(
						mouseFocus,
						$elm$core$Maybe$Just(actualEntry)),
					keyboardFocused);
			} else {
				var title = e.a;
				return config.divider(title);
			}
		}();
		var attributes = _v0.attributes;
		var children = _v0.children;
		var liAttrs = function (attrs) {
			return _Utils_ap(
				attrs,
				$author$project$Selectize$Selectize$noOp(attributes));
		};
		return A2(
			$elm$html$Html$li,
			liAttrs(
				function () {
					if (e.$ === 'Entry') {
						var actualEntry = e.a;
						return _List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Selectize$Selectize$Select(actualEntry)),
								$elm$html$Html$Events$onMouseEnter(
								$author$project$Selectize$Selectize$SetMouseFocus(
									$elm$core$Maybe$Just(actualEntry))),
								$elm$html$Html$Events$onMouseLeave(
								$author$project$Selectize$Selectize$SetMouseFocus($elm$core$Maybe$Nothing))
							]);
					} else {
						return _List_Nil;
					}
				}()),
			A2($elm$core$List$map, $author$project$Selectize$Selectize$mapToNoOp, children));
	});
var $author$project$Selectize$Selectize$viewFocusedEntry = function (config) {
	return A2($author$project$Selectize$Selectize$viewEntry, config, true);
};
var $author$project$Selectize$Selectize$viewCurrentEntry = F3(
	function (config, state, current) {
		return A3($author$project$Selectize$Selectize$viewFocusedEntry, config, state.mouseFocus, current.a);
	});
var $author$project$Selectize$Selectize$viewUnfocusedEntry = function (config) {
	return A2($author$project$Selectize$Selectize$viewEntry, config, false);
};
var $author$project$Selectize$Selectize$viewEntries = F3(
	function (config, state, front) {
		return A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$first,
				A3($elm$html$Html$Lazy$lazy3, $author$project$Selectize$Selectize$viewUnfocusedEntry, config, state.mouseFocus)),
			front);
	});
var $author$project$Selectize$Selectize$view = F3(
	function (config, selection, state) {
		var selectionText = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			A2(
				$elm$core$Maybe$andThen,
				$author$project$Selectize$Selectize$selectFirst(state.entries),
				selection));
		var menuAttrs = _Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$author$project$Selectize$Selectize$menuId(state.id)),
					$elm$html$Html$Events$onMouseDown(
					$author$project$Selectize$Selectize$PreventClosing(true)),
					$elm$html$Html$Events$onMouseUp(
					$author$project$Selectize$Selectize$PreventClosing(false)),
					A2($elm$html$Html$Attributes$style, 'position', 'absolute')
				]),
			$author$project$Selectize$Selectize$noOp(config.menu));
		var _v0 = state.zipList;
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$html$Html$div,
				_Utils_ap(
					$author$project$Selectize$Selectize$noOp(config.container),
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
							A2($elm$html$Html$Attributes$style, 'position', 'relative')
						])),
				_List_fromArray(
					[
						A4(config.input, state.id, selectionText, state.query, state.open),
						A2(
						$elm$html$Html$div,
						menuAttrs,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								$author$project$Selectize$Selectize$noOp(config.ul),
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeR,
										$author$project$Selectize$Selectize$removeLabel,
										A2($author$project$Selectize$Selectize$viewUnfocusedEntry, config, $elm$core$Maybe$Nothing)),
									state.entries))
							]))
					]));
		} else {
			var zipList = _v0.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'position', 'relative')
					]),
				_List_fromArray(
					[
						A4(config.input, state.id, selectionText, state.query, state.open),
						A2(
						$elm$html$Html$div,
						menuAttrs,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								$author$project$Selectize$Selectize$noOp(config.ul),
								$elm$core$List$concat(
									_List_fromArray(
										[
											$elm$core$List$reverse(
											A3($author$project$Selectize$Selectize$viewEntries, config, state, zipList.front)),
											_List_fromArray(
											[
												A3($author$project$Selectize$Selectize$viewCurrentEntry, config, state, zipList.current)
											]),
											A3($author$project$Selectize$Selectize$viewEntries, config, state, zipList.back)
										])))
							]))
					]));
		}
	});
var $author$project$Selectize$view = $elm$html$Html$Lazy$lazy3($author$project$Selectize$Selectize$view);
var $elm$html$Html$caption = _VirtualDom_node('caption');
var $billstclair$elm_sortable_table$Table$applySorter = F3(
	function (isReversed, sorter, data) {
		switch (sorter.$) {
			case 'None':
				return data;
			case 'Increasing':
				var srt = sorter.a;
				return srt(data);
			case 'Decreasing':
				var srt = sorter.a;
				return $elm$core$List$reverse(
					srt(data));
			case 'IncOrDec':
				var srt = sorter.a;
				return isReversed ? $elm$core$List$reverse(
					srt(data)) : srt(data);
			default:
				var srt = sorter.a;
				return isReversed ? srt(data) : $elm$core$List$reverse(
					srt(data));
		}
	});
var $billstclair$elm_sortable_table$Table$findSorter = F2(
	function (selectedColumn, columnData) {
		findSorter:
		while (true) {
			if (!columnData.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var name = columnData.a.name;
				var sorter = columnData.a.sorter;
				var remainingColumnData = columnData.b;
				if (_Utils_eq(name, selectedColumn)) {
					return $elm$core$Maybe$Just(sorter);
				} else {
					var $temp$selectedColumn = selectedColumn,
						$temp$columnData = remainingColumnData;
					selectedColumn = $temp$selectedColumn;
					columnData = $temp$columnData;
					continue findSorter;
				}
			}
		}
	});
var $billstclair$elm_sortable_table$Table$sort = F3(
	function (_v0, columnData, data) {
		var selectedColumn = _v0.a;
		var isReversed = _v0.b;
		var _v1 = A2($billstclair$elm_sortable_table$Table$findSorter, selectedColumn, columnData);
		if (_v1.$ === 'Nothing') {
			return data;
		} else {
			var sorter = _v1.a;
			return A3($billstclair$elm_sortable_table$Table$applySorter, isReversed, sorter, data);
		}
	});
var $billstclair$elm_sortable_table$Table$getSortedData = F3(
	function (_v0, state, data) {
		var toId = _v0.a.toId;
		var toMsg = _v0.a.toMsg;
		var columns = _v0.a.columns;
		var customizations = _v0.a.customizations;
		return A3($billstclair$elm_sortable_table$Table$sort, state, columns, data);
	});
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tfoot = _VirtualDom_node('tfoot');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $billstclair$elm_sortable_table$Table$Reversible = function (a) {
	return {$: 'Reversible', a: a};
};
var $billstclair$elm_sortable_table$Table$Sortable = function (a) {
	return {$: 'Sortable', a: a};
};
var $billstclair$elm_sortable_table$Table$Unsortable = {$: 'Unsortable'};
var $billstclair$elm_sortable_table$Table$onClick = F3(
	function (name, isReversed, toMsg) {
		return A2(
			$elm$html$Html$Events$on,
			'click',
			A2(
				$elm$json$Json$Decode$map,
				toMsg,
				A3(
					$elm$json$Json$Decode$map2,
					$billstclair$elm_sortable_table$Table$State,
					$elm$json$Json$Decode$succeed(name),
					$elm$json$Json$Decode$succeed(isReversed))));
	});
var $billstclair$elm_sortable_table$Table$toHeaderInfo = F3(
	function (_v0, toMsg, _v1) {
		var sortName = _v0.a;
		var isReversed = _v0.b;
		var name = _v1.name;
		var sorter = _v1.sorter;
		switch (sorter.$) {
			case 'None':
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Unsortable,
					A3($billstclair$elm_sortable_table$Table$onClick, sortName, isReversed, toMsg));
			case 'Increasing':
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Sortable(
						!_Utils_eq(name, sortName)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
			case 'Decreasing':
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Sortable(
						_Utils_eq(name, sortName)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
			case 'IncOrDec':
				return _Utils_eq(name, sortName) ? _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Reversible(
						$elm$core$Maybe$Just(!isReversed)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, !isReversed, toMsg)) : _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Reversible($elm$core$Maybe$Nothing),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
			default:
				return _Utils_eq(name, sortName) ? _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Reversible(
						$elm$core$Maybe$Just(isReversed)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, !isReversed, toMsg)) : _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Reversible($elm$core$Maybe$Nothing),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
		}
	});
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $elm$html$Html$td = _VirtualDom_node('td');
var $billstclair$elm_sortable_table$Table$viewCell = F2(
	function (data, _v0) {
		var viewData = _v0.viewData;
		var details = viewData(data);
		return A2($elm$html$Html$td, details.attributes, details.children);
	});
var $billstclair$elm_sortable_table$Table$viewRowHelp = F3(
	function (columns, toRowAttrs, data) {
		return A2(
			$elm$html$Html$tr,
			toRowAttrs(data),
			A2(
				$elm$core$List$map,
				$billstclair$elm_sortable_table$Table$viewCell(data),
				columns));
	});
var $billstclair$elm_sortable_table$Table$viewRow = F4(
	function (toId, columns, toRowAttrs, data) {
		return _Utils_Tuple2(
			toId(data),
			A4($elm$html$Html$Lazy$lazy3, $billstclair$elm_sortable_table$Table$viewRowHelp, columns, toRowAttrs, data));
	});
var $billstclair$elm_sortable_table$Table$view = F3(
	function (conf, state, data) {
		var toId = conf.a.toId;
		var toMsg = conf.a.toMsg;
		var columns = conf.a.columns;
		var customizations = conf.a.customizations;
		var theadDetails = customizations.thead(
			A2(
				$elm$core$List$map,
				A2($billstclair$elm_sortable_table$Table$toHeaderInfo, state, toMsg),
				columns));
		var thead = A2(
			$elm$html$Html$thead,
			theadDetails.attributes,
			_List_fromArray(
				[
					A2($elm$html$Html$tr, _List_Nil, theadDetails.children)
				]));
		var sortedData = A3($billstclair$elm_sortable_table$Table$getSortedData, conf, state, data);
		var tbody = A3(
			$elm$html$Html$Keyed$node,
			'tbody',
			customizations.tbodyAttrs,
			A2(
				$elm$core$List$map,
				A3($billstclair$elm_sortable_table$Table$viewRow, toId, columns, customizations.rowAttrs),
				sortedData));
		var withFoot = function () {
			var _v1 = customizations.tfoot;
			if (_v1.$ === 'Nothing') {
				return A2($elm$core$List$cons, tbody, _List_Nil);
			} else {
				var attributes = _v1.a.attributes;
				var children = _v1.a.children;
				return A2(
					$elm$core$List$cons,
					A2($elm$html$Html$tfoot, attributes, children),
					A2($elm$core$List$cons, tbody, _List_Nil));
			}
		}();
		return A2(
			$elm$html$Html$table,
			customizations.tableAttrs,
			function () {
				var _v0 = customizations.caption;
				if (_v0.$ === 'Nothing') {
					return A2($elm$core$List$cons, thead, withFoot);
				} else {
					var attributes = _v0.a.attributes;
					var children = _v0.a.children;
					return A2(
						$elm$core$List$cons,
						A2($elm$html$Html$caption, attributes, children),
						A2($elm$core$List$cons, thead, withFoot));
				}
			}());
	});
var $author$project$Selectize$Selectize$CloseMenu = {$: 'CloseMenu'};
var $author$project$Selectize$Selectize$SetQuery = function (a) {
	return {$: 'SetQuery', a: a};
};
var $author$project$Selectize$Selectize$BlurTextfield = {$: 'BlurTextfield'};
var $author$project$Selectize$Selectize$ClearSelection = {$: 'ClearSelection'};
var $author$project$Selectize$Selectize$FocusTextfield = {$: 'FocusTextfield'};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $author$project$Selectize$Selectize$buttons = F4(
	function (clearButton, toggleButton, sthSelected, open) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'right', '0'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex')
				]),
			_List_fromArray(
				[
					function () {
					var _v0 = _Utils_Tuple2(clearButton, sthSelected);
					if ((_v0.a.$ === 'Just') && _v0.b) {
						var clear = _v0.a.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Selectize$Selectize$ClearSelection)
								]),
							_List_fromArray(
								[
									$author$project$Selectize$Selectize$mapToNoOp(clear)
								]));
					} else {
						return $elm$html$Html$text('');
					}
				}(),
					function () {
					if (toggleButton.$ === 'Just') {
						var toggle = toggleButton.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									function () {
									if (open) {
										return A2(
											$elm$html$Html$Events$preventDefaultOn,
											'click',
											$elm$json$Json$Decode$succeed(
												_Utils_Tuple2($author$project$Selectize$Selectize$BlurTextfield, true)));
									} else {
										return A2(
											$elm$html$Html$Events$preventDefaultOn,
											'click',
											$elm$json$Json$Decode$succeed(
												_Utils_Tuple2($author$project$Selectize$Selectize$FocusTextfield, true)));
									}
								}()
								]),
							_List_fromArray(
								[
									$author$project$Selectize$Selectize$mapToNoOp(
									toggle(open))
								]));
					} else {
						return A2($elm$html$Html$div, _List_Nil, _List_Nil);
					}
				}()
				]));
	});
var $author$project$Selectize$Selectize$OpenMenu = F2(
	function (a, b) {
		return {$: 'OpenMenu', a: a, b: b};
	});
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Selectize$Selectize$entryHeightsDecoder = function () {
	var loop = F2(
		function (idx, xs) {
			return A2(
				$elm$json$Json$Decode$andThen,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Maybe$map(
						function (x) {
							return A2(
								loop,
								idx + 1,
								A2($elm$core$List$cons, x, xs));
						}),
					$elm$core$Maybe$withDefault(
						$elm$json$Json$Decode$succeed(xs))),
				$elm$json$Json$Decode$maybe(
					A2(
						$elm$json$Json$Decode$at,
						_List_fromArray(
							[
								$elm$core$String$fromInt(idx),
								'offsetHeight'
							]),
						$elm$json$Json$Decode$float)));
		});
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$List$reverse,
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['target', 'parentElement', 'parentElement', 'childNodes', '1', 'childNodes', '0', 'childNodes']),
			A2(loop, 0, _List_Nil)));
}();
var $author$project$Selectize$Selectize$menuHeightDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'parentElement', 'parentElement', 'childNodes', '1', 'clientHeight']),
	$elm$json$Json$Decode$float);
var $author$project$Selectize$Selectize$scrollTopDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'parentElement', 'parentElement', 'childNodes', '1', 'scrollTop']),
	$elm$json$Json$Decode$float);
var $author$project$Selectize$Selectize$focusDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (entryHeights, menuHeight, scrollTop) {
			return A2(
				$author$project$Selectize$Selectize$OpenMenu,
				{entries: entryHeights, menu: menuHeight},
				scrollTop);
		}),
	$author$project$Selectize$Selectize$entryHeightsDecoder,
	$author$project$Selectize$Selectize$menuHeightDecoder,
	$author$project$Selectize$Selectize$scrollTopDecoder);
var $author$project$Selectize$Selectize$Down = {$: 'Down'};
var $author$project$Selectize$Selectize$SelectKeyboardFocusAndBlur = {$: 'SelectKeyboardFocusAndBlur'};
var $author$project$Selectize$Selectize$SetKeyboardFocus = F2(
	function (a, b) {
		return {$: 'SetKeyboardFocus', a: a, b: b};
	});
var $author$project$Selectize$Selectize$Up = {$: 'Up'};
var $author$project$Selectize$Selectize$fromResult = function (result) {
	if (result.$ === 'Ok') {
		var val = result.a;
		return $elm$json$Json$Decode$succeed(val);
	} else {
		var reason = result.a;
		return $elm$json$Json$Decode$fail(reason);
	}
};
var $elm$html$Html$Events$keyCode = A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int);
var $author$project$Selectize$Selectize$keydownDecoder = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Selectize$Selectize$fromResult,
	A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (code, scrollTop) {
				switch (code) {
					case 38:
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								A2($author$project$Selectize$Selectize$SetKeyboardFocus, $author$project$Selectize$Selectize$Up, scrollTop),
								true));
					case 40:
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								A2($author$project$Selectize$Selectize$SetKeyboardFocus, $author$project$Selectize$Selectize$Down, scrollTop),
								true));
					case 13:
						return $elm$core$Result$Ok(
							_Utils_Tuple2($author$project$Selectize$Selectize$SelectKeyboardFocusAndBlur, true));
					case 27:
						return $elm$core$Result$Ok(
							_Utils_Tuple2($author$project$Selectize$Selectize$BlurTextfield, true));
					default:
						return $elm$core$Result$Err('not handling that key here');
				}
			}),
		$elm$html$Html$Events$keyCode,
		$author$project$Selectize$Selectize$scrollTopDecoder));
var $author$project$Selectize$Selectize$keyupDecoder = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Selectize$Selectize$fromResult,
	A2(
		$elm$json$Json$Decode$map,
		function (code) {
			switch (code) {
				case 8:
					return $elm$core$Result$Ok($author$project$Selectize$Selectize$ClearSelection);
				case 46:
					return $elm$core$Result$Ok($author$project$Selectize$Selectize$ClearSelection);
				default:
					return $elm$core$Result$Err('not handling that key here');
			}
		},
		$elm$html$Html$Events$keyCode));
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$Selectize$Selectize$autocomplete = F5(
	function (config, id, selection, query, open) {
		var inputAttrs = $elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						$elm$html$Html$Attributes$value(query),
						$elm$html$Html$Attributes$id(
						$author$project$Selectize$Selectize$textfieldId(id)),
						A2($elm$html$Html$Events$on, 'focus', $author$project$Selectize$Selectize$focusDecoder)
					]),
					_Utils_eq(selection, $elm$core$Maybe$Nothing) ? (open ? _List_fromArray(
					[
						$elm$html$Html$Attributes$placeholder(config.placeholder)
					]) : _List_fromArray(
					[
						$elm$html$Html$Attributes$value(config.placeholder)
					])) : _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'color', 'transparent')
					]),
					open ? _List_fromArray(
					[
						$elm$html$Html$Events$onBlur($author$project$Selectize$Selectize$CloseMenu),
						A2($elm$html$Html$Events$on, 'keyup', $author$project$Selectize$Selectize$keyupDecoder),
						A2($elm$html$Html$Events$preventDefaultOn, 'keydown', $author$project$Selectize$Selectize$keydownDecoder),
						$elm$html$Html$Events$onInput($author$project$Selectize$Selectize$SetQuery)
					]) : _List_Nil,
					$author$project$Selectize$Selectize$noOp(
					A2(
						config.attrs,
						!_Utils_eq(selection, $elm$core$Maybe$Nothing),
						open))
				]));
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2($elm$html$Html$input, inputAttrs, _List_Nil),
					A2(
					$elm$html$Html$div,
					_Utils_ap(
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
								A2($elm$html$Html$Attributes$style, 'width', '100%'),
								A2($elm$html$Html$Attributes$style, 'height', '100%'),
								A2($elm$html$Html$Attributes$style, 'left', '0'),
								A2($elm$html$Html$Attributes$style, 'top', '0'),
								A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
								A2($elm$html$Html$Attributes$style, 'border-color', 'transparent'),
								A2($elm$html$Html$Attributes$style, 'background-color', 'transparent'),
								A2($elm$html$Html$Attributes$style, 'box-shadow', 'none')
							]),
						$author$project$Selectize$Selectize$noOp(
							A2(
								config.attrs,
								!_Utils_eq(selection, $elm$core$Maybe$Nothing),
								open))),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($elm$core$Maybe$withDefault, '', selection))
						])),
					A4(
					$author$project$Selectize$Selectize$buttons,
					config.clearButton,
					config.toggleButton,
					!_Utils_eq(selection, $elm$core$Maybe$Nothing),
					open)
				]));
	});
var $author$project$Selectize$autocomplete = function (config) {
	return $author$project$Selectize$Selectize$autocomplete(config);
};
var $author$project$Main$clearButton = $elm$core$Maybe$Just(
	A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('selectize__menu-toggle')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$i,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('material-icons'),
						$elm$html$Html$Attributes$class('selectize__icon')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('clear')
					]))
			])));
var $author$project$Main$toggleButton = $elm$core$Maybe$Just(
	function (open) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('selectize__menu-toggle'),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('selectize__menu-toggle--menu-open', open)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$i,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('material-icons'),
							$elm$html$Html$Attributes$class('selectize__icon')
						]),
					_List_fromArray(
						[
							open ? $elm$html$Html$text('arrow_drop_up') : $elm$html$Html$text('arrow_drop_down')
						]))
				]));
	});
var $author$project$Main$textfieldSelector = $author$project$Selectize$autocomplete(
	{
		attrs: F2(
			function (sthSelected, open) {
				return _List_fromArray(
					[
						$elm$html$Html$Attributes$class('selectize__textfield'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('selectize__textfield--selection', sthSelected),
								_Utils_Tuple2('selectize__textfield--no-selection', !sthSelected),
								_Utils_Tuple2('selectize__textfield--menu-open', open)
							]))
					]);
			}),
		clearButton: $author$project$Main$clearButton,
		placeholder: 'Select a Country',
		toggleButton: $author$project$Main$toggleButton
	});
var $author$project$Selectize$viewConfig = function (config) {
	return {container: config.container, divider: config.divider, entry: config.entry, input: config.input, menu: config.menu, ul: config.ul};
};
var $author$project$Main$viewConfig = function (selector) {
	var entryFunction = F3(
		function (tree, mouseFocused, keyboardFocused) {
			return {
				attributes: _List_fromArray(
					[
						$elm$html$Html$Attributes$class('selectize__item'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('selectize__item--mouse-selected', mouseFocused),
								_Utils_Tuple2('selectize__item--key-selected', keyboardFocused)
							]))
					]),
				children: _List_fromArray(
					[
						$elm$html$Html$text(tree.displayname)
					])
			};
		});
	return $author$project$Selectize$viewConfig(
		{
			container: _List_Nil,
			divider: function (title) {
				return {
					attributes: _List_fromArray(
						[
							$elm$html$Html$Attributes$class('selectize__divider')
						]),
					children: _List_fromArray(
						[
							$elm$html$Html$text(title)
						])
				};
			},
			entry: entryFunction,
			input: selector,
			menu: _List_fromArray(
				[
					$elm$html$Html$Attributes$class('selectize__menu')
				]),
			ul: _List_fromArray(
				[
					$elm$html$Html$Attributes$class('selectize__list')
				])
		});
};
var $author$project$Main$viewConfigTextfield = $author$project$Main$viewConfig($author$project$Main$textfieldSelector);
var $author$project$Main$view = function (model) {
	var tableState = model.tableState;
	var tableQuery = model.tableQuery;
	var lowerQuery = $elm$core$String$toLower(tableQuery);
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-flow', 'column')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'display', 'block')
							]),
						_List_fromArray(
							[
								A2($elm$html$Html$div, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'width', '30rem')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$map,
										$author$project$Main$TextfieldMenuMsg,
										A3($author$project$Selectize$view, $author$project$Main$viewConfigTextfield, model.textfieldSelection, model.textfieldMenu))
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						function () {
						var _v0 = model.singleDateRangePicker;
						if (_v0.$ === 'Just') {
							var picker = _v0.a;
							return A2(
								$elm$html$Html$map,
								$author$project$Main$SingleDateRangePickerWithInputMsg,
								$author$project$DateSelect$view(picker));
						} else {
							return $elm$html$Html$text('Single date range picker with input hasn\'t been initialised!');
						}
					}()
					])),
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						function () {
						var _v1 = model.city;
						switch (_v1.$) {
							case 'Loading':
								return $elm$html$Html$text('Loading city data, please stand by...');
							case 'Success':
								var city = _v1.a;
								var acceptableCity = A2(
									$elm$core$List$filter,
									A2(
										$elm$core$Basics$composeL,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$String$contains(lowerQuery),
											$elm$core$String$toLower),
										function ($) {
											return $.n;
										}),
									city);
								return A2(
									$elm$html$Html$div,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$h3,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(
													'Cities in ' + A2(
														$elm$core$Maybe$withDefault,
														'',
														A2(
															$elm$core$Maybe$map,
															function ($) {
																return $.displayname;
															},
															model.textfieldSelection)))
												])),
											A3(
											$billstclair$elm_sortable_table$Table$view,
											$author$project$Main$config(model),
											tableState,
											acceptableCity)
										]));
							case 'Failure':
								var error = _v1.a;
								return $elm$html$Html$text(
									'Oh noes, city loading failed with error: ' + $author$project$HttpExtra$errorToString(error));
							default:
								return A2(
									$elm$html$Html$div,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$h3,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('Please select a country')
												])),
											A2(
											$elm$html$Html$div,
											_List_Nil,
											_List_fromArray(
												[
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													$elm$html$Html$text('UNLI Cities spatial database will help you compare cities of a country.'),
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													$elm$html$Html$text('It\'s useful for people who are choosing where to move or travel.'),
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													$elm$html$Html$text('Using data from the European Commission licensed under CC BY 4.0 © European Union, 1995-2019 '),
													A2($elm$html$Html$br, _List_Nil, _List_Nil),
													$elm$html$Html$text('and OpenStreetMap licensed under ODbL © OpenStreetMap contributors')
												]))
										]));
						}
					}()
					]))
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		init: function (_v0) {
			return $author$project$Main$init($author$project$Main$cities);
		},
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Main.City":{"args":[],"type":"{ id : Basics.Int, n : String.String, s : String.String, c : String.String, u : String.String, lat : String.String, lon : String.String, dist : Basics.Int, noise : Basics.Int, popMax : Basics.Int, rain : List.List (List.List Basics.Int), coVar : List.List Basics.Int, tmp : List.List (List.List Basics.Int), srad : List.List (List.List Basics.Int), wind : List.List (List.List Basics.Int), interesting : List.List Basics.Int, boring : List.List Basics.Int, safety : List.List Basics.Int, danger : List.List Basics.Int, coastline : List.List Basics.Int, tourismcount : List.List Basics.Int, publicTransport : List.List Basics.Int, slope : List.List Basics.Int, popghs : List.List Basics.Int, osmpop : List.List Basics.Int, builtEnv : List.List Basics.Int, groadsCount : List.List Basics.Int, groadsAvgLength : List.List Basics.Int, toilets : List.List Basics.Int, food : List.List Basics.Int, accessibilityToCity : List.List Basics.Int, popd : List.List (List.List Basics.Int), navw : List.List Basics.Int, globUrban : List.List Basics.Int, globCrop : List.List Basics.Int, globForest : List.List Basics.Int, globVe : List.List Basics.Int, globWet : List.List Basics.Int, osmn : List.List Basics.Int, dist_sum : Basics.Int, osm_interesting_interesting_sum_sum : Basics.Int, osm_boring_boring_sum : Basics.Int, osm_safe_safety_sum : Basics.Int, danger_sum : Basics.Int, coastline_100m_count_sum : Basics.Int, flickr2_lowview_count_total_sum : Basics.Int, flickr2_medview_count_total_sum : Basics.Int, flickr2_highview_count_total_sum : Basics.Int, public_transport_sum : Basics.Int, slope100m__mean_sum : Basics.Int, ghs_gpw_pop_2015__sum_sum : Basics.Int, ghs_built_lds__mean_sum : Basics.Int, toilets_sum : Basics.Int, food_sum : Basics.Int, access_50k_mean_sum : Basics.Int, navwater2009__mean_sum : Basics.Int, globcover_urban_sum : Basics.Int, globcover_irrigated_cropland_sum : Basics.Int, globcover_rainfed_cropland_sum : Basics.Int, globcover_mosiac_cropland_sum : Basics.Int, dryadv3croplands1992_mean_sum : Basics.Int, globcover_semideciduous_sum : Basics.Int, globcover_closed_broadleaved_sum : Basics.Int, globcover_open_broadleaved_sum : Basics.Int, globcover_closed_needleleaved_sum : Basics.Int, globcover_open_needleleaved_sum : Basics.Int, globcover_mixed_broadleaved_sum : Basics.Int, globcover_mosiac_forest_sum : Basics.Int, globcover_mosiac_grassland_sum : Basics.Int, globcover_shrubland_sum : Basics.Int, globcover_herbaceous_vegetation_sum : Basics.Int, globcover_mosiac_vegetation_sum : Basics.Int, globcover_sparse_vegetation_sum : Basics.Int, globcover_bare_sum : Basics.Int, gm_ve_v2__mean_sum : Basics.Int, globcover_regularly_flooded_forest_sum : Basics.Int, globcover_permanently_flooded_forest_sum : Basics.Int, globcover_marsh_sum : Basics.Int, globcover_water_sum : Basics.Int, glwd3_lake_sum : Basics.Int, glwd3_reservoir_sum : Basics.Int, glwd3_river_sum : Basics.Int, lakes_glwd3_count_sum : Basics.Int, lakes_glwd3_mean_sum : Basics.Int, glwd_2_count_sum : Basics.Int, glwd_2_area_sum : Basics.Int, glwd_2_perim_sum : Basics.Int, globcover_ice_sum : Basics.Int, globcover_nodata_sum : Basics.Int, glwd3_marsh_sum : Basics.Int, glwd3_swamp_sum : Basics.Int, glwd3_mangrove_sum : Basics.Int, glwd3_wetland_sum : Basics.Int, glwd3_bog_sum : Basics.Int, glwd3_sometimes_wetland_sum : Basics.Int, glwd3_50_100_wetland_sum : Basics.Int, glwd3_25_50_wetland_sum : Basics.Int, glwd3_0_25_wetland_sum : Basics.Int, hotels_com_price_avg : Basics.Int, hotels_com_price_min : Basics.Int, hotels_com_count : Basics.Int, hcid : String.String, hc_count : Basics.Int, hc_price_min : Basics.Int }"},"Selectize.Msg":{"args":["a"],"type":"Selectize.Selectize.Msg a"},"SearchData.Search":{"args":[],"type":"{ id : String.String, displayname : String.String, name : String.String }"},"RemoteData.WebData":{"args":["a"],"type":"RemoteData.RemoteData Http.Error a"},"Selectize.Selectize.Heights":{"args":[],"type":"{ entries : List.List Basics.Float, menu : Basics.Float }"},"DateRangePicker.Msg":{"args":[],"type":"DateRangePicker.Internal.Update.Msg"},"DateTime.DateTime":{"args":[],"type":"DateTime.Internal.DateTime"},"TimePicker.Update.Msg":{"args":[],"type":"TimePicker.Internal.Update.Msg"},"Clock.Time":{"args":[],"type":"Clock.Internal.Time"},"Calendar.Date":{"args":[],"type":"Calendar.Internal.Date"},"DateTime.Internal.InternalDateTime":{"args":[],"type":"{ date : Calendar.Date, time : Clock.Time }"},"Clock.Internal.InternalTime":{"args":[],"type":"{ hours : Clock.Internal.Hour, minutes : Clock.Internal.Minute, seconds : Clock.Internal.Second, milliseconds : Clock.Internal.Millisecond }"},"Calendar.Internal.InternalDate":{"args":[],"type":"{ year : Calendar.Internal.Year, month : Calendar.Internal.Month, day : Calendar.Internal.Day }"},"Calendar.Internal.Month":{"args":[],"type":"Time.Month"}},"unions":{"Main.Msg":{"args":[],"tags":{"SetTableQuery":["String.String"],"SetTableState":["Table.State"],"TextfieldMenuMsg":["Selectize.Msg SearchData.Search"],"SelectTextfieldCity":["Maybe.Maybe SearchData.Search"],"SearchResponse":["RemoteData.WebData (List.List SearchData.Search)"],"CityResponse":["RemoteData.WebData (List.List Main.City)"],"Initialise":["Time.Posix"],"SingleDateRangePickerWithInputMsg":["DateSelect.Msg"]}},"Http.Error":{"args":[],"tags":{"BadUrl":["String.String"],"Timeout":[],"NetworkError":[],"BadStatus":["Basics.Int"],"BadBody":["String.String"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"List.List":{"args":["a"],"tags":{}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"DateSelect.Msg":{"args":[],"tags":{"NoOp":[],"PickerMsg":["DateRangePicker.Msg"],"FocusHandler":[],"GlobalClickHandler":[]}},"Selectize.Selectize.Msg":{"args":["a"],"tags":{"NoOp":[],"OpenMenu":["Selectize.Selectize.Heights","Basics.Float"],"CloseMenu":[],"FocusTextfield":[],"BlurTextfield":[],"PreventClosing":["Basics.Bool"],"SetQuery":["String.String"],"SetMouseFocus":["Maybe.Maybe a"],"Select":["a"],"SetKeyboardFocus":["Selectize.Selectize.Movement","Basics.Float"],"SelectKeyboardFocusAndBlur":[],"ClearSelection":[]}},"Time.Posix":{"args":[],"tags":{"Posix":["Basics.Int"]}},"RemoteData.RemoteData":{"args":["e","a"],"tags":{"NotAsked":[],"Loading":[],"Failure":["e"],"Success":["a"]}},"Table.State":{"args":[],"tags":{"State":["String.String","Basics.Bool"]}},"String.String":{"args":[],"tags":{"String":[]}},"Basics.Bool":{"args":[],"tags":{"True":[],"False":[]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Selectize.Selectize.Movement":{"args":[],"tags":{"Up":[],"Down":[],"PageUp":[],"PageDown":[]}},"DateRangePicker.Internal.Update.Msg":{"args":[],"tags":{"PreviousMonth":[],"NextMonth":[],"SelectDate":["DateTime.DateTime"],"UpdateVisualSelection":["DateTime.DateTime"],"ResetVisualSelection":[],"ShowClockView":[],"ShowCalendarView":[],"ToggleTimeMirroring":[],"SyncTimePickers":["Clock.Time"],"RangeStartPickerMsg":["TimePicker.Update.Msg"],"RangeEndPickerMsg":["TimePicker.Update.Msg"],"MoveToToday":[]}},"DateTime.Internal.DateTime":{"args":[],"tags":{"DateTime":["DateTime.Internal.InternalDateTime"]}},"TimePicker.Internal.Update.Msg":{"args":[],"tags":{"InputHandler":["TimePicker.Internal.Update.TimeParts","String.String"],"Update":["TimePicker.Internal.Update.TimeParts","String.String"],"Increment":["TimePicker.Internal.Update.TimeParts"],"Decrement":["TimePicker.Internal.Update.TimeParts"]}},"Clock.Internal.Time":{"args":[],"tags":{"Time":["Clock.Internal.InternalTime"]}},"Calendar.Internal.Date":{"args":[],"tags":{"Date":["Calendar.Internal.InternalDate"]}},"Clock.Internal.Hour":{"args":[],"tags":{"Hour":["Basics.Int"]}},"Clock.Internal.Millisecond":{"args":[],"tags":{"Millisecond":["Basics.Int"]}},"Clock.Internal.Minute":{"args":[],"tags":{"Minute":["Basics.Int"]}},"Clock.Internal.Second":{"args":[],"tags":{"Second":["Basics.Int"]}},"TimePicker.Internal.Update.TimeParts":{"args":[],"tags":{"Hours":[],"Minutes":[],"Seconds":[],"Milliseconds":[]}},"Calendar.Internal.Day":{"args":[],"tags":{"Day":["Basics.Int"]}},"Time.Month":{"args":[],"tags":{"Jan":[],"Feb":[],"Mar":[],"Apr":[],"May":[],"Jun":[],"Jul":[],"Aug":[],"Sep":[],"Oct":[],"Nov":[],"Dec":[]}},"Calendar.Internal.Year":{"args":[],"tags":{"Year":["Basics.Int"]}}}}})}});

//////////////////// HMR BEGIN ////////////////////

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/

/*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */

if (module.hot) {
    (function () {
        "use strict";

        //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }

        // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
        // and we check for `List.map` because we expect it to be present in all Elm programs.
        var elmVersion;
        if (typeof elm$core$List$map !== 'undefined')
            elmVersion = '0.19.0';
        else if (typeof $elm$core$List$map !== 'undefined')
            elmVersion = '0.19.1';
        else
            throw new Error("Could not determine Elm version");

        function elmSymbol(symbol) {
            try {
                switch (elmVersion) {
                    case '0.19.0':
                        return eval(symbol);
                    case '0.19.1':
                        return eval('$' + symbol);
                    default:
                        throw new Error('Cannot resolve ' + symbol + '. Elm version unknown!')
                }
            } catch (e) {
                if (e instanceof ReferenceError) {
                    return undefined;
                } else {
                    throw e;
                }
            }
        }

        var instances = module.hot.data
            ? module.hot.data.instances || {}
            : {};
        var uid = module.hot.data
            ? module.hot.data.uid || 0
            : 0;

        if (Object.keys(instances).length === 0) {
            log("[elm-hot] Enabled");
        }

        var cancellers = [];

        // These 2 variables act as dynamically-scoped variables which are set only when the
        // Elm module's hooked init function is called.
        var initializingInstance = null;
        var swappingInstance = null;

        module.hot.accept();
        module.hot.dispose(function (data) {
            data.instances = instances;
            data.uid = uid;

            // Cleanup pending async tasks

            // First, make sure that no new tasks can be started until we finish replacing the code
            _Scheduler_binding = function () {
                return _Scheduler_fail(new Error('[elm-hot] Inactive Elm instance.'))
            };

            // Second, kill pending tasks belonging to the old instance
            if (cancellers.length) {
                log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
                try {
                    cancellers.forEach(function (cancel) {
                        cancel();
                    });
                } catch (e) {
                    console.warn('[elm-hot] Kill process error: ' + e.message);
                }
            }
        });

        function log(message) {
            if (module.hot.verbose) {
                console.log(message)
            }
        }

        function getId() {
            return ++uid;
        }

        function findPublicModules(parent, path) {
            var modules = [];
            for (var key in parent) {
                var child = parent[key];
                var currentPath = path ? path + '.' + key : key;
                if ('init' in child) {
                    modules.push({
                        path: currentPath,
                        module: child
                    });
                } else {
                    modules = modules.concat(findPublicModules(child, currentPath));
                }
            }
            return modules;
        }

        function registerInstance(domNode, flags, path, portSubscribes, portSends) {
            var id = getId();

            var instance = {
                id: id,
                path: path,
                domNode: domNode,
                flags: flags,
                portSubscribes: portSubscribes,
                portSends: portSends,
                navKeyPath: null, // array of JS property names by which the Browser.Navigation.Key can be found in the model
                lastState: null // last Elm app state (root model)
            };

            return instances[id] = instance
        }

        function isFullscreenApp() {
            // Returns true if the Elm app will take over the entire DOM body.
            return typeof elmSymbol("elm$browser$Browser$application") !== 'undefined'
                || typeof elmSymbol("elm$browser$Browser$document") !== 'undefined';
        }

        function wrapDomNode(node) {
            // When embedding an Elm app into a specific DOM node, Elm will replace the provided
            // DOM node with the Elm app's content. When the Elm app is compiled normally, the
            // original DOM node is reused (its attributes and content changes, but the object
            // in memory remains the same). But when compiled using `--debug`, Elm will completely
            // destroy the original DOM node and instead replace it with 2 brand new nodes: one
            // for your Elm app's content and the other for the Elm debugger UI. In this case,
            // if you held a reference to the DOM node provided for embedding, it would be orphaned
            // after Elm module initialization.
            //
            // So in order to make both cases consistent and isolate us from changes in how Elm
            // does this, we will insert a dummy node to wrap the node for embedding and hold
            // a reference to the dummy node.
            //
            // We will also put a tag on the dummy node so that the Elm developer knows who went
            // behind their back and rudely put stuff in their DOM.
            var dummyNode = document.createElement("div");
            dummyNode.setAttribute("data-elm-hot", "true");
            dummyNode.style.height = "inherit";
            var parentNode = node.parentNode;
            parentNode.replaceChild(dummyNode, node);
            dummyNode.appendChild(node);
            return dummyNode;
        }

        function wrapPublicModule(path, module) {
            var originalInit = module.init;
            if (originalInit) {
                module.init = function (args) {
                    var elm;
                    var portSubscribes = {};
                    var portSends = {};
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== 'undefined') {
                        // normal case
                        domNode = args['node'] && !isFullscreenApp()
                            ? wrapDomNode(args['node'])
                            : document.body;
                        flags = args['flags'];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
            } else {
                console.error("Could not find a public module to wrap at path " + path)
            }
        }

        function swap(Elm, instance) {
            log('[elm-hot] Hot-swapping module: ' + instance.path);

            swappingInstance = instance;

            // remove from the DOM everything that had been created by the old Elm app
            var containerNode = instance.domNode;
            while (containerNode.lastChild) {
                containerNode.removeChild(containerNode.lastChild);
            }

            var m = getAt(instance.path.split('.'), Elm);
            var elm;
            if (m) {
                // prepare to initialize the new Elm module
                var args = {flags: instance.flags};
                if (containerNode === document.body) {
                    // fullscreen case: no additional args needed
                } else {
                    // embed case: provide a new node for Elm to use
                    var nodeForEmbed = document.createElement("div");
                    containerNode.appendChild(nodeForEmbed);
                    args['node'] = nodeForEmbed;
                }

                elm = m.init(args);

                Object.keys(instance.portSubscribes).forEach(function (portName) {
                    if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
                        var handlers = instance.portSubscribes[portName];
                        if (!handlers.length) {
                            return;
                        }
                        log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \''
                            + portName + '\' (' + instance.path + ').');
                        handlers.forEach(function (handler) {
                            elm.ports[portName].subscribe(handler);
                        });
                    } else {
                        delete instance.portSubscribes[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });

                Object.keys(instance.portSends).forEach(function (portName) {
                    if (portName in elm.ports && 'send' in elm.ports[portName]) {
                        log('[elm-hot] Replace old port send with the new send');
                        instance.portSends[portName] = elm.ports[portName].send;
                    } else {
                        delete instance.portSends[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });
            } else {
                log('[elm-hot] Module was removed: ' + instance.path);
            }

            swappingInstance = null;
        }

        function wrapPorts(elm, portSubscribes, portSends) {
            var portNames = Object.keys(elm.ports || {});
            //hook ports
            if (portNames.length) {
                // hook outgoing ports
                portNames
                    .filter(function (name) {
                        return 'subscribe' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.subscribe called.');
                                if (!portSubscribes[portName]) {
                                    portSubscribes[portName] = [handler];
                                } else {
                                    //TODO handle subscribing to single handler more than once?
                                    portSubscribes[portName].push(handler);
                                }
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) {
                                    list.splice(list.lastIndexOf(handler), 1);
                                } else {
                                    console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                                }
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });

                // hook incoming ports
                portNames
                    .filter(function (name) {
                        return 'send' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function (val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
            }
            return portSubscribes;
        }

        /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */
        function findNavKey(rootModel) {
            var queue = [];
            if (isDebuggerModel(rootModel)) {
                /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */
                queue.push({value: rootModel['state'], keypath: ['state']});
            } else {
                queue.push({value: rootModel, keypath: []});
            }

            while (queue.length !== 0) {
                var item = queue.shift();

                // The nav key is identified by a runtime tag added by the elm-hot injector.
                if (item.value.hasOwnProperty("elm-hot-nav-key")) {
                    // found it!
                    return item;
                }

                if (typeof item.value !== "object") {
                    continue;
                }

                for (var propName in item.value) {
                    if (!item.value.hasOwnProperty(propName)) continue;
                    var newKeypath = item.keypath.slice();
                    newKeypath.push(propName);
                    queue.push({value: item.value[propName], keypath: newKeypath})
                }
            }

            return null;
        }


        function isDebuggerModel(model) {
            return model && model.hasOwnProperty("expando") && model.hasOwnProperty("state");
        }

        function getAt(keyPath, obj) {
            return keyPath.reduce(function (xs, x) {
                return (xs && xs[x]) ? xs[x] : null
            }, obj)
        }

        function removeNavKeyListeners(navKey) {
            window.removeEventListener('popstate', navKey.value);
            window.navigator.userAgent.indexOf('Trident') < 0 || window.removeEventListener('hashchange', navKey.value);
        }

        // hook program creation
        var initialize = _Platform_initialize;
        _Platform_initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
            var instance = initializingInstance || swappingInstance;
            var tryFirstRender = !!swappingInstance;

            var hookedInit = function (args) {
                var initialStateTuple = init(args);
                if (swappingInstance) {
                    var oldModel = swappingInstance.lastState;
                    var newModel = initialStateTuple.a;

                    if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                        // attempt to find the Browser.Navigation.Key in the newly-constructed model
                        // and bring it along with the rest of the old data.
                        var newKeyLoc = findNavKey(newModel);
                        var error = null;
                        if (newKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the new app model";
                        } else if (instance.navKeyPath === null) {
                            error = "could not find Browser.Navigation.Key in the old app model.";
                        } else if (newKeyLoc.keypath.toString() !== instance.navKeyPath.toString()) {
                            error = "the location of the Browser.Navigation.Key in the model has changed.";
                        } else {
                            var oldNavKey = getAt(instance.navKeyPath, oldModel);
                            if (oldNavKey === null) {
                                error = "keypath " + instance.navKeyPath + " is invalid. Please report a bug."
                            } else {
                                // remove event listeners attached to the old nav key
                                removeNavKeyListeners(oldNavKey);

                                // insert the new nav key into the old model in the exact same location
                                var parentKeyPath = newKeyLoc.keypath.slice(0, -1);
                                var lastSegment = newKeyLoc.keypath.slice(-1)[0];
                                var oldParent = getAt(parentKeyPath, oldModel);
                                oldParent[lastSegment] = newKeyLoc.value;
                            }
                        }

                        if (error !== null) {
                            console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                            oldModel = newModel;
                        }
                    }

                    // the heart of the app state hot-swap
                    initialStateTuple.a = oldModel;

                    // ignore any Cmds returned by the init during hot-swap
                    initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                } else {
                    // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;

                    // capture Browser.application's navigation key for later
                    if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                        var navKeyLoc = findNavKey(initializingInstance.lastState);
                        if (!navKeyLoc) {
                            console.error("[elm-hot] Hot-swapping disabled for " + instance.path
                                + ": could not find Browser.Navigation.Key in your model.");
                            instance.navKeyPath = null;
                        } else {
                            instance.navKeyPath = navKeyLoc.keypath;
                        }
                    }
                }

                return initialStateTuple
            };

            var hookedStepperBuilder = function (sendToApp, model) {
                var result;
                // first render may fail if shape of model changed too much
                if (tryFirstRender) {
                    tryFirstRender = false;
                    try {
                        result = stepperBuilder(sendToApp, model)
                    } catch (e) {
                        throw new Error('[elm-hot] Hot-swapping ' + instance.path +
                            ' is not possible, please reload page. Error: ' + e.message)
                    }
                } else {
                    result = stepperBuilder(sendToApp, model)
                }

                return function (nextModel, isSync) {
                    if (instance) {
                        // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel
                    }
                    return result(nextModel, isSync)
                }
            };

            return initialize(flagDecoder, args, hookedInit, update, subscriptions, hookedStepperBuilder)
        };

        // hook process creation
        var originalBinding = _Scheduler_binding;
        _Scheduler_binding = function (originalCallback) {
            return originalBinding(function () {
                // start the scheduled process, which may return a cancellation function.
                var cancel = originalCallback.apply(this, arguments);
                if (cancel) {
                    cancellers.push(cancel);
                    return function () {
                        cancellers.splice(cancellers.indexOf(cancel), 1);
                        return cancel();
                    };
                }
                return cancel;
            });
        };

        scope['_elm_hot_loader_init'] = function (Elm) {
            // swap instances
            var removedInstances = [];
            for (var id in instances) {
                var instance = instances[id];
                if (instance.domNode.parentNode) {
                    swap(Elm, instance);
                } else {
                    removedInstances.push(id);
                }
            }

            removedInstances.forEach(function (id) {
                delete instance[id];
            });

            // wrap all public modules
            var publicModules = findPublicModules(Elm);
            publicModules.forEach(function (m) {
                wrapPublicModule(m.path, m.module);
            });
        }
    })();

    scope['_elm_hot_loader_init'](scope['Elm']);
}
//////////////////// HMR END ////////////////////


}(this));