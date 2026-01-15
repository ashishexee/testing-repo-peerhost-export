
export default async function (inputs) {
    let n = inputs.start || 27;
    let steps = 0;
    while (n !== 1) {
        if (n % 2 === 0) n = n / 2;
        else n = 3 * n + 1;
        steps++;
    }
    return { steps };
}
