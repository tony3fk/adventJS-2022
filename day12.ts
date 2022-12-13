function selectSleigh(distance: number, sleighs: Array<{ name: string, consumption: number }>): string | null {

  const selected: Array<{ name: string, consumption: number }> = [];

  sleighs.forEach((sleigh) =>
    distance * sleigh.consumption <= 20 && selected.push(sleigh));

  if (!selected.length) return null;

  const maxValue: number = Math.max(...selected.map(o => o.consumption));

  return selected.find(({ consumption }) => consumption === maxValue).name;
}


const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Dancer"