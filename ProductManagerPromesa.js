const fs = require('fs')

const DB = './DB.json'
const operacionesAsync = async() => {

    await fs.promises.writeFile(DB, 'Producto ingresado !!')
    
    const contenido = await fs.promises.readFile(DB, 'utf-8')
    console.log('CONTENIDO: ', contenido);

    await fs.promises.appendFile(DB, '\n todos los productos estan ingresados !!')

    const contenidoNew = await fs.promises.readFile(DB, 'utf-8')
    console.log('NEW CONTENIDO: ', contenidoNew);

    await fs.promises.unlink(DB)
}

operacionesAsync() 


updateProduct = (productId) => {
    const productfound = this.products.find((element) => element.id == productId)
};

getProducts = async() => {
    if(fs.existsSync(this.path)){
        console.log('The file alresdy exists');
        const activeFile = await fs.promises.readFile(this.path, "utf-8")
        const savedFile = JSON.parse(activeFile)
        return savedFile
    }else{
        return[]
    }
};
const fs = require("fs");

 DB = product.getProducts();

const jsonStr = JSON.stringify(DB);

fs.promises
  .writeFile("DB.json", jsonStr)
  .then(() => {
    console.log("DB saved!");
  })
  .catch((e) => {
    console.error("ERROR", e);
  });

console.log(jsonStr);