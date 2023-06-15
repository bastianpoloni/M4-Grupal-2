export class Empresa {

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
