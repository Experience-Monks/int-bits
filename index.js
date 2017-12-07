var float32 = new Float32Array(1);
var int32 = new Int32Array(float32.buffer);

function pack(i) {
    int32[0] = i;
    return float32[0];
}

function unpack(f) {
    float32[0] = f;
    return int32[0];
}

module.exports = pack;
module.exports.pack = pack;
module.exports.unpack = unpack;