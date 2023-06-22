import {Empresa} from "./empresa.js";
export class Tipo_Empresa extends Empresa {
    constructor(idRegistro, nombre, rut, importaciones, rubro, empSize) {
      super(idRegistro, nombre, rut, importaciones);
      this.rubro = rubro;
      this.empSize = empSize;
    }
  
    get rubro() {
      return this._rubro;
    }
    set rubro(rubro) {
      this._rubro = rubro;
    }
  
    get empSize() {
      return this._empSize;
    }
  
    set empSize(empSize) {
      this._empSize = empSize;
    }
  }
  
  
  