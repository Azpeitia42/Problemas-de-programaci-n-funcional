const { loadProducts } = require('./dataAccess');

async function main() {
    try {
        const products = await loadProducts('products.txt');
        
        // 1) Número de productos con existencia mayor a 20.
        const countHighStock = products.filter(p => p.stock > 20).length;
        console.log(`Número de productos con existencia mayor a 20: ${countHighStock}`);
        
        // 2) Número de productos con existencia menos a 15.
        const countLowStock = products.filter(p => p.stock < 15).length;
        console.log(`Número de productos con existencia menor a 15: ${countLowStock}`);
        
        // 3) Lista de productos con la misma clasificación y precio mayor 15.50
        const filteredByClassAndPrice = products.filter(p => p.price > 15.50);
        const byClassification = filteredByClassAndPrice.reduce((acc, curr) => {
            acc[curr.classification] = acc[curr.classification] || [];
            acc[curr.classification].push(curr);
            return acc;
        }, {});
        console.log(`Productos por clasificación con precio mayor a 15.50: ${JSON.stringify(byClassification, null, 2)}`);
        
        // 4) Lista de productos con precio mayor a 20.30 y menor a 45.00
        const priceRangeProducts = products.filter(p => p.price > 20.30 && p.price < 45.00);
        console.log(`Productos con precio entre 20.30 y 45.00: ${JSON.stringify(priceRangeProducts, null, 2)}`);
        
        // 5) Número de productos agrupados por su clasificación
        const countByClassification = products.reduce((acc, curr) => {
            acc[curr.classification] = (acc[curr.classification] || 0) + 1;
            return acc;
        }, {});
        console.log(`Número de productos por clasificación: ${JSON.stringify(countByClassification, null, 2)}`);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

main();
