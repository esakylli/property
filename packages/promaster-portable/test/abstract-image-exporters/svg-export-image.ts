import {assert} from "chai";
import * as AbstractImage from "../../src/abstract-image/index";
import * as AbstractImageExporters from "../../src/abstract-image-exporters/index";

describe("svg export", () => {

  it("doesnt throw exception and produces output", () => {
    const components = [
      AbstractImage.createLine(AbstractImage.createPoint(25, 25), AbstractImage.createPoint(80, 60), AbstractImage.black, 2),
      AbstractImage.createRectangle(AbstractImage.createPoint(10, 50), AbstractImage.createPoint(50, 60), AbstractImage.blue, 2, AbstractImage.red),
    ];
    const image = AbstractImage.createAbstractImage(AbstractImage.createPoint(0, 0), AbstractImage.createSize(400, 400), AbstractImage.white, components);
    const svg = AbstractImageExporters.createSVG(image);
    console.log(svg);
    assert.equal(svg !== "", true);
  });

});

