export const SectionFiltrar = ({autorSelecionado, aoSelecionarAutor, listaAutores}) => {
  return(
    <section className="font-lusitana self-end text-darkpurple text-xl flex lg:justify-between w-full">
      <h1 className="invisible lg:visible lg:text-4xl">Descubra suas imagens favoritas</h1>

      <select name="autores" id="autores" value={autorSelecionado} onChange={(e) => aoSelecionarAutor(e.target.value)} className="outline-0 lg:order-[-1] cursor-pointer">
        <option value="todos">Filtrar por autor</option>
        {listaAutores.map((autor) => (
          <option key={autor} value={autor}>{autor}</option>
        ))}
      </select>
    </section>
  );
}