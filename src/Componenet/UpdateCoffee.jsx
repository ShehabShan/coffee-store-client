import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeInfo = useLoaderData();

  const {
    _id,
    coffeeName,
    amount,
    supplier,
    taste,
    category,
    details,
    photoURL,
  } = coffeeInfo;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.name.value;
    const amount = form.amount.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photo.value;

    const updateCoffee = {
      coffeeName,
      amount,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    fetch(`http://localhost:5000/addCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successed",
            text: `${
              coffeeName.includes("coffee")
                ? coffeeName
                : `${coffeeName} coffee`
            }  updated Success`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  console.log(coffeeInfo);

  return (
    <div className="m-4">
      <h2>Update Coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* coffee name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter coffee name"
              className="input input-bordered"
              name="name"
              defaultValue={coffeeName}
            />
          </label>
        </div>

        {/* amount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter coffee amount"
              className="input input-bordered"
              name="amount"
              defaultValue={amount}
            />
          </label>
        </div>
        {/* supplier */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter coffee supplier"
              className="input input-bordered"
              name="supplier"
              defaultValue={supplier}
            />
          </label>
          {/* taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered"
                name="taste"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter coffee category"
              className="input input-bordered"
              name="category"
              defaultValue={category}
            />
          </label>
        </div>

        {/* Details */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter coffee details"
              className="input input-bordered"
              name="details"
              defaultValue={details}
            />
          </label>
        </div>
        {/* photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered"
              name="photo"
              defaultValue={photoURL}
            />
          </label>
        </div>
        <input
          className="btn mt-4 bg-blue-300 font-bold text-xl text-fuchsia-700"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
