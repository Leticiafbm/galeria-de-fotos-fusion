import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SectionFiltrar } from "./components/SectionFiltrar";
import { SectionFotos } from "./components/SectionFotos";
import { SectionFavoritos } from "./components/SectionFavoritos";
import { ModalImagem } from "./components/ModalImagem";

export const App = () => {
  const [urlsImagens, setUrlsImagens] = useState([]);
  const [abrir, setAbrir] = useState(false);
  const [id, setId] = useState([]);
  const [altura, setAltura] = useState([]);
  const [largura, setLargura] = useState([]);
  const [autor, setAutor] = useState([]);
  const [autorUnico, setAutorUnico] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState(null);

  const [autorSelecionado, setAutorSelecionado] = useState("todos");

  const [secaoVisivel, setSecaoVisivel] = useState("galeria");
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  const imagensFiltradas = urlsImagens
  .map((src, index) => ({
    id: id[index],
    src,
    autor: autor[index],
    largura: largura[index],
    altura: altura[index]
  }))
  .filter((imagem) => 
    autorSelecionado === "todos" || imagem.autor === autorSelecionado
  );

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function toggleFavorito(id) {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  }

  const favoritosDetalhados = favoritos
    .map(favId => getById(favId))
    .filter(Boolean);


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

      const autores = dados.map(a => a.author)
      setAutor(autores)

      const autoresUnicos = [...new Set(dados.map(item => item.author))];
      setAutorUnico(autoresUnicos)
    }

    fetchProcesso()
  }, []);

  function getById(idBuscado){
    const indice = id.findIndex(item => item == idBuscado);

    if (indice !== -1){
      return {
        id: id[indice],
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
        <Header 
          setSecaoVisivel={setSecaoVisivel}
        />
      </header>

      <aside className="hidden lg:block">
        <Sidebar 
          setSecaoVisivel={setSecaoVisivel}
        />
      </aside>

      <section className="p-6 flex flex-col gap-3 lg:pr-22 lg:pl-84 lg:pt-20">
        <SectionFiltrar 
          autorSelecionado={autorSelecionado}
          aoSelecionarAutor={setAutorSelecionado}
          listaAutores={autorUnico}
        />

        {secaoVisivel === "galeria" && (
          <SectionFotos 
            onAbrir={(idSelecionado) => {
              setIdSelecionado(idSelecionado);
              setAbrir(true);
            }}
            imagem={imagensFiltradas}
            id={id}
            favoritos={favoritos}
          />
        )}
        
        {secaoVisivel === "favoritos" && (
          <SectionFavoritos 
            favoritosDetalhados={favoritosDetalhados}
            setAbrir={(idSelecionado) => {
              setIdSelecionado(idSelecionado);
              setAbrir(true);
            }}
          />
        )}
      </section>

      <ModalImagem 
        abrir={abrir}
        onFechar={() => setAbrir(false)}
        item={getById(idSelecionado)}
        isFavorito={favoritos.includes(idSelecionado)}
        onToggleFavorito={() => toggleFavorito(idSelecionado)}
      />
    </main>
  );
}