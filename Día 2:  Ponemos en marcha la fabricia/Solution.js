function manufacture(gifts, materials) {
    const result = []

    for (const gift of gifts) {
        let canManufacture = true;

        for (const char of gift) {
            if (!materials.includes(char)) {
                canManufacture = false;
                break;
            }
        }

        if (canManufacture) {
            result.push(gift)
        }
    }


    return result;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials))


const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); 

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); 