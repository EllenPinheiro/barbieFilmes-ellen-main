import './Header.css'
import BarbieLogo from '..//img/Barbie_Logo.svg.png';
import LinkNav from '../linknav/LinkNav'
function Header(){
    return (
        <header>
            <div>
                <img className='logo-topo' src={BarbieLogo} alt="" />
            </div>
            <nav>
                <ul>
           
                    <li>
                    <LinkNav url='/' texto='Home'/>
                    </li>
                    <li>
                    <LinkNav url='/noticias' texto='Notícias'/>
                    </li>
                    <li>
                    <LinkNav url='/sobre' texto='Sobre'/>
                    </li>
                    <li>
                    <LinkNav url='/contato' texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default  Header


