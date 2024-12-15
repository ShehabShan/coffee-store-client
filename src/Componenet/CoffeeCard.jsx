import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    coffeeName,
    amount,
    supplier,
    taste,
    category,
    details,
    photoURL,
  } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCoffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });

        console.log("deleted confirm");
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-4 p-4 justify-between">
      <div>
        <h2 className="card-title">{coffeeName}</h2>
        <p>Chif:- {amount}</p>
        <p>Supplier:- {supplier}</p>
        <p>Taste:- {taste}</p>
        <p>Category:- {category}</p>
        <p>Details:- {details}</p>
      </div>
      <div className="  ">
        <div className=" flex flex-col ">
          <button className="btn">view</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500 text-black"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
