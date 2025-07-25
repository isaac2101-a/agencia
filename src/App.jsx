import React, { useState } from "react";
import logo from "./assets/logo.jpg";

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
const [ingresosHogar, setIngresosHogar] = useState([
  { trabajo: 0, programas: 0, otros: 0 },
  { trabajo: 0, programas: 0, otros: 0 },
  { trabajo: 0, programas: 0, otros: 0 },
  { trabajo: 0, programas: 0, otros: 0 },
  { trabajo: 0, programas: 0, otros: 0 },
  { trabajo: 0, programas: 0, otros: 0 },
]);

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
    if (!fubsTipo || !programaSolicitado || !apellidoPaterno || !apellidoMaterno || !nombreCompleto) {
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
ingresos_otros: totalIngresos.otros



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
                    "FUBS",
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
                        <legend className="mb-3">1.-Datos Generales</legend>

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

                                                  <hr />
                          <legend className="mb-2 mt-4">Programa solicitado</legend>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="programaSolicitado"
                              id="bienestar"
                              value="Energía para el bienestar"
                              checked={programaSolicitado === "Energía para el bienestar"}
                              onChange={(e) => setProgramaSolicitado(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="bienestar">
                              Energía para el bienestar
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="programaSolicitado"
                              id="transforma"
                              value="Energía que transforma"
                              checked={programaSolicitado === "Energía que transforma"}
                              onChange={(e) => setProgramaSolicitado(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="transforma">
                              Energía que transforma
                            </label>
                          </div>
                                          <hr className="my-4" />
                      <legend className="mb-2">2.2.-Datos del contacto(en caso de no encontrar al solicitante)</legend>

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
<legend className="mb-2 mt-4">2.2.1.- Datos de residencia del contacto</legend>

<div className="mb-3">
  <label className="form-label">Municipio:</label>
  <input className="form-control" value={municipio} 
  
    onChange={manejarCambioTexto(setMunicipio)}
  
  />
</div>
<div className="mb-3">
  <label className="form-label">Localidad:</label>
  <input className="form-control" value={localidad} 
  
  onChange={manejarCambioTexto(setLocalidad)} />
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
  <label className="form-label">Teléfono de contacto para recados:</label>
  <input
    type="tel"
    className="form-control"
    pattern="[0-9]{10}"
    maxLength="10"
    value={contactoRecado}
    onChange={(e) => {
      const value = e.target.value;
      // Solo permitir dígitos numéricos y máximo 10 caracteres
      if (/^\d{0,10}$/.test(value)) {
        setContactoRecado(value);
      }
    }}
  />
</div>


<hr />
<legend className="mb-2 mt-4">4.-Información específica del programa</legend>

<div className="mb-3">
  <label className="form-label">Número de habitantes en la vivienda (incluye persona solicitante):</label>
  <input
    type="number"
    className="form-control"
    value={habitantesVivienda}
   
     onChange={soloNumerosPositivos(setHabitantesVivienda)}
  />
</div>

<div className="mb-3">
  <label className="form-label">¿Cuántos miembros del hogar reciben algún programa social?:</label>
  <input
    type="number"
    className="form-control"
    value={miembrosProgramaSocial}
    
      onChange={soloNumerosPositivos(setMiembrosProgramaSocial)}
  />
</div>


<hr />
<legend className="mb-2 mt-4">Ingreso Mensual</legend>
<p>Anote a todas las personas del hogar</p>

<table className="table table-bordered text-center">
  <thead>
    <tr>
      <th>#</th>
      <th>Parentesco</th>
      <th>Edad</th>
      <th>Jefe de Familia</th>
      <th>Actividad Principal</th>
      <th>Por trabajo</th>
      <th>Programas sociales</th>
      <th>Otro tipo de ingresos</th>
    </tr>
  </thead>
  <tbody>
    {ingresosHogar.map((fila, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td><input className="form-control" /></td>
        <td><input type="number" className="form-control" /></td>
        <td>
          <select className="form-select">
            <option>Sí</option>
            <option>No</option>
          </select>
        </td>
        <td><input className="form-control" /></td>
        <td>
          <input
            type="number"
            className="form-control"
            value={fila.trabajo}
            onChange={(e) =>
              handleIngresoChange(index, "trabajo", e.target.value)
            }
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={fila.programas}
            onChange={(e) =>
              handleIngresoChange(index, "programas", e.target.value)
            }
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={fila.otros}
            onChange={(e) =>
              handleIngresoChange(index, "otros", e.target.value)
            }
          />
        </td>
      </tr>
    ))}
    <tr>
      <td colSpan="5"><strong>TOTAL</strong></td>
      <td><strong>${totalIngresos.trabajo}</strong></td>
      <td><strong>${totalIngresos.programas}</strong></td>
      <td><strong>${totalIngresos.otros}</strong></td>
    </tr>
  </tbody>
</table>




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
<legend className="mb-2 mt-4">Egreso mensual</legend>

<div className="mb-3">
  <label className="form-label">
    ¿Cuánto gasta mensualmente solo en alimentación? ($):
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
    Número de personas por dormitorio (Registra el número correspondiente)
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
