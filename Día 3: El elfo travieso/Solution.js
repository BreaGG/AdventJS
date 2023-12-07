function findNaughtyStep(original, modified) {
    const length = Math.min(original.length, modified.length);

    for (let i = 0; i < length; i++) {
        if (original[i] !== modified[i]) {
            if (original.length < modified.length) {
                return modified[i];
            }
            else {
                return original[i];
            }
        }
    }

    if (original.length < modified.length) {
        return modified.slice(original.length)[0];
    } else if (original.length > modified.length) {
        return original.slice(modified.length)[0];
    }
    return '';
}

// Ejemplos de uso:
const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // Salida: 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // Salida: 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // Salida: ''

const original4 = 'abucdee';
const modified4 = 'abacde';
console.log(findNaughtyStep(original4, modified4)); 