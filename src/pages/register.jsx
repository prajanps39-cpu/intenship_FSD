import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../component/registerschema";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerschema),
  });

  function onSubmit1(data) {
    console.log(data);
    alert("Register success");
    navigate("/");
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit(onSubmit1)}>
        <input
          type="text"
          placeholder="Enter username"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          type="number"
          placeholder="Enter age"
          {...register("age", { valueAsNumber: true })}
        />
        <p>{errors.age?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;