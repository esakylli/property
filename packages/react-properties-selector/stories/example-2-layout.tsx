import * as React from "react";
import { Expander } from "./expander";
import { propertiesSelectorLayoutStyles as styles } from "./example-2-layout-styles";
import * as PropertySelectors from "@promaster/react-property-selectors";
import {
  createAmountInputBox,
  createAmountFormatSelector,
  AmountFormatWrapper
} from "@promaster/react-property-selectors";
import * as PropertiesSelector from "../src/index";

import styled from "styled-components";

// tslint:disable:variable-name no-class no-this no-any
const PropertySelector: PropertiesSelector.PropertySelector = PropertiesSelector.createPropertySelector(
  {
    AmountPropertySelector: PropertySelectors.createAmountPropertySelector({
      AmountPropertySelectorWrapper: styled.span`
        background: green;
        padding: 20px;
      `,
      AmountInputBox: createAmountInputBox({}),
      AmountFormatSelector: createAmountFormatSelector({
        AmountFormatWrapper: styled(AmountFormatWrapper)`
          background-color: ${props => (props.active ? "red" : "white")};
          padding: 5px;
        `,
        UnitSelector: styled.select`
          color: blue;
        `,
        PrecisionSelector: styled.select`
          font-size: 5px;
        `,
        ClearButton: styled.button`
          font-size: 25px;
          &::before {
            content: "X";
          }
        `
      })
    })
  }
);

export function createPropertiesSelectorExample2Layout(): any {
  const helloWorld = "hello world";

  return function PropertiesSelectorExample2Layout({
    selectors,
    translateGroupName,
    closedGroups,
    onToggleGroupClosed
  }: PropertiesSelector.LayoutRendererProps): React.ReactElement<
    PropertiesSelector.LayoutRendererProps
  > {
    const groups = getGroupDistinctNames(selectors);

    return (
      <div>
        {groups.map((groupName: string) => {
          const isClosed = closedGroups.indexOf(groupName) !== -1;
          const selectorsInGroup = selectors.filter(
            selector => selector.groupName === groupName
          );
          return (
            <Expander
              key={groupName}
              header={translateGroupName(groupName) + " " + helloWorld}
              closed={isClosed}
              closedChanged={() => onToggleGroupClosed(groupName)}
            >
              {selectorsInGroup.map(selector => selectorRow(selector))}
            </Expander>
          );
        })}
      </div>
    );
  };
}

function selectorRow(
  selector: PropertiesSelector.PropertySelectorRenderInfo
): React.ReactElement<{}> {
  const className = [
    styles.property,
    selector.isValid ? "" : styles.invalid,
    selector.isHidden ? styles.hidden : ""
  ].join(" ");
  return (
    <div key={selector.propertyName} className={className}>
      <span className={styles.label} title={selector.labelHover}>
        {selector.label}
      </span>
      <PropertySelector {...selector.selectorComponentProps} />
    </div>
  );
}

function getGroupDistinctNames(
  productPropertiesArray: ReadonlyArray<
    PropertiesSelector.PropertySelectorRenderInfo
  >
): ReadonlyArray<string> {
  const groupNames: Array<string> = [];
  for (let property of productPropertiesArray) {
    if (
      groupNames.indexOf(property.groupName) ===
      -1 /*&& !isNullOrWhiteSpace(property.groupName)*/
    ) {
      groupNames.push(property.groupName); //tslint:disable-line
    }
  }
  return groupNames;
}
