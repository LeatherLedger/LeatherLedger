/**
 Leather Ledger Project
 @author: Andrey Nedobylsky (admin@twister-vl.ru)
 */

/**
 * Signable object
 * Many objects require a sign
 */
class Signable {
    constructor() {
        this.data = '';
        this.sign = '';
        this.pubkey = '';
        this.type = 'Empty';
    }

    isSigned() {
        return this.sign.length !== 0;
    }
}

module.exports = Signable;