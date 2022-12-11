/* Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades.Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final.No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.

Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.
A tener en cuenta

    Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
    No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).
*/

function checkJump(heights: number[]): boolean {

  const highestPoint: number = Math.max(...heights);
  const highestIndex: number = heights.indexOf(highestPoint);
  const isHighestValueAtMiddle: boolean = ![0, heights.length - 1].includes(highestIndex);
  const firstHalf: number[] = heights.slice(0, highestIndex);
  const secondHalf: number[] = heights.slice(highestIndex + 1, heights.length);

  const isGoingUp: boolean = firstHalf.slice(1).every((height, index) => height >= firstHalf[index]);

  const isGoingDown: boolean = secondHalf.slice(1).every((height, index) => height <= secondHalf[index]);

  return isHighestValueAtMiddle && isGoingUp && isGoingDown;
}

const heights1 = [1, 3, 8, 5, 2]
checkJump(heights1) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5]
checkJump(heights2) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/
