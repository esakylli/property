import * as Unit from "./unit";
import * as Quantity from "./quantity";
export declare type QuantityInfo = {
    readonly siUnit: Unit.Unit<any>;
    readonly ipUnit: Unit.Unit<any>;
};
export declare function addQuantity(quantity: Quantity.Quantity, siUnit: Unit.Unit<any>, ipUnit: Unit.Unit<any>): void;
export declare function getQuantityInfo(quantity: Quantity.Quantity): QuantityInfo | undefined;
