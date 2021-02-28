//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = n => {
    if (n <= 2) return false
    for (let q = 2; q < Math.round(Math.sqrt(n)) + 1; q++) {
        if (n % q === 0) return false
    }
    return true
}

export class DiffieHellman {
    constructor(p, g) {
        if (p <= 1) {
            throw new Error('p: out of range')
        }
        if (!isPrime(p)) {
            throw new Error('p: is not prime')
        }
        if (g >= 9999) {
            throw new Error('g: out of range')
        }
        if (!isPrime(g)) {
            throw new Error('g: is not prime')
        }
        this.p = p
        this.g = g
    }

    getPublicKey(privateKey) {
        if (privateKey <= 1) {
            throw new Error('privateKey: out of range')
        }
        if (Math.abs(privateKey) >= this.p) {
            throw new Error('privateKey: out of range')
        }
        return this.g**privateKey % this.p
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return theirPublicKey**myPrivateKey % this.p
    }
}
