import React from "react";
import Noticia from "./components/noticia/noticia";


function App() {
let noticias = [
    {imagem: '',
      titulo:'a',
    texto: 'a'},
    {imagem: '',
      titulo:'b',
    texto: 'b'}
  ]
  

  return (
    <div className="container">
      <Noticia titulo={noticias[0].titulo} texto={noticias[0].texto} imagem="https://areanews.com.br/wp-content/uploads/2022/08/Raphael-Veiga-1.jpg"/>
      <Noticia titulo={noticias[1].titulo} texto={noticias[1].texto} imagem="https://areanews.com.br/wp-content/uploads/2022/08/Raphael-Veiga-1.jpg"/>
    </div>
  );
}

export default App;
