import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UserEdit = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const userInfo = {
      name,
      email,
    };

    fetch(`http://localhost:5000/users/${users._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(users);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update User!</h1>
        </div>
        <form
          onSubmit={handleEdit}
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
                defaultValue={users.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                defaultValue={users.name}
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
