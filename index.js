'use strict';

const crypto = require('crypto');

let hash = (algo, string) => {
    if (typeof string !== 'string')
        return false;

    let hash = crypto.createHash(algo);

    hash.update(string);

    return hash.digest('base64');
};

module.exports = {
    algoSha1: (string) => {
        return hash('sha1', string);
    }
};