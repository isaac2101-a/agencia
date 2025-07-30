import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import logo from "./assets/logo.jpg";

import { localidades } from "./assets/localidades";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
const renderTooltip = (props) => (
  <Tooltip id="tooltip-datos-generales" {...props}>
    Selecciona “Incorporación” si es la primera vez que llenas este formato para un programa
    social de Hidalgo. Si ya lo contestaste antes, elige “Actualización de datos”.

  </Tooltip>
);

const renderTooltipContacto = (props) => (
  <Tooltip id="tooltip-contacto" {...props}>
    La información de esta sección debe corresponder a una persona distinta a tí, quien actuará
    como un contacto alternativo. Es decir, una persona a la que se pueda llamar en caso de no
    poder contactarte. Por ejemplo, un familiar, amigo cercano, vecino, etc.
  </Tooltip>
);


const renderTooltipRecados = (props) => (
  <Tooltip id="tooltip-recados" {...props}>
    Escribe el nombre y teléfono de una persona diferente a ti y a la registrada en las secciones “Datos Generales” y “Datos de Residencia del Contacto”, a la cual se pueda llamar en caso de no poder contactarte.
  </Tooltip>
);

const renderTooltipPrograma = (props) => (
  <Tooltip id="tooltip-programa" {...props}>
    La información de esta sección debe corresponder al lugar donde deseas instalar el
    sistema fotovoltaico. Si es diferente a la dirección de tu vivienda (donde vives la mayor parte
    del tiempo y que suele aparecer en tus documentos oficiales), asegúrate de escribir los
    datos del lugar donde irá el equipo. Por ejemplo, si vives en Pachuca de Soto pero deseas
    instalar el equipo en un inmueble que posees o rentas en Actopan, responde las preguntas
    con la información correspondiente a Actopan.
  </Tooltip>
);

const renderTooltipHabitantes = (props) => (
  <Tooltip id="tooltip-habitantes" {...props} >
    <p style={{ marginBottom: "8px" }}>
      Indica cuántas personas viven de forma constante en tu casa, incluyéndote, aunque sean menores de edad y/o no sean familiares.
      No cuentes a quienes solo viven ahí de forma ocasional.
    </p>
    <p style={{ marginBottom: 0 }}>
      Por ejemplo, si tú, tu esposa, tu hijo menor y un amigo viven en la casa, pero tu hijo mayor sólo los visita ocasionalmente, deberás escribir 4.
    </p>
  </Tooltip>
);


const renderTooltipMiembrosPrograma = (props) => (
  <Tooltip id="tooltip-miembros-programa" {...props} >
    <p style={{ marginBottom: "8px" }}>
      Indica cuántas personas en tu hogar reciben algún programa social, ya sea federal,
      estatal, municipal y/o de alguna organización no gubernamental.
    </p>
    <p style={{ marginBottom: 0 }}>
      Por ejemplo, si tú recibes un programa federal, tu esposa recibe un programa estatal y uno
      municipal, y tu hijo menor recibe un programa por parte de una organización social sin fines
      de lucro, deberás escribir 3.
    </p>
  </Tooltip>
);

const renderTooltipIngresoMensual = (props) => (
  <Tooltip id="tooltip-ingreso-mensual" {...props} >
    <p style={{ marginBottom: 0 }}>
      Llena la tabla con los datos de todas las personas que viven en tu casa (las mismas que
      mencionaste en la pregunta 2), sin importar edad o parentesco.
    </p>
  </Tooltip>
);


const renderTooltipParentesco = (props) => (
  <Tooltip id="tooltip-parentesco" {...props} style={{ maxWidth: "300px" }}>
    <p style={{ marginBottom: 0 }}>
      Escribe solo el parentesco de cada persona que vive en tu casa, no su nombre.
      Por ejemplo, pon “esposa” en lugar de “Carolina Prado”.
    </p>
  </Tooltip>
);


const renderTooltipFila1 = (props) => (
  <Tooltip id="tooltip-fila1" {...props} style={{ maxWidth: "300px" }}>
    Esta fila es para ti, como solicitante del programa, llena todas las columnas.
  </Tooltip>
);

const renderTooltipJefeFamilia = (props) => (
  <Tooltip id="tooltip-jefe-familia" {...props} style={{ maxWidth: "300px" }}>
    <p style={{ marginBottom: 0 }}>
      Selecciona “Sí” o “No” dependiendo de si algún habitante cumple con el rol de jefe de familia. 
      Esta persona es quien toma las decisiones importantes en el hogar, sin importar su edad, sexo o parentesco. 
      Puede ser quien aporta más económicamente, quien es mayor o simplemente quien lidera.
      A continuación, algunos ejemplos: si ambos padres trabajan pero el padre decide, él es el jefe; si la abuela toma las decisiones, aunque no trabaje, ella es la jefa; y si no hay padres y un tío o amigo lidera, uno de ellos será el jefe.
    </p>
  </Tooltip>
);



const renderTooltipGastoMensual = (props) => (
  <Tooltip id="tooltip-gasto-mensual" {...props} >
    <p style={{ marginBottom: 0 }}>
      Al hacer el cálculo, asegúrate de incluir al menos los siguientes rubros: renta, servicios de la vivienda, escuela, alimentación, y cualquier otro gasto que aplique.
      Por ejemplo, si en tu hogar se gasta mensualmente $2,000 en servicios (gas, agua, teléfono e internet), $3,000 en renta, $1,000 en escuela y $3,500 en alimentación, el total sería $9,500. Esa es la cantidad que debes escribir.
    </p>
  </Tooltip>
);


const renderTooltipActividadPrincipal = (props) => (
  <Tooltip id="tooltip-actividad-principal" {...props}>
    Escribe una breve descripción de la ocupación de cada persona. Por ejemplo, trabajador independiente, ama de casa, estudiante, jubilado, etc.
  </Tooltip>
);


const renderTooltipJefe = (props) => (
  <Tooltip id="tooltip-actividad-principal" {...props}>
   Selecciona “Sí” o “No” dependiendo de si algún habitante cumple con el rol de jefe de familia. Esta persona es quien toma las decisiones importantes en el hogar, sin importar su edad, sexo o parentesco. Puede ser quien aporta más económicamente, quien es mayor o simplemente quien lidera.

A continuación, algunos ejemplos: si ambos padres trabajan pero el padre decide, él es el jefe; si la abuela toma las decisiones, aunque no trabaje, ella es la jefa; y si no hay padres y un tío o amigo lidera, uno de ellos será el jefe
  </Tooltip>
);




const renderTooltipPar = (props) => (
  <Tooltip id="tooltip-actividad-principal" {...props}>
    Escribe sólo el parentesco de cada persona que vive en tu casa, no su nombre. Por ejemplo, pon “esposa” en lugar de “Carolina Prado”.
    </Tooltip>
);

const renderTooltipFilaNumero1 = (props) => (
  <Tooltip id="tooltip-fila-numero-1" {...props} >
    Esta fila es para ti, como solicitante del programa. Llena todas las columnas excepto la de “Anotar parentesco”, porque ahí ya aparece “(Solicitante)”.
  </Tooltip>
);





const renderTooltipActividadTrabajo = (props) => (
  <Tooltip id="tooltip-actividad-principal" {...props}>
    Anota cuánto dinero recibe cada persona de tu hogar al mes. Si la persona no tiene ingresos, escribe 0. Si el ingreso no es mensual, haz el cálculo para convertirlo a mensual. Por ejemplo, si el programa social de la asociación civil da $2,000 cada dos meses a tu hijo, deberás escribir $1,000 como ingreso mensual.
  </Tooltip>
);


const CuentaUsuario = () => {
  const [fubsTipo, setFubsTipo] = useState("");
  const [programaSolicitado, setProgramaSolicitado] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [colonia, setColonia] = useState("");
  const [calle, setCalle] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [curp, setCurp] = useState("");
  const [telefonoFijo, setTelefonoFijo] = useState("");
  const [telefonoCelular, setTelefonoCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [contactoRecado, setContactoRecado] = useState("");
  const [habitantesVivienda, setHabitantesVivienda] = useState("");
  const [miembrosProgramaSocial, setMiembrosProgramaSocial] = useState("");
  const [hablaLenguaIndigena, setHablaLenguaIndigena] = useState("");
  const [cualLenguaIndigena, setCualLenguaIndigena] = useState("");
  const [posesionVivienda, setPosesionVivienda] = useState("");
  const [servicioLuz, setServicioLuz] = useState("");
  const [servicioAgua, setServicioAgua] = useState("");
  const [servicioCisterna, setServicioCisterna] = useState("");
  const [servicioCelular, setServicioCelular] = useState("");
  const [servicioInternet, setServicioInternet] = useState("");
  const [servicioTv, setServicioTv] = useState("");
  const [tipoDrenaje, setTipoDrenaje] = useState("");
  const [gastoAlimentacion, setGastoAlimentacion] = useState("");
  const [porcentajeAlimentacion, setPorcentajeAlimentacion] = useState("");
  const [numDormitorios, setNumDormitorios] = useState("");
  const [personasPorDormitorio, setPersonasPorDormitorio] = useState("");
  const [materialParedes, setMaterialParedes] = useState("");
  const [materialTecho, setMaterialTecho] = useState("");
  const [materialPiso, setMaterialPiso] = useState("");
  const [diagnosticoSocial, setDiagnosticoSocial] = useState("");
  const [gastoMensualFamiliar, setGastoMensualFamiliar] = useState("");

    const municipiosHidalgo = [
  "Acatlán", "Acaxochitlán", "Actopan", "Agua Blanca de Iturbide", "Ajacuba",
  "Alfajayucan", "Almoloya", "Apan", "Atitalaquia", "Atlapexco",
  "Atotonilco el Grande", "Atotonilco de Tula", "Calnali", "Cardonal",
  "Cuautepec de Hinojosa", "Chapantongo", "Chapulhuacán", "Chilcuautla",
  "El Arenal", "Eloxochitlán", "Emiliano Zapata", "Epazoyucan",
  "Francisco I. Madero", "Huasca de Ocampo", "Huautla", "Huazalingo",
  "Huehuetla", "Huejutla de Reyes", "Huichapan", "Ixmiquilpan",
  "Jacala de Ledezma", "Jaltocán", "Juárez Hidalgo", "Metepec", "Metztitlán",
  "Mineral de la Reforma", "Mineral del Chico", "Mineral del Monte",
  "Mixquiahuala de Juárez", "Molango de Escamilla", "Nicolás Flores",
  "Nopala de Villagrán", "La Misión", "Lolotla", "Omitlán de Juárez",
  "San Felipe Orizatlán", "Pacula", "Pachuca de Soto", "Pisaflores",
  "Progreso de Obregón", "San Agustín Metzquititlán", "San Agustín Tlaxiaca",
  "San Bartolo Tutotepec", "San Salvador", "Santiago de Anaya",
  "Santiago Tulantepec de Lugo Guerrero", "Singuilucan", "Tasquillo",
  "Tecozautla", "Tenango de Doria", "Tepeapulco", "Tepehuacán de Guerrero",
  "Tepeji del Río de Ocampo", "Tepetitlán", "Tetepango",
  "Tezontepec de Aldama", "Tianguistengo", "Tizayuca", "Tlahuelilpan",
  "Tlahuiltepa", "Tlanalapa", "Tlanchinol", "Tlaxcoapan", "Tolcayuca",
  "Tula de Allende", "Tulancingo de Bravo", "Villa de Tezontepec",
  "Xochiatipan", "Xochicoatlán", "Yahualica", "Zacualtipán de Ángeles",
  "Zapotlán de Juárez", "Zempoala", "Zimapán"
];

const localidadesFiltradas = localidades.filter(
  (loc) => loc.mun.toUpperCase() === municipio.toUpperCase()
);



    const [ingresosHogar, setIngresosHogar] = useState([
{ parentesco: "Solicitante", edad: "", jefe: "Sí", actividad: "", trabajo: 0, programas: 0, otros: 0 },
      { parentesco: "", edad: "", jefe: "No", actividad: "", trabajo: 0, programas: 0, otros: 0 },
      { parentesco: "", edad: "", jefe: "No", actividad: "", trabajo: 0, programas: 0, otros: 0 },
      { parentesco: "", edad: "", jefe: "No", actividad: "", trabajo: 0, programas: 0, otros: 0 },
      { parentesco: "", edad: "", jefe: "No", actividad: "", trabajo: 0, programas: 0, otros: 0 },
      { parentesco: "", edad: "", jefe: "No", actividad: "", trabajo: 0, programas: 0, otros: 0 },
    ]);

    const actualizarIngreso = (index, campo, valor) => {
      const nuevos = [...ingresosHogar];
      nuevos[index][campo] = campo === "trabajo" || campo === "programas" || campo === "otros"
        ? parseFloat(valor) || 0
        : valor;
      setIngresosHogar(nuevos);
    };


const handleIngresoChange = (index, campo, valor) => {
  const copia = [...ingresosHogar];
  copia[index][campo] = parseFloat(valor) || 0;
  setIngresosHogar(copia);
};

const totalIngresos = ingresosHogar.reduce(
  (totales, fila) => ({
    trabajo: totales.trabajo + fila.trabajo,
    programas: totales.programas + fila.programas,
    otros: totales.otros + fila.otros,
  }),
  { trabajo: 0, programas: 0, otros: 0 }
);

 const totalGeneral = totalIngresos.trabajo + totalIngresos.programas + totalIngresos.otros;

  const handleChange = (e) => {
    setFubsTipo(e.target.value);
  };


      // ✅ Función para permitir solo letras y espacios
      const soloLetras = (valor) => {
        return valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
      };

      // ✅ Función para reutilizar lógica de onChange
      const manejarCambioTexto = (setter) => (e) => {
        setter(soloLetras(e.target.value));
      };

      const soloNumerosPositivos = (setter) => (e) => {
        const value = parseInt(e.target.value, 10);
        setter(isNaN(value) || value < 0 ? "" : value);
      };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fubsTipo  || !apellidoPaterno || !apellidoMaterno || !nombreCompleto) {
      alert("Faltan preguntas por contestar");
      return;
    }

    try {
     const response = await fetch("http://localhost/guardar_fubs.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tipo: fubsTipo,programa: programaSolicitado,apellido_paterno: apellidoPaterno,
  apellido_materno: apellidoMaterno,
  nombre: nombreCompleto, fecha_nacimiento: fechaNacimiento,
  edad: edad, 
  genero: genero,
  municipio: municipio,
  localidad: localidad,
  colonia: colonia,
  calle: calle,
  numero_casa: numeroCasa,
  codigo_postal: codigoPostal,
  curp: curp,
  telefono_fijo: telefonoFijo,
  telefono_celular: telefonoCelular,
  correo: correo,
  parentesco: parentesco,
  contacto_recado: contactoRecado ,
  habitantes_vivienda: habitantesVivienda,
  miembros_programa_social: miembrosProgramaSocial,
lengua_indigena: hablaLenguaIndigena,
cual_lengua: cualLenguaIndigena ,posesion_vivienda: posesionVivienda,luz: servicioLuz,
agua: servicioAgua,
cisterna: servicioCisterna,
celular: servicioCelular,
internet: servicioInternet,
television: servicioTv,
drenaje: tipoDrenaje,
gasto_alimentacion: gastoAlimentacion,
porcentaje_alimentacion: porcentajeAlimentacion,
num_dormitorios: numDormitorios,
personas_dormitorio: personasPorDormitorio,material_paredes: materialParedes,
material_techo: materialTecho,
material_piso: materialPiso,
diagnostico_social: diagnosticoSocial,
ingresos_trabajo: totalIngresos.trabajo,
ingresos_programas: totalIngresos.programas,
ingresos_otros: totalIngresos.otros,
///nuevoklllllll
ingresos_hogar: ingresosHogar,
ingresos_total_general: totalGeneral,
gasto_mensual_familiar: gastoMensualFamiliar



}),
      });

      const data = await response.json();
      alert(data.message);
      // 🔄 Limpia el formulario después de guardar
      setFubsTipo("");
      setProgramaSolicitado("");
      setApellidoPaterno("");
      setApellidoMaterno("");
      setNombreCompleto("");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar en base de datos");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header
        style={{ backgroundColor: "#b4935a", color: "white" }}
        className="py-3 border-bottom w-100"
      >
       
        <div className="d-flex justify-content-between align-items-center px-4">
  
          <div className="fw-bold fs-4">
            <img src={logo} alt="Logo AEEH" height="40" className="me-2" />
          </div>
          <nav>
            <a href="#" className="me-3 text-dark fw-medium">
              Inicio
            </a>
            <a href="#" className="me-3 text-dark fw-medium">
              Programa
            </a>
            <a href="#" className="me-3 text-dark fw-medium">
              Equipo
            </a>
            <a href="#" className="me-3 text-dark fw-medium">
              Panel
            </a>
            <a href="#" className="me-3 text-danger fw-bold">
              Cuenta
            </a>
            <a href="#" className="me-3 text-dark fw-medium">
              Contacto
            </a>
            <a href="#" className="text-dark fw-medium">
              Salir
            </a>
          </nav>
        </div>
      </header>

      <main className="my-5 px-4  container-fluid">

        <h5 className="text-danger">Mi cuenta</h5>
        <p className="text-center">
          <strong>Mensajes:</strong> Tu documentación ha sido revisada y hemos
          detectado que tiene errores...
        </p>
        <p className="text-center">
          Por favor, revisa y actualiza tu documentación y después haz clic en
          el botón "Finalizar"
        </p>

        <div className="accordion mt-4" id="cuentaAccordion">
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${i !== 1 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#cuenta${i}`}
                >
                  {i} -
                  {[
                    "Datos de la cuenta",
                    "Datos personales",
                    "Encuesta socioeconómica",
                    "Formato Único de Persona Solicitante",
                    "Documentación",
                  ][i - 1]}
                </button>
              </h2>
            
              <div
               id={`cuenta${i}`}
                className={`accordion-collapse collapse ${i === 1 ? "show" : ""}`}
                style={{ width: "100%" }} 
              >
              <div className="accordion-body px-0" style={{ width: "100%" }}>

                  {i === 4 ? (
                    <form onSubmit={handleSubmit}  className="w-100"  style={{ width: "100%" } }>
                      <fieldset>
                      <p className="text-muted">
                      Aunque este apartado pide información similar a la de otros apartados, es obligatorio
                      llenarlo. Si omites datos o no sigues las indicaciones, tu solicitud quedará incompleta y el
                      proceso se pausará y/o cancelará.
                          </p>

                     <p className="text-muted">
                        El FUPS lo solicita la Secretaría de Bienestar e Inclusión Social de Hidalgo para dar
                        seguimiento a las necesidades de la población. Tu información no se compartirá con
                        terceros ni se usará para otros fines. Puedes leer más detalles al final de este apartado.
                      </p>

                     <p className="text-muted">
                       Cuando te pidamos escribir montos de dinero, no es necesario proporcionar el dato exacto
                      pero sí una cifra aproximada y realista.    </p>

                   <legend className="mb-3 d-flex align-items-center gap-2">
  Datos Generales{" "}
  <OverlayTrigger placement="right" overlay={renderTooltip}>
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        border: "1px solid #0d6efd", // azul moderno
        color: "#0d6efd",
        fontSize: "12px",
        cursor: "pointer",
        lineHeight: "1"
      }}
    >
      ?
    </span>
  </OverlayTrigger>
</legend>










                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="fubsTipo"
                            id="fubsIncorporacion"
                            value="incorporacion"
                            checked={fubsTipo === "incorporacion"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fubsIncorporacion"
                          >
                            Incorporación
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="fubsTipo"
                            id="fubsActualizacion"
                            value="actualizacion"
                            checked={fubsTipo === "actualizacion"}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fubsActualizacion"
                          >
                            Actualización de Datos
                          </label>
                        </div>

                          
                          

                                          <hr className="my-4" />
                 
                      <legend className="mb-2 d-flex align-items-center gap-2">
                        Datos del contacto (en caso de no encontrar al solicitante)
                        <OverlayTrigger placement="right" overlay={renderTooltipContacto}>
                          <span
                            style={{
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              border: "1px solid #0d6efd", // azul moderno
                              color: "#0d6efd",
                              fontSize: "12px",
                              cursor: "pointer",
                              lineHeight: "1"
                            }}
                          >
                            ?
                          </span>
                        </OverlayTrigger>
                      </legend>





                      <div className="mb-3">
                        <label className="form-label">Apellido Paterno:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={apellidoPaterno}
                            onChange={manejarCambioTexto(setApellidoPaterno)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Apellido Materno:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={apellidoMaterno}
                          onChange={manejarCambioTexto(setApellidoMaterno)}
                          
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Nombre(s):</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nombreCompleto}
                         
                          onChange={manejarCambioTexto(setNombreCompleto)}
                        />
                      </div>

<div className="mb-3">
  <label className="form-label">Fecha de nacimiento:</label>
  <input
    type="date"
    className="form-control"
    value={fechaNacimiento}
    onChange={(e) => setFechaNacimiento(e.target.value)}
  />
</div>

<div className="mb-3">
  <label className="form-label">Edad:</label>
  <input
    type="number"
    className="form-control"
    value={edad}
    onChange={soloNumerosPositivos(setEdad)}
  />
</div>

<div className="mb-3">
  <label className="form-label">Género:</label><br />
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="genero"
      id="generoHombre"
      value="Hombre"
      checked={genero === "Hombre"}
      onChange={(e) => setGenero(e.target.value)}
    />
    <label className="form-check-label" htmlFor="generoHombre">Hombre</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="genero"
      id="generoMujer"
      value="Mujer"
      checked={genero === "Mujer"}
      onChange={(e) => setGenero(e.target.value)}
    />
    <label className="form-check-label" htmlFor="generoMujer">Mujer</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="genero"
      id="generoOtro"
      value="Otro"
      checked={genero === "Otro"}
      onChange={(e) => setGenero(e.target.value)}
    />
    <label className="form-check-label" htmlFor="generoOtro">Otro</label>
  </div>
</div>

<hr />

<legend className="mb-2 mt-4 d-flex align-items-center gap-2">
  Datos de residencia del contacto (en caso de no encontrar al solicitante)
  <OverlayTrigger placement="right" overlay={renderTooltipContacto}>
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        border: "1px solid #0d6efd", // azul moderno
        color: "#0d6efd",
        fontSize: "12px",
        cursor: "pointer",
        lineHeight: "1"
      }}
    >
      ?
    </span>
  </OverlayTrigger>
</legend>







<div className="mb-3">
  <label className="form-label">*Municipio:</label>
  <select
    required
    className="form-select"
    value={municipio}
    onChange={(e) => setMunicipio(e.target.value)}
  >
    <option value="">Selecciona un municipio</option>
    {municipiosHidalgo.map((mun, index) => (
      <option key={index} value={mun}>{mun}</option>
    ))}
  </select>
</div>



<div className="mb-3">
  <label className="form-label">Localidad:</label>
  <select
    className="form-select"
    value={localidad}
    onChange={(e) => setLocalidad(e.target.value)}
    disabled={!municipio} // para evitar que se elija antes del municipio
  >
    <option value="">Selecciona una localidad</option>
    {localidadesFiltradas.map((loc, index) => (
      <option key={index} value={loc.loc}>
        {loc.loc}
      </option>
    ))}
  </select>
</div>





<div className="mb-3">
  <label className="form-label">Colonia:</label>
  <input className="form-control" value={colonia}
  onChange={manejarCambioTexto(setColonia)} 
   />
</div>
<div className="mb-3">
  <label className="form-label">Calle:</label>
  <input className="form-control" value={calle} 
  
  onChange={manejarCambioTexto(setCalle)} />
</div>
<div className="mb-3">
  <label className="form-label">Número de casa:</label>
  <input   type="number" className="form-control" value={numeroCasa} 
  
  onChange={soloNumerosPositivos(setNumeroCasa)} />
</div>
<div className="mb-3">
  <label className="form-label">Código Postal:</label>
  <input   type="number" className="form-control" value={codigoPostal} 
  onChange={soloNumerosPositivos(setCodigoPostal)}
  />
</div>
<div className="mb-3">
  <label className="form-label">CURP:</label>
  <input className="form-control" value={curp} onChange={(e) => setCurp(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Teléfono Fijo:</label>
    <input
    type="tel"
    className="form-control"
    maxLength="10"
    value={telefonoFijo}
    onChange={(e) => {
      const soloNumeros = e.target.value.replace(/\D/g, ""); // elimina todo lo que no sea dígito
      if (soloNumeros.length <= 10) {
        setTelefonoFijo(soloNumeros);
      }
    }}
  />
</div>

<div className="mb-3">
  <label className="form-label">Teléfono Celular:</label>
  <input
    type="tel"
    className="form-control"
    maxLength="10"
    value={telefonoCelular}
    onChange={(e) => {
      const soloNumeros = e.target.value.replace(/\D/g, ""); // Elimina todo lo que no sea número
      if (soloNumeros.length <= 10) {
        setTelefonoCelular(soloNumeros);
      }
    }}
  />
</div>


<div className="mb-3">
  <label className="form-label">Correo Electrónico:</label>
  <input className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Parentesco o Relación con la o el solicitante del programa:</label>
  <input className="form-control" value={parentesco} 
  
  onChange={manejarCambioTexto(setParentesco)}
   />
</div>


<div className="mb-3">
  <label className="form-label d-flex align-items-center gap-2">
    Teléfono y Nombre de algún contacto para recados:
    <OverlayTrigger placement="right" overlay={renderTooltipRecados}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </label>
  <input
    className="form-control"
    value={contactoRecado}
    onChange={(e) => setContactoRecado(e.target.value)}
  />
</div>


<hr />


<legend className="mb-2 mt-4 d-flex align-items-center gap-2">
  Información específica del programa
  <OverlayTrigger placement="right" overlay={renderTooltipPrograma}>
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        border: "1px solid #0d6efd",
        color: "#0d6efd",
        fontSize: "12px",
        cursor: "pointer",
        lineHeight: "1"
      }}
    >
      ?
    </span>
  </OverlayTrigger>
</legend>


<div className="mb-3">
  <label className="form-label d-flex align-items-center gap-2">
    Número de habitantes en la vivienda (incluye persona solicitante):
    <OverlayTrigger placement="right" overlay={renderTooltipHabitantes}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </label>
  <input
    type="number"
    className="form-control"
    value={habitantesVivienda}
    onChange={soloNumerosPositivos(setHabitantesVivienda)}
  />
</div>


<div className="mb-3">
  <label className="form-label d-flex align-items-center gap-2">
    ¿Cuántos miembros del hogar reciben algún programa social?:
    <OverlayTrigger placement="right" overlay={renderTooltipMiembrosPrograma}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </label>
  <input
    type="number"
    className="form-control"
    value={miembrosProgramaSocial}
    onChange={soloNumerosPositivos(setMiembrosProgramaSocial)}
  />
</div>



<hr />


<legend className="mb-2 mt-4 d-flex align-items-center gap-2">
  Ingreso Mensual
  <OverlayTrigger placement="right" overlay={renderTooltipIngresoMensual}>
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        border: "1px solid #0d6efd",
        color: "#0d6efd",
        fontSize: "12px",
        cursor: "pointer",
        lineHeight: "1"
      }}
    >
      ?
    </span>
  </OverlayTrigger>
</legend>

<p>Anote a todas las personas del hogar</p>

<table className="table table-bordered text-center">
  <thead>
    <tr>
      <th>#</th>
<th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Parentesco 
    <OverlayTrigger placement="auto-end" overlay={renderTooltipPar}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>




      <th>Edad</th>
    



    <th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Jefe de familia 
    <OverlayTrigger placement="auto-end" overlay={renderTooltipJefe}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>












       <th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Actividad principal
    <OverlayTrigger placement="auto-end" overlay={renderTooltipActividadPrincipal}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>
  
     

  <th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Ingresos(Por trabajo)
    <OverlayTrigger placement="auto-end" overlay={renderTooltipActividadTrabajo}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>





  <th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Ingresos (Programas sociales)
    <OverlayTrigger placement="auto-end" overlay={renderTooltipActividadTrabajo}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>



  <th>
  <div style={{ position: "relative", display: "inline-block" }} className="d-flex align-items-center gap-2">
    Ingresos (Otro tipo de ingresos)
    <OverlayTrigger placement="auto-end" overlay={renderTooltipActividadTrabajo}
      containerPadding={10}
      container={document.body}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </div>
</th>


   
    </tr>
  </thead>
        <tbody>
  {ingresosHogar.map((fila, index) => (
    <tr key={index}>
      <td>
  {index === 0 ? (
    <OverlayTrigger placement="right" overlay={renderTooltipFilaNumero1}>
      <span style={{ cursor: "pointer" }}>{index + 1}</span>
    </OverlayTrigger>
  ) : (
    index + 1
  )}
</td>
      <td>
        <input
          className="form-control"
          value={fila.parentesco}
          onChange={(e) => actualizarIngreso(index, "parentesco", e.target.value)}
          {...(index === 0 && { readOnly: true })}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={fila.edad}
          onChange={(e) => actualizarIngreso(index, "edad", e.target.value)}
        />
      </td>
      <td>
        <select
          className="form-select"
          value={fila.jefe}
          onChange={(e) => actualizarIngreso(index, "jefe", e.target.value)}
        >
          <option>Sí</option>
          <option>No</option>
        </select>
      </td>
      <td>
        <input
          className="form-control"
          value={fila.actividad}
          onChange={(e) => actualizarIngreso(index, "actividad", e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={fila.trabajo}
          onChange={(e) => actualizarIngreso(index, "trabajo", e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={fila.programas}
          onChange={(e) => actualizarIngreso(index, "programas", e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={fila.otros}
          onChange={(e) => actualizarIngreso(index, "otros", e.target.value)}
        />
      </td>
    </tr>
  ))}


    <tr>
     <td colSpan="4"><strong>TOTAL</strong></td>
  <td>
    <input
      className="form-control text-center fw-bold bg-light"
      value={`$${totalGeneral}`}
      readOnly
    />
  </td>
      
      <td><strong>${totalIngresos.trabajo}</strong></td>
      <td><strong>${totalIngresos.programas}</strong></td>
      <td><strong>${totalIngresos.otros}</strong></td>
        

    </tr>
  </tbody>
</table>


<hr />
<legend className="mb-2 mt-4">Egreso mensual del hogar</legend>

<div className="mb-3">
  <label className="form-label d-flex align-items-center gap-2">
    ¿Cuánto gastan todos los integrantes de tu vivienda al mes?
    <OverlayTrigger placement="right" overlay={renderTooltipGastoMensual}>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #0d6efd",
          color: "#0d6efd",
          fontSize: "12px",
          cursor: "pointer",
          lineHeight: "1"
        }}
      >
        ?
      </span>
    </OverlayTrigger>
  </label>

  <input
    type="number"
    className="form-control"
    value={gastoMensualFamiliar}
    onChange={soloNumerosPositivos(setGastoMensualFamiliar)}
  />
</div>







<div className="mb-3">
  <label className="form-label">
    ¿Cuánto gastan todos los integrantes de tu vivienda al mes,
    exclusivamente en alimentos?
  </label>
  <input
    type="number"
    className="form-control"
    value={gastoAlimentacion}
    
      onChange={soloNumerosPositivos(setGastoAlimentacion)}
  />
</div>

<div className="mb-3">
  <label className="form-label">
    Porcentaje del egreso mensual destinado a la alimentación (%):
  </label>
  <input
    type="number"
    className="form-control"
    value={porcentajeAlimentacion}
    onChange={soloNumerosPositivos(setPorcentajeAlimentacion)}
    
  />
</div>








<hr />
<legend className="mb-2 mt-4">Condición étnica</legend>

<div className="mb-3">
  <label className="form-label">¿Habla una lengua indígena?</label><br />
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="lenguaIndigena"
      id="lenguaSi"
      value="01"
      checked={hablaLenguaIndigena === "01"}
      onChange={(e) => setHablaLenguaIndigena(e.target.value)}
    />
    <label className="form-check-label" htmlFor="lenguaSi">Sí</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="lenguaIndigena"
      id="lenguaNo"
      value="02"
      checked={hablaLenguaIndigena === "02"}
      onChange={(e) => setHablaLenguaIndigena(e.target.value)}
    />
    <label className="form-check-label" htmlFor="lenguaNo">No</label>
  </div>

  {hablaLenguaIndigena === "01" && (
    <div className="mt-2">
      <label className="form-label">¿Cuál?:</label>
      <input
        type="text"
        className="form-control"
        value={cualLenguaIndigena}
        onChange={(e) => setCualLenguaIndigena(e.target.value)}
      />
    </div>
  )}
</div>

<hr />
<legend className="mb-2 mt-4">Vivienda</legend>

<div className="mb-3">
  <label className="form-label">
    La vivienda donde habita es: <br />
    <small className="text-muted">(Registra el número correspondiente)</small>
  </label>
  <select
    className="form-select"
    value={posesionVivienda}
    onChange={(e) => setPosesionVivienda(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="01">Propia y totalmente pagada</option>
    <option value="02">Propia y la está pagando</option>
    <option value="03">Propia y está hipotecada</option>
    <option value="04">Rentada o Alquilada</option>
    <option value="05">Prestada o la está cuidando</option>
    <option value="06">Intestada o está en litigio</option>
  </select>
</div>

<hr />
<legend className="mb-2 mt-4">Servicios de la vivienda</legend>

{[
  { label: "Luz", state: servicioLuz, setState: setServicioLuz },
  { label: "Agua Potable", state: servicioAgua, setState: setServicioAgua },
  { label: "Cisterna", state: servicioCisterna, setState: setServicioCisterna },
  { label: "Celular", state: servicioCelular, setState: setServicioCelular },
  { label: "Internet en casa", state: servicioInternet, setState: setServicioInternet },
  { label: "Televisión", state: servicioTv, setState: setServicioTv },
].map((item, index) => (
  <div className="mb-3" key={index}>
    <label className="form-label">{item.label}</label>
    <select
      className="form-select"
      value={item.state}
      onChange={(e) => item.setState(e.target.value)}
    >
      <option value="">Selecciona una opción</option>
      <option value="01">Sí</option>
      <option value="02">No</option>
    </select>
  </div>
))}

<div className="mb-3">
  <label className="form-label">¿El drenaje está conectado a?</label>
  <select
    className="form-select"
    value={tipoDrenaje}
    onChange={(e) => setTipoDrenaje(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="03">Red municipal</option>
    <option value="04">La calle</option>
    <option value="05">Aire libre</option>
    <option value="06">No tiene</option>
  </select>
</div>





<hr />
<legend className="mb-2 mt-4">Tamaño de la vivienda</legend>

<div className="mb-3">
  <label className="form-label">
    ¿Cuántos dormitorios tiene la vivienda?:
  </label>
  <input
    type="number"
    className="form-control"
    value={numDormitorios}
    
      onChange={soloNumerosPositivos(setNumDormitorios)} 
  />
</div>

<div className="mb-3">
  <label className="form-label">
    Número de personas por dormitorio 
  </label>
  <select
    className="form-select"
    value={personasPorDormitorio}
    onChange={(e) => setPersonasPorDormitorio(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="01">4 o más</option>
    <option value="02">3</option>
    <option value="03">1 o 2</option>
  </select>
</div>

<hr />
<legend className="mb-2 mt-4">Material de la vivienda</legend>
<p><strong>¿De qué material es la mayor parte de su vivienda?</strong> (Selecciona el material para cada parte)</p>

<div className="mb-3">
  <label className="form-label">a. Las Paredes o muros de la vivienda:</label>
  <select
    className="form-select"
    value={materialParedes}
    onChange={(e) => setMaterialParedes(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="01">Cartón, tela</option>
    <option value="02">Palma o paja</option>
    <option value="03">Adobe</option>
    <option value="04">Teja</option>
    <option value="05">Lámina de cartón</option>
    <option value="06">Lámina metálica</option>
    <option value="07">Lámina de asbesto</option>
    <option value="08">Madero o tejamanil</option>
    <option value="09">Tabique, ladrillo, piedra</option>
    <option value="10">Concreto, firme, loseta</option>
    <option value="11">Tierra</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">b. Techo de la vivienda:</label>
  <select
    className="form-select"
    value={materialTecho}
    onChange={(e) => setMaterialTecho(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="01">Cartón, tela</option>
    <option value="02">Palma o paja</option>
    <option value="03">Adobe</option>
    <option value="04">Teja</option>
    <option value="05">Lámina de cartón</option>
    <option value="06">Lámina metálica</option>
    <option value="07">Lámina de asbesto</option>
    <option value="08">Madero o tejamanil</option>
    <option value="09">Tabique, ladrillo, piedra</option>
    <option value="10">Concreto, firme, loseta</option>
    <option value="11">Tierra</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">c. Piso de la vivienda:</label>
  <select
    className="form-select"
    value={materialPiso}
    onChange={(e) => setMaterialPiso(e.target.value)}
  >
    <option value="">Selecciona una opción</option>
    <option value="01">Cartón, tela</option>
    <option value="02">Palma o paja</option>
    <option value="03">Adobe</option>
    <option value="04">Teja</option>
    <option value="05">Lámina de cartón</option>
    <option value="06">Lámina metálica</option>
    <option value="07">Lámina de asbesto</option>
    <option value="08">Madero o tejamanil</option>
    <option value="09">Tabique, ladrillo, piedra</option>
    <option value="10">Concreto, firme, loseta</option>
    <option value="11">Tierra</option>
  </select>
</div>











<hr />
      <p className="text-muted">
        La información que sea proporcionada se utilizará única y exclusivamente para la finalidad
de los programas sociales. No se proporcionará a terceros o para su uso con otro tipo de
fines. El Gobierno del Estado de Hidalgo es el responsable de la gestión, manejo y
tratamiento de los datos personales sensibles proporcionados en los términos de las
disposiciones previstas en la LEY DE PROTECCIÓN DE DATOS PERSONALES EN
POSESIÓN DE SUJETOS OBLIGADOS PARA EL ESTADO DE HIDALGO. ÚLTIMA
REFORMA PUBLICADA EN EL ALCANCE UNO DEL PERIÓDICO OFICIAL: 27 DE JUNIO
DE 2022. Ley publicada en el Periódico Oficial, el 24 de julio de 2017. Y, en la LEY DE
TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA PARA EL ESTADO DE
HIDALGO. ÚLTIMA REFORMA PUBLICADA EN ALCANCE CUATRO DEL PERIÓDICO
OFICIAL, EL 28 DE JULIO DE 2021. Ley publicada en el Periódico Oficial, el miércoles 4 de
mayo de 2016.

   </p>


      <p className="text-muted">
        Los datos personales recabados serán utilizados para: Realizar registro, control y un
expediente de beneficiarios de programas sociales. De manera adicional, se utilizará la
información personal para generar informes estadísticos. En caso de que la autoría no
desee que sus datos personales sean tratados para las finalidades adicionales, puede
manifestarlo a través del correo electrónico: secretaria.bienestar@hidalgo.gob.mx. Le
informamos que sus datos personales NO son compartidos con personas, empresas,
organizaciones y autoridades distintas al sujeto obligado, salvo que sean necesarias para
atender requerimientos de información de una autoridad competente, debidamente
fundados y motivados. Para más información acerca del tratamiento y de los derechos que
puede hacer valer, usted puede acceder al aviso de privacidad integral a través de la
dirección electrónica: https://sebiso.hidalgo.gob.mx/AvisosPrivacidad

      </p>


{/* 

<legend className="mb-2 mt-4">
  Diagnóstico social o características prioritarias
</legend>
<p className="text-muted">
  Diagnóstico social, o características prioritarias del programa no contempladas y contempladas en el cuestionario. Se puede agregar un anexo en caso necesario.
</p>
<div className="mb-3">
  <textarea
    className="form-control rounded-pill"
    rows="3"
    placeholder="Escriba aquí..."
    value={diagnosticoSocial}
    onChange={(e) => setDiagnosticoSocial(e.target.value)}
  ></textarea>
</div>
*/}


                        <button
                          type="submit"
                          className="btn btn-primary mt-3"
                        >
                          Guardar
                        </button>
                      </fieldset>
                    </form>
                  ) : (
                    <>Contenido de la sección {i}...</>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{ backgroundColor: "#b4935a", color: "white" }}
        className="py-3 border-bottom w-100"
      >
        <div className="container text-center">
          <p className="mb-1">
            <strong>Email:</strong> energiaparaelbienestar@hidalgo.gob.mx
          </p>
          <p className="mb-1">
            <strong>Tel:</strong> (771)-688-61-89 | (771)-717-60-00 ext. 2539,
            2536 y 2533
          </p>
          <p className="mb-1">
            <strong>Horario:</strong> Lunes a Viernes (en días hábiles): 9 am -
            5 pm
          </p>
          <div className="mt-2">
            <a href="#" className="me-3">
              Preguntas frecuentes
            </a>
            <a href="#" className="me-3">
              Aviso de privacidad
            </a>
            <span>&copy; 2025 Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CuentaUsuario;
