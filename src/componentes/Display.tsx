function Display() {
  let resultadoAnterior: number | undefined = 0;
  let resultado: number | undefined = 0;
  let valorAtual: number | undefined = 3;

  return (
    <>
      <div className="card p-2 d-flex flex-column bg-light">
        <div className="d-flex flex-row justify-content-between align-items-start">
          <div className="text-secondary">
            <i className="bi bi-reply me-2"></i>
            {resultadoAnterior}
          </div>
          <div className="text-secondary fs-5">{resultado}</div>
        </div>
        <div className="d-flex flex-row-reverse fw-bold fs-6">{valorAtual}</div>
      </div>
    </>
  );
}

export default Display;
