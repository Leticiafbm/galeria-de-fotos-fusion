import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SectionFiltrar } from "./components/SectionFiltrar";
import { SectionFotos } from "./components/SectionFotos";
import { ModalImagem } from "./components/ModalImagem";

export const App = () => {
  const [urlsImagens, setUrlsImagens] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [id, setId] = useState([]);
  const [altura, setAltura] = useState([]);
  const [largura, setLargura] = useState([]);
  const [autor, setAutor] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState(null);

  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });


  useEffect(() => {
    async function fetchResposta(url){
      const resposta = await fetch(url);
      const conteudo = await resposta.json();
      return conteudo;
    }

    async function fetchProcesso(){
      const dados = await fetchResposta("https://picsum.photos/v2/list");

      const srcs = dados.map(src => src.download_url)
      setUrlsImagens(srcs)

      const ids = dados.map(id => id.id)
      setId(ids)

      const alturas = dados.map(altura => altura.height)
      setAltura(alturas)

      const larguras = dados.map(largura => largura.width)
      setLargura(larguras)

      const autores = dados.map(autor => autor.author)
      setAutor(autores)
    }

    fetchProcesso()
  }, []);

  function getById(idBuscado){
    const indice = id.findIndex(item => item == idBuscado);

    if (indice !== -1){
      return {
        src: urlsImagens[indice],
        largura: largura[indice],
        altura: altura[indice],
        autor: autor[indice]
      };
    }

    return null;
  }

  return(
    <main className="w-screen h-full bg-beige flex flex-col gap-12">
      <header className="lg:hidden">
        <Header />
      </header>

      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <section className="p-6 flex flex-col gap-3 lg:pr-22 lg:pl-84 lg:pt-20">
        <SectionFiltrar />
        <SectionFotos 
          onAbrir={(idSelecionado) => {
            setIdSelecionado(idSelecionado);
            setAbrir(true);
          }}
          urlsImagens={urlsImagens}
          id={id}
        />
      </section>

      <ModalImagem 
        abrir={abrir}
        onFechar={() => setAbrir(false)}
        item={getById(idSelecionado)}
      />
    </main>
  );
}