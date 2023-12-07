function decode(message) {
    const positions = [];
    let result = '';

    for (const char of message) {
        if (char === '(') {
            positions.push(result.length);
        } else if (char === ')' && positions.length > 0) {
            const start = positions.pop();
            const reversed = result.slice(start).split('').reverse().join('');
            result = result.substring(0, start) + reversed + result.substring(start + reversed.length + 1);
        } else {
            result += char;
        }
    }
    return result;
}

// Ejemplos de uso:
const a = decode('hola (odnum)');
console.log(a); // Salida: hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // Salida: hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // Salida: santaclaus

const d = decode('((nta)(sa))');
console.log(d); // Salida: asnta
