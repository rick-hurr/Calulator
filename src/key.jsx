import styled from "styled-components";

const CalKey = styled.button`
height: 100px;
width:100px;
border: none;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;



function Key({num}) {

    return(
        <CalKey>{num}</CalKey>
     
    )


}

export default Key;
