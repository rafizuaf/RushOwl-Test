const calculateMinMax = (values: number[][]): number => {
    const maxValues: number[] = values.map((arr) => Math.max(...arr));

    const minMaxValue: number = Math.min(...maxValues);

    return minMaxValue;
};

const values: number[][] = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [6, 7, 8, 9, 10],
];

const answer: number = calculateMinMax(values);
console.log(answer);
