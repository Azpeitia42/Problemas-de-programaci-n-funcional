const fs = require('fs');
const Product = require('./product');

function loadProducts(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) reject(err);
            const products = data.split('\n').slice(1).map(line => {
                const parts = line.split(',');
                return new Product(...parts);
            });
            resolve(products);
        });
    });
}

module.exports = { loadProducts };
