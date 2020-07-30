// Clear Function

import { elementsDOM } from "./elements-DOM";
import { calculatorObj } from "./calculator-object";

const clearAllDatas = () => {
  elementsDOM.secondaryDisplay.textContent = "0";
  elementsDOM.calculatorDisplay.textContent = "0";

  calculatorObj.calculationArray = [];
  calculatorObj.resultArray = [];

  calculatorObj.calculatorDisplayArray = [];
  calculatorObj.historyDisplayArray = [];
  calculatorObj.secondaryDisplayArray = [];

  elementsDOM.secondaryDisplay.style.textAlign = "right";
  elementsDOM.historyDisplay.textContent = "My Operation";

  elementsDOM.deleteButton.removeAttribute("disabled");
  elementsDOM.secondaryDisplay.removeAttribute("data-delete");
  elementsDOM.decimalButton.removeAttribute("disabled");

  // Enables operators buttons again if disabled
  elementsDOM.operatorsButtons.forEach((item, index) => {
    elementsDOM.operatorsButtons[index].removeAttribute("disabled");
  });

  // Multiply and Divide Buttons should not be used at the beginning of an operation
  elementsDOM.multiplyButton.disabled = true;
  elementsDOM.divideButton.disabled = true;

  elementsDOM.numbersButtons.forEach((item, index) => {
    elementsDOM.numbersButtons[index].removeAttribute("disabled");
  });
  // Remove background color which has been changed after Equals Button was pushed
  elementsDOM.operatorsButtons.forEach((item, index) => {
    elementsDOM.operatorsButtons[index].classList.remove("disabled-buttons");
  });

  elementsDOM.numbersButtons.forEach((item, index) => {
    elementsDOM.numbersButtons[index].classList.remove("disabled-buttons");
  });

  elementsDOM.equalsButton.classList.remove("disabled-buttons");
};

export default clearAllDatas;
