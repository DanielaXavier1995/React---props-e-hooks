import Home from "./paginas/home/Home";
import "./App.css";
import Contador from "./paginas/contador/Contador";
import ConcluirTarefa from "./paginas/concluirTarefa/ConcluirTarefa";

function App() {
  return (
    <>
      <Home
        titulo="Esse é um componente com props"
        texto="agora já estamos trabalhando com props - componente chamado com sucesso"
      />
      <Contador />
      <ConcluirTarefa />
    </>
  );
}

export default App;
