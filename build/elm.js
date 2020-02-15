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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.hF.bq === region.ed.bq)
	{
		return 'on line ' + region.hF.bq;
	}
	return 'on lines ' + region.hF.bq + ' through ' + region.ed.bq;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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



/**_UNUSED/
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.gR,
		impl.h2,
		impl.hK,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
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

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
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
		ar: func(record.ar),
		dG: record.dG,
		dn: record.dn
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
		var message = !tag ? value : tag < 3 ? value.a : value.ar;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.dG;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.dn) && event.preventDefault(),
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




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.gR,
		impl.h2,
		impl.hK,
		function(sendToApp, initialModel) {
			var view = impl.h4;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
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
		impl.gR,
		impl.h2,
		impl.hK,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.dz && impl.dz(sendToApp)
			var view = impl.h4;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.fJ);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.hQ) && (_VirtualDom_doc.title = title = doc.hQ);
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
	var onUrlChange = impl.hd;
	var onUrlRequest = impl.he;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		dz: function(sendToApp)
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
							&& curr.e7 === next.e7
							&& curr.ey === next.ey
							&& curr.e2.a === next.e2.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		gR: function(flags)
		{
			return A3(impl.gR, flags, _Browser_getUrl(), key);
		},
		h4: impl.h4,
		h2: impl.h2,
		hK: impl.hK
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
		? { gM: 'hidden', fO: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { gM: 'mozHidden', fO: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { gM: 'msHidden', fO: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { gM: 'webkitHidden', fO: 'webkitvisibilitychange' }
		: { gM: 'hidden', fO: 'visibilitychange' };
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
		fh: _Browser_getScene(),
		h6: {
			ia: _Browser_window.pageXOffset,
			fC: _Browser_window.pageYOffset,
			b7: _Browser_doc.documentElement.clientWidth,
			bO: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		b7: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bO: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			fh: {
				b7: node.scrollWidth,
				bO: node.scrollHeight
			},
			h6: {
				ia: node.scrollLeft,
				fC: node.scrollTop,
				b7: node.clientWidth,
				bO: node.clientHeight
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
			fh: _Browser_getScene(),
			h6: {
				ia: x,
				fC: y,
				b7: _Browser_doc.documentElement.clientWidth,
				bO: _Browser_doc.documentElement.clientHeight
			},
			f6: {
				ia: x + rect.left,
				fC: y + rect.top,
				b7: rect.width,
				bO: rect.height
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
			callback(toTask(request.cr.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.cr.b, xhr)); });
		$elm$core$Maybe$isJust(request.fu) && _Http_track(router, xhr, request.fu.a);

		try {
			xhr.open(request.g$, request.dT, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.dT));
		}

		_Http_configureRequest(xhr, request);

		request.fJ.a && xhr.setRequestHeader('Content-Type', request.fJ.a);
		xhr.send(request.fJ.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.ex; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.hP.a || 0;
	xhr.responseType = request.cr.d;
	xhr.withCredentials = request.fF;
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
		dT: xhr.responseURL,
		hH: xhr.status,
		hI: xhr.statusText,
		ex: _Http_parseHeaders(xhr.getAllResponseHeaders())
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
			hC: event.loaded,
			fl: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			hv: event.loaded,
			fl: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
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
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
			if (t.$ === -2) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
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
																																																																																																								return {dV: access_50k_mean_sum, fE: accessibilityToCity, ce: boring, fL: builtEnv, fM: c, fQ: coVar, fR: coastline, cj: coastline_100m_count_sum, d6: danger, d7: danger_sum, co: dist, eb: dist_sum, f5: dryadv3croplands1992_mean_sum, cs: flickr2_highview_count_total_sum, ct: flickr2_lowview_count_total_sum, cu: flickr2_medview_count_total_sum, ei: food, cv: food_sum, ge: ghs_built_lds__mean_sum, gf: ghs_gpw_pop_2015__sum_sum, gg: globCrop, gh: globForest, gi: globUrban, gj: globVe, gk: globWet, gl: globcover_bare_sum, gm: globcover_closed_broadleaved_sum, gn: globcover_closed_needleleaved_sum, go: globcover_herbaceous_vegetation_sum, el: globcover_ice_sum, gp: globcover_irrigated_cropland_sum, gq: globcover_marsh_sum, gr: globcover_mixed_broadleaved_sum, gs: globcover_mosiac_cropland_sum, gt: globcover_mosiac_forest_sum, gu: globcover_mosiac_grassland_sum, gv: globcover_mosiac_vegetation_sum, em: globcover_nodata_sum, gw: globcover_open_broadleaved_sum, gx: globcover_open_needleleaved_sum, gy: globcover_permanently_flooded_forest_sum, gz: globcover_rainfed_cropland_sum, gA: globcover_regularly_flooded_forest_sum, gB: globcover_semideciduous_sum, gC: globcover_shrubland_sum, gD: globcover_sparse_vegetation_sum, gE: globcover_urban_sum, cw: globcover_water_sum, en: glwd3_0_25_wetland_sum, eo: glwd3_25_50_wetland_sum, ep: glwd3_50_100_wetland_sum, eq: glwd3_bog_sum, cx: glwd3_lake_sum, er: glwd3_mangrove_sum, es: glwd3_marsh_sum, gF: glwd3_reservoir_sum, et: glwd3_river_sum, eu: glwd3_sometimes_wetland_sum, ev: glwd3_swamp_sum, ew: glwd3_wetland_sum, cy: glwd_2_area_sum, gG: glwd_2_count_sum, gH: glwd_2_perim_sum, gI: gm_ve_v2__mean_sum, gJ: groadsAvgLength, gK: groadsCount, cA: hc_count, cB: hc_price_min, cC: hcid, cE: hotels_com_count, cF: hotels_com_price_avg, cG: hotels_com_price_min, eA: id, cP: interesting, gW: lakes_glwd3_count_sum, cQ: lakes_glwd3_mean_sum, eH: lat, eM: lon, aZ: n, g5: navw, c5: navwater2009__mean_sum, c7: noise, eV: osm_boring_boring_sum, eW: osm_interesting_interesting_sum_sum, eX: osm_safe_safety_sum, hh: osmn, hi: osmpop, hm: popMax, hn: popd, e1: popghs, $7: publicTransport, dp: public_transport_sum, hu: rain, dv: s, ff: safety, hD: slope, fm: slope100m__mean_sum, hE: srad, hR: tmp, h0: toilets, dN: toilets_sum, dP: tourismcount, fx: u, h8: wind};
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
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
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
	return {$: 0, a: a};
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
		if (!builder.j) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.m),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.m);
		} else {
			var treeLen = builder.j * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.n) : builder.n;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.j);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.m) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.m);
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
					{n: nodeList, j: (len / $elm$core$Array$branchFactor) | 0, m: tail});
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
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
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
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ek: fragment, ey: host, eZ: path, e2: port_, e7: protocol, hs: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
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
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
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
					if (_v1.$ === 1) {
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
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
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
		var task = _v0;
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
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$Initialise = function (a) {
	return {$: 6, a: a};
};
var $krisajenkins$remotedata$RemoteData$NotAsked = {$: 0};
var $author$project$Selectize$Selectize$LDivider = function (a) {
	return {$: 1, a: a};
};
var $author$project$Selectize$Selectize$LEntry = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Selectize$Selectize$closed = F3(
	function (id, toLabel, entries) {
		var addLabel = function (e) {
			if (!e.$) {
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
		return {t: labeledEntries, bk: _List_Nil, eA: id, aW: 0, ac: $elm$core$Maybe$Nothing, aD: false, b$: false, hs: '', dw: 0, y: $elm$core$Maybe$Nothing};
	});
var $author$project$Selectize$closed = F3(
	function (id, toLabel, entries) {
		return A3($author$project$Selectize$Selectize$closed, id, toLabel, entries);
	});
var $billstclair$elm_sortable_table$Table$State = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $billstclair$elm_sortable_table$Table$initialSort = function (header) {
	return A2($billstclair$elm_sortable_table$Table$State, header, false);
};
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
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
var $author$project$Selectize$Selectize$Divider = function (a) {
	return {$: 1, a: a};
};
var $author$project$Selectize$Selectize$divider = function (title) {
	return $author$project$Selectize$Selectize$Divider(title);
};
var $author$project$Selectize$divider = function (title) {
	return $author$project$Selectize$Selectize$divider(title);
};
var $author$project$Selectize$Selectize$Entry = function (a) {
	return {$: 0, a: a};
};
var $author$project$Selectize$Selectize$entry = function (a) {
	return $author$project$Selectize$Selectize$Entry(a);
};
var $author$project$Selectize$entry = function (a) {
	return $author$project$Selectize$Selectize$entry(a);
};
var $author$project$SearchData$Search = F3(
	function (id, displayname, name) {
		return {aP: displayname, eA: id, v: name};
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
		bd: $krisajenkins$remotedata$RemoteData$NotAsked,
		cZ: 3000,
		c_: 5000,
		fi: $krisajenkins$remotedata$RemoteData$NotAsked,
		ae: $elm$core$Maybe$Nothing,
		bw: '',
		bx: $billstclair$elm_sortable_table$Table$initialSort(''),
		ag: A3(
			$author$project$Selectize$closed,
			'textfield-menu',
			function ($) {
				return $.aP;
			},
			$author$project$Main$searchCategories),
		aJ: $elm$core$Maybe$Nothing
	};
	return _Utils_Tuple2(
		model,
		A2($elm$core$Task$perform, $author$project$Main$Initialise, $elm$time$Time$now));
};
var $author$project$Main$SingleDateRangePickerWithInputMsg = function (a) {
	return {$: 7, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$DateSelect$GlobalClickHandler = {$: 3};
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {e0: pids, fq: subs};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
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
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
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
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
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
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {ef: event, eG: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
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
			state.e0,
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
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
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
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.eG;
		var event = _v0.ef;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.fq);
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
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, 0, 'click');
var $author$project$DateSelect$subscriptions = function (_v0) {
	var isFocused = _v0.ap;
	return isFocused ? $elm$browser$Browser$Events$onClick(
		$elm$json$Json$Decode$succeed($author$project$DateSelect$GlobalClickHandler)) : $elm$core$Platform$Sub$none;
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				function () {
				var _v0 = model.ae;
				if (!_v0.$) {
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
	return {$: 5, a: a};
};
var $krisajenkins$remotedata$RemoteData$Loading = {$: 1};
var $author$project$Main$SearchResponse = function (a) {
	return {$: 4, a: a};
};
var $author$project$Main$SelectTextfieldCity = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$TextfieldMenuMsg = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
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
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$value = _Json_decodeValue;
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
			if (!_v0.$) {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (!_v1.$) {
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
var $elm$json$Json$Decode$string = _Json_decodeString;
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
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
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
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
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
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
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
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
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
				if (_v4.$ === -1) {
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
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
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
						if (_v7.$ === -1) {
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
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
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
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.hH));
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
	return {$: 2, a: a};
};
var $krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {$: 3, a: a};
};
var $krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	if (result.$ === 1) {
		var e = result.a;
		return $krisajenkins$remotedata$RemoteData$Failure(e);
	} else {
		var x = result.a;
		return $krisajenkins$remotedata$RemoteData$Success(x);
	}
};
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {e9: reqs, fq: subs};
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
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
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
							var _v4 = req.fu;
							if (_v4.$ === 1) {
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
			A3($elm$http$Http$updateReqs, router, cmds, state.e9));
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
					state.fq)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					fF: r.fF,
					fJ: r.fJ,
					cr: A2(_Http_mapExpect, func, r.cr),
					ex: r.ex,
					g$: r.g$,
					hP: r.hP,
					fu: r.fu,
					dT: r.dT
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
			{fF: false, fJ: r.fJ, cr: r.cr, ex: r.ex, g$: r.g$, hP: r.hP, fu: r.fu, dT: r.dT}));
};
var $elm$http$Http$riskyRequest = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{fF: true, fJ: r.fJ, cr: r.cr, ex: r.ex, g$: r.g$, hP: r.hP, fu: r.fu, dT: r.dT}));
};
var $ohanhi$remotedata_http$RemoteData$Http$performRequest = function (_v0) {
	var risky = _v0.a1;
	return risky ? $elm$http$Http$riskyRequest : $elm$http$Http$request;
};
var $ohanhi$remotedata_http$RemoteData$Http$request = F6(
	function (method, config, url, tagger, decoder, body) {
		return A2(
			$ohanhi$remotedata_http$RemoteData$Http$performRequest,
			config,
			{
				fJ: body,
				cr: A2(
					$elm$http$Http$expectJson,
					A2($elm$core$Basics$composeR, $krisajenkins$remotedata$RemoteData$fromResult, tagger),
					decoder),
				ex: config.ex,
				g$: method,
				hP: config.hP,
				fu: config.fu,
				dT: url
			});
	});
var $ohanhi$remotedata_http$RemoteData$Http$getWithConfig = F4(
	function (config, url, tagger, decoder) {
		return A6($ohanhi$remotedata_http$RemoteData$Http$request, 'GET', config, url, tagger, decoder, $elm$http$Http$emptyBody);
	});
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $ohanhi$remotedata_http$RemoteData$Http$acceptJson = A2($elm$http$Http$header, 'Accept', 'application/json');
var $ohanhi$remotedata_http$RemoteData$Http$defaultConfig = {
	ex: _List_fromArray(
		[$ohanhi$remotedata_http$RemoteData$Http$acceptJson]),
	a1: false,
	hP: $elm$core$Maybe$Nothing,
	fu: $elm$core$Maybe$Nothing
};
var $ohanhi$remotedata_http$RemoteData$Http$noCache = A2($elm$http$Http$header, 'Cache-Control', 'no-store, must-revalidate, no-cache, max-age=0');
var $ohanhi$remotedata_http$RemoteData$Http$noCacheConfig = _Utils_update(
	$ohanhi$remotedata_http$RemoteData$Http$defaultConfig,
	{
		ex: A2($elm$core$List$cons, $ohanhi$remotedata_http$RemoteData$Http$noCache, $ohanhi$remotedata_http$RemoteData$Http$defaultConfig.ex)
	});
var $ohanhi$remotedata_http$RemoteData$Http$get = $ohanhi$remotedata_http$RemoteData$Http$getWithConfig($ohanhi$remotedata_http$RemoteData$Http$noCacheConfig);
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit = function (a) {
	return {$: 0, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$Single = 0;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$DateTime = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Date = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Year = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt = function (_v0) {
	var day = _v0;
	return day;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays = F2(
	function (lhs, rhs) {
		return A2(
			$elm$core$Basics$compare,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(lhs),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(rhs));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$Day = $elm$core$Basics$identity;
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$not = _Basics_not;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear = function (_v0) {
	var _int = _v0;
	return (!A2($elm$core$Basics$modBy, 4, _int)) && ((!A2($elm$core$Basics$modBy, 400, _int)) || (!(!A2($elm$core$Basics$modBy, 100, _int))));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf = F2(
	function (year, month) {
		switch (month) {
			case 0:
				return 31;
			case 1:
				return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jan = 0;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards = function (month) {
	switch (month) {
		case 0:
			return 11;
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		case 9:
			return 8;
		case 10:
			return 9;
		default:
			return 10;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt = function (_v0) {
	var year = _v0;
	return year;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth = function (_v0) {
	var date = _v0;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthBackwards(date.eP);
	var updatedYear = function () {
		if (updatedMonth === 11) {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.ii) - 1;
		} else {
			return date.ii;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.f_, lastDayOfUpdatedMonth);
		if (_v1 === 2) {
			return lastDayOfUpdatedMonth;
		} else {
			return date.f_;
		}
	}();
	return {f_: updatedDay, eP: updatedMonth, ii: updatedYear};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$decrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$decrementMonth = function (_v0) {
	var date = _v0.d8;
	var time = _v0.hO;
	return {
		d8: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementMonth(date),
		hO: time
	};
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
	var millis = _v0;
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
				if (_Utils_cmp(era.hF, posixMinutes) < 0) {
					return posixMinutes + era.hc;
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
var $elm$core$Basics$ge = _Utils_ge;
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
		f_: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		eP: month,
		ii: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).f_;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).eP;
		switch (_v0) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
			case 9:
				return 8;
			case 10:
				return 9;
			case 11:
				return 10;
			default:
				return 11;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).ii;
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix = function (posix) {
	return {
		f_: A2($elm$time$Time$toDay, $elm$time$Time$utc, posix),
		eP: A2($elm$time$Time$toMonth, $elm$time$Time$utc, posix),
		ii: A2($elm$time$Time$toYear, $elm$time$Time$utc, posix)
	};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Hour = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Millisecond = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Minute = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Second = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$Time = $elm$core$Basics$identity;
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
	return {
		gN: A2($elm$time$Time$toHour, $elm$time$Time$utc, posix),
		g0: A2($elm$time$Time$toMillis, $elm$time$Time$utc, posix),
		g4: A2($elm$time$Time$toMinute, $elm$time$Time$utc, posix),
		hB: A2($elm$time$Time$toSecond, $elm$time$Time$utc, posix)
	};
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix = function (timePosix) {
	return {
		d8: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromPosix(timePosix),
		hO: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromPosix(timePosix)
	};
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$fromPosix;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay = ((1000 * 60) * 60) * 24;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInYear = function (year) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$isLeapYear(year) ? ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 366) : ($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisInADay * 365);
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearFromInt = function (year) {
	return (year > 0) ? $elm$core$Maybe$Just(year) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$millisSinceEpoch = function (_v0) {
	var year = _v0;
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
	switch (month) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
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
					{n: nodeList, j: nodeListSize, m: jsArray});
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
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$months = $elm$core$Array$fromList(
	_List_fromArray(
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.m)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.m, tail);
		return (notAppended < 0) ? {
			n: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.n),
			j: builder.j + 1,
			m: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			n: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.n),
			j: builder.j + 1,
			m: $elm$core$Elm$JsArray$empty
		} : {n: builder.n, j: builder.j, m: appended});
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
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
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
						if (!node.$) {
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
						n: _List_Nil,
						j: 0,
						m: A3(
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
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
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
				if (!_v0.$) {
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
		if (!_v0.$) {
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
	var year = _v0.ii;
	var month = _v0.eP;
	var day = _v0.f_;
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
	var date = _v0.d8;
	var time = _v0.hO;
	return {
		d8: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementDay(date),
		hO: time
	};
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
	switch (month) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 0;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth = function (_v0) {
	var date = _v0;
	var updatedMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$rollMonthForward(date.eP);
	var updatedYear = function () {
		if (!updatedMonth) {
			return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(date.ii) + 1;
		} else {
			return date.ii;
		}
	}();
	var lastDayOfUpdatedMonth = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, updatedYear, updatedMonth);
	var updatedDay = function () {
		var _v1 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, date.f_, lastDayOfUpdatedMonth);
		if (_v1 === 2) {
			return lastDayOfUpdatedMonth;
		} else {
			return date.f_;
		}
	}();
	return {f_: updatedDay, eP: updatedMonth, ii: updatedYear};
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$incrementMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$incrementMonth = function (_v0) {
	var date = _v0.d8;
	var time = _v0.hO;
	return {
		d8: $PanagiotisGeorgiadis$elm_datetime$Calendar$incrementMonth(date),
		hO: time
	};
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
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleCalendar = 1;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Model = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset = {$: 1};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers = {$: 0};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected = {$: 0};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset = function (a) {
	return {$: 0, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SingleCalendar = 0;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers = function (a) {
	return {$: 1, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Hours = 0;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Milliseconds = 3;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Minutes = 1;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Model = $elm$core$Basics$identity;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Seconds = 2;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours = function (_v0) {
	var hours = _v0.gN;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt = function (_v0) {
	var hours = _v0;
	return hours;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getHours = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds = function (_v0) {
	var milliseconds = _v0.g0;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt = function (_v0) {
	var milliseconds = _v0;
	return milliseconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes = function (_v0) {
	var minutes = _v0.g4;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt = function (_v0) {
	var minutes = _v0;
	return minutes;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt, $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes);
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds = function (_v0) {
	var seconds = _v0.hB;
	return seconds;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt = function (_v0) {
	var seconds = _v0;
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
	switch (timePart) {
		case 0:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getHours);
		case 1:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMinutes);
		case 2:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$timeToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getSeconds);
		default:
			return A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$millisToString, $PanagiotisGeorgiadis$elm_datetime$Clock$getMilliseconds);
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise = function (_v0) {
	var pickerType = _v0.e$;
	var time = _v0.hO;
	return {
		gN: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 0, time),
		g0: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 3, time),
		g4: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 1, time),
		e$: pickerType,
		hB: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 2, time),
		hO: time
	};
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime = F2(
	function (time, _v0) {
		var date = _v0.d8;
		return {d8: date, hO: time};
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setTime = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setTime;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate = function (_v0) {
	var date = _v0.d8;
	return date;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth = function (_v0) {
	var month = _v0.eP;
	return month;
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$getMonth, $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate);
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getMonth;
var $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$monthToInt;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt = A2($elm$core$Basics$composeL, $PanagiotisGeorgiadis$elm_datetime$Calendar$monthToInt, $PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth);
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear = function (_v0) {
	var year = _v0.ii;
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
		if (yearsComparison === 1) {
			return A2(
				$elm$core$Basics$compare,
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(lhs),
				$PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$getMonthInt(rhs));
		} else {
			return yearsComparison;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight = {gN: 0, g0: 0, g4: 0, hB: 0};
var $PanagiotisGeorgiadis$elm_datetime$Clock$midnight = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$midnight;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate = function (_v0) {
	var today = _v0.h_;
	var primaryDate = _v0.hr;
	var dateLimit = _v0.fY;
	var date = function () {
		if (!primaryDate.$) {
			var d = primaryDate.a;
			return d;
		} else {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, $PanagiotisGeorgiadis$elm_datetime$Clock$midnight, today);
		}
	}();
	if (!dateLimit.$) {
		var minDate = dateLimit.a.g2;
		var maxDate = dateLimit.a.gX;
		var isBetweenConstrains = ((!A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date)) || (A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, date) === 1)) && ((A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date) === 2) || (A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, date) === 1));
		return isBetweenConstrains ? date : minDate;
	} else {
		return date;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise = F3(
	function (viewType, calendarConfig, timePickerConfig) {
		var today = calendarConfig.h_;
		var dateLimit = calendarConfig.fY;
		var dateRangeOffset = calendarConfig.fZ;
		var viewType_ = function () {
			if (!viewType) {
				return 0;
			} else {
				return 1;
			}
		}();
		var dateRangeOffset_ = function () {
			if (!dateRangeOffset.$) {
				var minDateRangeLength = dateRangeOffset.a.g3;
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
					{gU: _List_Nil, g3: minDateRangeLength});
			} else {
				return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoOffset;
			}
		}();
		var _v0 = function () {
			var dateTime = $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$validatePrimaryDate(calendarConfig);
			if (!timePickerConfig.$) {
				var pickerType = timePickerConfig.a.e$;
				var defaultTime = timePickerConfig.a.f0;
				var pickerTitles = timePickerConfig.a.e_;
				var mirrorTimes = timePickerConfig.a.br;
				var timePicker = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$initialise(
					{e$: pickerType, hO: defaultTime});
				return _Utils_Tuple2(
					A2($PanagiotisGeorgiadis$elm_datetime$DateTime$setTime, defaultTime, dateTime),
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
						{aB: timePicker, br: mirrorTimes, e_: pickerTitles, av: timePicker}));
			} else {
				return _Utils_Tuple2(dateTime, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoTimePickers);
			}
		}();
		var primaryDate_ = _v0.a;
		var timePickers = _v0.b;
		return {fY: dateLimit, fZ: dateRangeOffset_, hr: primaryDate_, e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected, S: timePickers, h_: today, h5: viewType_};
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf = function (date) {
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2(
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf,
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getYear(date),
			$PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date)));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf = function (_v0) {
	var date = _v0.d8;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$lastDayOf(date);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$lastDayOf = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$lastDayOf;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected = function (a) {
	return {$: 2, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
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
	var date = _v0;
	return date.f_;
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
		if (yearsComparison === 1) {
			if (monthsComparison === 1) {
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
		var lhs = _v0;
		var rhs = _v1;
		return A2($PanagiotisGeorgiadis$elm_datetime$Calendar$compare, lhs.d8, rhs.d8);
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
		var start = _v0;
		var end = _v1;
		return A2(
			$elm$core$List$map,
			function (date) {
				return {d8: date, hO: time};
			},
			A2($PanagiotisGeorgiadis$elm_datetime$Calendar$getDateRange, start.d8, end.d8));
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
	var date = _v0.d8;
	var time = _v0.hO;
	return {
		d8: $PanagiotisGeorgiadis$elm_datetime$Calendar$decrementDay(date),
		hO: time
	};
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
var $elm$core$Basics$neq = _Utils_notEqual;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset = function (model) {
	var range = model.e;
	var dateRangeOffset = model.fZ;
	if (!dateRangeOffset.$) {
		var minDateRangeLength = dateRangeOffset.a.g3;
		var offsetConfig = function (invalidDates) {
			return {gU: invalidDates, g3: minDateRangeLength};
		};
		if (range.$ === 1) {
			var start = range.a;
			var isNotEqualToStartDate = function (d) {
				return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, d) !== 1;
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
					fZ: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(invalidDates))
				});
		} else {
			return _Utils_update(
				model,
				{
					fZ: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Offset(
						offsetConfig(_List_Nil))
				});
		}
	} else {
		return model;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$setDateRange = F2(
	function (_v0, _v1) {
		var startDate = _v0.b0;
		var endDate = _v0.bM;
		var model = _v1;
		var isOutOfBounds = function (date) {
			var _v4 = model.fY;
			if (!_v4.$) {
				var minDate = _v4.a.g2;
				var maxDate = _v4.a.gX;
				return (!A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, minDate)) || (A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, maxDate) === 2);
			} else {
				return false;
			}
		};
		var isLessThanOffset = function () {
			var _v3 = model.fZ;
			if (!_v3.$) {
				var minDateRangeLength = _v3.a.g3;
				var dateRange = A3($PanagiotisGeorgiadis$elm_datetime$DateTime$getDateRange, startDate, endDate, $PanagiotisGeorgiadis$elm_datetime$Clock$midnight);
				return _Utils_cmp(
					$elm$core$List$length(dateRange),
					minDateRangeLength) < 0;
			} else {
				return false;
			}
		}();
		if (isOutOfBounds(startDate) || (isOutOfBounds(endDate) || isLessThanOffset)) {
			return model;
		} else {
			var _v2 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, startDate, endDate);
			switch (_v2) {
				case 1:
					return model;
				case 0:
					return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(
						_Utils_update(
							model,
							{
								e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
									A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, startDate, endDate))
							}));
				default:
					return $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(
						_Utils_update(
							model,
							{
								e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
									A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, endDate, startDate))
							}));
			}
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate = F2(
	function (date, _v0) {
		var time = _v0.hO;
		return {d8: date, hO: time};
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
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
		return ((day > 0) && (A2($elm$core$Basics$compare, day, maxValidDay) !== 2)) ? $elm$core$Maybe$Just(day) : $elm$core$Maybe$Nothing;
	});
var $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$fromYearMonthDay = F3(
	function (y, m, d) {
		var maxDay = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, y, m);
		var _v0 = A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$compareDays, d, maxDay);
		if (_v0 === 2) {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				{f_: d, eP: m, ii: y});
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
	var year = _v0.ii;
	var month = _v0.eP;
	var day = _v0.f_;
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
				f_: day,
				eP: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getMonth(date),
				ii: $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$yearToInt(
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
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$DateSelect$init = function (todayPosix) {
	var today = $PanagiotisGeorgiadis$elm_datetime$DateTime$fromPosix(todayPosix);
	var timePickerConfig = $elm$core$Maybe$Nothing;
	var defaultDateRange = {
		bM: A2($author$project$Extra$DateTime$incrementDays, 22, today),
		b0: A2($author$project$Extra$DateTime$incrementDays, 14, today)
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
		fY: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Types$DateLimit(
			{gX: maxDate, g2: minDate}),
		fZ: $elm$core$Maybe$Just(
			{g3: 1}),
		hr: $elm$core$Maybe$Nothing,
		h_: today
	};
	var pickerInit = A3($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$initialise, 0, calendarConfig, timePickerConfig);
	return {
		ap: false,
		aF: A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$setDateRange, defaultDateRange, pickerInit),
		aI: $elm$core$Maybe$Just(defaultDateRange)
	};
};
var $elm$core$Platform$Cmd$map = _Platform_map;
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
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Selectize$Selectize$removeLabel = function (labeledEntry) {
	if (!labeledEntry.$) {
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
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Selectize$Selectize$zipFirst = function (zipList) {
	var front = zipList.M;
	var current = zipList.q;
	var back = zipList.z;
	var currentTop = zipList.s;
	if (current.a.$ === 1) {
		if (!back.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var next = back.a;
			var rest = back.b;
			return $author$project$Selectize$Selectize$zipFirst(
				{
					z: rest,
					q: next,
					s: currentTop + current.b,
					M: A2($elm$core$List$cons, current, front)
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
					z: A2($author$project$Selectize$Selectize$zip, restEntries, restHeights),
					q: _Utils_Tuple2(firstEntry, firstHeight),
					s: 0,
					M: _List_Nil
				});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Selectize$Selectize$zipCurrentHeight = function (_v0) {
	var current = _v0.q;
	return current.b;
};
var $author$project$Selectize$Selectize$refresh = F4(
	function (state, id, toLabel, entries) {
		var newZipList = A2($author$project$Selectize$Selectize$fromList, state.t, state.bk);
		var top = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.s;
				},
				newZipList));
		var height = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipCurrentHeight, newZipList));
		var addLabel = function (e) {
			if (!e.$) {
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
			{t: labeledEntries, aW: 0, ac: $elm$core$Maybe$Nothing, y: newZipList});
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
	return {$: 1, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected = function (a) {
	return {$: 1, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$DoubleTimePicker = 2;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None = {$: 0};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg = function (a) {
	return {$: 10, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg = function (a) {
	return {$: 9, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected = function (a) {
	return {$: 1, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers = function (a) {
	return {$: 8, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction = function (msg) {
	return A2(
		$elm$core$Task$perform,
		function (_v0) {
			return msg;
		},
		$elm$core$Task$succeed(0));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDate;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime = function (_v0) {
	var time = _v0.hO;
	return time;
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$setDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$setDate;
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView = {$: 5};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView = function (_v0) {
	var viewType = _v0.h5;
	var timePickers = _v0.S;
	var _v1 = _Utils_Tuple2(viewType, timePickers);
	if ((_v1.a === 1) && (_v1.b.$ === 1)) {
		var _v2 = _v1.a;
		return $PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowClockView);
	} else {
		return $elm$core$Platform$Cmd$none;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None = {$: 0};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime = function (a) {
	return {$: 1, a: a};
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours = function (_v0) {
	var time = _v0;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.gN) - 1;
	return (newHours < 0) ? _Utils_Tuple2(
		_Utils_update(
			time,
			{gN: 23}),
		true) : _Utils_Tuple2(
		_Utils_update(
			time,
			{gN: newHours}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes = function (_v0) {
	var time = _v0;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.g4) - 1;
	return (newMinutes < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementHours(
		_Utils_update(
			time,
			{g4: 59})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{g4: newMinutes}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds = function (_v0) {
	var time = _v0;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.hB) - 1;
	return (newSeconds < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes(
		_Utils_update(
			time,
			{hB: 59})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{hB: newSeconds}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds = function (_v0) {
	var time = _v0;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.g0) - 1;
	return (newMillis < 0) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds(
		_Utils_update(
			time,
			{g0: 999})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{g0: newMillis}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$decrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$decrementSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep = function (_v0) {
	var pickerType = _v0.e$;
	switch (pickerType.$) {
		case 0:
			var hoursStep = pickerType.a.bP;
			return hoursStep;
		case 1:
			var hoursStep = pickerType.a.bP;
			return hoursStep;
		case 2:
			var hoursStep = pickerType.a.bP;
			return hoursStep;
		default:
			var hoursStep = pickerType.a.bP;
			return hoursStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMillisecondsStep = function (_v0) {
	var pickerType = _v0.e$;
	switch (pickerType.$) {
		case 0:
			return 1;
		case 1:
			return 1;
		case 2:
			return 1;
		default:
			var millisecondsStep = pickerType.a.g1;
			return millisecondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep = function (_v0) {
	var pickerType = _v0.e$;
	switch (pickerType.$) {
		case 0:
			return 1;
		case 1:
			var minutesStep = pickerType.a.c3;
			return minutesStep;
		case 2:
			var minutesStep = pickerType.a.c3;
			return minutesStep;
		default:
			var minutesStep = pickerType.a.c3;
			return minutesStep;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getSecondsStep = function (_v0) {
	var pickerType = _v0.e$;
	switch (pickerType.$) {
		case 0:
			return 1;
		case 1:
			return 1;
		case 2:
			var secondsStep = pickerType.a.fj;
			return secondsStep;
		default:
			var secondsStep = pickerType.a.fj;
			return secondsStep;
	}
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours = function (_v0) {
	var time = _v0;
	var newHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(time.gN) + 1;
	return (newHours >= 24) ? _Utils_Tuple2(
		_Utils_update(
			time,
			{gN: 0}),
		true) : _Utils_Tuple2(
		_Utils_update(
			time,
			{gN: newHours}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes = function (_v0) {
	var time = _v0;
	var newMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(time.g4) + 1;
	return (newMinutes >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementHours(
		_Utils_update(
			time,
			{g4: 0})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{g4: newMinutes}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds = function (_v0) {
	var time = _v0;
	var newSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(time.hB) + 1;
	return (newSeconds >= 60) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes(
		_Utils_update(
			time,
			{hB: 0})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{hB: newSeconds}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds = function (_v0) {
	var time = _v0;
	var newMillis = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(time.g0) + 1;
	return (newMillis >= 1000) ? $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds(
		_Utils_update(
			time,
			{g0: 0})) : _Utils_Tuple2(
		_Utils_update(
			time,
			{g0: newMillis}),
		false);
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$incrementSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$incrementSeconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime = F4(
	function (hours, minutes, seconds, milliseconds) {
		return {gN: hours, g0: milliseconds, g4: minutes, hB: seconds};
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursFromInt = function (hours) {
	return ((hours >= 0) && (hours < 24)) ? $elm$core$Maybe$Just(hours) : $elm$core$Maybe$Nothing;
};
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 1) {
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
	return ((millis >= 0) && (millis < 1000)) ? $elm$core$Maybe$Just(millis) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesFromInt = function (minutes) {
	return ((minutes >= 0) && (minutes < 60)) ? $elm$core$Maybe$Just(minutes) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsFromInt = function (seconds) {
	return ((seconds >= 0) && (seconds < 60)) ? $elm$core$Maybe$Just(seconds) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts = function (_v0) {
	var hours = _v0.gN;
	var minutes = _v0.g4;
	var seconds = _v0.hB;
	var milliseconds = _v0.g0;
	return A5(
		$elm$core$Maybe$map4,
		F4(
			function (h, m, s, mm) {
				return A4($PanagiotisGeorgiadis$elm_datetime$Clock$Internal$InternalTime, h, m, s, mm);
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
				gN: hours,
				g0: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				g4: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				hB: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setHours = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setHours;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds = F2(
	function (milliseconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				gN: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				g0: milliseconds,
				g4: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				hB: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMilliseconds;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes = F2(
	function (minutes, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				gN: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				g0: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				g4: minutes,
				hB: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$secondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getSeconds(time))
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setMinutes;
var $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds = F2(
	function (seconds, time) {
		return $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$fromRawParts(
			{
				gN: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$hoursToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getHours(time)),
				g0: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$millisecondsToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMilliseconds(time)),
				g4: $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$minutesToInt(
					$PanagiotisGeorgiadis$elm_datetime$Clock$Internal$getMinutes(time)),
				hB: seconds
			});
	});
var $PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds = $PanagiotisGeorgiadis$elm_datetime$Clock$Internal$setSeconds;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$stepThrough = function (_v0) {
	stepThrough:
	while (true) {
		var n = _v0.aZ;
		var updateFn = _v0.bF;
		var time = _v0.hO;
		var _v1 = _Utils_Tuple2(
			updateFn(time),
			n - 1);
		var time_ = _v1.a;
		var n_ = _v1.b;
		if (n_ <= 0) {
			return time_;
		} else {
			var $temp$_v0 = {aZ: n_, hO: time_, bF: updateFn};
			_v0 = $temp$_v0;
			continue stepThrough;
		}
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime = F2(
	function (time, _v0) {
		var model = _v0;
		return _Utils_update(
			model,
			{
				gN: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 0, time),
				g0: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 3, time),
				g4: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 1, time),
				hB: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 2, time),
				hO: time
			});
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
	var _default = _v0.cm;
	var _new = _v0.c6;
	var ceil = _v0.ch;
	var _v1 = $elm$core$String$toInt(_new);
	if (!_v1.$) {
		var v = _v1.a;
		return ((v >= 0) && (_Utils_cmp(v, ceil) < 0)) ? _new : _default;
	} else {
		return $elm$core$String$isEmpty(_new) ? _new : _default;
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate = F3(
	function (_v0, timePart, newValue) {
		var hours = _v0.gN;
		var minutes = _v0.g4;
		var seconds = _v0.hB;
		var milliseconds = _v0.g0;
		var sanitisedValue = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$filterNonDigits(newValue);
		var validationParams = F2(
			function (_default, ceil) {
				return {ch: ceil, cm: _default, c6: sanitisedValue};
			});
		switch (timePart) {
			case 0:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, hours, 24));
			case 1:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, minutes, 60));
			case 2:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, seconds, 60));
			default:
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validateTimeSegment(
					A2(validationParams, milliseconds, 1000));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update = F2(
	function (msg, _v0) {
		var model = _v0;
		switch (msg.$) {
			case 0:
				var timePart = msg.a;
				var value = msg.b;
				var validatedValue = A3($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$validate, model, timePart, value);
				var updatedModel = function () {
					switch (timePart) {
						case 0:
							return _Utils_update(
								model,
								{gN: validatedValue});
						case 1:
							return _Utils_update(
								model,
								{g4: validatedValue});
						case 2:
							return _Utils_update(
								model,
								{hB: validatedValue});
						default:
							return _Utils_update(
								model,
								{g0: validatedValue});
					}
				}();
				return _Utils_Tuple3(updatedModel, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
			case 1:
				var timePart = msg.a;
				var value = msg.b;
				var updatedTime = function () {
					switch (timePart) {
						case 0:
							return A2(
								$elm$core$Maybe$andThen,
								function (h) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setHours, h, model.hO);
								},
								$elm$core$String$toInt(value));
						case 1:
							return A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMinutes, m, model.hO);
								},
								$elm$core$String$toInt(value));
						case 2:
							return A2(
								$elm$core$Maybe$andThen,
								function (s) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setSeconds, s, model.hO);
								},
								$elm$core$String$toInt(value));
						default:
							return A2(
								$elm$core$Maybe$andThen,
								function (m) {
									return A2($PanagiotisGeorgiadis$elm_datetime$Clock$setMilliseconds, m, model.hO);
								},
								$elm$core$String$toInt(value));
					}
				}();
				if (!updatedTime.$) {
					var time = updatedTime.a;
					var updatedModel = function () {
						switch (timePart) {
							case 0:
								return _Utils_update(
									model,
									{
										gN: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 0, time),
										hO: time
									});
							case 1:
								return _Utils_update(
									model,
									{
										g4: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 1, time),
										hO: time
									});
							case 2:
								return _Utils_update(
									model,
									{
										hB: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 2, time),
										hO: time
									});
							default:
								return _Utils_update(
									model,
									{
										g0: A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toString, 3, time),
										hO: time
									});
						}
					}();
					return _Utils_Tuple3(
						updatedModel,
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$None);
				}
			case 2:
				var timePart = msg.a;
				var _v6 = function () {
					switch (timePart) {
						case 0:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 1:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$incrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 2:
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
					{aZ: step, hO: model.hO, bF: updateFn});
				return _Utils_Tuple3(
					A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime, time, model),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
			default:
				var timePart = msg.a;
				var _v8 = function () {
					switch (timePart) {
						case 0:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementHours),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getHoursStep(model));
						case 1:
							return _Utils_Tuple2(
								A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $PanagiotisGeorgiadis$elm_datetime$Clock$decrementMinutes),
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getMinutesStep(model));
						case 2:
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
					{aZ: step, hO: model.hO, bF: updateFn});
				return _Utils_Tuple3(
					A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime, time, model),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$UpdatedTime(time));
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update = F2(
	function (msg, _v0) {
		var model = _v0;
		switch (msg.$) {
			case 0:
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							hr: $PanagiotisGeorgiadis$elm_datetime$DateTime$decrementMonth(model.hr)
						}),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 1:
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							hr: $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(model.hr)
						}),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 2:
				var date = msg.a;
				var updateModel = function (start) {
					var _v6 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					switch (_v6) {
						case 1:
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NoneSelected}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
						case 0:
							var _v7 = function () {
								var _v8 = model.S;
								if (_v8.$ === 1) {
									var startPicker = _v8.a.av;
									var endPicker = _v8.a.aB;
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
										e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{bM: end_, b0: start_})));
						default:
							var _v9 = function () {
								var _v10 = model.S;
								if (_v10.$ === 1) {
									var startPicker = _v10.a.av;
									var endPicker = _v10.a.aB;
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
										e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
											A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Chosen, start_, end_))
									}),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$showClockView(model),
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected(
									$elm$core$Maybe$Just(
										{bM: end_, b0: start_})));
					}
				};
				var _v2 = function () {
					var _v3 = model.e;
					switch (_v3.$) {
						case 1:
							var start = _v3.a;
							return updateModel(start);
						case 2:
							if (!_v3.a.$) {
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
											e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
										}),
									$elm$core$Platform$Cmd$none,
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$DateRangeSelected($elm$core$Maybe$Nothing));
							}
						default:
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(date)
									}),
								$elm$core$Platform$Cmd$none,
								$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				}();
				var model_ = _v2.a;
				var cmd = _v2.b;
				var extMsg = _v2.c;
				return _Utils_Tuple3(
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updateDateRangeOffset(model_),
					cmd,
					extMsg);
			case 3:
				var date = msg.a;
				var updateModel = function (start) {
					var _v13 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, date);
					if (_v13 === 1) {
						return _Utils_update(
							model,
							{
								e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
							});
					} else {
						return _Utils_update(
							model,
							{
								e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$BothSelected(
									A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$Visually, start, date))
							});
					}
				};
				var updatedModel = function () {
					var _v11 = model.e;
					_v11$2:
					while (true) {
						switch (_v11.$) {
							case 1:
								var start = _v11.a;
								return updateModel(start);
							case 2:
								if (!_v11.a.$) {
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
				return _Utils_Tuple3(updatedModel, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 4:
				var _v14 = model.e;
				if ((_v14.$ === 2) && (!_v14.a.$)) {
					var _v15 = _v14.a;
					var start = _v15.a;
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								e: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$StartDateSelected(start)
							}),
						$elm$core$Platform$Cmd$none,
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 5:
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{h5: 2}),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 6:
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{h5: 1}),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
			case 7:
				var _v16 = model.S;
				if (_v16.$ === 1) {
					var pickers = _v16.a;
					var startPicker = pickers.av;
					var mirrorTimes = pickers.br;
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								S: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
									_Utils_update(
										pickers,
										{br: !mirrorTimes}))
							}),
						$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(
								$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getTime(startPicker))),
						$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 8:
				var time = msg.a;
				var _v17 = model.S;
				if (_v17.$ === 1) {
					var pickers = _v17.a;
					var startPicker = pickers.av;
					var endPicker = pickers.aB;
					var mirrorTimes = pickers.br;
					if (mirrorTimes) {
						var updateFn = $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$updateDisplayTime(time);
						var _v18 = function () {
							var _v19 = model.e;
							if ((_v19.$ === 2) && (_v19.a.$ === 1)) {
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
											{bM: updatedEndDate, b0: updatedStartDate})));
							} else {
								return _Utils_Tuple2(model.e, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						}();
						var range = _v18.a;
						var extMsg = _v18.b;
						return _Utils_Tuple3(
							_Utils_update(
								model,
								{
									e: range,
									S: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
										_Utils_update(
											pickers,
											{
												aB: updateFn(endPicker),
												av: updateFn(startPicker)
											}))
								}),
							$elm$core$Platform$Cmd$none,
							extMsg);
					} else {
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
					}
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 9:
				var subMsg = msg.a;
				var _v22 = model.S;
				if (_v22.$ === 1) {
					var pickers = _v22.a;
					var startPicker = pickers.av;
					var _v23 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, startPicker);
					var subModel = _v23.a;
					var subCmd = _v23.b;
					var extMsg = _v23.c;
					var _v24 = function () {
						var _v25 = _Utils_Tuple2(extMsg, model.e);
						if (_v25.a.$ === 1) {
							if ((_v25.b.$ === 2) && (_v25.b.a.$ === 1)) {
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
											{bM: end, b0: updatedStart})));
							} else {
								var time = _v25.a.a;
								return _Utils_Tuple3(
									model.e,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.e, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v24.a;
					var cmd = _v24.b;
					var externalMsg = _v24.c;
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								e: range,
								S: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
									_Utils_update(
										pickers,
										{av: subModel}))
							}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeStartPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			case 10:
				var subMsg = msg.a;
				var _v27 = model.S;
				if (_v27.$ === 1) {
					var pickers = _v27.a;
					var endPicker = pickers.aB;
					var _v28 = A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$update, subMsg, endPicker);
					var subModel = _v28.a;
					var subCmd = _v28.b;
					var extMsg = _v28.c;
					var _v29 = function () {
						var _v30 = _Utils_Tuple2(extMsg, model.e);
						if (_v30.a.$ === 1) {
							if ((_v30.b.$ === 2) && (_v30.b.a.$ === 1)) {
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
											{bM: updatedEnd, b0: start})));
							} else {
								var time = _v30.a.a;
								return _Utils_Tuple3(
									model.e,
									$PanagiotisGeorgiadis$elm_datepicker$Utils$Actions$fireAction(
										$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SyncTimePickers(time)),
									$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
							}
						} else {
							return _Utils_Tuple3(model.e, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
						}
					}();
					var range = _v29.a;
					var cmd = _v29.b;
					var externalMsg = _v29.c;
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								e: range,
								S: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$TimePickers(
									_Utils_update(
										pickers,
										{aB: subModel}))
							}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Platform$Cmd$map, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$RangeEndPickerMsg, subCmd),
									cmd
								])),
						externalMsg);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
				}
			default:
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							hr: A2(
								$PanagiotisGeorgiadis$elm_datetime$DateTime$setDate,
								$PanagiotisGeorgiadis$elm_datetime$DateTime$getDate(model.h_),
								model.hr)
						}),
					$elm$core$Platform$Cmd$none,
					$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$None);
		}
	});
var $author$project$DateSelect$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 1:
				var subMsg = msg.a;
				var _v1 = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$update, subMsg, model.aF);
				var updated = _v1.a;
				var subCmd = _v1.b;
				var extMsg = _v1.c;
				var selectedRange = function () {
					if (!extMsg.$) {
						return model.aI;
					} else {
						var dateRange = extMsg.a;
						return dateRange;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aF: updated, aI: selectedRange}),
					A2($elm$core$Platform$Cmd$map, $author$project$DateSelect$PickerMsg, subCmd));
			case 2:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ap: true}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ap: false}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Selectize$Selectize$NoOp = {$: 0};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
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
					task)));
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
	var current = _v0.q;
	if (!current.a.$) {
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
				if (!e.$) {
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
				{z: rest, q: first, s: 0, M: _List_Nil});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Selectize$Selectize$zipNext = function (zipList) {
	var front = zipList.M;
	var current = zipList.q;
	var back = zipList.z;
	var currentTop = zipList.s;
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
					z: rest,
					q: next,
					s: currentTop + current.b,
					M: A2($elm$core$List$cons, current, front)
				}));
	}
};
var $author$project$Selectize$Selectize$moveForwardToHelper = F2(
	function (a, zipList) {
		if (_Utils_eq(
			zipList.q.a,
			$author$project$Selectize$Selectize$Entry(a))) {
			return $elm$core$Maybe$Just(zipList);
		} else {
			var _v0 = zipList.z;
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
		{ac: $elm$core$Maybe$Nothing, aD: false, hs: '', y: $elm$core$Maybe$Nothing});
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
					var viewport = _v1.h6;
					return A3(
						$elm$browser$Browser$Dom$setViewportOf,
						$author$project$Selectize$Selectize$menuId(id),
						viewport.ia,
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
		var _v1 = state.y;
		if (!_v1.$) {
			var zipList = _v1.a;
			var top = zipList.s;
			var height = $author$project$Selectize$Selectize$zipCurrentHeight(zipList);
			var y = (_Utils_cmp(top, scrollTop) < 0) ? top : ((_Utils_cmp(top + height, scrollTop + state.aW) > 0) ? ((top + height) - state.aW) : scrollTop);
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
				if (!first.$) {
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
	var front = zipList.M;
	var current = zipList.q;
	var back = zipList.z;
	var currentTop = zipList.s;
	if (current.a.$ === 1) {
		if (!front.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var previous = front.a;
			var rest = front.b;
			return $author$project$Selectize$Selectize$zipReverseFirst(
				{
					z: A2($elm$core$List$cons, current, back),
					q: previous,
					s: currentTop - previous.b,
					M: rest
				});
		}
	} else {
		return $elm$core$Maybe$Just(zipList);
	}
};
var $author$project$Selectize$Selectize$zipPrevious = function (zipList) {
	var front = zipList.M;
	var current = zipList.q;
	var back = zipList.z;
	var currentTop = zipList.s;
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
					z: A2($elm$core$List$cons, current, back),
					q: previous,
					s: currentTop - previous.b,
					M: rest
				}));
	}
};
var $author$project$Selectize$Selectize$updateKeyboardFocus = F3(
	function (select, movement, state) {
		var newZipList = function () {
			switch (movement) {
				case 0:
					return A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipPrevious, state.y);
				case 1:
					return A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipNext, state.y);
				default:
					return state.y;
			}
		}();
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{y: newZipList}),
			$elm$core$Platform$Cmd$none,
			$elm$core$Maybe$Just(
				select($elm$core$Maybe$Nothing)));
	});
var $author$project$Selectize$Selectize$update = F4(
	function (select, maybeSelection, state, msg) {
		switch (msg.$) {
			case 0:
				return _Utils_Tuple3(state, $elm$core$Platform$Cmd$none, $elm$core$Maybe$Nothing);
			case 1:
				var heights = msg.a;
				var scrollTop = msg.b;
				var newZipList = A2(
					$elm$core$Maybe$map,
					function () {
						if (!maybeSelection.$) {
							var a = maybeSelection.a;
							return $author$project$Selectize$Selectize$moveForwardTo(a);
						} else {
							return $elm$core$Basics$identity;
						}
					}(),
					A2($author$project$Selectize$Selectize$fromList, state.t, heights.t));
				var top = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.s;
						},
						newZipList));
				var height = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2($elm$core$Maybe$map, $author$project$Selectize$Selectize$zipCurrentHeight, newZipList));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{bk: heights.t, aW: heights.g_, ac: $elm$core$Maybe$Nothing, aD: true, hs: '', dw: scrollTop, y: newZipList}),
					A2($author$project$Selectize$Selectize$scroll, state.eA, top - ((heights.g_ - height) / 2)),
					$elm$core$Maybe$Nothing);
			case 2:
				return state.b$ ? _Utils_Tuple3(state, $elm$core$Platform$Cmd$none, $elm$core$Maybe$Nothing) : _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 3:
				return _Utils_Tuple3(
					state,
					$author$project$Selectize$Selectize$focus(state.eA),
					$elm$core$Maybe$Nothing);
			case 4:
				return _Utils_Tuple3(
					state,
					$author$project$Selectize$Selectize$blur(state.eA),
					$elm$core$Maybe$Nothing);
			case 5:
				var preventBlur = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{b$: preventBlur}),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 6:
				var newQuery = msg.a;
				var newZipList = A3($author$project$Selectize$Selectize$fromListWithFilter, newQuery, state.t, state.bk);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{ac: $elm$core$Maybe$Nothing, hs: newQuery, y: newZipList}),
					A2($author$project$Selectize$Selectize$scroll, state.eA, 0),
					$elm$core$Maybe$Just(
						select($elm$core$Maybe$Nothing)));
			case 7:
				var newFocus = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{ac: newFocus}),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Nothing);
			case 8:
				var a = msg.a;
				var selection = A2($author$project$Selectize$Selectize$selectFirst, state.t, a);
				return _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$elm$core$Platform$Cmd$none,
					$elm$core$Maybe$Just(
						select(
							$elm$core$Maybe$Just(a))));
			case 9:
				var movement = msg.a;
				var scrollTop = msg.b;
				return A3(
					$author$project$Selectize$Selectize$scrollToKeyboardFocus,
					state.eA,
					scrollTop,
					A3($author$project$Selectize$Selectize$updateKeyboardFocus, select, movement, state));
			case 10:
				var selection = A2(
					$elm$core$Maybe$andThen,
					$author$project$Selectize$Selectize$selectFirst(state.t),
					A2($elm$core$Maybe$andThen, $author$project$Selectize$Selectize$currentEntry, state.y));
				return _Utils_Tuple3(
					$author$project$Selectize$Selectize$reset(state),
					$author$project$Selectize$Selectize$blur(state.eA),
					$elm$core$Maybe$Just(
						select(
							A2($elm$core$Maybe$andThen, $author$project$Selectize$Selectize$currentEntry, state.y))));
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
			case 3:
				var value = data.a;
				return $krisajenkins$remotedata$RemoteData$Success(
					f(value));
			case 1:
				return $krisajenkins$remotedata$RemoteData$Loading;
			case 0:
				return $krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				var error = data.a;
				return $krisajenkins$remotedata$RemoteData$Failure(error);
		}
	});
var $krisajenkins$remotedata$RemoteData$withDefault = F2(
	function (_default, data) {
		if (data.$ === 3) {
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
					ag: A3(
						$author$project$Selectize$closed,
						'textfield-menu',
						function ($) {
							return $.aP;
						},
						$author$project$Main$searchCategories)
				}),
			$elm$core$Platform$Cmd$none);
		switch (msg.$) {
			case 4:
				switch (msg.a.$) {
					case 3:
						var data = msg.a;
						var items = data.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									ag: A4(
										$author$project$Selectize$refresh,
										model.ag,
										'textfield-menu',
										function ($) {
											return $.aP;
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
					case 0:
						var data = msg.a;
						return defaultSearch;
					case 1:
						var data = msg.a;
						return defaultSearch;
					default:
						var data = msg.a;
						return defaultSearch;
				}
			case 5:
				var data = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							bd: data,
							cZ: A2(
								$elm$core$Maybe$withDefault,
								0,
								$elm$core$List$maximum(
									A2(
										$elm$core$List$concatMap,
										function ($) {
											return $.ce;
										},
										$author$project$Main$webDataToList(data)))),
							c_: A2(
								$elm$core$Maybe$withDefault,
								0,
								$elm$core$List$maximum(
									A2(
										$elm$core$List$concatMap,
										function ($) {
											return $.cP;
										},
										$author$project$Main$webDataToList(data))))
						}),
					$elm$core$Platform$Cmd$none);
			case 6:
				var todayPosix = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ae: $elm$core$Maybe$Just(
								$author$project$DateSelect$init(todayPosix))
						}),
					$elm$core$Platform$Cmd$none);
			case 7:
				var subMsg = msg.a;
				var _v1 = model.ae;
				if (!_v1.$) {
					var picker = _v1.a;
					var _v2 = A2($author$project$DateSelect$update, subMsg, picker);
					var subModel = _v2.a;
					var subCmd = _v2.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								ae: $elm$core$Maybe$Just(subModel)
							}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$SingleDateRangePickerWithInputMsg, subCmd));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 0:
				var newQuery = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bw: newQuery}),
					$elm$core$Platform$Cmd$none);
			case 1:
				var newState = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bx: newState}),
					$elm$core$Platform$Cmd$none);
			case 3:
				var newSelection = msg.a;
				if (newSelection.$ === 1) {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{aJ: newSelection}),
						A3($ohanhi$remotedata_http$RemoteData$Http$get, $author$project$Main$apiUrl + ('/searchCountry?input=' + model.ag.hs), $author$project$Main$SearchResponse, $author$project$Main$searchDecoder));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								bd: $krisajenkins$remotedata$RemoteData$Loading,
								bw: '',
								bx: $billstclair$elm_sortable_table$Table$initialSort(''),
								aJ: newSelection
							}),
						A3(
							$ohanhi$remotedata_http$RemoteData$Http$get,
							$author$project$Main$apiUrl + ('/getCities?k=' + A2(
								$elm$core$Maybe$withDefault,
								'',
								A2(
									$elm$core$Maybe$map,
									function ($) {
										return $.eA;
									},
									newSelection))),
							$author$project$Main$CityResponse,
							$author$project$Main$cityDecoder));
				}
			default:
				var selectizeMsg = msg.a;
				var _v4 = A4($author$project$Selectize$update, $author$project$Main$SelectTextfieldCity, model.aJ, model.ag, selectizeMsg);
				var newMenu = _v4.a;
				var menuCmd = _v4.b;
				var maybeMsg = _v4.c;
				var cmd = A2($elm$core$Platform$Cmd$map, $author$project$Main$TextfieldMenuMsg, menuCmd);
				var newModel = _Utils_update(
					model,
					{ag: newMenu});
				if (!maybeMsg.$) {
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
	return {$: 1, a: a};
};
var $billstclair$elm_sortable_table$Table$DecOrInc = function (a) {
	return {$: 4, a: a};
};
var $elm$core$List$sortBy = _List_sortBy;
var $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$DecOrInc(
		$elm$core$List$sortBy(toComparable));
};
var $billstclair$elm_sortable_table$Table$IncOrDec = function (a) {
	return {$: 3, a: a};
};
var $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$IncOrDec(
		$elm$core$List$sortBy(toComparable));
};
var $billstclair$elm_sortable_table$Table$Column = $elm$core$Basics$identity;
var $billstclair$elm_sortable_table$Table$veryCustomColumn = $elm$core$Basics$identity;
var $billstclair$elm_sortable_table$Table$HtmlDetails = F2(
	function (attributes, children) {
		return {d_: attributes, d2: children};
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $cuducos$elm_format_number$Parser$FormattedNumber = F5(
	function (original, integers, decimals, prefix, suffix) {
		return {ea: decimals, eD: integers, eU: original, b_: prefix, b2: suffix};
	});
var $cuducos$elm_format_number$Parser$Negative = 2;
var $cuducos$elm_format_number$Parser$Positive = 0;
var $cuducos$elm_format_number$Parser$Zero = 1;
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
			return _char === '0';
		},
		$elm$core$String$concat(
			A2(
				$elm$core$List$append,
				formatted.eD,
				$elm$core$List$singleton(formatted.ea))));
	return onlyZeros ? 1 : ((formatted.eU < 0) ? 2 : 0);
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
				return (c !== '0') && (c !== '.');
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$String$cons = _String_cons;
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (head === '9') {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 1) {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				'0',
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
								total))))) : A3($elm$core$String$padRight, e + 1, '0', total);
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
					'0',
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
				A3($elm$core$String$padRight, s, '0', after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 1) {
				return false;
			} else {
				if ('5' === _v0.a.a) {
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
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
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
			A2($myrho$elm_round$Round$round, locale.ea, original));
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
		switch (_v0) {
			case 2:
				return _Utils_update(
					partial,
					{b_: locale.g7, b2: locale.g8});
			case 0:
				return _Utils_update(
					partial,
					{b_: locale.hp, b2: locale.hq});
			default:
				return _Utils_update(
					partial,
					{b_: locale.ik, b2: locale.il});
		}
	});
var $cuducos$elm_format_number$Stringfy$formatDecimals = F2(
	function (locale, decimals) {
		return (decimals === '') ? '' : _Utils_ap(locale.f$, decimals);
	});
var $cuducos$elm_format_number$Stringfy$removeZeros = function (decimals) {
	return (A2($elm$core$String$right, 1, decimals) !== '0') ? decimals : $cuducos$elm_format_number$Stringfy$removeZeros(
		A2($elm$core$String$dropRight, 1, decimals));
};
var $cuducos$elm_format_number$Stringfy$humanizeDecimals = F3(
	function (locale, strategy, decimals) {
		if ((decimals === '') || _Utils_eq(
			A2($elm$core$String$repeat, locale.ea, '0'),
			decimals)) {
			return '';
		} else {
			if (!strategy) {
				return _Utils_ap(locale.f$, decimals);
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
			if (!strategy.$) {
				var strategy_ = strategy.a;
				return A2($cuducos$elm_format_number$Stringfy$humanizeDecimals, locale, strategy_);
			} else {
				return $cuducos$elm_format_number$Stringfy$formatDecimals(locale);
			}
		}();
		var integers = A2($elm$core$String$join, locale.hN, formatted.eD);
		var decimals = stringfyDecimals(formatted.ea);
		return $elm$core$String$concat(
			_List_fromArray(
				[formatted.b_, integers, decimals, formatted.b2]));
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
		return {f$: decimalSeparator, ea: decimals, g7: negativePrefix, g8: negativeSuffix, hp: positivePrefix, hq: positiveSuffix, hN: thousandSeparator, ik: zeroPrefix, il: zeroSuffix};
	});
var $cuducos$elm_format_number$FormatNumber$Locales$usLocale = A9($cuducos$elm_format_number$FormatNumber$Locales$Locale, 2, ',', '.', '−', '', '', '', '', '');
var $author$project$Main$sharesLocale = _Utils_update(
	$cuducos$elm_format_number$FormatNumber$Locales$usLocale,
	{ea: 0});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
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
				v: name,
				w: (prefix === '$') ? $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy(value) : $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(value),
				x: function (data) {
					return A3(
						$author$project$Main$viewBarChartThousands,
						prefix,
						$elm$core$String$fromInt(
							value(data)),
						((100 * value(data)) / maxValue) | 0);
				}
			});
	});
var $billstclair$elm_sortable_table$Table$Config = $elm$core$Basics$identity;
var $billstclair$elm_sortable_table$Table$simpleRowAttrs = function (_v0) {
	return _List_Nil;
};
var $billstclair$elm_sortable_table$Table$nbsp = $elm$core$String$fromList(
	_List_fromArray(
		[
			$elm$core$Char$fromCode(160)
		]));
var $elm$html$Html$span = _VirtualDom_node('span');
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
			case 0:
				return _List_fromArray(
					[
						$elm$html$Html$text(name)
					]);
			case 1:
				var selected = status.a;
				return _List_fromArray(
					[
						$elm$html$Html$text(name),
						selected ? $billstclair$elm_sortable_table$Table$darkGrey('↓') : $billstclair$elm_sortable_table$Table$lightGrey('↓')
					]);
			default:
				if (status.a.$ === 1) {
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
var $billstclair$elm_sortable_table$Table$defaultCustomizations = {cg: $elm$core$Maybe$Nothing, du: $billstclair$elm_sortable_table$Table$simpleRowAttrs, dH: _List_Nil, dI: _List_Nil, dJ: $elm$core$Maybe$Nothing, dK: $billstclair$elm_sortable_table$Table$simpleThead};
var $billstclair$elm_sortable_table$Table$config = function (_v0) {
	var toId = _v0.hT;
	var toMsg = _v0.hW;
	var columns = _v0.fS;
	return {
		fS: A2(
			$elm$core$List$map,
			function (_v1) {
				var cData = _v1;
				return cData;
			},
			columns),
		be: $billstclair$elm_sortable_table$Table$defaultCustomizations,
		hT: toId,
		hW: toMsg
	};
};
var $billstclair$elm_sortable_table$Table$Increasing = function (a) {
	return {$: 1, a: a};
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$increasingBy(value),
				x: function (data) {
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
					A2($elm$core$String$contains, 'Risk', name) ? function (data) {
						return (valueBad(data) > 20) ? (valueGood(data) - (3 * valueBad(data))) : valueGood(data);
					} : function (data) {
						return (_Utils_cmp(
							valueGood(data),
							2 * valueBad(data)) > 0) ? (valueGood(data) * 2) : valueGood(data);
					}),
				x: function (data) {
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
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
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
				x: function (data) {
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
	switch (month) {
		case 0:
			return '01';
		case 1:
			return '02';
		case 2:
			return '03';
		case 3:
			return '04';
		case 4:
			return '05';
		case 5:
			return '06';
		case 6:
			return '07';
		case 7:
			return '08';
		case 8:
			return '09';
		case 9:
			return '10';
		case 10:
			return '11';
		default:
			return '12';
	}
};
var $author$project$DateSelect$endDateString = function (_v0) {
	var picker = _v0.aF;
	var selectedRange = _v0.aI;
	var isFocused = _v0.ap;
	if (!selectedRange.$) {
		var startDate = selectedRange.a.b0;
		var endDate = selectedRange.a.bM;
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(toflags),
				x: function (data) {
					return $author$project$Main$viewflags(
						toflags(data));
				}
			});
	});
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(value),
				x: function (data) {
					return A2(
						$author$project$Main$viewMaterialUILink,
						value(data),
						icon);
				}
			});
	});
var $billstclair$elm_sortable_table$Table$Decreasing = function (a) {
	return {$: 2, a: a};
};
var $billstclair$elm_sortable_table$Table$decreasingBy = function (toComparable) {
	return $billstclair$elm_sortable_table$Table$Decreasing(
		$elm$core$List$sortBy(toComparable));
};
var $author$project$Main$noiseColumn = F3(
	function (name, value, maxValue) {
		return $billstclair$elm_sortable_table$Table$veryCustomColumn(
			{
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingBy(value),
				x: function (data) {
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
				v: name,
				w: $billstclair$elm_sortable_table$Table$decreasingOrIncreasingBy(
					function (data) {
						return $author$project$Main$mwd(
							A2(
								$elm$core$Array$get,
								1,
								valueGood(data)));
					}),
				x: function (data) {
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
	var picker = _v0.aF;
	var selectedRange = _v0.aI;
	var isFocused = _v0.ap;
	if (!selectedRange.$) {
		var startDate = selectedRange.a.b0;
		var endDate = selectedRange.a.bM;
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
		return {
			v: name,
			w: $billstclair$elm_sortable_table$Table$increasingOrDecreasingBy(toStr),
			x: A2($elm$core$Basics$composeL, $billstclair$elm_sortable_table$Table$textDetails, toStr)
		};
	});
var $author$project$Main$config = function (model) {
	return $billstclair$elm_sortable_table$Table$config(
		{
			fS: _List_fromArray(
				[
					A2(
					$author$project$Main$flagColumn,
					'Flag',
					function ($) {
						return $.fx;
					}),
					A2(
					$billstclair$elm_sortable_table$Table$stringColumn,
					'Name',
					function ($) {
						return $.aZ;
					}),
					A3(
					$author$project$Main$materialUIColumn,
					'Map',
					function (rec) {
						return 'https://www.google.com/maps/@' + (rec.eH + (',' + (rec.eM + (',' + '12z/'))));
					},
					'map'),
					A3(
					$author$project$Main$materialUIColumn,
					'Search',
					function (rec) {
						return 'https://google.com/search?q=' + (rec.aZ + (', ' + rec.dv));
					},
					'search'),
					A3(
					$author$project$Main$materialUIColumn,
					'Video',
					function (rec) {
						return 'https://youtube.com/search?q=' + (rec.aZ + (', ' + rec.dv));
					},
					'video_library'),
					A3(
					$author$project$Main$materialUIColumn,
					'Hotels',
					function (rec) {
						return ($elm$core$String$length(rec.cC) > 1) ? ('https://www.hotelscombined.com/Hotels/Search?destination=' + (rec.cC + ('&radius=6mi&checkin=' + (A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Maybe$map, $author$project$DateSelect$startDateString, model.ae)) + ('&checkout=' + (A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Maybe$map, $author$project$DateSelect$endDateString, model.ae)) + ('&Rooms=1&adults_1=1' + '&pageSize=15&pageIndex=0&sort=MinRate-asc&showSoldOut=false?a_aid=208728'))))))) : 'https://www.hotelscombined.com/?a_aid=208728';
					},
					'hotel'),
					A4(
					$author$project$Main$barChartColumn,
					'Hotel $ min',
					'$',
					function ($) {
						return $.cB;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cB;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com $ min',
					'$',
					function ($) {
						return $.cG;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cG;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com $ avg',
					'$',
					function ($) {
						return $.cF;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cF;
								},
								$author$project$Main$cities)))),
					A5(
					$author$project$Main$doubleBarTripleChartColumn,
					'Avg Boring & Interesting',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.ce;
							}(data));
					},
					1000,
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.cP;
							}(data));
					},
					1500),
					A5(
					$author$project$Main$doubleBarChartColumn,
					'Sum Boring & Interesting',
					function (rec) {
						return (rec.eV / 100) | 0;
					},
					2000,
					function (rec) {
						return (rec.eW / 100) | 0;
					},
					3000),
					A5(
					$author$project$Main$doubleBarTripleChartColumn,
					'Avg Risk & Safety',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.d6;
							}(data));
					},
					1000,
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.ff;
							}(data));
					},
					1500),
					A5(
					$author$project$Main$doubleBarChartColumn,
					'Sum Risk & Safety',
					function (rec) {
						return (rec.d7 / 10) | 0;
					},
					20000,
					function (rec) {
						return (rec.eX / 10) | 0;
					},
					30000),
					A3(
					$author$project$Main$distColumn,
					'Avg Distance to City Center',
					function ($) {
						return $.co;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.co;
								},
								$author$project$Main$cities)))),
					A3(
					$author$project$Main$singleBarTripleChartColumn,
					'Population (GHSL)',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.e1;
							}(data));
					},
					2000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Public Transport',
					'',
					function (rec) {
						return $elm$core$List$sum(rec.$7);
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function (rec) {
									return $elm$core$List$sum(rec.$7);
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Tourism',
					'',
					function (rec) {
						return $elm$core$List$sum(rec.dP);
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function (rec) {
									return $elm$core$List$sum(rec.dP);
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Solo Tourists',
					'',
					function ($) {
						return $.ct;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.ct;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Family Tourists',
					'',
					function ($) {
						return $.cu;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cu;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Celebrity Tourists',
					'',
					function ($) {
						return $.cs;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cs;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels Count',
					'',
					function ($) {
						return $.cA;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cA;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Hotels.com Count',
					'',
					function ($) {
						return $.cE;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cE;
								},
								$author$project$Main$cities)))),
					A3(
					$author$project$Main$singleBarTripleChartColumn,
					'Avg Restaurants',
					function (data) {
						return $elm$core$Array$fromList(
							function ($) {
								return $.ei;
							}(data));
					},
					1),
					A3(
					$author$project$Main$noiseColumn,
					'Avg Noise',
					function ($) {
						return $.c7;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.c7;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Township Area',
					'',
					function (rec) {
						return (rec.eb / 1000) | 0;
					},
					10000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Coastline',
					'',
					function ($) {
						return $.cj;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cj;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total navwater',
					'',
					function ($) {
						return $.c5;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.c5;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Public Transport',
					'',
					function ($) {
						return $.dp;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.dp;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Slope Variation',
					'',
					function (rec) {
						return (rec.fm / 100) | 0;
					},
					30000),
					A4(
					$author$project$Main$barChartColumn,
					'Total Toilets',
					'',
					function ($) {
						return $.dN;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.dN;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Restaurants',
					'',
					function ($) {
						return $.cv;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cv;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total Access to City',
					'',
					function ($) {
						return $.dV;
					},
					10000),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_water',
					'',
					function ($) {
						return $.cw;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cw;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_lake',
					'',
					function ($) {
						return $.cx;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cx;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_river',
					'',
					function ($) {
						return $.et;
					},
					30),
					A4(
					$author$project$Main$barChartColumn,
					'Total lakes_glwd3_mean',
					'',
					function ($) {
						return $.cQ;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cQ;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd_2_area',
					'',
					function ($) {
						return $.cy;
					},
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$maximum(
							A2(
								$elm$core$List$map,
								function ($) {
									return $.cy;
								},
								$author$project$Main$cities)))),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_ice',
					'',
					function ($) {
						return $.el;
					},
					20),
					A4(
					$author$project$Main$barChartColumn,
					'Total globcover_nodata',
					'',
					function ($) {
						return $.em;
					},
					50),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_marsh',
					'',
					function (rec) {
						return (rec.es + rec.ev) + rec.eq;
					},
					100),
					A4(
					$author$project$Main$barChartColumn,
					'Total glwd3_mangrove',
					'',
					function (rec) {
						return ((((rec.er + rec.ew) + rec.eu) + rec.ep) + rec.eo) + rec.en;
					},
					500)
				]),
			hT: function ($) {
				return $.aZ;
			},
			hW: $author$project$Main$SetTableState
		});
};
var $author$project$HttpExtra$errorToString = function (err) {
	switch (err.$) {
		case 1:
			return 'Timeout exceeded';
		case 2:
			return 'Network error';
		case 3:
			var resp = err.a;
			return 'Bad status' + $elm$core$String$fromInt(resp);
		case 4:
			var text = err.a;
			return 'Unexpected response from api: ' + text;
		default:
			var url = err.a;
			return 'Malformed url: ' + url;
	}
};
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$DateSelect$FocusHandler = {$: 2};
var $author$project$DateSelect$NoOp = {$: 0};
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
		var lhs = _v0;
		var rhs = _v1;
		return A2($PanagiotisGeorgiadis$elm_datetime$Calendar$getDayDiff, lhs.d8, rhs.d8);
	});
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDayDiff = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDayDiff;
var $elm$html$Html$input = _VirtualDom_node('input');
var $author$project$Extra$TimeUtils$monthToString = function (month) {
	switch (month) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
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
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ResetVisualSelection = {$: 4};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Right = 3;
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Size = F2(
	function (width, height) {
		return {bO: height, b7: width};
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$SelectDate = function (a) {
	return {$: 2, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$UpdateVisualSelection = function (a) {
	return {$: 3, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfDisabled = F2(
	function (_v0, date) {
		var today = _v0.h_;
		var dateLimit = _v0.fY;
		var isLesserThanDate = function (date_) {
			return !A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_);
		};
		var isGreaterThanDate = function (date_) {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_) === 2;
		};
		var isEqualToDate = function (date_) {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_) === 1;
		};
		if (dateLimit.$ === 1) {
			return false;
		} else {
			var minDate = dateLimit.a.g2;
			var maxDate = dateLimit.a.gX;
			return isLesserThanDate(minDate) || isGreaterThanDate(maxDate);
		}
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid = F2(
	function (_v0, date) {
		var dateRangeOffset = _v0.fZ;
		if (!dateRangeOffset.$) {
			var invalidDates = dateRangeOffset.a.gU;
			return A2(
				$elm$core$List$any,
				function (d) {
					return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, d) === 1;
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
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
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
				return 3;
			case 1:
				return 4;
			case 2:
				return 5;
			case 3:
				return 6;
			case 4:
				return 0;
			case 5:
				return 1;
			default:
				return 2;
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
	var dateTime = _v0;
	return $PanagiotisGeorgiadis$elm_datetime$Calendar$getWeekday(dateTime.d8);
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getWeekday = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getWeekday;
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToString = function (month) {
	switch (month) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
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
	switch (weekday) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
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
		var today = model.h_;
		var range = model.e;
		var isLesserThanDate = function (date_) {
			return !A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_);
		};
		var isInvalid = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$checkIfInvalid, model, date);
		var isGreaterThanDate = function (date_) {
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_) === 2;
		};
		var isPartOfTheDateRange = function () {
			var isDateBetween = F2(
				function (start, end) {
					return (isGreaterThanDate(start) && isLesserThanDate(end)) || (isLesserThanDate(start) && isGreaterThanDate(end));
				});
			if (range.$ === 2) {
				if (!range.a.$) {
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
			return A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, date, date_) === 1;
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
				if (range.$ === 1) {
					var start = range.a;
					return isEqualToDate(start);
				} else {
					return false;
				}
			}();
			var _v0 = function () {
				if (range.$ === 2) {
					if (!range.a.$) {
						var _v2 = range.a;
						var start = _v2.a;
						var end = _v2.b;
						var _v3 = function () {
							var _v4 = A2($PanagiotisGeorgiadis$elm_datetime$DateTime$compareDates, start, end);
							if (!_v4) {
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
	var year = _v0.ii;
	var month = _v0.eP;
	var lastDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$dayToInt(
		A2($PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$lastDayOf, year, month));
	return A2(
		$elm$core$List$map,
		function (day) {
			return {f_: day, eP: month, ii: year};
		},
		A2($elm$core$List$range, 1, lastDayOfTheMonth));
};
var $PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$Calendar$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth = function (_v0) {
	var date = _v0.d8;
	var time = _v0.hO;
	return A2(
		$elm$core$List$map,
		function (date_) {
			return {d8: date_, hO: time};
		},
		$PanagiotisGeorgiadis$elm_datetime$Calendar$getDatesInMonth(date));
};
var $PanagiotisGeorgiadis$elm_datetime$DateTime$getDatesInMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$Internal$getDatesInMonth;
var $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth = $PanagiotisGeorgiadis$elm_datetime$DateTime$setDay(1);
var $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$precedingWeekdays = function (weekday) {
	switch (weekday) {
		case 6:
			return 0;
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
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
	var primaryDate = model.hr;
	var precedingWeekdaysCount = function () {
		var _v0 = $PanagiotisGeorgiadis$elm_datepicker$Common$getFirstDayOfTheMonth(primaryDate);
		if (!_v0.$) {
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
					$elm$svg$Svg$Attributes$width(size.b7),
					$elm$svg$Svg$Attributes$height(size.bO),
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
							switch (direction) {
								case 0:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 1:
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 2:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)');
								default:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) scale(-1, 1) rotate(90.000000) translate(-12.000000, -12.000000)');
							}
						}()
						]),
					_List_Nil)
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Left = 2;
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$monthPickerText = function (date) {
	var _v0 = _Utils_Tuple2(
		$PanagiotisGeorgiadis$elm_datetime$DateTime$getMonth(date),
		$PanagiotisGeorgiadis$elm_datetime$DateTime$getYear(date));
	var month = _v0.a;
	var year = _v0.b;
	return $PanagiotisGeorgiadis$elm_datepicker$Utils$Time$monthToString(month) + (' ' + $elm$core$String$fromInt(year));
};
var $PanagiotisGeorgiadis$elm_datepicker$MonthPicker$todayButtonHtml = function (msg) {
	if (!msg.$) {
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
					$elm$svg$Svg$Attributes$width(size.b7),
					$elm$svg$Svg$Attributes$height(size.bO),
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
							switch (direction) {
								case 1:
									return $PanagiotisGeorgiadis$elm_datepicker$Utils$Html$Attributes$none;
								case 0:
									return $elm$svg$Svg$Attributes$transform('translate(12.000000, 12.000000) rotate(180.000000) translate(-12.000000, -12.000000)');
								case 2:
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
	var date = _v0.d8;
	var previousButtonHandler = _v0.e3;
	var nextButtonHandler = _v0.eS;
	var todayButtonHandler = _v0.ft;
	var previousButtonHtml = function () {
		if (!previousButtonHandler.$) {
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
						2,
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
						2,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextMonthDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(date);
	var nextButtonHtml = function () {
		if (!nextButtonHandler.$) {
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
						3,
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
						3,
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
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth = {$: 1};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$NextMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth = {$: 0};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction = function (isButtonActive) {
	return isButtonActive ? $elm$core$Maybe$Just($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$PreviousMonth) : $elm$core$Maybe$Nothing;
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$MoveToToday = {$: 11};
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
		var model = _v0;
		return _Utils_update(
			model,
			{hr: dt});
	});
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleCalendarView = function (model) {
	var today = model.h_;
	var primaryDate = model.hr;
	var dateLimit = model.fY;
	var range = model.e;
	var timePickers = model.S;
	var switchViewButton = function () {
		if ((range.$ === 2) && (range.a.$ === 1)) {
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
						3,
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
						3,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '20', '20'))
					]));
		}
	}();
	var nextDate = $PanagiotisGeorgiadis$elm_datetime$DateTime$incrementMonth(primaryDate);
	var nextModel = A2($PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$updatePrimaryDate, nextDate, model);
	var _v0 = function () {
		if (!dateLimit.$) {
			var minDate = dateLimit.a.g2;
			var maxDate = dateLimit.a.gX;
			return _Utils_Tuple3(
				!A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
				A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, nextDate) === 2,
				(!A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today)) && (A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today) === 2));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		d8: primaryDate,
		eS: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		e3: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		ft: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
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
				if (!timePickers.$) {
					return $elm$html$Html$text('');
				} else {
					return switchViewButton;
				}
			}()
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ShowCalendarView = {$: 6};
var $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$Update$ToggleTimeMirroring = {$: 7};
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
					$elm$svg$Svg$Attributes$width(size.b7),
					$elm$svg$Svg$Attributes$height(size.bO),
					$elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					isChecked ? $PanagiotisGeorgiadis$elm_datepicker$Icons$tickedCheckboxPath : $PanagiotisGeorgiadis$elm_datepicker$Icons$blankCheckboxPath
				]));
	});
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString = function (_v0) {
	var pickerType = _v0.e$;
	switch (pickerType.$) {
		case 0:
			return 'hh';
		case 1:
			return 'hh_mm';
		case 2:
			return 'hh_mm_ss';
		default:
			return 'hh_mm_ss_mmmm';
	}
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$toHumanReadableTime = function (_v0) {
	var pickerType = _v0.e$;
	var hours = _v0.gN;
	var minutes = _v0.g4;
	var seconds = _v0.hB;
	var milliseconds = _v0.g0;
	switch (pickerType.$) {
		case 0:
			return hours;
		case 1:
			return A2(
				$elm$core$String$join,
				':',
				_List_fromArray(
					[hours, minutes]));
		case 2:
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
	return {$: 3, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Down = 1;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment = function (a) {
	return {$: 2, a: a};
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $PanagiotisGeorgiadis$elm_datepicker$Icons$Up = 0;
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
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
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
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
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$hourPicker = function (_v0) {
	var hours = _v0.gN;
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment(0))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						0,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler(0)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, 0, hours)),
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement(0))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						1,
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
	var milliseconds = _v0.g0;
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment(3))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						0,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler(3)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, 3, milliseconds)),
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement(3))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						1,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$minutePicker = function (_v0) {
	var minutes = _v0.g4;
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment(1))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						0,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler(1)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, 1, minutes)),
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement(1))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						1,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					]))
			]));
};
var $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$View$secondsPicker = function (_v0) {
	var seconds = _v0.hB;
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Increment(2))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						0,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '24', '24'))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('time-input'),
						$elm$html$Html$Events$onInput(
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$InputHandler(2)),
						$elm$html$Html$Events$onBlur(
						A2($PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Update, 2, seconds)),
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
						$PanagiotisGeorgiadis$elm_datepicker$TimePicker$Internal$Update$Decrement(2))
					]),
				_List_fromArray(
					[
						A2(
						$PanagiotisGeorgiadis$elm_datepicker$Icons$chevron,
						1,
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
	var pickerType = model.e$;
	switch (pickerType.$) {
		case 0:
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
		case 1:
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
		case 2:
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
	var range = _v0.e;
	var timePickers = _v0.S;
	var viewType = _v0.h5;
	if (timePickers.$ === 1) {
		var startPicker = timePickers.a.av;
		var endPicker = timePickers.a.aB;
		var pickerTitles = timePickers.a.e_;
		var mirrorTimes = timePickers.a.br;
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
			if (!viewType) {
				return $PanagiotisGeorgiadis$elm_datepicker$TimePicker$Update$getPickerTypeString(startPicker);
			} else {
				return '';
			}
		}();
		var displayDateHtml = F2(
			function (date, timePicker) {
				if (!date.$) {
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
			if ((range.$ === 2) && (range.a.$ === 1)) {
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
							titleHtml(pickerTitles.hF),
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
											'Same as ' + $elm$core$String$toLower(pickerTitles.ed))
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
							titleHtml(pickerTitles.ed),
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
					if (viewType === 2) {
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
									2,
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
	var date = _v0.d8;
	var previousButtonHandler = _v0.e3;
	var nextButtonHandler = _v0.eS;
	var todayButtonHandler = _v0.ft;
	var previousButtonHtml = function () {
		if (!previousButtonHandler.$) {
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
						2,
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
						2,
						A2($PanagiotisGeorgiadis$elm_datepicker$Icons$Size, '15', '15'))
					]));
		}
	}();
	var nextButtonHtml = function () {
		if (!nextButtonHandler.$) {
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
						3,
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
						3,
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
	var today = model.h_;
	var primaryDate = model.hr;
	var dateLimit = model.fY;
	var _v0 = function () {
		if (!dateLimit.$) {
			var minDate = dateLimit.a.g2;
			var maxDate = dateLimit.a.gX;
			return _Utils_Tuple3(
				!A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, primaryDate),
				A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, primaryDate) === 2,
				(!A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, minDate, today)) && (A2($PanagiotisGeorgiadis$elm_datepicker$Utils$DateTime$compareYearMonth, maxDate, today) === 2));
		} else {
			return _Utils_Tuple3(true, true, true);
		}
	}();
	var isPreviousButtonActive = _v0.a;
	var isNextButtonActive = _v0.b;
	var isTodayButtonActive = _v0.c;
	var pickerConfig = {
		d8: primaryDate,
		eS: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getNextButtonAction(isNextButtonActive),
		e3: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getPreviousButtonAction(isPreviousButtonActive),
		ft: $PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$getTodayButtonAction(isTodayButtonActive)
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
	var viewType = model.h5;
	var range = model.e;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('date-range-picker')
			]),
		function () {
			switch (viewType) {
				case 0:
					return _List_fromArray(
						[
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$singleCalendarView(model),
							$PanagiotisGeorgiadis$elm_datepicker$DateRangePicker$Internal$View$doubleClockView(model)
						]);
				case 1:
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
	var picker = _v0.aF;
	var selectedRange = _v0.aI;
	var isFocused = _v0.ap;
	var dateValue = function () {
		if (!selectedRange.$) {
			var startDate = selectedRange.a.b0;
			var endDate = selectedRange.a.bM;
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
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $author$project$Selectize$Selectize$PreventClosing = function (a) {
	return {$: 5, a: a};
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
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
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Selectize$Selectize$Select = function (a) {
	return {$: 8, a: a};
};
var $author$project$Selectize$Selectize$SetMouseFocus = function (a) {
	return {$: 7, a: a};
};
var $elm$html$Html$li = _VirtualDom_node('li');
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
			if (!e.$) {
				var actualEntry = e.a;
				return A3(
					config.f9,
					actualEntry,
					_Utils_eq(
						mouseFocus,
						$elm$core$Maybe$Just(actualEntry)),
					keyboardFocused);
			} else {
				var title = e.a;
				return config.f3(title);
			}
		}();
		var attributes = _v0.d_;
		var children = _v0.d2;
		var liAttrs = function (attrs) {
			return _Utils_ap(
				attrs,
				$author$project$Selectize$Selectize$noOp(attributes));
		};
		return A2(
			$elm$html$Html$li,
			liAttrs(
				function () {
					if (!e.$) {
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
		return A3($author$project$Selectize$Selectize$viewFocusedEntry, config, state.ac, current.a);
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
				A3($elm$html$Html$Lazy$lazy3, $author$project$Selectize$Selectize$viewUnfocusedEntry, config, state.ac)),
			front);
	});
var $author$project$Selectize$Selectize$view = F3(
	function (config, selection, state) {
		var selectionText = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			A2(
				$elm$core$Maybe$andThen,
				$author$project$Selectize$Selectize$selectFirst(state.t),
				selection));
		var menuAttrs = _Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$author$project$Selectize$Selectize$menuId(state.eA)),
					$elm$html$Html$Events$onMouseDown(
					$author$project$Selectize$Selectize$PreventClosing(true)),
					$elm$html$Html$Events$onMouseUp(
					$author$project$Selectize$Selectize$PreventClosing(false)),
					A2($elm$html$Html$Attributes$style, 'position', 'absolute')
				]),
			$author$project$Selectize$Selectize$noOp(config.g_));
		var _v0 = state.y;
		if (_v0.$ === 1) {
			return A2(
				$elm$html$Html$div,
				_Utils_ap(
					$author$project$Selectize$Selectize$noOp(config.fV),
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
							A2($elm$html$Html$Attributes$style, 'position', 'relative')
						])),
				_List_fromArray(
					[
						A4(config.gS, state.eA, selectionText, state.hs, state.aD),
						A2(
						$elm$html$Html$div,
						menuAttrs,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								$author$project$Selectize$Selectize$noOp(config.h1),
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeR,
										$author$project$Selectize$Selectize$removeLabel,
										A2($author$project$Selectize$Selectize$viewUnfocusedEntry, config, $elm$core$Maybe$Nothing)),
									state.t))
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
						A4(config.gS, state.eA, selectionText, state.hs, state.aD),
						A2(
						$elm$html$Html$div,
						menuAttrs,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								$author$project$Selectize$Selectize$noOp(config.h1),
								$elm$core$List$concat(
									_List_fromArray(
										[
											$elm$core$List$reverse(
											A3($author$project$Selectize$Selectize$viewEntries, config, state, zipList.M)),
											_List_fromArray(
											[
												A3($author$project$Selectize$Selectize$viewCurrentEntry, config, state, zipList.q)
											]),
											A3($author$project$Selectize$Selectize$viewEntries, config, state, zipList.z)
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
			case 0:
				return data;
			case 1:
				var srt = sorter.a;
				return srt(data);
			case 2:
				var srt = sorter.a;
				return $elm$core$List$reverse(
					srt(data));
			case 3:
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
				var name = columnData.a.v;
				var sorter = columnData.a.w;
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
		if (_v1.$ === 1) {
			return data;
		} else {
			var sorter = _v1.a;
			return A3($billstclair$elm_sortable_table$Table$applySorter, isReversed, sorter, data);
		}
	});
var $billstclair$elm_sortable_table$Table$getSortedData = F3(
	function (_v0, state, data) {
		var toId = _v0.hT;
		var toMsg = _v0.hW;
		var columns = _v0.fS;
		var customizations = _v0.be;
		return A3($billstclair$elm_sortable_table$Table$sort, state, columns, data);
	});
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tfoot = _VirtualDom_node('tfoot');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $billstclair$elm_sortable_table$Table$Reversible = function (a) {
	return {$: 2, a: a};
};
var $billstclair$elm_sortable_table$Table$Sortable = function (a) {
	return {$: 1, a: a};
};
var $billstclair$elm_sortable_table$Table$Unsortable = {$: 0};
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
		var name = _v1.v;
		var sorter = _v1.w;
		switch (sorter.$) {
			case 0:
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Unsortable,
					A3($billstclair$elm_sortable_table$Table$onClick, sortName, isReversed, toMsg));
			case 1:
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Sortable(
						!_Utils_eq(name, sortName)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
			case 2:
				return _Utils_Tuple3(
					name,
					$billstclair$elm_sortable_table$Table$Sortable(
						_Utils_eq(name, sortName)),
					A3($billstclair$elm_sortable_table$Table$onClick, name, false, toMsg));
			case 3:
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
		var viewData = _v0.x;
		var details = viewData(data);
		return A2($elm$html$Html$td, details.d_, details.d2);
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
		var toId = conf.hT;
		var toMsg = conf.hW;
		var columns = conf.fS;
		var customizations = conf.be;
		var theadDetails = customizations.dK(
			A2(
				$elm$core$List$map,
				A2($billstclair$elm_sortable_table$Table$toHeaderInfo, state, toMsg),
				columns));
		var thead = A2(
			$elm$html$Html$thead,
			theadDetails.d_,
			_List_fromArray(
				[
					A2($elm$html$Html$tr, _List_Nil, theadDetails.d2)
				]));
		var sortedData = A3($billstclair$elm_sortable_table$Table$getSortedData, conf, state, data);
		var tbody = A3(
			$elm$html$Html$Keyed$node,
			'tbody',
			customizations.dI,
			A2(
				$elm$core$List$map,
				A3($billstclair$elm_sortable_table$Table$viewRow, toId, columns, customizations.du),
				sortedData));
		var withFoot = function () {
			var _v1 = customizations.dJ;
			if (_v1.$ === 1) {
				return A2($elm$core$List$cons, tbody, _List_Nil);
			} else {
				var attributes = _v1.a.d_;
				var children = _v1.a.d2;
				return A2(
					$elm$core$List$cons,
					A2($elm$html$Html$tfoot, attributes, children),
					A2($elm$core$List$cons, tbody, _List_Nil));
			}
		}();
		return A2(
			$elm$html$Html$table,
			customizations.dH,
			function () {
				var _v0 = customizations.cg;
				if (_v0.$ === 1) {
					return A2($elm$core$List$cons, thead, withFoot);
				} else {
					var attributes = _v0.a.d_;
					var children = _v0.a.d2;
					return A2(
						$elm$core$List$cons,
						A2($elm$html$Html$caption, attributes, children),
						A2($elm$core$List$cons, thead, withFoot));
				}
			}());
	});
var $author$project$Selectize$Selectize$CloseMenu = {$: 2};
var $author$project$Selectize$Selectize$SetQuery = function (a) {
	return {$: 6, a: a};
};
var $author$project$Selectize$Selectize$BlurTextfield = {$: 4};
var $author$project$Selectize$Selectize$ClearSelection = {$: 11};
var $author$project$Selectize$Selectize$FocusTextfield = {$: 3};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
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
					if ((!_v0.a.$) && _v0.b) {
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
					if (!toggleButton.$) {
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
		return {$: 1, a: a, b: b};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
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
var $elm$json$Json$Decode$map3 = _Json_map3;
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
				{t: entryHeights, g_: menuHeight},
				scrollTop);
		}),
	$author$project$Selectize$Selectize$entryHeightsDecoder,
	$author$project$Selectize$Selectize$menuHeightDecoder,
	$author$project$Selectize$Selectize$scrollTopDecoder);
var $author$project$Selectize$Selectize$Down = 1;
var $author$project$Selectize$Selectize$SelectKeyboardFocusAndBlur = {$: 10};
var $author$project$Selectize$Selectize$SetKeyboardFocus = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $author$project$Selectize$Selectize$Up = 0;
var $author$project$Selectize$Selectize$fromResult = function (result) {
	if (!result.$) {
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
								A2($author$project$Selectize$Selectize$SetKeyboardFocus, 0, scrollTop),
								true));
					case 40:
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								A2($author$project$Selectize$Selectize$SetKeyboardFocus, 1, scrollTop),
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
						$elm$html$Html$Attributes$placeholder(config.hl)
					]) : _List_fromArray(
					[
						$elm$html$Html$Attributes$value(config.hl)
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
						config.fH,
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
								config.fH,
								!_Utils_eq(selection, $elm$core$Maybe$Nothing),
								open))),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($elm$core$Maybe$withDefault, '', selection))
						])),
					A4(
					$author$project$Selectize$Selectize$buttons,
					config.fP,
					config.h$,
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
		fH: F2(
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
		fP: $author$project$Main$clearButton,
		hl: 'Select a Country',
		h$: $author$project$Main$toggleButton
	});
var $author$project$Selectize$viewConfig = function (config) {
	return {fV: config.fV, f3: config.f3, f9: config.f9, gS: config.gS, g_: config.g_, h1: config.h1};
};
var $author$project$Main$viewConfig = function (selector) {
	var entryFunction = F3(
		function (tree, mouseFocused, keyboardFocused) {
			return {
				d_: _List_fromArray(
					[
						$elm$html$Html$Attributes$class('selectize__item'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('selectize__item--mouse-selected', mouseFocused),
								_Utils_Tuple2('selectize__item--key-selected', keyboardFocused)
							]))
					]),
				d2: _List_fromArray(
					[
						$elm$html$Html$text(tree.aP)
					])
			};
		});
	return $author$project$Selectize$viewConfig(
		{
			fV: _List_Nil,
			f3: function (title) {
				return {
					d_: _List_fromArray(
						[
							$elm$html$Html$Attributes$class('selectize__divider')
						]),
					d2: _List_fromArray(
						[
							$elm$html$Html$text(title)
						])
				};
			},
			f9: entryFunction,
			gS: selector,
			g_: _List_fromArray(
				[
					$elm$html$Html$Attributes$class('selectize__menu')
				]),
			h1: _List_fromArray(
				[
					$elm$html$Html$Attributes$class('selectize__list')
				])
		});
};
var $author$project$Main$viewConfigTextfield = $author$project$Main$viewConfig($author$project$Main$textfieldSelector);
var $author$project$Main$view = function (model) {
	var tableState = model.bx;
	var tableQuery = model.bw;
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
										A3($author$project$Selectize$view, $author$project$Main$viewConfigTextfield, model.aJ, model.ag))
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						function () {
						var _v0 = model.ae;
						if (!_v0.$) {
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
						var _v1 = model.bd;
						switch (_v1.$) {
							case 1:
								return $elm$html$Html$text('Loading city data, please stand by...');
							case 3:
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
											return $.aZ;
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
																return $.aP;
															},
															model.aJ)))
												])),
											A3(
											$billstclair$elm_sortable_table$Table$view,
											$author$project$Main$config(model),
											tableState,
											acceptableCity)
										]));
							case 2:
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
		gR: function (_v0) {
			return $author$project$Main$init($author$project$Main$cities);
		},
		hK: $author$project$Main$subscriptions,
		h2: $author$project$Main$update,
		h4: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(0))(0)}});}(this));