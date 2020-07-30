import { elementsDOM } from "../elements-DOM";

// Add Event Listeners to Keyboard Touches
const keyboardEventListeners = () => {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (keyName === "Enter") {
      elementsDOM.equalsButton.click();
    } else if (keyName === "Backspace") {
      elementsDOM.deleteButton.click();
    } else if (keyName === "Delete") {
      elementsDOM.clearButton.click();
    }

    elementsDOM.operatorsButtons.forEach((item, index) => {
      // Operators keys
      if (item.value === keyName) {
        elementsDOM.operatorsButtons[index].click();
      }
    });

    elementsDOM.numbersButtons.forEach((item, index) => {
      // Number keys
      if (item.value === keyName) {
        elementsDOM.numbersButtons[index].click();
      }
    });
  });
};

export default keyboardEventListeners;
