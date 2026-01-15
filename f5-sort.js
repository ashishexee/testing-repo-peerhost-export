
export default async function (inputs) {
    const arr = inputs.arr || [5, 2, 9, 1, 5, 6];
    return { sorted: arr.sort((a, b) => a - b) };
}
