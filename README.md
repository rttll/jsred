# jsred

Ruby-like methods Array/Object in javascript.

## Setup

tbd

## Usage

Here's all the methods

### Object.first()

Returns new Object consisting of first key/pair from origin object.

```js
{}.first() // => null
const obj = {foo: 'bar', blue: 'bix'}

obj.first() // => {foo: 'bar'}
```

### Object.map()

Similar to Array.map().
Loops through object, applying applied function to each key/pair.
Returns an array.

```js
const obj = { foo: 'bar', blue: 'bix' };
obj.map((k, v) => {
  return { [k]: `hello ${v}` };
});
// => [{foo: 'hello bar', blue: 'hello bix'}]
```

### Array.first()

Returns first value in array or null.

```js
[('hello', 'world')].first(); // => 'hello'
[].first(); // => null
```

Why? Mostly just as a counterpoint to Object.first() above. But also returning `null` instead of `undefined` from an empty array seems more intentional.
