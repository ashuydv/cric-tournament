/**
 * Shuffles any array by creating a new copy with randomly reordered elements
 * @param array The array to shuffle
 * @returns A new shuffled array
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
    // Create a copy of the array to avoid mutating the original
    const newArray = [...array];
    let currentIndex = newArray.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex],
            newArray[currentIndex],
        ];
    }

    return newArray;
};