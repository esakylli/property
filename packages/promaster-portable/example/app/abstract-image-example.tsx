import * as React from "react";
import { AbstractImage, AbstractImageExporters } from "../../src/index";

export function AbstractImageExample() {
  const components = [
    AbstractImage.createLine(
      AbstractImage.createPoint(25, 25),
      AbstractImage.createPoint(80, 60),
      AbstractImage.black,
      2
    ),
    AbstractImage.createRectangle(
      AbstractImage.createPoint(10, 50),
      AbstractImage.createPoint(40, 80),
      AbstractImage.blue,
      2,
      AbstractImage.fromArgb(100, 0, 0, 0)
    ),
    AbstractImage.createRectangle(
      AbstractImage.createPoint(60, 50),
      AbstractImage.createPoint(90, 80),
      AbstractImage.blue,
      2,
      AbstractImage.transparent
    )
  ];
  const image = AbstractImage.createAbstractImage(
    AbstractImage.createPoint(0, 0),
    AbstractImage.createSize(400, 400),
    AbstractImage.white,
    components
  );
  const svg = AbstractImageExporters.createSVG(image);
  return (
    <div>
      <h1>Svg</h1>
      <p>Test</p>
      <pre>{svg}</pre>
      <img width="400" height="400" src={`data:image/svg+xml;,${svg}`} />
    </div>
  );
}
