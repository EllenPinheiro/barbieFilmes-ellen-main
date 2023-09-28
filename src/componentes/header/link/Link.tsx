import {Link as LinkNav} from 'react-router-dom'

type LinkProps ={
    url:string,
    texto:string
}


function Link(props:LinkProps){

    return(
        <LinkNav to={props.url}>{props.texto}</LinkNav>
        //<a href={props.url}>{props.texto}</a>
    )
}
export default Link
    