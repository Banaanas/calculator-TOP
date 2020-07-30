import { elementsDOM } from "../elements-DOM";
import { calculatorObj } from "../calculator-object";
import convertString from "../convert-string";
import {
  add, divide, multiply, subtract,
} from "../calculate-functions";
import alertMessage from "../alert-message";

// Add Event Listeners to Numbers Buttons
const equalsEventListeners = () => {
  elementsDOM.equalsButton.addEventListener("click", () => {
    // Return if nothing has been entered before
    if (calculatorObj.calculationArray.length === 0) return;

    // Alert when equals is pushed after an operator :
    // the user must enter a number or delete the operator
    if (
      calculatorObj.secondaryDisplayArray[
        calculatorObj.secondaryDisplayArray.length - 1
      ] === "+"
      || calculatorObj.secondaryDisplayArray[
        calculatorObj.secondaryDisplayArray.length - 1
      ] === "-"
      || calculatorObj.secondaryDisplayArray[
        calculatorObj.secondaryDisplayArray.length - 1
      ] === "*"
      || calculatorObj.secondaryDisplayArray[
        calculatorObj.secondaryDisplayArray.length - 1
      ] === "/"
    ) {
      alertMessage("Enter a Number");
      return;
    }

    // Equals should only work when NO number has been entered BEFORE
    if (calculatorObj.calculationArray.length > 1) {
      if (elementsDOM.secondaryDisplay.dataset.delete === "deleted") {
        // Delete - Case 2
        // Push a 0 at the beginning of the string and enable, in Delete - Case 2,
        // operations beginning with a + or a -
        if (
          calculatorObj.calculationArray[0] === "+"
          || calculatorObj.calculationArray[0] === "-"
        ) calculatorObj.calculationArray.unshift(0);
        // Concatenate numbers in calculatorObj.calculationArray
        // ( "0","-","1","8","+","7","2" becomes "0","-","18","+","72")
        // and convert them from string to array values
        convertString();
      } else {
        // Normal Case (ie. Delete Button has not been used yet)
        // eslint-disable-next-line no-lonely-if
        if (calculatorObj.calculationArray === 0) {
          // Push a 0 at the beginning of the string and enable
          // operations beginning with a + or a -
          calculatorObj.calculationArray.unshift(0);
        } else {
          // Push the displayed number into the calculatorObj.calculationArray
          calculatorObj.calculationArray.push(
            Number(elementsDOM.calculatorDisplay.textContent),
          );
        }
      }

      // Remove the data-attribute set from Delete - Case 2,
      // case only valid before equals button pushed
      elementsDOM.secondaryDisplay.removeAttribute("data-delete");

      // Look for multiplication or division and makes the operation
      // (High priority - Respects the operators precedence rule)
      // Stop when there is no * or * inside the calculatorObj.calculationArray
      while (
        calculatorObj.calculationArray.includes("*")
        || calculatorObj.calculationArray.includes("/")
      ) {
        for (
          let index = 0;
          index < calculatorObj.calculationArray.length;
          index++
        ) {
          if (calculatorObj.calculationArray[index] === "*") {
            const calcIndexMultiplication = calculatorObj.calculationArray.indexOf(
              "*",
            );
            const resultMultiplication = multiply(
              calculatorObj.calculationArray[calcIndexMultiplication - 1],
              calculatorObj.calculationArray[calcIndexMultiplication + 1],
            );
            // eslint-disable-next-line max-len
            calculatorObj.calculationArray.splice(
              calcIndexMultiplication - 1,
              3,
              resultMultiplication,
            );

            break; // if the operator * is found, it breaks (stops) the loop and loops again
          } else if (calculatorObj.calculationArray[index] === "/") {
            const calcIndexDivision = calculatorObj.calculationArray.indexOf(
              "/",
            );
            // eslint-disable-next-line max-len
            const resultDivision = divide(
              calculatorObj.calculationArray[calcIndexDivision - 1],
              calculatorObj.calculationArray[calcIndexDivision + 1],
            );
            calculatorObj.calculationArray.splice(
              calcIndexDivision - 1,
              3,
              resultDivision,
            );

            break;
          }
        }
      }

      // Looks for addition or subtraction and makes the operation (Lower priority)
      // Stops when there is no + or - inside the calculatorObj.calculationArray
      while (
        calculatorObj.calculationArray.includes("+")
        || calculatorObj.calculationArray.includes("-")
      ) {
        for (
          let index = 0;
          index < calculatorObj.calculationArray.length;
          index++
        ) {
          if (calculatorObj.calculationArray[index] === "+") {
            const calcIndexAddition = calculatorObj.calculationArray.indexOf(
              "+",
            );
            // eslint-disable-next-line max-len
            const resultAddition = add(
              calculatorObj.calculationArray[index - 1],
              calculatorObj.calculationArray[index + 1],
            );
            calculatorObj.calculationArray.splice(
              calcIndexAddition - 1,
              3,
              resultAddition,
            );
            break;
          } else if (calculatorObj.calculationArray[index] === "-") {
            const calcIndexSubtraction = calculatorObj.calculationArray.indexOf(
              "-",
            );
            // eslint-disable-next-line max-len
            const resultSubtraction = subtract(
              calculatorObj.calculationArray[index - 1],
              calculatorObj.calculationArray[index + 1],
            );
            calculatorObj.calculationArray.splice(
              calcIndexSubtraction - 1,
              3,
              resultSubtraction,
            );
            break;
          }
        }
      }

      // Displays the result of the operation to the Calculator Display
      calculatorObj.resultArray.push(calculatorObj.calculationArray[0]);
      const resultDisplayed = calculatorObj.calculationArray[0];
      elementsDOM.calculatorDisplay.textContent = resultDisplayed;

      // Empties calculatorObj.calculationArray
      calculatorObj.calculationArray = [];
    }

    // To realign on the right if the maximum numbered had been reached
    // before and the center alignment assigned
    elementsDOM.secondaryDisplay.style.textAlign = "right";

    // Disables operators buttons
    elementsDOM.operatorsButtons.forEach((item, index) => {
      elementsDOM.operatorsButtons[index].disabled = true;
    });

    // Disables numbers buttons : the result should not be included in another operation.
    // User must click on the Reset Button
    elementsDOM.numbersButtons.forEach((item, index) => {
      elementsDOM.numbersButtons[index].disabled = true;
    });

    // Change background color of disabled buttons
    elementsDOM.operatorsButtons.forEach((item, index) => {
      elementsDOM.operatorsButtons[index].classList.add("disabled-buttons");
    });
    elementsDOM.numbersButtons.forEach((item, index) => {
      elementsDOM.numbersButtons[index].classList.add("disabled-buttons");
    });

    elementsDOM.equalsButton.classList.add("disabled-buttons");

    elementsDOM.historyDisplay.innerHTML = `The result of your operation is ${
      calculatorObj.resultArray[calculatorObj.resultArray.length - 1]
    }.</br>Please, use the Reset or Delete Buttons.`;

    // Enables decimal button again if disabled before
    elementsDOM.decimalButton.removeAttribute("disabled");
  });
};

export default equalsEventListeners;
