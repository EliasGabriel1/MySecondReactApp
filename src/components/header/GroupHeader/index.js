import Ola from './Ola/index'
import ButtonLike from './ButtonLike/index'
import './index.css'
import Dropdown from '../dropdown/index'

export default function GroupHeader(props){
    return(
        <div className="group-header">
            <div className="dropdown">
            <ButtonLike/>
            <Dropdown/>
            </div>
            <Ola NomePessoa={props.NomePessoa}/>
        </div>
    )
}