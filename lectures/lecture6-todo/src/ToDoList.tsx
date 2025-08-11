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

interface IForm {
    email: string;
    username: string;
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message as string}</span>
                <input
                    {...register("username", {
                        required: "username is required",
                        minLength: { value: 5, message: "too short" },
                    })}
                    placeholder="username"
                />
                <span>{errors?.username?.message as string}</span>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
