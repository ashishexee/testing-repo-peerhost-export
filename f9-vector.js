
export default async function (inputs) {
    const a = inputs.vecA || [1, 2, 3];
    const b = inputs.vecB || [4, 5, 6];
    let prod = 0;
    for (let i = 0; i < a.length; i++) prod += a[i] * b[i];
    return { result: prod };
}
