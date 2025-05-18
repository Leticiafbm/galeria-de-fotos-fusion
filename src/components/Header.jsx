export const Header = () => {
  return(
    <header className="bg-darkpurple w-full p-6 flex justify-between">
      <div className="">
        <img 
          src="./assets/galeria-logo.svg" 
          alt="Logo da galeria" 
          className="size-12"
        />
      </div>

      <div className="flex gap-3.5">
        <a href="" className="flex">
          <img 
            src="./assets/icon-galeria.svg" 
            alt="link para galeria" 
            className="size-8 self-center" 
          />
        </a>

        <a href="" className="flex">
          <img 
            src="./assets/icon-favorito.svg" 
            alt="link para favoritos" 
            className="size-8 self-center" 
          />
        </a>
      </div>
    </header>
  );
}