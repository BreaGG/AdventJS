function maxDistance(movements) {
    let position = 0;
    let maxDistance = 0;

    for (let i = 0; i < movements.length; i++) {
        const move = movements[i];

        if (move === '>') {
            position++;
        } else if (move === '<') {
            position--;
        } else if (move === '*') {
            position++;
            const backwardPosition = position - 2;
            maxDistance = Math.max(maxDistance, Math.abs(backwardPosition), Math.abs(position));
        }

        maxDistance = Math.max(maxDistance, Math.abs(position));
    }

    return maxDistance;
}

// Ejemplo de uso
const ejemploMovimientos = ">>*<";
const distanciaMaxima = maxDistance(ejemploMovimientos);
console.log(distanciaMaxima);  // Debería imprimir 3
