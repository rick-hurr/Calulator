import styled from "styled-components";

const CalKey = styled.button`
  height: 100px;
  width: 100px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
}) {
  const operations = (curNum, prevNum) => {
    switch (curFunc) {
      case "+":
        return prevNum + curNum;
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
        }else{
                  setCurFunc(num);
                    setPrevValue(resultValue ? resultValue : curValue);
                    setCurValue("");
        }
          
    } else if (isFunction && num === "=") {
      const firstNum = Number(prevValue);
      const secondNum = Number(curValue);
      setResultValue(operations(secondNum, firstNum));
      setCurFunc("");
      setPrevValue("");
      setCurValue("");
    } else {
      if (resultValue) setResultValue("");
      setCurValue(curValue + num.toString());
    }
  };

  return <CalKey onClick={calKeyHandle}>{num}</CalKey>;
}

export default Key;
