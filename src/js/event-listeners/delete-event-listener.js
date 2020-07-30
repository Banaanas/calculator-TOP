import { elementsDOM } from "../elements-DOM";
import { calculatorObj } from "../calculator-object";
import checkDecimal from "../check-decimal";
import clearAllDatas from "../clear-all-datas";

// Add Event Listener to Delete Button
const deleteEventListener = () => {
  document.querySelector("#delete-button").addEventListener("click", () => {
    // DELETE - CASE 1
    // If there is already a result (ie. equals has been clicked), then Delete will work
    // on all the history of the calculation, since the beginning
    /* if (resultArray.length > 0) {
        calculatorObj.calculationArray = [];
        calculatorObj.calculationArray = calculatorObj.historyDisplayArray.slice()
        console.log(calculatorObj.calculationArray)
      } */

    // DELETE - CASE 2
    // If no operation has been processed (ie. equals has NOT been clicked), then Delete clears only
    // the last entry.
    // Remove background color which has been changed after Equals Button was pushed
    elementsDOM.operatorsButtons.forEach((item, index) => {
      elementsDOM.operatorsButtons[index].classList.remove("disabled-buttons");
    });

    elementsDOM.numbersButtons.forEach((item, index) => {
      elementsDOM.numbersButtons[index].classList.remove("disabled-buttons");
    });

    elementsDOM.equalsButton.classList.remove("disabled-buttons");

    // Set data attribute for case
    elementsDOM.secondaryDisplay.dataset.delete = "deleted";
    elementsDOM.numbersButtons.forEach((item, index) => {
      elementsDOM.numbersButtons[index].removeAttribute("disabled");
    });
    // calculatorObj.historyDisplayArray pushed to calculatorObj.calculationArray
    calculatorObj.calculationArray = calculatorObj.historyDisplayArray.slice();

    // Delete last entry from calculatorObj.calculationArray calculatorObj.historyDisplayArray
    calculatorObj.calculationArray.pop();
    calculatorObj.historyDisplayArray.pop();

    // Delete last entry from the calculator display
    calculatorObj.calculatorDisplayArray.pop();
    elementsDOM.calculatorDisplay.textContent = calculatorObj.calculatorDisplayArray.join(
      "",
    );

    // Delete last entry from the secondary and history displays
    calculatorObj.secondaryDisplayArray.pop();
    elementsDOM.historyDisplay.textContent = calculatorObj.secondaryDisplayArray.join(
      "",
    );
    elementsDOM.secondaryDisplay.textContent = elementsDOM.historyDisplay.textContent;

    // Display last concatenated number (which is still a string)
    // Concatenate numbers in calculatorObj.calculationArray
    // ( "1","8","+","7","2" becomes "18","+","72")
    // but they still are string values
    checkDecimal();
    // eslint-disable-next-line max-len
    elementsDOM.calculatorDisplay.textContent = calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1];

    // Enable / Disable Decimal Button when the last concatenated number already a
    // decimal or is an operator
    if (calculatorObj.calculationArray.length > 0) {
      // Only if calculatorObj.calculationArray is not empty
      // Enables decimal button if element is an integer && is not an operator
      if (
        calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1].includes(
          ".",
        )
          || calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1] === "+"
          || calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1] === "-"
          || calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1] === "*"
          || calculatorObj.calculationArray[calculatorObj.calculationArray.length - 1] === "/"
      ) {
        elementsDOM.decimalButton.disabled = true;
      } else {
        // Enables decimal button for decimal numbers
        elementsDOM.decimalButton.removeAttribute("disabled");
      }
    }
    // Disable operators buttons to not be clicked one after another
    if (
      calculatorObj.secondaryDisplayArray[
        calculatorObj.secondaryDisplayArray.length - 1
      ] === "+"
        || calculatorObj.secondaryDisplayArray[
          calculatorObj.secondaryDisplayArray.length - 1
        ] === "-"
        || calculatorObj.secondaryDisplayArray[
          calculatorObj.calculationArray.length - 1
        ] === "*"
        || calculatorObj.secondaryDisplayArray[
          calculatorObj.secondaryDisplayArray.length - 1
        ] === "/"
    ) {
      // Disable operators buttons ONLY if last entry is NOT an operator
      elementsDOM.operatorsButtons.forEach((item, index) => {
        elementsDOM.operatorsButtons[index].disabled = true;
      });
    } else {
      // Enable operators buttons ONLY if last entry is NOT an operator
      elementsDOM.operatorsButtons.forEach((item, index) => {
        elementsDOM.operatorsButtons[index].removeAttribute("disabled");
      });
    }

    // Realign the secondary display text, if centered by the maximum size limit message
    elementsDOM.secondaryDisplay.style.textAlign = "right";

    // Remove the deleted data attribute when the calculatorObj.calculationArray is empty
    if (calculatorObj.calculationArray.length === 0) {
      clearAllDatas();
    }
  });
};

export default deleteEventListener;
