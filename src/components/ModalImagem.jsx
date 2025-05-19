export const ModalImagem = ({ imagem }) => {
  return(
    <div className="absolute lg:size-2/6 font-dmsans top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/1 hidden">
      <div className="">
        <img 
          src={imagem} 
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

          <p className="self-center">Nome do autor</p>
        </div>

        <div className="flex gap-2">
          <img 
            src="./assets/icon-dimensao.svg" 
            alt="" 
            className="size-10" 
          />

          <p className="self-center">300x300</p>
        </div>

        <div className="flex justify-between">
          <a href="" className="bg-darkpurple flex justify-center items-center px-5 rounded-lg gap-2 cursor-pointer">
            <p className="text-beige text-xl">Baixar</p>
            <img 
              src="./assets/icon-download.svg" 
              alt="" 
              className="size-6" 
            />
          </a>

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
    
  );
}