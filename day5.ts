function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {

  // create a 2D array with default value of 0
  const dp: number[][] = new Array(giftsCities.length + 1).fill(0).map(() => new Array(maxGifts + 1).fill(0));

  // loop through each giftsCity
  for (let i = 1; i <= giftsCities.length; i++) {
    const weight: number = giftsCities[i - 1];//weight of each gift

    // loop through each max gift weight
    for (let j = 1; j <= maxGifts; j++) {

      // if the item's weight is greater than the current weight, skip it
      if (weight > j) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        // otherwise, choose the maximum value between:
        // 1. the value of the current item plus the maximum value obtainable with the remaining weight (dp[i - 1][j - weight])
        // 2. the maximum value obtained without including the current item (dp[i - 1][j])
        dp[i][j] = Math.max(weight + dp[i - 1][j - weight], dp[i - 1][j]);
      }
    }
  }

  // return the maximum value obtained
  return dp[giftsCities.length][maxGifts];

}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

//console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20 (12 + 3 + 5)

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100