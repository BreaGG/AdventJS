function maxDistance(movements) {
    let currentPosition = 0;
    let maxDistance = 0;

    for (let i = 0; i < movements.length; i++) {
        const movement = movements[i];

        if (movement === '>') {
            currentPosition++;
        } else if (movement === '<') {
            currentPosition--;
        } else if (movement === '*') {
            // Considera ambas opciones: avanzar y retroceder
            const distanceForward = Math.abs(currentPosition + 1);
            const distanceBackward = Math.abs(currentPosition - 1);

            // Actualiza la máxima distancia considerando ambas opciones
            maxDistance = Math.max(maxDistance, distanceForward, distanceBackward);
        }
    }

    // Devuelve la máxima distancia en valor absoluto
    return Math.abs(maxDistance);
}

// Ejemplo de uso:
const result = maxDistance(">>*<");
console.log(result); // Salida esperada: 2