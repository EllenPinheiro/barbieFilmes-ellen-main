import './Header.css'
import BarbieLogo from '..//img/Barbie_Logo.svg.png';
import Link from './link/Link'

function Header(){
    return (
        <header>
            <div>
                <img className='logo-topo' src={BarbieLogo} alt="" />
            </div>
            <nav>
                <ul>
           
                    <li>
                    <Link url='/' texto='Home'/>
                    </li>
                    <li>
                    <Link url='/noticias' texto='Notícias'/>
                    </li>
                    <li>
                    <Link url='/sobre' texto='Sobre'/>
                    </li>
                    <li>
                    <Link url='/contato' texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default  Header


