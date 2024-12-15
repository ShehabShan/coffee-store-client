import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SingIn = () => {
  const { singInUsers } = useContext(AuthContext);
  console.log(singInUsers);
  const [user, setUser] = useState("");

  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    singInUsers(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          setUser(result.user.email);
          form.reset();
        }

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl text-red-500">{user}</h1>
          <h1 className="text-5xl font-bold">Sing In!</h1>
        </div>
        <form
          onSubmit={handleSingIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SingIn</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
