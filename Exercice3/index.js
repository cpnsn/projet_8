// Créez votre fonction ici
export default function calculateAverage(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "No numbers to calculate average"
    }

    const arraySum = array.reduce((accumulator, currenValue) => accumulator + currenValue, 0);
    const average = arraySum / array.length;

    return average
}


// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average