import { calculatorObj } from "./calculator-object";

// Concatenate numbers in calculatorObj.calculationArray
// ( "1","8","+","7","2" becomes "18","+","72")
// but they still are string values
const checkDecimal = () => {
  let n = 0;

  while (n < calculatorObj.calculationArray.length) {
    n += 1;

    // eslint-disable-next-line no-plusplus
    for (
      let index = 0;
      index < calculatorObj.calculationArray.length;
      index++
    ) {
      if (
        calculatorObj.calculationArray[index] !== "+" &&
        calculatorObj.calculationArray[index + 1] !== "+" &&
        calculatorObj.calculationArray[index] !== "-" &&
        calculatorObj.calculationArray[index + 1] !== "-" &&
        calculatorObj.calculationArray[index] !== "*" &&
        calculatorObj.calculationArray[index + 1] !== "*" &&
        calculatorObj.calculationArray[index] !== "/" &&
        calculatorObj.calculationArray[index + 1] !== "/" &&
        calculatorObj.calculationArray[index + 1] !== undefined
      ) {
        // eslint-disable-next-line max-len
        const product = calculatorObj.calculationArray[index].concat(
          calculatorObj.calculationArray[index + 1],
        );
        calculatorObj.calculationArray.splice(index, 2, product);

        n = 0;

        break;
      }
    }
  }
};
export default checkDecimal;
