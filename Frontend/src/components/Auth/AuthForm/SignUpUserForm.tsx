import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from 'react-redux';
import { useRegisterMutation } from "../../../slice/ApiSlice/AuthApiSlice";
import { useNavigate } from "react-router-dom";



const SignUpUserForm = () => {

    const { companyInfo } = useSelector((state: any) => state.company);

    const navigate = useNavigate();

    const [addUser, { isLoading }] = useRegisterMutation();


    const schema = z.object({
        firstName: z.string().min(1, 'Firstname is required'),
        lastName: z.string().min(1, 'Lastname is required'),
        email: z.string().email(),
        phoneNumber: z.string().min(1, 'Phonenumber is required'),
        password: z.string().min(6, 'Password must contain at least 6 characters'),
        role: z.string()
    })

    type FormFields = z.infer<typeof schema>

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: companyInfo.companyEmail,
            role: "Admin"
        },
        resolver: zodResolver(schema)
    })


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await addUser(data).unwrap();
            navigate('/auth');
        } catch (error) {
            setError("root", {
                message: "Something went wrong: Unable to add user"
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.root && (
                <p className="text-red-500">{errors.root.message}</p>
            )}
            <div className="input-container flex flex-col gap-3">

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <input
                        {...register("firstName")}
                        type="text"
                        className="grow"
                        placeholder="Firstname"
                    />
                </label>
                {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <input
                        {...register("lastName")}
                        type="text"
                        className="grow"
                        placeholder="Lastname"
                    />
                </label>
                {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <MdEmail />
                    <input
                        {...register("email")}
                        type="email"
                        disabled
                        className="grow"
                    />
                </label>
                {errors.email && (
                    <p>{errors.email.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <input
                        {...register("phoneNumber")}
                        type="text"
                        className="grow"
                        placeholder="Phone number"
                    />
                </label>
                {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <RiLockPasswordFill />
                    <input
                        {...register("password")}
                        type="password"
                        className="grow"
                    />
                </label>
                {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
                    <input
                        {...register("role")}
                        type="text"
                        disabled
                        className="grow"
                    />
                </label>
                {errors.role && (
                    <p>{errors.role.message}</p>
                )}

                {isLoading && <p>Loading...</p>}

                <div className="input-action">
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">
                        {isSubmitting ? "Loading..." : "Register"}
                    </button>
                </div>
            </div>
        </form>

    );
};

export default SignUpUserForm;
