const productCatalog = [
    {
        name: "pillow",
        description: " soft",
        category: "beddings",
        price: 17.0,
        image: "https://images-na.ssl-images-amazon.com/images/I/61zsdTYMxTS._AC_SL1500_.jpg",
        id: 0
    },
    {
        name: "samsug",
        description: "slim and long battery",
        category: "phones",
        price: 119.11,
        image: "https://images-na.ssl-images-amazon.com/images/I/41XWY2YRDVL._AC_.jpg",
        id: 1
    }, {
        name: "plug ",
        description: "lon lasting",
        category: "accessories",
        price: 19.2,
        image: "https://images-na.ssl-images-amazon.com/images/I/51ohK3u0dpL._AC_SL1500_.jpg",
        id: 2
    }
];

let nextAvailableIndex = productCatalog.length;

module.exports = class Product {
    constructor(name, description, category, price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.id = nextAvailableIndex;
        productCatalog.push(this); // add new Product to Catalog
    }

    static getAllProducts() {
        return productCatalog;
    }

    static getRandomProduct() {
        return productCatalog[Math.floor(Math.random() * productCatalog.length)];
    }

    static getProductById(id) {
        return productCatalog[id];
    }
}