const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const resultArray = [];
    for (let i = 0; i < expr.length; i += 10) {
        const part = expr.substring(i, i + 10);
        if (part === "**********") {
            resultArray.push(" ");
        } else {
            const morseArray = [];
            const normalized = String(Number(part));
            for (let j = 0; j < normalized.length; j += 2) {
                const char = normalized.substring(j, j + 2);
                if (char === "10") {
                    morseArray.push(".");
                } else {
                    morseArray.push("-");
                }
            }
            const morse = morseArray.join("");
            resultArray.push(MORSE_TABLE[morse])
        }
    }
    return resultArray.join("");
}

module.exports = {
    decode
}
