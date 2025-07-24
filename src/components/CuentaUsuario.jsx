import React, { useState } from "react";

const [fubsTipo, setFubsTipo] = useState("");

const handleChange = (e) => {
  setFubsTipo(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!fubsTipo) {
    alert("Faltan preguntas por contestar");
    return;
  }

  try {
    const response = await fetch("http://localhost/guardar_fubs.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipo: fubsTipo }),
    });

    const data = await response.json();
    alert(data.message);
    setFubsTipo(""); // limpiar selección
  } catch (error) {
    console.error("Error al guardar:", error);
    alert("Error al guardar en base de datos");
  }
};
