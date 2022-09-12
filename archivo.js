// let nombre = 'Pepe'
// let edad = 25
// let precio = '$99.90'
// const seriesFav = ['Dark', 'Mr. Robot', 'Castlevania']
// const pelisFav = [
//     {
//         title: 'Pelicula 1',
//         year: 2022,
//         actores: [
//             'Ben Affleck', 'Brad Pitt'
//         ]
//     },
//     {
//         title: 'Pelicula 2',
//         year: 1994,
//         actores: [
//             'Angelina Jolie', 'Morgan Freeman'
//         ]
//     }
// ]

// console.log(nombre, edad, precio, seriesFav, pelisFav)

// edad++
// console.log(edad++)

// seriesFav.push('Lost')
// console.log(seriesFav)

// -----------------------------------------------------

class Usuario {
    constructor(nombre, apellido, libros, mascota){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascota = mascota
    }
    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(nombreMascota){
        const nuevaMascota = nombreMascota
        this.mascota.push(nuevaMascota)
        return console.log(this.mascota)
    }
    countMascotas(){
        return console.log(this.mascota.length)
    }
    addBook(title, autor){
        const newBook = {title: title, autor: autor}
        this.libros.push(newBook)
        return console.log(this.libros)
    }
    getBookName(){
        let bookName = this.libros.map(e => {
            return e.title
        })
        return bookName
    }
    // si uso static lo compartiran todos los objetos que se vayan a crear
    // static anyo = 2022
}

const yo = new Usuario ('Nazareno','Napoli',[{title: 'Harry Potter', autor: 'J.K. Rowling'}],['Tomi', 'Nacho'])

yo.addBook('Las cosas que perdimos en el fuego','Mariana Enriquez')
yo.getFullName()
yo.addMascota('Flor')
yo.countMascotas()
yo.getBookName()

