# int-bits

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Converts int bits to a float32 and back. Useful for packing and unpacking RGBA bits into a single float (e.g. for interleaving float data in WebGL). This technique only works on browsers that implement typed arrays correctly.

```js
var pack = require('int-bits')

//gets a single ABGR representation of 4 color bytes
var bits = (a << 24 | b << 16 | g << 8 | r)

//pack to a float value for use with a Float32Array
var rgba = pack(bits & 0xfeffffff)
```

You can also unpack a float32 to int bits. Since there is some precision loss in the high bits, it's best to bias the alpha channel toward 0 and 255.

```js
var unpack = require('int-bits').unpack

var bits = unpack(rgba)
var A = (bits & 0xff000000) >>> 24
var B = (bits & 0x00ff0000) >>> 16
var G = (bits & 0x0000ff00) >>> 8
var R = (bits & 0x000000ff)

//fix precision loss with high bits
A = Math.floor(A*(255/254))
```

## Usage

[![NPM](https://nodei.co/npm/int-bits.png)](https://www.npmjs.com/package/int-bits)

#### `f = require('int-bits')(bits)`
#### `f = require('int-bits').pack(bits)`

Converts the int bits into a float32 value using typed arrays.

#### `i = require('int-bits').unpack(f)`

Converts the float32 value back to int bits using typed arrays.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/int-bits/blob/master/LICENSE.md) for details.
