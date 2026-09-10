import "./App.css";
import Key from "./components/key.jsx";
import { useState } from "react";
import styled from "styled-components";

const keys = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const CalLabel = styled.div`
  background-color: grey;
  width: 100%;
  min-height: 40px;
`;
const PrevLabel = styled.div`
  background-color: dark grey;
  width: 100%;
  min-height: 40px;
`;

const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`
const BorderDiv = styled.div`
  border-radius: 5px;
  background-color: grey;
  padding: 30px
`
const FlexCol = styled.div`
  flex: 1;
`

function App() {
  const [curValue, setCurValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [curFunc, setCurFunc] = useState("");
  const [curEquation, setcurEquation] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
         
    <BorderDiv>
           <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Calculator</h1>
    </div>
          <PrevLabel>{curEquation ? curEquation :`${prevValue} ${curFunc}`}</PrevLabel>
          <CalLabel>{resultValue ? resultValue : curValue }</CalLabel>
          
          <FlexGrid>
            {keys.map((w) => {
              return (
                <>
                  <FlexCol>
                    <Key
                      num={w}
                      setCurValue={setCurValue}
                      curValue={curValue}
                      setResultValue={setResultValue}
                      resultValue={resultValue}
                    />
                  </FlexCol>
                </>
              );
            })}
            <Key
              num={"+"}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              setPrevValue={setPrevValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setCurFunc={setCurFunc}
            />
            <Key
              num={"-"}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setPrevValue={setPrevValue}
              setCurFunc={setCurFunc}
            />
            <Key
              num={"X"}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setPrevValue={setPrevValue}
              setCurFunc={setCurFunc}
            />
            <Key
              num={"/"}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setPrevValue={setPrevValue}
              setCurFunc={setCurFunc}
            />
            <Key
              num={"="}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setPrevValue={setPrevValue}
              setCurFunc={setCurFunc}
              curFunc={curFunc}
              setcurEquation={setcurEquation}
              curEquation={curEquation}
            />
            <Key
              num={"C"}
              isFunction={true}
              resultValue={resultValue}
              setResultValue={setResultValue}
              prevValue={prevValue}
              setCurValue={setCurValue}
              curValue={curValue}
              setPrevValue={setPrevValue}
              setCurFunc={setCurFunc}
              setcurEquation={setcurEquation}
            />
          </FlexGrid>
          </BorderDiv>
        </div>
      </header>
    </div>
  );
}

export default App;
