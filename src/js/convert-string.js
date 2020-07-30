// Concatenate numbers in calculatorObj.calculationArray
// ( "1","8","+","7","2" becomes "18","+","72")
// and convert them from string to array values
import { calculatorObj } from "./calculator-object";

const convertString = () => {
  let n = 0;

  while (n < calculatorObj.calculationArray.length) {
    n += 1;

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < calculatorObj.calculationArray.length; index++) {
      if (
        calculatorObj.calculationArray[index] !== "+"
                && calculatorObj.calculationArray[index + 1] !== "+"
                && calculatorObj.calculationArray[index] !== "-"
                && calculatorObj.calculationArray[index + 1] !== "-"
                && calculatorObj.calculationArray[index] !== "*"
                && calculatorObj.calculationArray[index + 1] !== "*"
                && calculatorObj.calculationArray[index] !== "/"
                && calculatorObj.calculationArray[index + 1] !== "/"
                && calculatorObj.calculationArray[index + 1] !== undefined
      ) {
        const result = calculatorObj.calculationArray[index].concat(
          calculatorObj.calculationArray[index + 1],
        );
        calculatorObj.calculationArray.splice(index, 2, result);
        console.log(n);

        n = 0;

        break;
      }
    }
  }

  calculatorObj.calculationArray.forEach((item, index) => {
    const newNumber = Number(item);

    if (newNumber >= 0) {
      calculatorObj.calculationArray.splice(index, 1, newNumber);
    }
  });
};

export default convertString;
