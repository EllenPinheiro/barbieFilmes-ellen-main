import { useState, useEffect } from 'react'
import Lupa from '..//img/icone-lupa-rosa.png'
import Filme from './../filme/Filme'
import axios from 'axios'
import './Main.css'

type FilmeType = {
  id:number,
  titulo:string,
  sinopse:string,
  imagem:string
}

const URL_API = "http://localhost:3000/filmes"; 

export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscaMovies = async () => {
      try {
        const resposta = await axios.get<FilmeType[]>(URL_API);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:');
      }
    };

    buscaMovies();
  }, []); 


    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme:</p>
                <div className='quadradinho'>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                <div>
                       <img className='lupa' src={Lupa} alt="" />
                </div>
                </div>
                {texto && <p className='text-resultados'>Exibindo resultados para: {texto} </p>}
            </div>
            <main className="content-main">

            {filmes.filter((filme) => {
    const textoSemEspacos = texto.replace(/\s/g, ''); // Remove espaços em branco do texto
    const tituloSemEspacos = filme.titulo.replace(/\s/g, ''); // Remove espaços em branco do título do filme
    return tituloSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     })
                     .map((filme) => (
                     <Filme key={filme.id} titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem} />
                     ))}
      </main>

    </>
  )
}