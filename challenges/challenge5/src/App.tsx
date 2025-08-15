import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 37vw;
    gap: 10px;
`;

const Box = styled(motion.div)`
    width: 350px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Switch = styled.button`
    position: absolute;
    bottom: 150px;
    background-color: white;
    padding: 7px 5px;
    border: none;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const overlay: Variants = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const hoverBox: Variants = {
    hover: (id: string | null) => ({
        scale: 1.2,
        transformOrigin:
            id === "1"
                ? "bottom right"
                : id === "2"
                ? "bottom left"
                : id === "3"
                ? "top right"
                : "top left",
    }),
};

function App() {
    const [id, setId] = useState<null | string>(null);
    const [clicked, setClicked] = useState(false);
    const toggleClicked = () => setClicked((prev) => !prev);
    return (
        <Wrapper>
            <Grid>
                <AnimatePresence custom={id}>
                    <Box
                        custom={"1"}
                        variants={hoverBox}
                        onClick={() => setId("1")}
                        key={"1"}
                        layoutId={"1"}
                        whileHover="hover"
                    />
                    <Box
                        custom={"2"}
                        variants={hoverBox}
                        onClick={() => setId("2")}
                        key={"2"}
                        layoutId={"2"}
                        whileHover="hover"
                    >
                        {!clicked ? (
                            <Circle
                                layoutId="circle"
                                style={{ borderRadius: 50 }}
                            />
                        ) : null}
                    </Box>
                    <Box
                        custom={"3"}
                        variants={hoverBox}
                        onClick={() => setId("3")}
                        key={"3"}
                        layoutId={"3"}
                        whileHover="hover"
                    >
                        {clicked ? (
                            <Circle
                                layoutId="circle"
                                style={{ borderRadius: 50 }}
                            />
                        ) : null}
                    </Box>
                    <Box
                        custom={"4"}
                        variants={hoverBox}
                        onClick={() => setId("4")}
                        key={"4"}
                        layoutId={"4"}
                        whileHover="hover"
                    />
                </AnimatePresence>
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        variants={overlay}
                        onClick={() => setId(null)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Box
                            layoutId={id}
                            style={{ backgroundColor: "white" }}
                        />
                    </Overlay>
                ) : null}
            </AnimatePresence>
            {!clicked ? (
                <Switch onClick={toggleClicked}>Switch</Switch>
            ) : (
                <Switch
                    onClick={toggleClicked}
                    style={{ fontSize: "15px", color: "rgb(196, 91, 50)" }}
                >
                    Switch
                </Switch>
            )}
        </Wrapper>
    );
}

export default App;
