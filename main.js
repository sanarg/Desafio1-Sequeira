class ProductManager {
    constructor() {
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){
        ProductManager.id++
        this.products.push ({title, description, price, thumbnail, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }

    getProductById(id){
        if(!this.products.find((producto) => producto.id === id)){
            console.log("Not Found")
          }else{
            console.log("Got it")
          }
    }
}

const productos = new ProductManager

productos.addProduct('title1', 'description1', 101, "thumbnail1", "qwerty1", 1);
productos.addProduct('title2', 'description2', 102, "thumbnail2", "qwerty2", 212);

console.log(productos.getProduct());

productos.getProductById(3)
