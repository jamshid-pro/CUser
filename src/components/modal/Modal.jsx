import { useState } from "react";
import "./Modal.css";
import { v4 as uuid4 } from "uuid";

function Modal({ addUser }) {
  const [user, setUser] = useState({
    id: uuid4(),
    image: "",
    firstname: "",
    lastname: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form className="modal-form" onSubmit={handleSubmit}>
          <h3 className="modal-form__h3">Create new user</h3>
          <hr />

          {/* Image Url */}
          <label htmlFor="image">Image Url</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, image: e.target.value };
              });
            }}
            type="url"
            id="image"
            placeholder="Enter img Url..."
            required
          />

          {/* FirstName */}
          <label htmlFor="firstname">FirstName</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, firstname: e.target.value };
              });
            }}
            type="text"
            id="firstname"
            placeholder="Enter firstname..."
            required
          />

          {/* LastName */}
          <label htmlFor="lastname">LastName</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, lastname: e.target.value };
              });
            }}
            type="text"
            id="lastname"
            placeholder="Enter lastname..."
            required
          />

          {/* Age */}
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, age: e.target.value };
              });
            }}
            type="number"
            id="age"
            placeholder="Enter age..."
            required
          />

          {/* Country */}
          <label htmlFor="from">From</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, from: e.target.value };
              });
            }}
            type="text"
            id="from"
            placeholder="Enter country..."
            required
          />

          {/* Job */}
          <label htmlFor="job">Job</label>
          <input
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, job: e.target.value };
              });
            }}
            type="text"
            id="job"
            placeholder="Enter job..."
            required
          />
          
          {/* Gender */}
          <div className="radio-btn">
            <h3>Gender</h3>
            <label htmlFor="male">Male</label>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, gender: e.target.value };
                });
              }}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="female">Female</label>
            <input
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, gender: e.target.value };
                });
              }}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
          </div>

          <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
