function decode(message) {
    const stack = [];

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char === '(') {
            stack.push(i);
        } else if (char === ')' && stack.length > 0) {
            const openParenIndex = stack.pop();
            const reversedSubstring = message.substring(openParenIndex + 1, i).split('').reverse().join('');

            message = message.substring(0, openParenIndex) + reversedSubstring + message.substring(i + 1);

            i = openParenIndex + reversedSubstring.length;
        }
    }

    message = message.replace(/[\(\)]/g, '');

    return message;
}

const a = decode('hola (odnum)');
console.log(a); // Salida: hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // Salida: hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // Salida: santaclaus

const d = decode('((nta)(sa))');
console.log(d); // Salida asnta
