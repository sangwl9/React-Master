import { link } from "fs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    atom,
    useRecoilValue,
    useSetRecoilState,
    RecoilEnv,
    useRecoilState,
} from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

interface IForm {
    toDo: string;
}

interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { id: Date.now(), text: toDo, category: "TO_DO" },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", { required: "Please write a To Do" })}
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <li key={toDo.id}>{toDo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

// interface IForm {
//     email: string;
//     username: string;
//     password: string;
//     password1: string;
//     extraError?: string;
// }

// function ToDoList() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         setError,
//     } = useForm<IForm>({
//         defaultValues: {
//             email: "@naver.com",
//         },
//     });
//     const onValid = (data: IForm) => {
//         if (data.password !== data.password1) {
//             setError(
//                 "password1",
//                 { message: "Password are not same." },
//                 { shouldFocus: true },
//             );
//         }
//         // setError("extraError", { message: "Server offline." });
//     };
//     console.log(errors);
//     return (
//         <div>
//             <form
//                 style={{ display: "flex", flexDirection: "column" }}
//                 onSubmit={handleSubmit(onValid)}
//             >
//                 <input
//                     {...register("email", {
//                         required: "email is required",
//                         pattern: {
//                             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                             message: "Only naver.com emails allowed",
//                         },
//                     })}
//                     placeholder="Email"
//                 />
//                 <span>{errors?.email?.message as string}</span>
//                 <input
//                     {...register("username", {
//                         required: "username is required",
//                         minLength: { value: 5, message: "too short" },
//                         validate: {
//                             noNico: (value) =>
//                                 value.includes("nico")
//                                     ? "no nicos allowed"
//                                     : true,
//                             noNick: (value) =>
//                                 value.includes("nick")
//                                     ? "no nicos allowed"
//                                     : true,
//                         },
//                     })}
//                     placeholder="username"
//                 />
//                 <span>{errors?.username?.message as string}</span>
//                 <input
//                     {...register("password", {
//                         required: "write here",
//                         minLength: 5,
//                     })}
//                     placeholder="Password"
//                 />
//                 <span>{errors?.password?.message}</span>
//                 <input
//                     {...register("password1", {
//                         required: "Password is required",
//                         minLength: {
//                             value: 5,
//                             message: "Your password is too short.",
//                         },
//                     })}
//                     placeholder="Password1"
//                 />
//                 <span>{errors?.password1?.message}</span>
//                 <button>Add</button>
//                 <span>{errors?.extraError?.message}</span>
//             </form>
//         </div>
//     );
// }
