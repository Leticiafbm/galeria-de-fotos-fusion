export const Header = () => {
  return(
    <header className="bg-darkpurple w-full p-6 flex justify-between">
      <div className="">
        <img 
          src="/galeria-logo.svg"
          alt="Logo da galeria" 
          className="size-12"
        />
      </div>

      <div className="flex gap-3.5">
        <button className="flex">
          <img 
            src="/icon-galeria.svg"
            alt="link para galeria" 
            className="size-8 self-center" 
          />
        </button>

        <button className="flex">
          <img 
            src="/icon-favorito.svg"
            alt="link para favoritos" 
            className="size-8 self-center" 
          />
        </button>
      </div>
    </header>
  );
}