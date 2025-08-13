import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(magic) => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                    >
                                        <span {...magic.dragHandleProps}>
                                            1.{" "}
                                        </span>
                                        One
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                    >
                                        <span {...magic.dragHandleProps}>
                                            2.{" "}
                                        </span>
                                        Two
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
