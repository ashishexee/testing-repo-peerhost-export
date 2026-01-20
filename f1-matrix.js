export default async function (inputs) {
    const size = inputs.size || 50;
    const m = Array(size).fill(0).map((_, r) => Array(size).fill(0).map((_, c) => (r + c) % 10));
    let sum = 0;
    for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) sum += m[i][j];
    return { result: sum };
}