import reactLogo from "./assets/react.svg";
import "./App.css";
import { Display, Teclado } from "./componentes";

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100">
      <div className="calc">
        <div className="card p-2 bg-info">
          <h2>Calculadora React + TS</h2>
          <Display></Display>
          <Teclado></Teclado>
        </div>
        <div className="footer">
          <a href="https://github.com/carlosbda99" className="link-dark">
            @carlosbda99
          </a>
          <div>
            Criado com{" "}
            <a href="https://pt-br.reactjs.org/" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
