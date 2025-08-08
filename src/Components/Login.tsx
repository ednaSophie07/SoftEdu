import {useState} from 'react'

function Login(){
    const [isActive,setIsActive] = useState(false)
    function handler(){
        setIsActive((valorAtualDoIsActive)=>!valorAtualDoIsActive)
    }
    return <h1 style={{backgroundColor:isActive?"red":"blue"}} onClick={handler}> Tela Inicial1 </h1>
}
export default Login