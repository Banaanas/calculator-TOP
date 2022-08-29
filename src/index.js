/* Division par Zero - Arrondir le résultat,
** Faire clignoter le dernier chiffre
** Une fois que la touche Egal a été utilisée, les touches Opérateur et Nombre sont inactives.
    Pour réaliser un nouveau calcul, il faut utiliser le bouton Reset.
    Seul fonctionne le bouton Delete, afin de modifier le calcul d'avant résultat..
** Difficultés pédagogiques :
     - Ne pas utiliser la fonction eval() pour le calcul, pour des questions de sécurité
     - Fonction Delete
     - Historique des Calculs */

// Import stylesheets
import "./styles/index.css";
import "./styles/normalize.css";

// Import Images
import calculatorIconSrc from "./images/calculator-icon.svg";

import clearAllDatas from "./js/clear-all-datas";
import numbersEventListeners from "./js/event-listeners/numbers-event-listeners";
import operatorsEventListeners from "./js/event-listeners/operators-event-listeners";
import equalsEventListeners from "./js/event-listeners/equals-event-listener";
import deleteEventListener from "./js/event-listeners/delete-event-listener";
import clearEventListener from "./js/event-listeners/clear-event-listener";
import keyboardEventListeners from "./js/event-listeners/keyboard-event-listeners";
import decimalEventListeners from "./js/event-listeners/decimal-event-listener";

const calculatorIcon = document.querySelector("#calculator-icon");
calculatorIcon.src = calculatorIconSrc;

clearAllDatas();
numbersEventListeners();
decimalEventListeners();
operatorsEventListeners();
equalsEventListeners();
deleteEventListener();
clearEventListener();
keyboardEventListeners();
