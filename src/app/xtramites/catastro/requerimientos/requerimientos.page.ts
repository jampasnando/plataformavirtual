import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.page.html',
  styleUrls: ['./requerimientos.page.scss'],
})
export class RequerimientosPage implements OnInit {
  req:any[];
  argumento=null;
  texto='';
  paginaflujo='/xflujograma';
  constructor(private activatedRoute:ActivatedRoute) { 
		this.req=[
      {"datos":[{"requisito_id":"324","opcion_id":"28","requisito":"Memorial dirigido al Honorable Alcalde Municipal (original y fotocopia simple)","costo":"","verificacion":""},{"requisito_id":"325","opcion_id":"29","requisito":"T\u00edtulo de propiedad (en caso de estar matriculado, acompa\u00f1ar Folio Real)(fotocopia legalizada)","costo":"","verificacion":""},{"requisito_id":"326","opcion_id":"29","requisito":"Plano de lote o urbanizaci\u00f3n aprobado de las unidades catastrales (fotocopia legalizada)","costo":"","verificacion":""},{"requisito_id":"327","opcion_id":"29","requisito":"Registro Catastral a nombre del anterior proietario (si corresponde)(fotocopia simple)","costo":"","verificacion":""},{"requisito_id":"328","opcion_id":"29","requisito":"Impuesto de las 5 \u00faltimas gestiones (fotocopia simple de los impuestos anuales o Certificado de Estado Impositivo)","costo":"","verificacion":""},{"requisito_id":"329","opcion_id":"29","requisito":"Carnet de Identidad del propietario (fotocopia simple)","costo":"","verificacion":""},{"requisito_id":"330","opcion_id":"29","requisito":"Resoluci\u00f3n Ejecutiva de Propiedad Horizontal (fotocopia simple)(si corresponde)","costo":"","verificacion":""},{"requisito_id":"331","opcion_id":"29","requisito":"Poder suficiente conferido por el o los propietarios del inmueble (original o fotocopia legalizada)(si corresponde)","costo":"","verificacion":""},{"requisito_id":"332","opcion_id":"29","requisito":"Folder","costo":"","verificacion":""},{"requisito_id":"333","opcion_id":"29","requisito":"Car\u00e1tula Municipal","costo":"10 Bs","verificacion":""},{"requisito_id":"334","opcion_id":"29","requisito":"Solvencia Tributaria","costo":"10 Bs","verificacion":""},{"requisito_id":"335","opcion_id":"29","requisito":"Timbre Municipal","costo":"2 Bs","verificacion":""},{"requisito_id":"336","opcion_id":"29","requisito":"Formulario(s) d Registro Catastral","costo":"10 Bs","verificacion":""},{"requisito_id":"337","opcion_id":"29","requisito":"Dentro los 6 meses de registro del T\u00edtulo de Propiedad en Derechos Reales","costo":"0.20\/m2","verificacion":""},{"requisito_id":"338","opcion_id":"29","requisito":"Posterior a 6 meses de registro del T\u00edtulo de Propiedad en Derechos Reales","costo":"0.40\/m2","verificacion":""},{"requisito_id":"339","opcion_id":"29","requisito":"Timbre(s) Municipal(es) para cada formulario de Registro Catastral","costo":"10 Bs","verificacion":""},{"requisito_id":"340","opcion_id":"29","requisito":"Reposici\u00f3n comprobante","costo":"5 Bs","verificacion":""}],"tipo":"Success"},
      {"datos":[{"requisito_id":"341","opcion_id":"29","requisito":"Memorial dirigido al H. Alcalde Municipal solicitando inscripci\u00f3n catastral de adecuaci\u00f3n a Propiedad Horizontal.","costo":"","verificacion":""},{"requisito_id":"342","opcion_id":"30","requisito":"Titulo de Adecuaci\u00f3n de propiedad horizontal con sus respectivos folios reales (copia legalizada)","costo":"","verificacion":""},{"requisito_id":"343","opcion_id":"30","requisito":"Titulo de propiedad con su respectivo folio real (copia legalizada)","costo":"","verificacion":""},{"requisito_id":"344","opcion_id":"30","requisito":"Resoluci\u00f3n Ejecutiva de aprobaci\u00f3n de adecuaci\u00f3n de propiedad horizontal (Copia legalizada por ventanilla \u00fanica)","costo":"","verificacion":""},{"requisito_id":"345","opcion_id":"30","requisito":"Resoluciones t\u00e9cnicas administrativas para casos que fueron ejecutados en periodos de admistias.","costo":"","verificacion":""},{"requisito_id":"346","opcion_id":"30","requisito":"Plano de adecuaci\u00f3n a Propiedad Horizontal (Copia Legalizada)","costo":"","verificacion":""},{"requisito_id":"347","opcion_id":"30","requisito":"Plano de lote o urbanizaci\u00f3n (Copia Legalizada).","costo":"","verificacion":""},{"requisito_id":"348","opcion_id":"30","requisito":"Impuestos pagados 5 \u00faltimas gestiones o certificado de estado impositivo (copia simple).","costo":"","verificacion":""},{"requisito_id":"349","opcion_id":"30","requisito":"C.I. Propietario (s) (copia simple)","costo":"","verificacion":""},{"requisito_id":"350","opcion_id":"30","requisito":"Ultima Inscripci\u00f3n catastral de lote (copia simple)","costo":"","verificacion":""},{"requisito_id":"351","opcion_id":"30","requisito":"Folder","costo":"","verificacion":""},{"requisito_id":"352","opcion_id":"30","requisito":"Solvencia Tributaria","costo":"10 Bs","verificacion":""},{"requisito_id":"353","opcion_id":"30","requisito":"Caratula Municipal","costo":"10 Bs","verificacion":""},{"requisito_id":"354","opcion_id":"30","requisito":"Formulario \u00danico de Recaudaci\u00f3n antes de los seis meses de registrado en Derechos Reales","costo":"0.20 \/ m2","verificacion":""},{"requisito_id":"355","opcion_id":"30","requisito":"Formulario \u00danico de Recaudaci\u00f3n despu\u00e9s de los seis meses de registrado en Derechos Reales.","costo":"0.40 \/ m2","verificacion":""},{"requisito_id":"356","opcion_id":"30","requisito":"Timbre Municipal Bs 2","costo":"2 Bs.","verificacion":""},{"requisito_id":"357","opcion_id":"30","requisito":"Reposici\u00f3n de boleta\/comprobante","costo":"5 Bs.","verificacion":""},{"requisito_id":"358","opcion_id":"30","requisito":"Timbre Municipal Bs 10 (cantidad en funci\u00f3n a la cantidad de formularios de Registro Catastral","costo":"10\/unidad","verificacion":""},{"requisito_id":"359","opcion_id":"30","requisito":"Formulario de Registro Catastral (cantidad en funci\u00f3n al n\u00famero de niveles del PH)","costo":"10\/unidad","verificacion":""}],"tipo":"Success"},
      {"datos":[{"requisito_id":"341","opcion_id":"30","requisito":"Memorial dirigido al H. Alcalde Municipal solicitando inscripci\u00f3n catastral de adecuaci\u00f3n a Propiedad Horizontal.","costo":"","verificacion":""},{"requisito_id":"342","opcion_id":"30","requisito":"Titulo de Adecuaci\u00f3n de propiedad horizontal con sus respectivos folios reales (copia legalizada)","costo":"","verificacion":""},{"requisito_id":"343","opcion_id":"30","requisito":"Titulo de propiedad con su respectivo folio real (copia legalizada)","costo":"","verificacion":""},{"requisito_id":"344","opcion_id":"30","requisito":"Resoluci\u00f3n Ejecutiva de aprobaci\u00f3n de adecuaci\u00f3n de propiedad horizontal (Copia legalizada por ventanilla \u00fanica)","costo":"","verificacion":""},{"requisito_id":"345","opcion_id":"30","requisito":"Resoluciones t\u00e9cnicas administrativas para casos que fueron ejecutados en periodos de admistias.","costo":"","verificacion":""},{"requisito_id":"346","opcion_id":"30","requisito":"Plano de adecuaci\u00f3n a Propiedad Horizontal (Copia Legalizada)","costo":"","verificacion":""},{"requisito_id":"347","opcion_id":"30","requisito":"Plano de lote o urbanizaci\u00f3n (Copia Legalizada).","costo":"","verificacion":""},{"requisito_id":"348","opcion_id":"30","requisito":"Impuestos pagados 5 \u00faltimas gestiones o certificado de estado impositivo (copia simple).","costo":"","verificacion":""},{"requisito_id":"349","opcion_id":"30","requisito":"C.I. Propietario (s) (copia simple)","costo":"","verificacion":""},{"requisito_id":"350","opcion_id":"30","requisito":"Ultima Inscripci\u00f3n catastral de lote (copia simple)","costo":"","verificacion":""},{"requisito_id":"351","opcion_id":"30","requisito":"Folder","costo":"","verificacion":""},{"requisito_id":"352","opcion_id":"30","requisito":"Solvencia Tributaria","costo":"10 Bs","verificacion":""},{"requisito_id":"353","opcion_id":"30","requisito":"Caratula Municipal","costo":"10 Bs","verificacion":""},{"requisito_id":"354","opcion_id":"30","requisito":"Formulario \u00danico de Recaudaci\u00f3n antes de los seis meses de registrado en Derechos Reales","costo":"0.20 \/ m2","verificacion":""},{"requisito_id":"355","opcion_id":"30","requisito":"Formulario \u00danico de Recaudaci\u00f3n despu\u00e9s de los seis meses de registrado en Derechos Reales.","costo":"0.40 \/ m2","verificacion":""},{"requisito_id":"356","opcion_id":"30","requisito":"Timbre Municipal Bs 2","costo":"2 Bs.","verificacion":""},{"requisito_id":"357","opcion_id":"30","requisito":"Reposici\u00f3n de boleta\/comprobante","costo":"5 Bs.","verificacion":""},{"requisito_id":"358","opcion_id":"30","requisito":"Timbre Municipal Bs 10 (cantidad en funci\u00f3n a la cantidad de formularios de Registro Catastral","costo":"10\/unidad","verificacion":""},{"requisito_id":"359","opcion_id":"30","requisito":"Formulario de Registro Catastral (cantidad en funci\u00f3n al n\u00famero de niveles del PH)","costo":"10\/unidad","verificacion":""}],"tipo":"Success"},
      {"datos":[{"requisito_id":"367","opcion_id":"31","requisito":"Orden Judicial o Memorial solicitando Certificaciones para Usucapion","costo":"","verificacion":""},{"requisito_id":"368","opcion_id":"32","requisito":"Informe Topogr\u00e1fico Usucapion elaborado en la Comuna","costo":"","verificacion":""},{"requisito_id":"369","opcion_id":"32","requisito":"Plano elaborado por el topogr\u00e1fo de la Comuna","costo":"","verificacion":""},{"requisito_id":"370","opcion_id":"32","requisito":"Informe de remisi\u00f3n tr\u00e1mite de Usucapi\u00f3n elaborado en la Comuna","costo":"","verificacion":""},{"requisito_id":"371","opcion_id":"32","requisito":"C.I. Propietario (copia simple)","costo":"","verificacion":""},{"requisito_id":"372","opcion_id":"32","requisito":"Folder","costo":"","verificacion":""},{"requisito_id":"373","opcion_id":"32","requisito":"Formulario \u00fanico de Recaudaci\u00f3n - pago de Certificaci\u00f3n del Registro Catastral","costo":"45 Bs.","verificacion":""},{"requisito_id":"374","opcion_id":"32","requisito":"Timbre Municipal Bs 5","costo":"5 Bs.","verificacion":""}],"tipo":"Success"},
      {"datos":[{"requisito_id":"375","opcion_id":"32","requisito":"Solicitud de Certificaci\u00f3n T\u00e9cnica de conformidad a la Ley 247 y el Decreto Supremo N\u00b0 2841, dirigida al Alcalde del GAMC.","costo":"","verificacion":""},{"requisito_id":"376","opcion_id":"33","requisito":"Fotocopia legalizada del T\u00edtulo de propiedad o del folio real (Sub Alcald\u00eda correspondiente ).","costo":"","verificacion":""},{"requisito_id":"377","opcion_id":"33","requisito":"Fotocopia del Plano de lote aprobado.","costo":"","verificacion":""},{"requisito_id":"378","opcion_id":"33","requisito":"Fotocopia de C\u00e9dula de Identidad del propietario (s), en copia simple. ","costo":"","verificacion":""},{"requisito_id":"379","opcion_id":"33","requisito":"Car\u00e1tula Municipal","costo":"10 Bs.","verificacion":""},{"requisito_id":"380","opcion_id":"33","requisito":"Folder Municipal","costo":"5 Bs.","verificacion":""},{"requisito_id":"381","opcion_id":"33","requisito":"Timbre Municipal","costo":"5 Bs.","verificacion":""},{"requisito_id":"382","opcion_id":"33","requisito":"Formulario \u00danico de Recaudaci\u00f3n - pago de Certificaci\u00f3n del Datos Tecnicos ley 247","costo":"45 Bs.","verificacion":""}],"tipo":"Success"},
      {"datos":[{"requisito_id":"383","opcion_id":"33","requisito":"T\u00edtulo de propiedad, minuta, documento privado o partida literal que acredite el derecho propietario (original o fotocopia simple)","costo":"","verificacion":""},{"requisito_id":"384","opcion_id":"34","requisito":"Impuestos (\u00faltima gesti\u00f3n o Certificado de Estado Impositivo)","costo":"","verificacion":""},{"requisito_id":"385","opcion_id":"34","requisito":"C.I. Propietario (s) (copia simple)","costo":"","verificacion":""},{"requisito_id":"386","opcion_id":"34","requisito":"Timbres municipales de Bs 10 (uno por cada plano individual)","costo":"10 Bs.","verificacion":""},{"requisito_id":"387","opcion_id":"34","requisito":"Timbres municipales de Bs 10 (cinco por cada l\u00e1mina entera de PH)","costo":"10 Bs.","verificacion":""},{"requisito_id":"388","opcion_id":"34","requisito":"Costo de las fotocopias del plano o docunento","costo":"","verificacion":""}],"tipo":"Success"}
    ];
  }

  ngOnInit() {
    this.argumento=+this.activatedRoute.snapshot.paramMap.get('id')-1;
    this.texto=this.activatedRoute.snapshot.paramMap.get('texto');
    console.log("Recibido: ",this.argumento);
    console.log(this.req[this.argumento].datos.length);
  }

}