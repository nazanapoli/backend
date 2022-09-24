const fs = require('fs');

class Contenedor {
    constructor(file){
        this.file = file
    }
    async save(product){
        try {
            if (fs.existsSync(this.file)) {
                const contenido = await fs.promises.readFile(this.file,'utf-8')
                if(contenido){
                    const productos = JSON.parse(contenido)
                    const newProduct = {
                        id: productos.length + 1,
                        ...product
                    }
                    productos.push(newProduct)
                    fs.promises.writeFile(this.file, JSON.stringify([productos], null, 2))
                }
            } else {
                const newProduct = {
                    id: 1,
                    ...product
                }
                fs.promises.writeFile(this.file, JSON.stringify([newProduct], null, 2))
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getById(id){
        try {
            if(fs.existsSync(this.file)){
                const contenido = await fs.promises.readFile(this.file,'utf-8')
                if(contenido){
                    const productos = JSON.parse(contenido)
                    const producto = productos.find(i => i.id === id)
                    return producto
                } else {
                    return 'Archivo vacio'
                }

            }
        } catch (error) {
            console.log(error)
        }
    }    
    async getAll(){
        const contenido = await fs.promises.readFile(this.file,'utf-8')
        const productos = JSON.parse(contenido)
        return productos
    }    
    async deleteById(id){
        try {
            if(fs.existsSync(this.file)){
                const contenido = await fs.promises.readFile(this.file,'utf-8')
                if(contenido){
                    const productos = JSON.parse(contenido)
                    const productosRestantes = productos.filter(i => i.id !== id)
                    return productosRestantes
                } else {
                    return 'Archivo vacio'
                }
            }
        } catch (error) {
            console.log(error)
        }
    }    
    async deleteAll(){
        await fs.promises.writeFile(this.file, JSON.stringify([]), null, 2)
    }
}

const listaProductos = new Contenedor("productos.txt")

const producto1 = {
    title: 'Remera',
    price: 3200,
    image: 'https://newsport.vteximg.com.br/arquivos/ids/7305036-1000-1000/VN00GGGATJ-A.jpg?v=637584312039500000'
}

const producto2= {
    title: 'Chomba',
    price: 9390,
    image: 'https://equus.vtexassets.com/arquivos/ids/198626-1200-auto?v=637359703232370000&width=1200&height=auto&aspect=true'
}

const crearProducto = async()=>{
    await listaProductos.save(producto1);
    await listaProductos.save(producto2);
    const resultadoGetById = await listaProductos.getById(2);
    console.log(resultadoGetById)
    const allProd = await listaProductos.getAll()
    console.log(allProd)
    const prodEliminado = await listaProductos.deleteById(2);
    console.log(prodEliminado)
    listaProductos.deleteAll();
}

crearProducto()