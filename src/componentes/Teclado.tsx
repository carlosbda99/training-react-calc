import { Botao } from ".";

function Teclado() {
  return (
    <>
      <div className="d-flex flex-wrap col-12">
        <div className="col-3 p-1">
          <Botao valor="/" cor="secondary"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="*" cor="secondary"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="-" cor="secondary"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="+" cor="secondary"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="1"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="2"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="3"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="AC" cor="danger"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="4"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="5"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="6"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="C" cor="warning"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="7"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="8"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="9"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="<--" cor="warning"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="," cor="secondary"></Botao>
        </div>
        <div className="col-3 p-1">
          <Botao valor="0"></Botao>
        </div>
        <div className="col-6 p-1">
          <Botao valor="=" cor="secondary"></Botao>
        </div>
      </div>
    </>
  );
}

export default Teclado;
