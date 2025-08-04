import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//     display: flex;
// `;

// const Box = styled.div`
//     background-color: ${(props) => props.bgColor};
//     width: 100px;
//     height: 100px;
// `;

// const Circle = styled(Box)`
//     border-radius: 50%;
// `;

// const Btn =  styled.button`
//     color: white;
//     background-color: tomato;
//     border: 0;
//     border-radius: 15px;
// `;

// const Input = styled.input.attrs({
//     required: true,
//     minLength: 10
// })`
//     background-color: tomato;
// `;

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const rotationAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        border-radius: 100px;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

const Emoji = styled.span`
    font-size: 36px;
`;

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Emoji} {
        &:hover{
            font-size: 98px;
        }
        &:active {
            opacity: 0;
        }
    };
`;

function App() {
  return (
    // <Father as="header">
    //     <Box bgColor="teal" />
    //     <Circle bgColor="tomato" />
    //     <Btn>Log in</Btn>
    //     <Btn as="a" href="/">Log in</Btn>
    //     <Input />
    //     <Input />
    //     <Input />
    //     <Input />
    // </Father>
    <Wrapper>
        <Box>
            <Emoji>😊</Emoji>
        </Box>
        <Emoji>❤️</Emoji>
    </Wrapper>
  );
}

export default App;
