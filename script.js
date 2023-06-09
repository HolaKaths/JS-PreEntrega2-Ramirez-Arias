function calcularEdad() {
  const animal = document.getElementById("animal").value;
  const nombre = document.getElementById("nombre").value;
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
  resultado.innerHTML = `La edad de tu ${animal} ${nombre} en años humanos es ${edadHumana} y su peso ideal estimado a esa edad sería ${peso} kg.`;
}

function calcularEdadMascotas() {
  function calcularEdad() {
    const animal = document.getElementById("animal").value;
    const nombre = document.getElementById("nombre").value;
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
    resultado.innerHTML = `La edad de tu ${animal} ${nombre} en años humanos es ${edadHumana} y su peso ideal estimado a esa edad sería ${peso} kg.`;
  }

  function calcularEdadMascotas() {
    const numMascotas = parseInt(prompt("Ingresa el número de mascotas a calcular:"));
    let i = 0;

    while (i < numMascotas) {
      calcularEdad();
      i++;
    }
  }


  let i = 0;

  while (i < numMascotas) {
    calcularEdad();
    i++;
  }
}

function calcularIMC() {
  // Obtener los valores de peso y altura
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
// Calcular el IMC
const imc = peso / ((altura / 100) ** 2);

// Mostrar el resultado en la página
const resultado = document.getElementById('resultado2');
resultado.textContent = imc.toFixed(1);

// Evaluar el resultado del IMC
if (imc < 18.5) {
  resultado.textContent += " - Bajo peso";
} else if (imc >= 18.5 && imc < 25) {
  resultado.textContent += " - Peso normal";
} else if (imc >= 25 && imc < 30) {
  resultado.textContent += " - Sobrepeso";
} else if (imc >= 30 && imc < 35) {
  resultado.textContent += " - Obesidad grado 1";
} else if (imc >= 35 && imc < 40) {
  resultado.textContent += " - Obesidad grado 2";
} else {
  resultado.textContent += " - Obesidad grado 3";
}
}

function addNewRow() {
  let table = document.getElementById("imcData");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  let nuevaEdad = document.createElement("input");
  nuevaEdad.setAttribute("type", "number");
  nuevaEdad.setAttribute("class", "edad");
  nuevaEdad.setAttribute("name", "edad");
  nuevaEdad.setAttribute("min", "1");
  nuevaEdad.setAttribute("max", "200");
  nuevaEdad.setAttribute("step", "0.1");
  nuevaEdad.setAttribute("form", "formularioIMC");
  nuevaEdad.setAttribute("required", "");

  let nuevoPeso = document.createElement("input");
  nuevoPeso.setAttribute("type", "number");
  nuevoPeso.setAttribute("class", "peso");
  nuevoPeso.setAttribute("name", "peso");
  nuevoPeso.setAttribute("min", "1");
  nuevoPeso.setAttribute("max", "200");
  nuevoPeso.setAttribute("step", "0.1");
  nuevoPeso.setAttribute("form", "formularioIMC");
  nuevoPeso.setAttribute("required", "");

  let nuevaAltura = document.createElement("input");
  nuevaAltura.setAttribute("type", "number");
  nuevaAltura.setAttribute("class", "altura");
  nuevaAltura.setAttribute("name", "altura");
  nuevaAltura.setAttribute("min", "1");
  nuevaAltura.setAttribute("max", "200");
  nuevaAltura.setAttribute("form", "formularioIMC");
  nuevaAltura.setAttribute("required", "");

  cell1.appendChild(nuevaEdad);
  cell2.appendChild(nuevoPeso);
  cell3.appendChild(nuevaAltura);
  cell4.innerHTML = "";
}


function calcularTabla() {

}

function leerTabla() {
  const valoresTabla = document.querySelectorAll("#imcData tr");
  let listaObjetosIMC = [];
  for (let index = 1; index < valoresTabla.length; index++) {
    let edad = valoresTabla[index].getElementsByTagName("input")['edad'].value;
    let peso = valoresTabla[index].getElementsByTagName("input")['peso'].value;
    let altura = valoresTabla[index].getElementsByTagName("input")['altura'].value;
    let imc = 0;
    listaObjetosIMC[index - 1] = { edad, peso, altura, imc }
  }
  listaObjetosIMC = calcularIMCTabla(listaObjetosIMC)

  document.querySelectorAll("#imcData tr")

  for (let index = 1; index < valoresTabla.length; index++) {
    valoresTabla[index].lastElementChild.innerHTML = listaObjetosIMC[index - 1].imc
  }
}

function calcularIMCTabla(listaObjetosIMC) {
  for (let index = 0; index < listaObjetosIMC.length; index++) {
    let aux = listaObjetosIMC[index];
    aux.imc = aux.peso / ((aux.altura / 100) ** 2);
    listaObjetosIMC[index] = aux;
  }
  return listaObjetosIMC
}

