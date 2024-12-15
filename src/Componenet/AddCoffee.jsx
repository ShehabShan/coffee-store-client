import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.name.value;
    const amount = form.amount.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photo.value;

    const newCoffee = {
      coffeeName,
      amount,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    fetch("http://localhost:5000/addCoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "New Coffee Added Success",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    console.log(newCoffee);
  };

  return (
    <div className="m-4">
      <form onSubmit={handleAddCoffee}>
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
            />
          </label>
        </div>
        <input
          className="btn mt-4 bg-blue-300 font-bold text-xl text-fuchsia-700"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
