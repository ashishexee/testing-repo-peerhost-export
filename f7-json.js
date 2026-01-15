
export default async function (inputs) {
    const data = inputs.json || { a: 1, b: 2 };
    const keys = Object.keys(data).map(k => k.toUpperCase());
    return { keys };
}
