//votre code ici

export default function pairNumbers(min, max) {
    const pairNumbers = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pairNumbers.push(i)
        }
    }
    return pairNumbers.join();
}