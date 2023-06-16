const empresas = [];

const tabla = document.getElementById("tablaEmpresa");
const tabla2 = document.getElementById("tablaImportaciones");

const listaEmpresa = document.getElementById("nombreEmpresa");
const listaEmpresa2 = document.getElementById("nombreEmpresa2");

function crearEmpresa() {
  let id = document.getElementById("idEmpresa").value;
  let nombre = document.getElementById("nomEmpresa").value;
  let rut = document.getElementById("rutEmpresa").value;

  const empresa = new Empresa(id, nombre, rut);
  empresas.push(empresa);
  console.log(empresas);

  //rowEmpresa
  const newRow = tabla.insertRow();
  const newCell1 = newRow.insertCell();
  const newCell2 = newRow.insertCell();
  const newCell3 = newRow.insertCell();

  //LIsta desplegable con nombre de empresas

  const option = document.createElement("option");
  option.value = empresa._nombre;
  option.text = empresa._nombre;
  listaEmpresa.add(option);

  // establecer el contenido de las celdas
  newCell1.innerHTML = id;
  newCell2.innerHTML = nombre;
  newCell3.innerHTML = rut;
  document.getElementById("formularioEmpresa").reset();
}

function crearImportacion() {
  let nombreEmpresa = document.getElementById("nombreEmpresa").value;
  let producto = document.getElementById("producto").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  let id = Math.floor(Math.random() * 1000 + 1);

  const importacion = new Importacion(id, producto, cantidad, precio);

  for (empresa of empresas) {
    if (nombreEmpresa == empresa.nombre) {
      empresa.addImport(importacion);
    }
  }

  console.log(empresas);

  // const importacion = new Importacion(nombreEmpresa,producto,cantidad,precio);
  // const empresa = empresa.addImport(importacion);
  // empresas[0].addImport(importacion);

  //rowImportacion
  const newRow = tabla2.insertRow();
  const newCell1 = newRow.insertCell();
  const newCell2 = newRow.insertCell();
  const newCell3 = newRow.insertCell();
  const newCell4 = newRow.insertCell();

  // establecer el contenido de las celdas
  newCell1.innerHTML = nombreEmpresa;
  newCell2.innerHTML = producto;
  newCell3.innerHTML = cantidad;
  newCell4.innerHTML = precio;
  // console.log(nombreEmpresa, producto,cantidad,precio)
  document.getElementById("formularioImportacion").reset();
}

function totales() {
  const input = document.getElementById("empresaInput").value;
  const mostrar = document.querySelector("#result");
  mostrar.innerHTML = "";

  const found = empresas.find(
    (empresa) => empresa._nombre.toLowerCase() == input.toLowerCase()
  );

  for (let imp of found._importaciones) {
    mostrar.innerHTML += `<li> Id: ${imp._idImportacion}    Producto: ${imp._producto}  Cantidad: ${imp._numProd}   Precio: ${imp._precioUnit} </li>`;
  }
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

class Empresa {
  constructor(idRegistro, nombre, rut, importaciones) {
    this.idRegistro = idRegistro;
    this.nombre = nombre;
    this.rut = rut;
    this.importaciones = [];
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

  addImport(importacion) {
    this.importaciones.push(importacion);
  }

  sumaImportaciones() {
    return ` La cantidad de importaciones es: ${this.importaciones.length}`;
  }

  calculaTotalImportaciones() {
    let total = 0;
    this.importaciones.forEach((imp) => {
      total = total + imp._precioUnit * imp._numProd;
    });
    return `El total de las importaciones es: $${total}`;
  }
}

