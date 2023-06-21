export class Importacion {
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
  
  