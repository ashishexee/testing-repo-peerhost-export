
// complex/crypto-sign.js
// This function generates an RSA key pair, signs a message, and verifies it.

import crypto from 'crypto';

export default async function (inputs) {
    try {
        const message = inputs?.message || "PeerHost Trustless Execution Verification " + Date.now();

        // 1. Generate Key Pair
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
        });

        // 2. Sign Message
        const sign = crypto.createSign('SHA256');
        sign.update(message);
        sign.end();
        const signature = sign.sign(privateKey, 'hex');

        // 3. Verify Signature
        const verify = crypto.createVerify('SHA256');
        verify.update(message);
        verify.end();
        const isValid = verify.verify(publicKey, signature, 'hex');

        return {
            status: 200,
            body: {
                test: "RSA Signature Verification",
                message: message,
                signature_fragment: signature.substring(0, 32) + "...",
                is_valid: isValid,
                public_key_type: publicKey.type,
                timestamp: new Date().toISOString()
            }
        };
    } catch (err) {
        return {
            status: 500,
            body: {
                error: "Crypto operation failed",
                details: err.message
            }
        };
    }
}
