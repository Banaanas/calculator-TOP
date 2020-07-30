import { elementsDOM } from "./elements-DOM";

// Set some delay
const setMessageDelay = () => {
  setTimeout(() => {
    elementsDOM.errorMessage.style.display = "none";
  }, 2000);
};

// Display Wait Message
const alertMessage = (message) => {
  elementsDOM.errorMessage.style.display = "flex";
  elementsDOM.errorMessage.textContent = message;
  setMessageDelay();
};

export default alertMessage;
