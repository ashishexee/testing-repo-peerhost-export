
export default async function (inputs) {
    const str = inputs.text || "Hello World";
    return { reversed: str.split('').reverse().join('') };
}
