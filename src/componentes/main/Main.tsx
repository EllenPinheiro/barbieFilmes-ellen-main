import { useState } from 'react'
import Lupa from '..//img/icone-lupa-rosa.png'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
  id:number,
  titulo:string,
  sinopse:string,
  imagem:string
}

export default function Main() {
  //let textodigitado = 'Barbie'
  //Hooks são funções do React que ajudam a gente a fazer tarefas
  //específicas
  const [texto,setTexto]=useState("")

  const filmes:FilmeType[] = [
      {
          id:1,
          titulo:'Barbie Moda e Magia',
          sinopse:"Em um conto de fadas fashion, Barbie é demitida do seu emprego, cai num golpe e decide viajar a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.",
          imagem:'/barbie_modaemagia.jpg'
      },
      {
          id:2,
          titulo:'Barbie Live Action',
          sinopse:'No fabuloso live-action da boneca mais famosa do mundo, acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear com as amigas e curtir intermináveis festas.',
          imagem:'/barbie (1).png'
      },
      {
        id:3,
        titulo:'Barbie Escola de Princesas',
        sinopse:'Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas. A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.',
        imagem:'/BarbieEscola.jpg'
    },
    {
      id:4,
      titulo:'Barbie e o Castelo de Diamante',
      sinopse:'Liana e Alexa saem da sua cabana humilde para vender flores na vila e acabam conhecendo Melody, a guardiã do Castelo de Diamante. As duas decidem ajudá-la a impedir que a chave do castelo seja roubada por Lídia, uma musa egoísta.',
      imagem:'/barbieCasteloDiamante.png'
  },
  {
    id:5,
    titulo:'Barbie Segredo das Fadas',
    sinopse:'Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken. Nesta aventura, serão revelados segredos e algumas amizades serão testadas.',
    imagem:'/Barbie_Fairy_Secret.png'
},
{
  id:6,
  titulo:'Barbie - A Sereia das Pérolas',
  sinopse:'Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas mudarem a cor, dançarem e brilharem.',
  imagem:'/barbieSereiaPerolas.jpg'
},
{
  id:7,
  titulo:'Barbie e as Sapatilhas Mágicas',
  sinopse:'Kristyn e Hailey vão parar em um mundo mágico do balé dominado pela diabólica Rainha das Neves. As duas bailarinas dançam seus balés favoritos para derrotar a rainha e realizar seus sonhos.',
  imagem:'/barbie-sapatilhasmagicas.png'
},
{
  id:8,
  titulo:'Barbie em Vida de Sereia',
  sinopse:'Barbie é uma campeã de surfe que vive com sua família em Malibu. Um dia, ela descobre um segredo de família: ela é uma sereia. Sua mãe, a rainha de Oceana, está em perigo e ela parte numa grande aventura no fundo do mar para salvá-la.',
  imagem:'/barbieEm_vidadesereia.jpg'
}
  ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
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

        {/* <Filme titulo='Barbie Live Action' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie (1).png' />
         <Filme titulo='Barbie Segredo das Fadas' sinopse='Mundos mágicos, fadas e cavalos voadores são alguns dos
         elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken.
          Nesta aventura, serão revelados segredos e algumas amizades serão testadas.' imagem='/Barbie_Fairy_Secret.png' />
        <Filme titulo='Barbie Moda e Magia' sinopse='Em um conto de fadas fashion, Barbie é demitida do seu emprego,
        cai num golpe e decide viajar a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.'
        imagem='/barbie_modaemagia.jpg' />
        <Filme titulo='Barbie Escola de Princesas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/BarbieEscola.jpg' />
        <Filme titulo='Barbie e o Castelo de Diamante' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieCasteloDiamante.png' />
        <Filme titulo='Barbie - A Sereia das Pérolas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieSereiaPerolas.jpg' />
        <Filme titulo='Barbie e as Sapatilhas Mágicas' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie-sapatilhasmagicas.png' />
        <Filme titulo='Barbie em Vida de Sereia' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbieEm_vidadesereia.jpg' />  */}
      </main>
    
    </>
  )
}