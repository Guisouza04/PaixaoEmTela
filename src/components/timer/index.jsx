import { useEffect, useState } from "react";
import { Frase } from "./styles";

export function Timer() {
  // Helper: compute the phrase for the given start date
  function calcularTempoDeNamoro(dataNamoro) {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const dias = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // You can include `anos` if desired; original message used months only.
    const frase = `À ${meses} meses, ${dias} dias, ${horas
      .toString()
      .padStart(2, "0")} horas, ${minutos
      .toString()
      .padStart(2, "0")} minutos e ${segundos
      .toString()
      .padStart(2, "0")} segundos que meu coração bate por você!`;

    return frase;
  }

  const dataNamoro = new Date(2025, 3, 30);

  // State holds the current phrase so it renders and updates
  const [frase, setFrase] = useState(() => calcularTempoDeNamoro(dataNamoro));

  // Update phrase every second
  useEffect(() => {
    const id = setInterval(() => {
      setFrase(calcularTempoDeNamoro(dataNamoro));
    }, 1000);

    return () => clearInterval(id);
  }, [dataNamoro]);

  return (
    <div>
      <Frase>{frase}</Frase>
    </div>
  );
}

export default Timer;
