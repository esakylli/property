import { UnitFormat } from "uom";
import { PropertyFilter } from "@promaster-sdk/property";
import * as PrettyPrinting from "../index";

const UnitsFormat = {
  Meter: UnitFormat.createUnitFormat("m", 2)
};

describe("filterPrettyPrintSimple", () => {
  it("should print a must be 1", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a=1") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a must be 1");
  });

  it("should print a must be 1 and b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a=1&b=2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a must be 1 and b must be 2");
  });

  it("should print a + b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a+b=2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a + b must be 2");
  });

  it("should print a - b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a-b=2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a - b must be 2");
  });

  it("should print a * b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a*b=2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a * b must be 2");
  });

  it("should print a / b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a/b=2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a / b must be 2");
  });

  it("should print a must be -2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintSimple(
      PropertyFilter.fromString("a=-2") as PropertyFilter.PropertyFilter
    );
    expect(pretty).toBe("a must be -2");
  });
});

describe("filterPrettyPrintIndented", () => {
  // const messages = PrettyPrinting.FilterPrettyPrintMessagesEnglish;
  const messages = PrettyPrinting.buildEnglishMessages({});

  it("should print a must be 1", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "*",
      PropertyFilter.fromString("a=1") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a must be a_1");
  });

  it("should for min<max print min must be less than max", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "*",
      PropertyFilter.fromString("min<max") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("min must be less than max");
  });

  it("should for min<10:Celsius print min must be less than 10 °C", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "*",
      PropertyFilter.fromString(
        "min<10:Celsius"
      ) as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("min must be less than 10 °C");
  });

  it("should print b must be 2\\n**and\\na must be 1", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a=1&b=2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a must be a_1\n**and\nb must be b_2");
  });

  it("should print a + b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a+b=2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a + b must be 2");
  });

  it("should print a - b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a-b=2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a - b must be 2");
  });

  it("should print a * b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a*b=2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a * b must be 2");
  });

  it("should print a / b must be 2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a/b=2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a / b must be 2");
  });

  it("should print a must be -2", () => {
    const pretty = PrettyPrinting.filterPrettyPrintIndented(
      messages,
      0,
      "**",
      PropertyFilter.fromString("a=-2") as PropertyFilter.PropertyFilter,
      UnitsFormat
    );
    expect(pretty).toBe("a must be -2");
  });
});
