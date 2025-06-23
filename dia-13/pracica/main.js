let saldo = 0;
let historial = [];

function registrarTransaccion(tipo, monto) {
  const fecha = new Date().toLocaleString();
  historial.push({ tipo, monto, fecha });
}

function depositar() {
  const input = document.getElementById("monto");
  const monto = parseFloat(input.value);
  const resultado = document.getElementById("resultado");

  if (monto > 0) {
    saldo += monto;
    registrarTransaccion("Depósito", monto);
    resultado.textContent = `✅ Depósito exitoso. Saldo actual: $${saldo.toFixed(2)}`;
  } else {
    resultado.textContent = "❌ El monto debe ser mayor que cero.";
  }

  input.value = "";
}

function retirar() {
  const input = document.getElementById("monto");
  const monto = parseFloat(input.value);
  const resultado = document.getElementById("resultado");

  if (monto > 0 && monto <= saldo) {
    saldo -= monto;
    registrarTransaccion("Retiro", monto);
    resultado.textContent = `✅ Retiro exitoso. Saldo actual: $${saldo.toFixed(2)}`;
  } else if (monto <= 0) {
    resultado.textContent = "❌ El monto debe ser mayor que cero.";
  } else {
    resultado.textContent = "❌ Fondos insuficientes.";
  }

  input.value = "";
}

function mostrarSaldo() {
  const resultado = document.getElementById("resultado");
  resultado.textContent = `💰 Saldo actual: $${saldo.toFixed(2)}`;
}

function mostrarHistorial() {
  const historialDiv = document.getElementById("historial");
  historialDiv.innerHTML = "<strong>📜 Historial de transacciones:</strong><br>";

  if (historial.length === 0) {
    historialDiv.innerHTML += "No hay transacciones aún.";
    return;
  }

  historial.forEach((t, i) => {
    historialDiv.innerHTML += `${i + 1}. [${t.fecha}] ${t.tipo}: $${t.monto.toFixed(2)}<br>`;
  });
}