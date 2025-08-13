import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { Snapshot } from "recoil";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
    padding: 10px 10px;
    background-color: ${(props) =>
        props.isDragging ? "#74b9ff" : props.theme.cardColor};
    border-radius: 5px;
    margin-bottom: 5px;
    box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDragabbleCard {
    toDo: string;
    index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCard) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
