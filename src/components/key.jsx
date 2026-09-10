import styled from "styled-components";

const CalKey = styled.button`
  height: 100px;
  width: 100px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  margin: 4px 2px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
   &:hover {
   background-color: darkgrey;
   cursor: pointer;
   transition: background-color 0.5s ease;
}
   
`;

function Key({
  num,
  setCurValue,
  curValue,
  isFunction,
  setPrevValue,
  prevValue,
  setResultValue,
  resultValue,
  setCurFunc,
  curFunc,
  setcurEquation,
}) {
  const operations = (curNum, prevNum) => {
    console.log(curNum, prevNum)
    switch (curFunc) {
      case "+":
        return Number(prevNum) + Number(curNum);
        break;
      case "-":
        return Number(prevNum) - Number(curNum);
        break;
      case "/":
        return Number(prevNum) / Number(curNum);
        break;
      case "X":
        return Number(prevNum) * Number(curNum);
        break;
    }
  };
  const calKeyHandle = () => {
    if (isFunction && num !== "=") {
          if(num === 'C'){
                setCurFunc("");
                setPrevValue("");
                setCurValue("");
                setResultValue("");
                setcurEquation("");
        }else{
                  setCurFunc(num);
                    setPrevValue(resultValue ? resultValue : curValue);
                    setCurValue("");
        }
          
    } else if (isFunction && num === "=") {
      const firstNum = Number(prevValue) == 0 ?  resultValue : Number(prevValue) ;
      const secondNum = Number(curValue);
      console.log(operations(secondNum, firstNum))
      setResultValue(operations(secondNum, firstNum));
      setcurEquation(`${firstNum} ${curFunc} ${secondNum}`)
      setPrevValue("");
    } else {
      if (resultValue) setResultValue("");
      setCurValue(curValue + num.toString());
    }
  };

  return <CalKey onClick={calKeyHandle}>{num}</CalKey>;
}

export default Key;
