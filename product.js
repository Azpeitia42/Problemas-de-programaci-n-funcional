class Product {
    constructor(product_id, description, price, classification, stock, min_stock, max_stock) {
        this.product_id = product_id;
        this.description = description;
        this.price = parseFloat(price);
        this.classification = classification;
        this.stock = parseInt(stock);
        this.min_stock = parseInt(min_stock);
        this.max_stock = parseInt(max_stock);
    }
}

module.exports = Product;