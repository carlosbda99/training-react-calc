import { BotaoProps } from "../props";

function Botao(props: BotaoProps) {
  const { valor, cor } = props;
  const textColor =
    cor !== undefined
      ? ["secondary", "warning", "danger"].some((valor) => valor === cor)
        ? "text-white"
        : "text-black"
      : "text-black";

  return (
    <>
      <div className={"card p-2 bg-" + (cor ?? "light") + " " + textColor}>
        {valor}
      </div>
    </>
  );
}

export default Botao;
