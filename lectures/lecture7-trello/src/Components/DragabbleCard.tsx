import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
    margin-bottom: 5px;
`;

interface IDragabbleCard {
    toDo: string;
    index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCard) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic) => (
                <Card
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
