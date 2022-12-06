/* Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños.El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo.Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño.Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).
*/

function createCube(size: number): string {
  let cube: string = "";
  const space: string = ' ';
  const elem1: string = '/\\';
  const elem2: string = '_\\';
  const elem3: string = '\\/';
  const elem4: string = '_/';

  for (let i = 0; i < size; i++) {
    cube += space.repeat(size - i - 1) + elem1.repeat(i + 1) + elem2.repeat(size) + '\n';
  }

  for (let i = 0; i < size; i++) {
    cube += space.repeat(i) + elem3.repeat(size - i) + elem4.repeat(size);
    if (i < size - 1) {
      cube += '\n';
    }
  }

  return cube
}

const cube = createCube(5)
console.log(cube)