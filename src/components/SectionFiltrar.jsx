export const SectionFiltrar = () => {
  return(
    <section className="font-lusitana self-end text-darkpurple text-xl flex lg:justify-between w-full">
      <h1 className="invisible lg:visible lg:text-4xl">Descubra suas imagens favoritas</h1>

      <select name="autores" id="autores" className="outline-0 lg:order-[-1] cursor-pointer">
        <option value="Filtrar">Filtrar por autor</option>
        <option value="Alejandro">Alejandro Escamilla</option>
        <option value="Paul">Paul Jarvis</option>
        <option value="Aleks">Aleks Dorohovich</option>
        <option value="Vadim">Vadim Sherbakov</option>
        <option value="Yoni">Yoni Kaplan-Nadel</option>
        <option value="Jerry">Jerry Adney</option>
        <option value="Wild">Go Wild</option>
      </select>
    </section>
  );
}