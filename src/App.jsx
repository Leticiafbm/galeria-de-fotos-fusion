import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SectionFiltrar } from "./components/SectionFiltrar";
import { SectionFotos } from "./components/SectionFotos";
import { ModalImagem } from "./components/ModalImagem";

export const App = () => {
  const [urlsImagens, setUrlsImagens] = useState([]);

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
    }

    fetchProcesso()
  }, []);

  return(
    <main className="w-screen h-full bg-beige flex flex-col gap-12 relative">
      <header className="lg:hidden">
        <Header />
      </header>

      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <section className="p-6 flex flex-col gap-3 lg:pr-22 lg:pl-84 lg:pt-20">
        <SectionFiltrar />
        <SectionFotos 
          urlsImagens={urlsImagens}
        />
      </section>

      <ModalImagem />
    </main>
  );
}