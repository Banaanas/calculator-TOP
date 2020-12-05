import { elementsDOM } from "../elements-DOM";
import clearAllData from "../clear-all-datas";

// Add Event Listener to Clear Button
const clearEventListener = () => {
  elementsDOM.clearButton.addEventListener("click", () => {
    clearAllData();
  });
};

export default clearEventListener;
