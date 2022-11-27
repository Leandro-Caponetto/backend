
class ProductoManager {
    

    

    constructor() {
        this.products = []
    }

    getProductId = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[amount - 1].id + 1 : 1;
        return productId;
    }

    getProducts = () => {
        return this.products
    }

    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id == productId)
        if (productFound) {
            console.log("The product is: ", productFound.title);
        } else {
            console.log("Not found");
        }
    }
    
  
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.getProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const duplicatedCode = (element) => element.code == product.code;
        
        if (!this.products.some(duplicatedCode)) {
            this.products.push(product)
        } else {
            console.log("A Code is duplicated")
        }

    }
    getAll() {
        try {
          let DB = fs.readFileSync('./DB.json', "utf-8");
          data = JSON.parse(DB);
          return DB;
        } catch (error) {
          console.log("hay un problema");
        }
      }
        deleteById(Number) {
            try {
              let DB = fs.readFileSync('./DB.json', "utf-8");
              data = JSON.parse(DB);
              let idDB = DB.filter((item) => item.id != Number);
              idDB= JSON.stringify(idDB);
              fs.writeFileSync('./DB.json', idDB, "utf-8");
              return idDB;
            } catch (error) {
              console.log("hay un problema");
            }
          }
          deleteAll() {
            fs.writeFileSync('./DB.json', "", "utf-8");
          }
    

}

const product = new ProductoManager()

console.log("First call", product.getProducts());

product.addProduct("Remera", "Stampa Negra", 10, "image", "code1", 6)
product.addProduct("Pantalon", "Jean Negro", 11, "image", "code1", 6)
product.addProduct("Buzo", "Canguro de color negro", 12, "image", "code3", 6)
product.addProduct("Campera", "Impermiable con bolsillos", 13, "image", "code4", 6)
product.addProduct("Zapatilla", "Cuero Negro y tiras negreas", 14, "image", "code5", 6)

product.getProductById(1)

console.log("After push", product.getProducts());

