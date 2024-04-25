import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees,setCoffees }) => {
  const {_id, name, quantity, supplier, taste, category, photo } = coffee;
  

  const handleCoffeeDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount>0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success"

            });
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining)
          }
        })

        
      }
    });

    // fetch(`http://localhost:5000/coffee/${_id}`, {
    //   method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // })
  }

  return (
    <div className="card card-side justify-center items-center bg-base-100 shadow-xl">
      <figure>
        <img className="w-80 p-8" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <div>
        <h2 className="card-title">Name: {name}</h2>
        <p><b className="mr-3">Quantity:</b> {quantity}</p>
        <p><b className="mr-3">Supplier:</b> {supplier}</p>
        <p><b className="mr-3">Taste:</b> {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleCoffeeDelete(_id)} className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
