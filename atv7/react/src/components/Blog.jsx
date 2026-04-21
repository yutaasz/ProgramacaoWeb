import React from 'react';
import './Blog.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <h1>Blog de Astronomia</h1>
    </header>
  );
}

function Article() {
  return (
    <article className="article">
      <h2>O que tem dentro de uma estrela de neutrons?</h2>
      <time dateTime="2026-03-02">02 de Abril de 2026</time>
      <p>
        Dentro de uma estrela de nêutrons como as observadas após supernovas do tipo
        que deram origem à Nebulosa do Caranguejo, a coisa fica completamente fora
        da escala humana. A camada mais externa ainda parece "normal" no padrão cósmico:
        uma crosta sólida composta principalmente por núcleos atômicos extremamente comprimidos
        e um mar de elétrons livres. Conforme você desce alguns quilômetros para o interior,
        os prótons e elétrons começam basicamente a se fundir sob pressão absurda, formando
        nêutrons. A matéria ali é tão densa que uma colher de chá pesaria bilhões de toneladas.
        É o tipo de lugar onde a física clássica olha e diz: "não sei mais, chama a quântica".
      </p>
      <p>
        No núcleo, teoricamente, a situação fica ainda mais insana. A maior parte é composta por nêutrons
        em um estado chamado fluido degenerado, onde os efeitos da mecânica quântica dominam completamente
        o comportamento da matéria. Alguns modelos sugerem que, sob pressões ainda maiores, os próprios nêutrons
        podem "quebrar", liberando seus quarks e formando algo como um plasma de quarks e glúons. Existe até a
        hipótese de matéria estranha, com quarks do tipo "strange" estabilizando a estrutura interna. Nada disso
        foi observado diretamente, claro, porque ninguém vai perfurar uma estrela dessas com uma broca espacial.
        Então tudo o que temos são equações, observações indiretas e uma quantidade constrangedora de humildade
        diante do universo. E você aí reclamando de loop mental enquanto o cosmos dobra a matéria como se fosse
        papel.
      </p>
      <figure>
        <img src="https://tm.ibxk.com.br/2019/09/18/18002523457195.jpg" height="300px" alt="" />
        <figcaption>
          Imagem de uma estrela de nêutrons, onde a matéria é tão densa que desafia a compreensão humana.
        </figcaption>
      </figure>
    </article>
  );
}

function Aside() {
  return (
    <aside className="aside">
      <h3>Posts relacionados</h3>
      <ul className="aside-list">
        <li>
          <a href="#post1">O que seria um "fluido degenerado"?</a>
        </li>
        <li>
          <a href="#post2">Quarks estranhos</a>
        </li>
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Meu blog de Astronomia. Todos os direitos reservados.</p>
    </footer>
  );
}

export default function Blog() {
  return (
    <div className="blog">
      <Header />
      <main className="main">
        <Article />
      </main>
      <Aside />
      <Footer />
    </div>
  );
}