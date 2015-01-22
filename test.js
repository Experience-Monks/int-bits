var intbits = require('./')
var unpack = require('./').unpack
var pack = require('./').pack
var test = require('tape')

test('packs / unpack float', function(t) {
    var bits = 0xffaaddee & 0xfeffffff

    //pack bits to float
    var f = pack(bits)
    t.equal(typeof f, 'number', 'returns number')
    
    var f2 = intbits.pack(bits)
    t.equal(f, f2, 'exports pack() by default')

    //unpack float to int bits
    var i = unpack(f)
    t.equal(typeof i, 'number', 'returns number')

    //compare
    t.equal(i, bits, 'conversion to float and back')
    t.end()
})