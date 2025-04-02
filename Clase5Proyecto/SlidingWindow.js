function findLongestWord(text) {
    const words = text.split(/\s+/);
    let left = 0;
    let longestWord = '';

    while (left < words.length) {
        if (words[left].length > longestWord.length) {
            longestWord = words[left];
        }
        left++;
    }

    return longestWord;
}

const text = "Si la energía fluye allí donde enfocas la atención, en el instante en que prestas atención a los sentimientos y los recuerdos de siempre estás insuflando energía al pasado y restándola al momento presente. Del mismo modo, si pones la atención constantemente en las personas que vas a ver, los lugares que debes visitar y las cosas que tienes por hacer en ciertos momentos de tu realidad conocida, estás restando energía al momento presente para insuflársela al mañana predecible.";
console.log(findLongestWord(text));
