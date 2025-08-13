import { Droppable } from "@hello-pangea/dnd";
import DragabbleCard from "./DragabbleCard";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;

interface IBoard {
    toDos: string[];
    boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
    return (
        <Droppable droppableId={boardId}>
            {(magic) => (
                <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((toDo, index) => (
                        <DragabbleCard key={toDo} toDo={toDo} index={index} />
                    ))}
                    {magic.placeholder}
                </Wrapper>
            )}
        </Droppable>
    );
}

export default Board;
