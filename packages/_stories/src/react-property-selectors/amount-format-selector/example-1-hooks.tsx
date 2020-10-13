import React, { useCallback, useState } from "react";
import {
  AmountFormatWrapper,
  AmountFormatWrapperProps,
  createAmountFormatSelector,
  createAmountInputBox,
  getDefaultAmountInputBoxStyle,
  useAmountFormatSelector,
  useAmountInputBox
} from "@promaster-sdk/react-property-selectors";
import { Unit, Amount, BaseUnits } from "uom";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import { merge } from "../utils";
import { units, unitsFormat } from "../units-map";

interface State {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly selectedUnit: Unit.Unit<any>;
  readonly selectedDecimalCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly amount: Amount.Amount<any>;
}

// Usage with standard css
const ClearButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element => (
  <button {...props} className="my-own">
    Clear
  </button>
);
const AmountFormatWrapper2 = (props: AmountFormatWrapperProps): JSX.Element => (
  <AmountFormatWrapper
    className={props.active ? "active" : "inactive"}
    {...props}
  />
);

// Usage with styled components
const precisionSelector = styled.select`
  background: #eee;
  font-size: 15px;
`;

const AmountFormatSelector = createAmountFormatSelector({
  PrecisionSelector: precisionSelector,
  ClearButton: ClearButton,
  AmountFormatWrapper: AmountFormatWrapper2
});

const AmountInputBox = createAmountInputBox({});

export function AmountFormatSelectorExample1Hooks(): React.ReactElement<{}> {
  const [state, setState] = useState<State>({
    amount: Amount.create(10.0, BaseUnits.Meter),
    selectedUnit: BaseUnits.Meter,
    selectedDecimalCount: 2
  });

  const onValueChange = useCallback(
    amount => {
      setState(merge(state, { amount }));
    },
    [state]
  );

  const selA = useAmountInputBox({
    value: state.amount,
    inputUnit: state.selectedUnit,
    inputDecimalCount: state.selectedDecimalCount,
    onValueChange,
    readonly: false,
    errorMessage: "",
    isRequiredMessage: "Is required",
    notNumericMessage: "Not numeric",
    debounceTime: 350
  });

  const fmtSel = useAmountFormatSelector({
    selectedUnit: state.selectedUnit,
    selectedDecimalCount: state.selectedDecimalCount,
    onFormatChanged: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      selectedUnit: Unit.Unit<any>,
      selectedDecimalCount: number
    ) => setState(merge(state, { selectedUnit, selectedDecimalCount })),
    onFormatCleared: () =>
      setState(
        merge(state, {
          selectedUnit: BaseUnits.Meter,
          selectedDecimalCount: 2
        })
      ),
    onFormatSelectorActiveChanged: action("Toggle format selector"),
    unitsFormat: unitsFormat,
    units: units
  });

  return (
    <div>
      <div>Amount: {Amount.toString(state.amount)}</div>
      <div>AmountFormatSelector:</div>
      <div>
        {/* AmountInput */}
        <input
          {...selA.getInputProps()}
          style={getDefaultAmountInputBoxStyle(selA)}
        />
        {/* AmountFormat */}
        <span {...fmtSel.getWrapperProps()}>
          {fmtSel.active ? (
            <>
              <select {...fmtSel.getUnitSelectorProps()}>
                {fmtSel.unitSelectorOptions.map(o => (
                  <option {...o.getOptionProps()}> {o.label} </option>
                ))}
              </select>
              <select {...fmtSel.getPrecisionSelectorProps()}>
                {fmtSel.precisionSelectorOptions.map(o => (
                  <option {...o.getOptionProps()}>{o.label}</option>
                ))}
              </select>
              {fmtSel.showClearButton && (
                <button {...fmtSel.getClearButtonProps()}>Cancel</button>
              )}
              <button {...fmtSel.getCancelButtonProps()}>Clear</button>
            </>
          ) : (
            fmtSel.label
          )}
        </span>

        {/* */}
        <AmountInputBox
          value={state.amount}
          inputUnit={state.selectedUnit}
          inputDecimalCount={state.selectedDecimalCount}
          onValueChange={amount => {
            //console.log("changed");
            setState(merge(state, { amount }));
          }}
          readOnly={false}
          errorMessage=""
          isRequiredMessage="Is required"
          notNumericMessage="Not numeric"
          debounceTime={350}
        />
        <AmountFormatSelector
          selectedUnit={state.selectedUnit}
          selectedDecimalCount={state.selectedDecimalCount}
          onFormatChanged={(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            selectedUnit: Unit.Unit<any>,
            selectedDecimalCount: number
          ) => setState(merge(state, { selectedUnit, selectedDecimalCount }))}
          onFormatCleared={() =>
            setState(
              merge(state, {
                selectedUnit: BaseUnits.Meter,
                selectedDecimalCount: 2
              })
            )
          }
          onFormatSelectorActiveChanged={action("Toggle format selector")}
          unitsFormat={unitsFormat}
          units={units}
        />
      </div>
    </div>
  );
}
