import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const {_id, name, quantity, details, supplier, taste, category, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.names.value;
    const quantity = form.chefs.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name, quantity, supplier, taste, category, photo
    }
    console.log(updatedCoffee);

    //send data to backend
     fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if (data.modifiedCount> 0) {
        Swal.fire({
          title: 'Success',
          text: 'Coffee Updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
     })
}


  return (
    <div>
          <section className="p-10 bg-gray-800 text-gray-50">
            <form 
            onSubmit={handleUpdateCoffee}
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              
              <fieldset className="grid grid-cols-4 gap-6 p-6 w-[70%] mx-auto rounded-md shadow-sm bg-gray-900">

             
             <h2 className="text-3xl col-span-4 text-center font-bold">Update Coffee</h2>
             <p className="text-center col-span-4 px-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
             
                
                <div className="grid grid-cols-6 gap-4 col-span-full">
                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="username" className="text-sm">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="names"
                      placeholder="Enter coffee name"
                      defaultValue={name}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="website" className="text-sm">
                    Quantity
                    </label>
                    <input
                      id="chef"
                      type="text"
                      name="chefs"
                      defaultValue={quantity}
                      placeholder="Enter coffee Quantity"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="username" className="text-sm">
                    Supplier
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter supplier name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="website" className="text-sm">
                    Taste
                    </label>
                    <input
                      id="chef"
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter coffee taste"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="username" className="text-sm">
                    Category
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Enter Category name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3 ">
                    <label htmlFor="website" className="text-sm">
                    Details
                    </label>
                    <input
                      id="chef"
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Enter details chef"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-6 ">
                    <label htmlFor="website" className="text-sm">
                    Photo
                    </label>
                    <input
                      id="chef"
                      type="text"
                      name="photo"
                      defaultValue={photo}
                      placeholder="Enter photo url"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-6 ">
                    
                    <input
                      id="chef"
                      type="submit"
                      name="button"
                     
                      className="w-full py-2 border mt-4 rounded-md focus:ring focus:ring-opacity-75 text-[#331A15] bg-[#D2B48C] font-bold focus:ring-violet-400 border-gray-700"
                    />
                  </div>
                  
                 
                </div>
              </fieldset>
            </form>
          </section>
        </div>
  );
};

export default UpdateCoffee;