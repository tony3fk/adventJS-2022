function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
  let maxPossibleGifts: number = 0;

  const findMaxPossibleGifts = (numbers: number[], combinationsPath: number[]): void => {
    if (combinationsPath.length <= maxCities) {
      const combinationSum = combinationsPath.reduce((a, b) => a + b, 0);
      if (combinationSum <= maxGifts && combinationSum > maxPossibleGifts) {
        maxPossibleGifts = combinationSum;
      }
    }
    numbers.forEach((num: number, index: number, numbersList: number[]) => {
      combinationsPath.push(num);
      findMaxPossibleGifts(numbersList.slice(index + 1), combinationsPath);
      combinationsPath.pop(num);
    });
  };



  findMaxPossibleGifts(giftsCities, []);

  return maxPossibleGifts;
}

// const giftsCities = [12, 3, 11, 5, 7]
// const maxGifts = 20
// const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

// console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20 (12 + 3 + 5)

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100