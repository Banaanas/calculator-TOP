import { elementsDOM } from "../elements-DOM";
import clearAllDatas from "../clear-all-datas";

// Add Event Listener to Clear Button
const clearEventListener = () => {
  elementsDOM.clearButton.addEventListener("click", () => {
    clearAllDatas();
  });
};

export default clearEventListener;
