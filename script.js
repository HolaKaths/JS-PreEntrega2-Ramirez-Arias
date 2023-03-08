function calcularEdad() {
  const animal = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const tamano = document.getElementById("tamano").value;

  let edadHumana = 0;
  let peso = 0;

  if (animal === "perro") {
    if (edad === 1) {
      edadHumana = 15;
    } else if (edad === 2) {
      edadHumana = 24;
    } else {
      edadHumana = 24 + (edad - 2) * 4;
    }
    if (tamano === "pequeno") {
      peso = edad <= 12 ? edad * 2 : 24 + (edad - 12) * 1;
    } else if (tamano === "mediano") {
      peso = edad <= 12 ? edad * 2.5 : 30 + (edad - 12) * 1.5;
    } else {
      peso = edad <= 12 ? edad * 4 : 54 + (edad - 12) * 2;
    }
  } else if (animal === "gato") {
    if (edad === 1) {
      edadHumana = 15;
    } else if (edad === 2) {
      edadHumana = 24;
    } else {
      edadHumana = 24 + (edad - 2) * 4;
    }
    if (tamano === "pequeno") {
      peso = 2.5 * edad + 1.5;
    } else if (tamano === "mediano") {
      peso = 3.5 * edad + 1.5;
    } else {
      peso = 5.5 * edad + 1.5;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `La edad de tu ${animal} en años humanos es ${edadHumana} y su peso ideal estimado a esa edad sería ${peso} kg.`;
}
