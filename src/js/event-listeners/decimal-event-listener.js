// Add Event Listeners to Decimal Button

import { elementsDOM } from "../elements-DOM";

// Add Event Listeners to Decimal
const decimalEventListeners = () => {
  elementsDOM.decimalButton.addEventListener("click", () => {
    // Disables decimal button if displayed number already includes a decimal
    elementsDOM.decimalButton.disabled = true;
  });
};

export default decimalEventListeners;
