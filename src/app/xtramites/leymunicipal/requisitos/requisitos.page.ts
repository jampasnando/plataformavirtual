import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.page.html',
  styleUrls: ['./requisitos.page.scss'],
})
export class RequisitosPage implements OnInit {
  req:any[];
  argumento=null;
  texto='';
  costo='';
  constructor(private activatedRoute:ActivatedRoute) { 
    this.req=[["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real registrado en la oficina de Derechos Reales (para propietarios)."+
    "<br>Fotocopia simple de la Minuta, documento privado de compra-venta, con o sin reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (para poseedores cuando corresponda)."+
    "<br>Documento de respaldo por pagos o anticipos por la adquisicion del inmueble (para poseedores)."+
    "<br>Factura de pago de luz, agua o certificación de la empresa proveedora que acredite la instalación  del servicio a nombre del poseedor solicitante (para poseedores).",
    "Publicacion en medio de prensa escrita de circulación nacional (para poseedores)",
    "Plano de regularización de lote en carimbo establecido en cuatro ejemplares impresos en el papel bond y un CD que contenga la información del plano en DWG y en PDF, cumpliendo la prevision del Articulo 21 de la Ley Municipal Nº 0204/2017.",
    "Original del Poder del apoderado (cuando corresponda).",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "4 fotografías en un CD: frente, fondo, lateral, perfil de vía.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www.cochabamba.bo), adjuntar archivo en formato DWG."],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia simple de la Minuta, documento privado de compra-venta, con o sin reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda)."+
    "<br>Documento de respaldo por pagos o anticipos por la adquisicion del inmueble (para poseedores)."+
    "<br>Factura de pago de luz, agua o certificación de la empresa proveedora que acredite la instalación  del servicio a nombre del poseedor solicitante (para poseedores).",
    "Publicación en medio de prensa escrita de circulación nacional (para poseedores)",
    "Plano de regularización de lote en carimbo establecido en cuatro ejemplares impresos en el papel bond y un CD que contenga la información del plano en DWG y en PDF, cumpliendo la prevision del Articulo 21 de la Ley Municipal Nº 0204/2017.",
    "Original del Poder del apoderado (cuando corresponda).",
    "Fotocopia simple cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "4 fotografías en un CD: frente, fondo, lateral, perfil de vía.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www.cochabamba.bo), adjuntar archivo en formato DWG.",
    "Plano de Lote aprobado (fotocopia legalizada)."],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia simple de la Minuta, documento privado de compra-venta, con o sin reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda)."+
    "<br>Documento de respaldo por pagos o anticipos por la adquisicion del inmueble (para poseedores)."+
    "<br>Factura de pago de luz, agua o certificación de la empresa proveedora que acredite la instalación  del servicio a nombre del poseedor solicitante (para poseedores).",
    "Publicacion en medio de prensa escrita de circulación nacional (para poseedores).",
    "Plano de regularización de lote en carimbo establecido en cuatro ejemplares impresos en el papel bond y un CD que contenga la información del plano en DWG y en PDF, cumpliendo la prevision del Articulo 21 de la Ley Municipal Nº 0204/2017.",
    "Original del Poder del apoderado (cuando corresponda).",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "4 fotografías en un CD: frente, fondo, lateral, perfil de vía.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www.cochabamba.bo), adjuntar archivo en formato DWG.",
    "Fotocopia legalizada de los Plano individuales de lote(s) aprobado a anexar."],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia simple de la Minuta, documento privado de compra-venta, con o sin reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda)."+
    "<br>Documento de respaldo por pagos o anticipos por la adquisicion del inmueble (para poseedores)."+
    "<br>Factura de pago de luz, agua o certificación de la empresa proveedora que acredite la instalación  del servicio a nombre del poseedor solicitante (para poseedores).",
    "Publicacion en medio de prensa escrita de circulación nacional (para poseedores).",
    "Plano de regularización de lote en carimbo establecido en cuatro ejemplares impresos en el papel bond y un CD que contenga la información del plano en DWG y en PDF, cumpliendo la prevision del Articulo 21 de la Ley Municipal Nº 0204/2017.",
    "Original del Testimonio de poder del apoderado (cuando corresponda).",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "4 fotografías en un CD: frente, fondo, lateral, perfil de vía.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www.cochabamba.bo), adjuntar archivo en formato DWG.",
    "Plano de Lote aprobado (fotocopia legalizada)."],
  ["Efectuar el Pago individual por ingreso de tramite correspondiente al lote a regularizar grupalmente.",
    "Presentar Planimetria, Georeferenciada a detalle de fraccionamiento, enlazado a puntos de la red Geodésica Municipal (UTM WGS - 84) en formato digital e impreso en 3 ejemplares, a escala convencional, levantado con instrumentos de Precision (Estacion Total) con la identificacion del perímetro y conformación de las manzanas según definición de plano sectorial y el detalle de los lotes, areas verdes y equipamientos con la relación de superficies, detalle de la ubicación, Distrito, Sub distrito, Zona, Perfil de las calles, Codificación de manzanas y predios."+
    "<br>El Plano de la Planimetria, deberá estar elaborado por profesional topógrafo y refrendado por profesional arquitecto",
    "Cumplir con el reistro de los espacios publicos a favor del Gobierno Autónomo Municipal de Cochabamba conforme a la Ley Municipal Nº 207/17 reglamentado por el Decreto Municipal 088/2017.",
    "En caso de no contar con el antecedente dominal, los trámites ingresados en la regularización grupal, serán tratados bajo las condiciones y requerimientos establecidos en los trámites de regularización individual."],
  ["Efectuar el pago por ingreso de trámite por cada título de propiedad.",
    "Título de propiedad o folio real actualizado registrado en la oficina de Derechos Reales.",
    "Contar con un grado de consolidación de mas de del 50% respecto al total de los lotes que lo conforman, identificados en el plano de división y detallado en la declaración jurada establecido en el presente Decreto Municipal.",
    "El titular del derecho propietario de la regularización de división de lotes consolidados deberá suscribir en favor del municipio las superficies de los espacios públicos, para su consolidación legal en coordinación con la Dirección de Bienes Inmuebles Municipales.",
    "Presentar Plano Georeferenciado a detalle de Division de los Lotes Consolidados, enlazado a puntos de la red Geodésica Municipal (UTM WGS - 84) en formato digital e impreso en 3 ejemplares, a escala convencional, levantado con instrumentos de Precision (Estacion Total) con la identificacion del perímetro y conformación de las manzanas segun definicion de plano sectorial y el detalle de los lotes, la relación de superficies del total util urbanizable, asi como la superficie deficitaria en espacios publicos, detalle de la ubicación, Distrito, Sub distrito, Zona, Perfil de las calles, Codificación de manzanas y predios"+
    "<br>El Plano de la Planimetria, deberá estar elaborado por profesional topógrafo y refrendado por profesional arquitecto",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www.cochabamba.bo) adjuntar archivo en formato DWG."],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real actualizado registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia  simple de la Minuta y/o documento privado de compra-venta, con reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda).",
    "Original del Poder del apoderado.",
    "Fotocopia legalizada del Plano de lote aprobado.",
    "Planos arquitectónicos as-built de la edificación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético en formato DWG y en PDF, cumpliendo la previsión del Artículo 21 de la Ley Municipal Nº 0204/2017"+
    "<br>Los planos arquitectónicos deben estar en formato establecido en el Reglamento.",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "6  fotografías en un CD: frente, laterales, posterior, perfil de vía, instalaciones si existiesen.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www. cochabamba.bo), en formato DWG.",
    "Certificado de Estabilidad Estructural o Planos estructurales  (cuando corresponda, si cuenta con sotano o semisotano).",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo 1 Planta: 6,60 Bs/m2"+
    "<br>Costo de 2 - 3 Plantas: 10,00 Bs/m2"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real actualizado registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia simple de la Minuta y/o documento privado de compra-venta, con reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda).",
    "Original del Poder del apoderado.",
    "Fotocopia legalizada del Plano de lote aprobado.",
    "Planos arquitectónicos as-built de la edificación, en cinco ejemplares originales en papel bond y en medio magnético formato DWG y en PDF, cumpliendo la previsión del Artículo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar en formato establecido en el Reglamento.",
    "Fotocopia simple Cédula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "6 fotografías en un CD: frente, laterales, posterior, perfil de vía, instalaciones si existiesen.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www. cochabamba.bo), en formato DWG.",
    "Certificado de Estabilidad Estructural o Planos estructurales  (cuando corresponda, si cuenta con sotano o semisotano).",
    "Fotocopia legalizada del plano de construcción aprobado.",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo de 1 Planta: 6,60 Bs/m2"+
    "<br>Costo de 2 - 3 Plantas: 10,00 Bs/m2"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"+
    "<p>Remodelación: 0,50 Bs/m2</p>"],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real actualizado registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia  simple de la Minuta y/o documento privado de compra-venta, con reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda).",
    "Original del Poder del apoderado.",
    "Fotocopia legalizada del Plano de lote aprobado.",
    "Planos arquitectónicos as-built de la edificación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético en formato DWG y en PDF, , cumoliendo la previsión del Artículo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar en formato establecido en el Reglamento.",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "6 fotografías en un CD: frente, laterales, posterior, perfil de vía, instalaciones si existiesen.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www. cochabamba.bo), en formato DWG.",
    "Certificado de Estabilidad Estructural o Planos Estructurales.",
    "Certificado de Instalaciones Sanitarias o Plano de Instalación Sanitaria.",
    "Certificado de instalaciones eléctricas o lano de Instalación Eléctrica.",
    "Nota"+
    "<p>Los profesionales que emitan las certificaciones o los planos deben estar Registrdos en el colegio o sociedad profesional respectiva"+
    "<br>Cuando la Edificación no requiera la emisión de alguna de las Certificaciones, este hecho deberá consignarse en la Declaración Jurada</p>",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"],
  ["Original de la Declaración Jurada notariada + Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple del Título de propiedad o folio real actualizado registrado en la oficina de Derechos Reales, (para propietarios)."+
    "<br>Fotocopia  simple de la Minuta y/o documento privado de compra-venta, con reconocimiento de firmas o reconocido por autoridad competente, (para poseedores)."+
    "<br>Fotocopia simple del Testimonio de Declaratoria de herederos de acuerdo a normativa vigente (para herederos)."+
    "<br>Fotocopia simple del Testimonio de Sentencia Ejecutoriada que declare Derecho Propietario (cuando corresponda).",
    "Original del Poder del apoderado.",
    "Fotocopia legalizada del Plano de lote aprobado.",
    "Planos arquitectónicos as-built de la edificación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético en formato DWG  y en PDF, cumoliendo la previsión del Artículo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar en formato establecido en el Reglamento.",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "6 fotografías en un CD: frente, laterales, posterior, perfil de vía, instalaciones si existiesen.",
    "Original del Formulario de Avaluó - Actualización de datos técnicos, página web (www. cochabamba.bo), en formato DWG.",
    "Fotocopia legalizada del plano de construcción aprobado.",
    "Certificado de Estabilidad Estructural o Planos Estructurales.",
    "Certificado de Instalaciones Sanitarias o Plano de Instalación Sanitaria.",
    "Certificado de instalaciones eléctricas o lano de Instalación Eléctrica.",
    "Nota"+
    "<p>Los profesionales que emitan las certificaciones o los planos deben estar Registrdos en el colegio o sociedad profesional respectiva"+
    "<br>Cuando la Edificación no requiera la emisión de alguna de las Certificaciones, este hecho deberá consignarse en la Declaración Jurada</p>",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"+
    "<p>Remodelación: 0,50 Bs/m2</p>"],
  ["Original de la declaración jurada notariada realizada por el Propietario del Edificio de la unidad privada y/o Apoderado debidamente autorizado mas Original Formulario Técnico de Declaración Jurada.",
    "Título de propiedad debidamente registrado en Derechos Reales y Folio Real Actualizado de la unidad privada a regularizar."+
    "<br>Fotocopia simple de título de adecuación de propiedad horizontal, registrado en D.D.R.R. (si correspondde)."+
    "<br>Fotocopia simple de declaratoria de herederos de acuerdo a normativa vigente (cuando corresponda)."+
    "<br>Fotocopia legalizada de la Resolución Municipal de aprobación deplano de división en propiedad horizontal con anterioridad al 06 de Octubre del 2017",
    "Testimonio original notariado del Acta de Asamblea de co-propietarios o declaración jurada notariada con aceptación expresa (100% de los co-propietarios). (Si corresponde).",
    "Fotocopia simple del Reglamento de Copropiedad (Si corresponde).",
    "Fotocopia simple Cedula de Identidad del o los propietarios, poseedor y/o apoderado.",
    "Original del poder del apoderado.",
    "Fotocopia Legalizada del plano de propiedad horizontal aprobado.",
    "Plano arquitectónico as-built de la edificación mostrando la ampliación y/o remodelación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético formato DWG y en PDF, cumpliendo la previsión del Artículo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar formato establecido en el reglamento.",
    "Original Certificado de Estabilidad Estructural o Planos estructurales (si corresponde).",
    "Original Certificado de Instalación Sanitaria o Plano de Instalaciones Sanitarias (si corresponde).",
    "Original Certificado de Instalacion Electrica o Plano de Instalaciones Eléctricas (si corresponde).",
    "Fotografias 6 en un CD frente, laterales, posterior e interiores, instalaciones si existiese.",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo de 1 Planta: 6,60 Bs/m2"+
    "<br>Costo de 2 - 3 Plantas: 10,00 Bs/m2"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"+
    "<p>Remodelación: 0,50 Bs/m2</p>"],
  ["Original de la declaración jurada notariada realizada por el Propietario del Edificio de la unidad privada y/o Apoderado debidamente autorizado mas Original Formulario Técnico de Declaración Jurada.",
    "Poder Especifico para la Regularización Técnica de la Edificación.",
    "Fotocopia de título de adecuación de propiedad horizontal, registrado en D.D.R.R."+
    "<br>Fotocopia legalizada de la Resolución Municipal de aprobación del plano de división en propiedad horizontal con anterioridad al 06 de Octubre del 2017.",
    "Testimonio original notariado del Acta de Asamblea de co-propietarios o declaración jurada notariada con aceptación expresa (100% de los co-propietarios).",
    "Fotocopia de cedula de identidad Apoderado.",
    "Fotocopia legalizada del plano de división en propiedad horizontal aprobado.",
    "Plano arquitectónico as-built de la edificación mostrando la ampliación y/o remodelación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético formato DWG y en PDF, cumpliendo la previsión del Articulo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar formato establecido en el reglamento.",
    "Original Certificado de Estabilidad Estructural o Planos estructurales (si corresponde).",
    "Original Certificado de Instalación Sanitaria o Plano de Instalaciones Sanitarias (si corresponde).",
    "Original Certificado de Instalacion Electrica o Plano de Instalaciones Eléctricas (si corresponde).",
    "6 fotografías en un CD frente, laterales, posterior, instalaciones si existieses.",
    "<p><b>SUPERFICIE CONSTRUIDA</b>"+
    "<br>Uso Residencial 1 a más plantas: 1,00 Bs/m2"+
    "<br>Uso No Residencial 1 a más Plantas: 2,00 Bs/m2"+
    "<p><b>SUPERFICIE CONSTRUIDA IRREGULAR</b>"+
    "<br>Costo de 1 Planta: 6,60 Bs/m2"+
    "<br>Costo de 2 - 3 Plantas: 10,00 Bs/m2"+
    "<br>Costo de 4 a mas Plantas (invación faja jardín, sótano, semisótanos): 114,00 Bs/m2</p>"+
    "<p>Remodelación: 0,50 Bs/m2</p>"],
  ["Original de la declaración jurada notariada realizada por el Propietario y/o Apoderado maas Original Formulario Técnico de Declaración Jurada.",
    "Fotocopia simple de tí9tulo de adecuación de propiedad horizontal."+
    "<br>Fotocopia simple de declaratoria de herederos de acuerdo a normativa vigente (Cuando corresponda)."+
    "<br>Fotocopia legalizada de la Resolución Municipal de aprobación plano de división en propiedad horizontal con anterioridad al 06 de Octubre del 2017.",
    "Fotocopia Cedula de Identidad del/o los propietarios.",
    "Original del Poder del apoderado. (Cuando corresponda).",
    "Fotocopia legalizada del plano de división en propiedad horizontal aprobado.",
    "Plano arquitectónico as-built de la remodelación, firmado y sellado por el arquitecto con registro profesional, en cinco ejemplares originales en papel bond y en medio magnético formato DWG y en PDF, cumpliendo la previsión del Articulo 21 de la Ley Municipal Nº 0204/2017."+
    "<br>Los planos arquitectónicos deben estar formato establecido en el reglamento.",
    "3 fotografías de la remodelación.",
    "<p><b>Remodelación: 0,50 Bs/m2</b></p>"]
  ];
  }

  ngOnInit() {
    this.argumento=+this.activatedRoute.snapshot.paramMap.get('id')-1;
    this.texto=this.activatedRoute.snapshot.paramMap.get('texto');
    this.costo=this.activatedRoute.snapshot.paramMap.get('costo');
    console.log("Recibido: ",this.argumento);
    console.log(this.req[this.argumento][0]);
  }

}
