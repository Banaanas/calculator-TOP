import { elementsDOM } from "../elements-DOM";
import { calculatorObj } from "../calculator-object";
import checkDecimal from "../check-decimal";
import alertMessage from "../alert-message";

// Add Event Listeners to Numbers Buttons
const numbersEventListeners = () => {
  elementsDOM.numbersButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      // String to Display
      // eslint-disable-next-line max-len
      if (calculatorObj.calculatorDisplayArray.length > 20) {
        // Limit number's size to fit the calculator display
        alertMessage("Too Many Numbers : Backspace, please !");
      } else {
        // Delete - Case 2
        if (elementsDOM.secondaryDisplay.dataset.delete === "deleted") {
          // Displayed number pushed to calculate and history display arrays
          calculatorObj.calculationArray.push(event.target.value);
          calculatorObj.historyDisplayArray.push(event.target.value);

          // Number taped/clicked to secondary and history displays
          calculatorObj.secondaryDisplayArray.push(event.target.value);
          elementsDOM.secondaryDisplay.textContent =
            calculatorObj.secondaryDisplayArray.join("");
          elementsDOM.historyDisplay.textContent =
            elementsDOM.secondaryDisplay.textContent;

          // Enable operators buttons again if disabled before
          // eslint-disable-next-line no-shadow
          elementsDOM.operatorsButtons.forEach((item, index) => {
            elementsDOM.operatorsButtons[index].removeAttribute("disabled");
          });

          // Enable and disable Decimal Button. Concatenates numbers in
          // calculatorObj.calculationArray
          // ( "1","8","+","7","2" becomes "18","+","72") but they still are string values
          checkDecimal();

          // Display last concatenated number
          // eslint-disable-next-line max-len
          elementsDOM.calculatorDisplay.textContent =
            calculatorObj.calculationArray[
              calculatorObj.calculationArray.length - 1
            ];
          //
          if (
            elementsDOM.calculatorDisplay.textContent.includes(".") === false
          ) {
            // Check if the displayed number is a already a decimal, and enable / disable it
            elementsDOM.decimalButton.removeAttribute("disabled");
          } else {
            elementsDOM.decimalButton.disabled = true;
          }

          return;
        }

        // Enable operators buttons again if disabled
        // eslint-disable-next-line no-shadow
        elementsDOM.operatorsButtons.forEach((item, index) => {
          elementsDOM.operatorsButtons[index].removeAttribute("disabled");
        });

        // Number taped/clicked to calculator display
        // Update calculatorObj.calculatorDisplayArray
        calculatorObj.calculatorDisplayArray.push(event.target.value);
        elementsDOM.calculatorDisplay.textContent =
          calculatorObj.calculatorDisplayArray.join("");

        calculatorObj.historyDisplayArray.push(event.target.value);

        // Number taped/clicked to secondary and history displays
        calculatorObj.secondaryDisplayArray.push(event.target.value);
        elementsDOM.secondaryDisplay.textContent =
          calculatorObj.secondaryDisplayArray.join("");
        elementsDOM.historyDisplay.textContent =
          elementsDOM.secondaryDisplay.textContent;

        // eslint-disable-next-line max-len
        // If number of characters in the secondary display > 46, display message on the secondary display
        if (calculatorObj.secondaryDisplayArray.length > 46) {
          elementsDOM.secondaryDisplay.textContent =
            "Take a look at the Historic";
          elementsDOM.secondaryDisplay.style.textAlign = "center";
          // The user can still look at the history displays, which numbers limit is higher
          elementsDOM.historyDisplay.textContent =
            calculatorObj.secondaryDisplayArray.join("");
        }

        // Check if the displayed number is a already a decimal, and enable / disable it
        if (elementsDOM.calculatorDisplay.textContent.includes(".") === false) {
          elementsDOM.decimalButton.removeAttribute("disabled");
        } else {
          elementsDOM.decimalButton.disabled = true;
        }
      }
    });
  });
};

export default numbersEventListeners;
