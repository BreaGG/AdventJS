function decode(original, modified) {
    if (original.length === modified.length) return ''

    for (let i = 0; i < (original.length + 1); i++) {
        if (!original.split('')[i]) {
            return modified.split('')[i]
        }
        if (!modified.split('')[i]) {
            return original.split('')[i]
        }
        if (original.split('')[i] != modified.split('')[i]) {
            return (original.length > modified.length) ? original.split('')[i] : modified.split('')[i]
        }
    }
}

const a = decode('hola (odnum)');
console.log(a); // Salida: hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // Salida: hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // Salida: santaclaus

const d = decode('((nta)(sa))');
console.log(d); // Salida asnta
