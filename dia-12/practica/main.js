function mostrarMenu() {
  console.log("\n--- Calculadora de Áreas Geométricas ---");
  console.log("1. Calcular el área de un Cuadrado");
  console.log("2. Calcular el área de un Rectángulo");
  console.log("3. Calcular el área de un Triángulo");
  console.log("4. Salir");
}



function solicitarNumero(mensaje) {
  const valor = parseFloat(prompt(mensaje));
  if (isNaN(valor) || valor <= 0) {
    alert("❌ Valor inválido. Debe ser un número positivo.");
    return solicitarNumero(mensaje);
  }
  return valor;
}



function calcularArea() {
  let opcion;


  do {
    mostrarMenu();
    opcion = prompt("Ingrese una opción (1-4):");

    switch (opcion) {
      case "1": {
        const lado = solicitarNumero("Ingrese el lado del cuadrado:");
        const area = lado * lado;
        alert(`✅ El área del cuadrado es: ${area}`);
        break;
      }
      case "2": {
        const base = solicitarNumero("Ingrese la base del rectángulo:");
        const altura = solicitarNumero("Ingrese la altura del rectángulo:");
        const area = base * altura;
        alert(`✅ El área del rectángulo es: ${area}`);
        break;
      }
      case "3": {
        const base = solicitarNumero("Ingrese la base del triángulo:");
        const altura = solicitarNumero("Ingrese la altura del triángulo:");
        const area = (base * altura) / 2;
        alert(`✅ El área del triángulo es: ${area}`);
        break;
      }
      case "4":
        alert("👋 Gracias por usar la calculadora.");
        break;
      default:
        alert("❌ Opción no válida. Intente nuevamente.");
    }

  } while (opcion !== "4");
}



calcularArea();