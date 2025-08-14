import styled from "styled-components";
import {
    hover,
    motion,
    stagger,
    useMotionValue,
    useTransform,
    Variants,
} from "motion/react";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    const x = useMotionValue(0);
    const potato = useTransform(x, [-800, 0, 800], [2, 1, 0]);
    useEffect(() => {
        potato.on("change", () => console.log(potato.get()));
    }, [x]);
    return (
        <Wrapper>
            <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin></Box>
        </Wrapper>
    );
}

export default App;
