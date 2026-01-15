
export default async function (inputs) {
    const n = inputs.n || 20;
    const fib = (x) => x <= 1 ? x : fib(x - 1) + fib(x - 2);
    return { result: fib(n) };
}
