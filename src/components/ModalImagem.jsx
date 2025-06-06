import { useEffect } from "react";

export const ModalImagem = ({ abrir, onFechar, item, isFavorito, onToggleFavorito }) => {
  if (!item) return null;

  useEffect(() => {
    if(abrir){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""
    }
  }, [abrir]);

  return (
    <div onClick={onFechar} className={`lg:size-2/8 font-dmsans fixed lg:top-1/3 lg:left-1/2 lg:-translate-x-1/3 lg:-translate-y-1/1 ${abrir ? "visible" : "invisible bg-black/20"}`}>
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
              src="/icon-user.svg"
              alt=""
              className="size-10"
            />

            <p className="self-center">{item.autor}</p>
          </div>

          <div className="flex gap-2">
            <img
              src="/icon-dimensao.svg"
              alt=""
              className="size-10"
            />

            <p className="self-center">{item.altura} x {item.largura}</p>
          </div>

          <div className="flex justify-between">
            <button onClick={onFechar} className="bg-darkpurple flex justify-center items-center px-5 rounded-lg gap-2 cursor-pointer">
              <p className="text-beige text-xl">Fechar</p>
              <img
                src="/icon-fechar.svg"
                alt="fechar"
                className="size-6"
              />
            </button>

            <button onClick={onToggleFavorito} className="cursor-pointer">
              <img
                src={isFavorito ? "/icon-favorito.svg" : "/icon-favorito-ativo.svg"}
                alt="favoritar"
                className={`p-3 rounded-full size-14.5 ${isFavorito ? "bg-white" : "bg-lowopacity"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}