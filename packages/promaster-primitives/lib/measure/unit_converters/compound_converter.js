"use strict";
var UnitConverter = require("./unit_converter");
/// This inner class represents a compound converter.
/// Creates a compound converter resulting from the combined
/// transformation of the specified converters.
/// <param name="first">the first converter.</param>
/// <param name="second">second the second converter.</param>
function create(first, second) {
    return {
        type: "compound",
        first: first,
        second: second,
    };
}
exports.create = create;
/// Implements abstract method.
function convert(value, converter) {
    // return this._second.convert(this._first.convert(value));
    return UnitConverter.convert(UnitConverter.convert(value, converter.first), converter.second);
}
exports.convert = convert;
/// Implements abstract method.
function inverse(converter) {
    return create(UnitConverter.inverse(converter.second), UnitConverter.inverse(converter.first));
}
exports.inverse = inverse;
//# sourceMappingURL=compound_converter.js.map