import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const LoginForm = () => {

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

type FormFields = z.infer<typeof schema>

const {
  register,
  handleSubmit,
  setError,
  formState:{errors, isSubmitting},
} = useForm<FormFields>({
  defaultValues: {
    email: "oxxo@mail.com"
  },
  resolver:zodResolver(schema)
})


const onSubmit : SubmitHandler<FormFields> = async (data) => {
  try {
    console.log(data)
  } catch (error) {
    setError("root", {
      message: "Invalid email and password"
    })
  }
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
      <p>{errors.root.message}</p>
    )}
    <div className="input-container flex flex-col gap-3">

    <label className="input input-bordered flex items-center gap-2 py-3 px-3 border rounded-md">
    <MdEmail />
      <input 
      {...register("email")}
      type="email" 
      className="grow" 
      />
    </label>
    {errors.email && (
      <p>{errors.email.message}</p>
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
      <p>{errors.password.message}</p>
    )}

    <div className="input-action">
    <button disabled={isSubmitting} type="submit" className="btn btn-primary">
        {isSubmitting ? "Loading..." : "Login"}
    </button>
    </div>
  </div>
  </form>
  
  );
};

export default LoginForm;
