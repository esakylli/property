import * as AbstractImage from "../../abstract-image/index";
import * as AD from "../../abstract-document";
import * as base64 from "base64-js";

export function renderImage(pdf: any, finalRect: AD.Rect.Rect, image: AD.Image.Image) {
  const aImage = image.imageResource.abstractImage;
  const position = AD.Point.create(finalRect.x, finalRect.y);
  const scaleX = finalRect.width / aImage.size.width;
  const scaleY = finalRect.height / aImage.size.height;
  const scale = Math.min(scaleX, scaleY);
  pdf.save();
  pdf.translate(position.x, position.y).scale(scale);
  aImage.components.forEach((c) => abstractComponentToPdf(pdf, c));
  pdf.restore();
}

function abstractComponentToPdf(pdf: any, component: AbstractImage.Component): void {
  switch (component.type) {
    case "group":
      component.children.forEach((c) => abstractComponentToPdf(pdf, c));
      break;
    case "bitmapimage":
      const format = component.format.toLowerCase();
      const imageWidth = component.bottomRight.x - component.topLeft.x;
      const imageHeight = component.bottomRight.y - component.topLeft.y;
      if (format === "png") {
        const data = "data:image/png;base64," + base64.fromByteArray(component.data);
        pdf.image(data, component.topLeft.x, component.topLeft.y, {fit: [imageWidth, imageHeight]});
      }
      else if (format === "jpg") {
        const data = "data:image/jpeg;base64," + base64.fromByteArray(component.data);
        pdf.image(data, component.topLeft.x, component.topLeft.y, {fit: [imageWidth, imageHeight]});
      }
      break;
    case "vectorimage":
      break;
    case "line":
      pdf
        .lineWidth(component.strokeThickness)
        .moveTo(component.start.x, component.start.y)
        .lineTo(component.end.x, component.end.y)
        .stroke(colorToRgb(component.strokeColor));
      break;
    case "polyline":
      for (let i = 0; i < component.points.length; ++i) {
        const p = component.points[i];
        if (i === 0) {
          pdf.moveTo(p.x, p.y);
        }
        else {
          pdf.lineTo(p.x, p.y);
        }
      }
      pdf
        .lineWidth(component.strokeThickness)
        .stroke(colorToRgb(component.strokeColor));
      break;
    case "text":
      if (component.clockwiseRotationDegrees !== 0) {
        pdf.save();
        pdf.rotate(component.clockwiseRotationDegrees, {origin: [component.position.x, component.position.y]});
      }
      pdf.font("Helvetica").fontSize(component.fontSize);
      const stringWidth = pdf.widthOfString(component.text);
      const stringHeight = pdf.currentLineHeight();
      const dx = component.horizontalGrowthDirection === "left" ?  -stringWidth
        : component.horizontalGrowthDirection === "uniform" ? -stringWidth * 0.5 : 0;
      const dy = component.verticalGrowthDirection === "up" ?  -stringHeight
        : component.verticalGrowthDirection === "uniform" ? -stringHeight * 0.5 : 0;
      pdf
        .font("Helvetica").fontSize(component.fontSize)
        .fillColor(colorToRgb(component.strokeColor))
        .text(component.text, component.position.x + dx, component.position.y + dy);
      if (component.clockwiseRotationDegrees !== 0) {
        pdf.restore();
      }
      break;
    case "ellipse":
      const width = component.bottomRight.x - component.topLeft.x;
      const height = component.bottomRight.y - component.topLeft.y;
      const centerX = component.topLeft.x + width * 0.5;
      const centerY = component.topLeft.y + height * 0.5;
      pdf
        .lineWidth(component.strokeThickness)
        .ellipse(centerX, centerY, width * 0.5, height * 0.5)
        .fillAndStroke(colorToRgb(component.fillColor), colorToRgb(component.strokeColor));
      break;
    case "polygon":
      pdf
        .lineWidth(component.strokeThickness)
        .polygon(component.points.map((p) => [p.x, p.y]))
        .fillAndStroke(colorToRgb(component.fillColor), colorToRgb(component.strokeColor));
      break;
    case "rectangle":
      const rWidth = component.bottomRight.x - component.topLeft.x;
      const rHeight = component.bottomRight.y - component.topLeft.y;
      pdf
        .lineWidth(component.strokeThickness)
        .rect(component.topLeft.x, component.topLeft.y, rWidth, rHeight)
        .fillAndStroke(colorToRgb(component.fillColor), colorToRgb(component.strokeColor));
      break;
    default:
      break;
  }
}

function colorToRgb(color: AbstractImage.Color): Array<number> {
  return [color.r, color.g, color.b];
}