const empresas = [];

let table = new DataTable('#myTable', {
    // options
});

class Empresa {

    constructor(idRegistro, nombre, rut, importaciones) {
        this.idRegistro = idRegistro;
        this.nombre = nombre;
        this.rut = rut; 
        this.importaciones=[];
    }
    get idRegistro() {
        return this._idRegistro;
    }
    set idRegistro(idReg) {
        this._idRegistro = idReg;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get rut() {
        return this._rut;
    }
    set rut(rut) {
        this._rut = rut;
    }

    get importaciones() {
        return this._importaciones;
    }

    set importaciones(importaciones) {
        this._importaciones = importaciones;
    }

    addImport(importacion){
        this.importaciones.push(importacion);
    }

    sumaImportaciones(){
        return ` La cantidad de importaciones es: ${this.importaciones.length}`;
    }

    calculaTotalImportaciones(){
        let total=0;
        this.importaciones.forEach(imp=>{
            total= total + imp._precioUnit * imp._numProd;
        })
        return `El total de las importaciones es: $${total}`;
    }
    
}

function crearEmpresa (){

    let id = document.getElementById("idEmpresa").value;
    let nombre = document.getElementById("nomEmpresa").value ;
    let rut  = document.getElementById("rutEmpresa").value ;

    const empresa = new Empresa(id, nombre,rut);
    empresas.push(empresa);
    console.log(empresas);
}

class Importacion {
    constructor(idImportacion, producto, numProd, precioUnit) {
        this.idImportacion = idImportacion;
        this.producto = producto;
        this.numProd = numProd;
        this.precioUnit = precioUnit;
    }
    get idImportacion() {
        return this._idImportacion;
    }
    set idImportacion(idImp) {
        this._idImportacion = idImp;
    }
    get producto() {
        return this._producto;
    }
    set producto(producto) {
        this._producto = producto;
    }
    get numProd() {
        return this._numProd;
    }
    set numProd(numProd) {
        this._numProd = numProd;
    }
    get precioUnit() {
        return this._precioUnit;
    }
    set precioUnit(precioUnit) {
        this._precioUnit = precioUnit;
    }
}

// let empresa1 = new Empresa(1, 'Empresa 1', '12345678-9');
// console.log(empresa1);
// const importacion1 = new Importacion(1, 'Producto 1', 1, 100);
// const importacion2 = new Importacion(2, 'Producto 2', 2, 200);
// const importacion3 = new Importacion(3, 'Producto 3', 3, 300);
// empresa1.addImport(importacion1);
// empresa1.addImport(importacion2);
// empresa1.addImport(importacion3);
// console.log(empresa1.sumaImportaciones());
// console.log(empresa1);
// console.log(empresa1.calculaTotalImportaciones());
