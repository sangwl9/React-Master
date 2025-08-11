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
    password: string;
    password1: string;
    extraError?: string;
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if (data.password !== data.password1) {
            setError("password1", { message: "Password are not same." }, { shouldFocus: true });
        }
        // setError("extraError", { message: "Server offline." });
    };
    console.log(errors);
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
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
                        validate: {
                            noNico: (value) => (value.includes("nico") ? "no nicos allowed" : true),
                            noNick: (value) => (value.includes("nick") ? "no nicos allowed" : true),
                        },
                    })}
                    placeholder="username"
                />
                <span>{errors?.username?.message as string}</span>
                <input
                    {...register("password", {
                        required: "write here",
                        minLength: 5,
                    })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short.",
                        },
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;
