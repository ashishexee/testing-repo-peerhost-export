
export default async function (inputs) {
    let n = inputs.number || 123456789;
    const factors = [];
    let divisor = 2;
    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return { factors };
}
