import { useEffect } from "react";

export const ModalImagem = ({ abrir, onFechar, item }) => {
  if (!item) return null;

  useEffect(() => {
    if(abrir){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""
    }
  })

  return (
    <div onClick={onFechar} className={`lg:size-2/8 font-dmsans fixed top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/1 ${abrir ? "visible" : "invisible bg-black/20"}`}>
      <div onClick={e => e.stopPropagation()}>
        <div className="">
          <img
            src={item.src}
            alt=""
            className="min-w-full rounded-t-2xl aspect-square object-cover"
          />
        </div>

        <div className="bg-beige rounded-b-2xl p-4 flex flex-col gap-4">
          <div className="flex gap-2">
            <img
              src="./assets/icon-user.svg"
              alt=""
              className="size-10"
            />

            <p className="self-center">{item.autor}</p>
          </div>

          <div className="flex gap-2">
            <img
              src="./assets/icon-dimensao.svg"
              alt=""
              className="size-10"
            />

            <p className="self-center">{item.altura} x {item.largura}</p>
          </div>

          <div className="flex justify-between">
            <button onClick={onFechar} className="bg-darkpurple flex justify-center items-center px-5 rounded-lg gap-2 cursor-pointer">
              <p className="text-beige text-xl">Fechar</p>
              <img
                src="./assets/icon-fechar.svg"
                alt=""
                className="size-6"
              />
            </button>

            <button className="cursor-pointer">
              <img
                src="./assets/icon-favorito-ativo.svg"
                alt=""
                className="bg-lowopacity p-3 rounded-full size-14.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}