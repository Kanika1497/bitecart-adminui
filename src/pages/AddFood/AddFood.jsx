import React, { useEffect, useState } from "react";
import { assests } from "../../assets/assests";
import axios from "axios";
import { addFood } from "../../services/foodService";
import { toast } from "react-toastify";

function AddFood() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Please select image");
      return;
    }
    try {
      await addFood(data, image);
      toast.success("Food Added Successfully!");
      setData({
        name: "",
        description: "",
        price: "",
        category: "Biryani",
      });
    } catch (error) {
        toast.error("Error Adding Food !");
    }
  };
  return (
    <div className="mx-2 mt-2">
      <div className="row ">
        <div className="card col-md-4 ">
          <form className="card-body" onSubmit={onSubmitHandler}>
            <h2 className="text-center mb-4">Add Food</h2>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <img
                  src={image ? URL.createObjectURL(image) : assests.upload}
                  alt=""
                  width={98}
                ></img>
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                value={data.name}
                id="name"
                name="name"
                placeholder="Pasta"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="5"
                placeholder="Write content here"
                required
                onChange={onChangeHandler}
                value={data.description}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="form-control"
                onChange={onChangeHandler}
                value={data.category}
              >
                <option value="Biryani">Biryani</option>
                <option value="Cake">Cake</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Rolls">Rolls</option>
                <option value="Salad">Salad</option>
                <option value="Ice cream">Ice cream</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="price"
                placeholder="&#8377;200"
                required
                onChange={onChangeHandler}
                value={data.price}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
