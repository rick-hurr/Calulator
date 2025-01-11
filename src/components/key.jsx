import { useEffect } from "react";
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



function Key({num,setCurValue,curValue, isFunction, setOperation, setPrevValue,prevValue}) {
    const calKeyHandle = () =>{
        if(isFunction && num !== '='){
            setPrevValue(curValue)
            setCurValue('')
            setOperation(num)
        }
        else if(isFunction && num == '='){
            const firstNum = Number(prevValue)
            const secondNum = Number(curValue)    
            setCurValue(firstNum + secondNum)
            setPrevValue('')
        }
        else{
           // if(prevValue)
            setCurValue(curValue + num.toString())
        }
        
    }
    

    return(
        <CalKey onClick={calKeyHandle}>{num}</CalKey>
     
    )


}

export default Key;
