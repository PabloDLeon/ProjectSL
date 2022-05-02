const productForm = document.getElementById('aunnotieneid');

const { remote } = require('electron')
const main = remote.require('./main')

const lsnombre = document.getElementById('nombre');
const lscorreo = document.getElementById('correo');
const lsusuario = document.getElementById('usuario');
const lscontra = document.getElementById('contra');

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {
        nombre: lsnombre.value,
        correo: lscorreo.value,
        usuario: lsusuario.value,
        contra: lscontra.value,
    }

    main.createProduct(newProduct)

})