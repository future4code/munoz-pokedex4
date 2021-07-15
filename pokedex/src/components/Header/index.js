import React from 'react'
import styled from 'styled-components';

const ContainerTitulo = styled.div ` 
display: flex;
justify-content: center;
background-color: #FF4040;
`

 export function Header () {

    return(
        <ContainerTitulo>
            <img src= "https://fontmeme.com/permalink/210711/9b0c1bc177818f22c277288ff4011176.png" ></img>
        </ContainerTitulo>
    )
}
export default Header;