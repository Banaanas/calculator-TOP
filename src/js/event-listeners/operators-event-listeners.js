import { elementsDOM } from "../elements-DOM";
import { calculatorObj } from "../calculator-object";

// Add Event Listeners to Numbers Buttons
const operatorsEventListeners = () => {
  elementsDOM.operatorsButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Disable operators buttons to not be clicked one after another
      // eslint-disable-next-line no-shadow
      elementsDOM.operatorsButtons.forEach((item, index) => {
        elementsDOM.operatorsButtons[index].disabled = true;
      });

      // Enable decimal button again if disabled before
      elementsDOM.decimalButton.removeAttribute("disabled");

      // If Delete - Case 2 (cf. Delete Button block)
      if (elementsDOM.secondaryDisplay.dataset.delete === "deleted") {
        // Operator taped/clicked pushed to secondary and history display arrays
        calculatorObj.calculationArray.push(event.target.value);
        calculatorObj.historyDisplayArray.push(event.target.value);

        // Operator taped/clicked to secondary and history displays
        calculatorObj.secondaryDisplayArray.push(event.target.value);
        elementsDOM.secondaryDisplay.textContent =
          calculatorObj.secondaryDisplayArray.join("");
        elementsDOM.historyDisplay.textContent =
          elementsDOM.secondaryDisplay.textContent;

        return;
      }

      // Empty the display calculator array (if used before)
      calculatorObj.calculatorDisplayArray = [];
      // Operator AND number taped/clicked pushed to calculatorObj.calculationArray
      calculatorObj.calculationArray.push(
        Number(elementsDOM.calculatorDisplay.textContent),
      );
      calculatorObj.calculationArray.push(event.target.value);
      // Operator taped/clicked pushed to calculatorObj.calculationArray
      calculatorObj.historyDisplayArray.push(event.target.value);
      // Operator taped/clicked to secondary and history displays
      calculatorObj.secondaryDisplayArray.push(event.target.value);
      elementsDOM.secondaryDisplay.textContent =
        calculatorObj.secondaryDisplayArray.join("");
      elementsDOM.historyDisplay.textContent =
        elementsDOM.secondaryDisplay.textContent;

      // eslint-disable-next-line max-len
      // If number of characters in the secondary display > 47, it displays a message on the secondary displays
      if (calculatorObj.secondaryDisplayArray.length > 47) {
        elementsDOM.secondaryDisplay.textContent =
          "A bit too long for my display (and my robot brain) !";
        elementsDOM.secondaryDisplay.style.textAlign = "center";
        // The user can still look at the history displays, which numbers limit is higher
        elementsDOM.historyDisplay.textContent =
          calculatorObj.secondaryDisplayArray.join("");
      }
    });
  });
};

export default operatorsEventListeners;
