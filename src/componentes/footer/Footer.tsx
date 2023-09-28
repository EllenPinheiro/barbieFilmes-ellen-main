import './Footer.css';
import BarbieLogo from '..//img/Barbie_Logo.svg.png';
import faceLogo from '..//img/facebook.png';
import instaLogo from '..//img/instagram.png';
import ttLogo from '..//img/twitter.png';
import ytLogo from '..//img/youtube.png';

function Footer(){
  return(
    <footer className="rodape">
      <div className='bloco1'>
        <img className="logo" src={BarbieLogo} alt="Barbie Logo" />
        <p className='p1'>Aqui no site da Barbie, você pode ser o que quiser! <br />Aproveite o mundo mágico de novidades da Barbie. <br /> Vem ser rosa com a gente!</p>
        <div className='redes-sociais'>
            <img className='face' src={faceLogo} alt="facebook" />
            <img className='insta' src={instaLogo} alt="instagram" />
            <img className='yt' src={ytLogo} alt="youtube" />
            <img className='tt' src={ttLogo} alt="twitter" />
        </div>
        <p className='p2'>© 2018 - 2023 AppEllen®</p>
      </div>

      <div className='blocao'>

      <div className='bloco-links'>
      <div className='bloco2'>
       <p>Produtos</p>
       <a href="#">Lojas Físicas</a>
       <a href="#">Sites Parceiros</a>
       <a href="#">Lançamentos</a>
       <a href="#">Seção Colecionador</a>
      </div>

      <div className='bloco3'>
      <p>Entretenimento</p>
       <a href="#">Músicas</a>
       <a href="#">Filmes</a>
       <a href="#">Jogos</a>
       <a href="#">Vídeos Especiais</a>
      </div>

      <div className='bloco4'>
       <p>História</p>
       <a href="#">Tudo sobre a Barbie</a>
       <a href="#">Linha do Tempo</a>
       <a href="#">Sobre nós</a>
       <a href="#"></a>
      </div>
      </div>

      <div className='parte-embaixo'>
      
      <a href="#">Termos de Uso</a>
      <a href="#">Políticas de Privacidade</a>
      <p className='p-idioma'>֍ Português-BR ⌵</p>
      </div>
      </div>
      
    </footer>
  )
}

export default  Footer