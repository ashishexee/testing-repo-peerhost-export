
import crypto from 'crypto';
export default async function (inputs) {
    const data = inputs.data || "test";
    return { hash: crypto.createHash('sha256').update(data).digest('hex') };
}
