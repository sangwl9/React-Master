import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList (){
//     const [toDo, setToDo] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const { currentTarget: { value } } = event;
//         setToDo(value);
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo);
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList (){
    const { register, handleSubmit, formState } = useForm();
    const onValid = (data:any) => {
        console.log(data);
    }
    console.log(formState.errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {required: "email is required"})} placeholder="Email" />
                <input {...register("username", {required: true, minLength: {value: 5, message: "too short"}})} placeholder="username" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;