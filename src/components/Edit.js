import { useState } from "react";
import { db } from "../firebaseConfig";
import { ref, set, push, update } from "firebase/database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { removeEdit } from "./features/activeEdit";

function Edit() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState("");

  const navigate = useNavigate();

  const {
    key,
    name: editName,
    sectors: editSectors,
    editMode,
  } = useSelector((state) => state.activeEdit);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked && name && sectors && !editMode) {
      set(push(ref(db, "users/")), {
        checked,
        name,
        sectors,
      }).then(() => {
        setChecked(false);
        setName("");
        setSectors("");
      });

      alert("Data save successfully");
      dispatch(removeEdit());
      navigate("/");
    }

    if (checked && (name || editName) && (sectors || editSectors) && editMode) {
      update(ref(db, "users/" + key), {
        name: name || editName,
        sectors: sectors || editSectors,
      }).then(() => {
        setChecked(false);
        setName("");
        setSectors("");
      });

      alert("Data edited successfully");
      dispatch(removeEdit());
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h2>
        <div className="formgroup">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name || editName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <select
          multiple=""
          size="15"
          onChange={(e) => setSectors(e.target.value)}
        >
          <option value="Manufacturing">Manufacturing</option>
          <option value="Construction materials" className="tab-1">
            Construction materials
          </option>
          <option value="Electronics and Optics" className="tab-1">
            Electronics and Optics
          </option>
          <option value="Food and Beverage" className="tab-1">
            Food and Beverage
          </option>
          <option
            className="tab-2"
            value=" Bakery &amp; confectionery products"
          >
            Bakery &amp; confectionery products
          </option>
          <option className="tab-2" value="Beverages">
            Beverages
          </option>
          <option className="tab-2" value="Fish &amp; fish products">
            Fish &amp; fish products
          </option>
          <option className="tab-2" value="Meat &amp; meat products">
            Meat &amp; meat products
          </option>
          <option className="tab-2" value="Milk &amp; dairy products">
            Milk &amp; dairy products
          </option>
          <option className="tab-2" value="Other">
            Other
          </option>
          <option className="tab-2" value=" Sweets &amp; snack food">
            Sweets &amp; snack food
          </option>
          <option value="Machinary" className="Machinary">
            Machinary
          </option>
          <option className="tab-2" value="Machinary Components">
            Machinary Components
          </option>
          <option className="tab-2" value="Machinary equipment/tools">
            Machinary equipment/tools
          </option>
          <option className="tab-2" value="Manufacture of Machinary">
            Manufacture of Machinary
          </option>
          <option className="tab-2" value="Maritime">
            Maritime
          </option>
          <option className="tab-3" value="Aluminium and steel workboats">
            Aluminium and steel workboats
          </option>
          <option className="tab-3" value="Ship repair and conversion">
            Ship repair and conversion
          </option>
          <option className="tab-3" value="Boat building">
            Boat building
          </option>
        </select>

        <div className="check">
          <input
            type="checkbox"
            name="checkbox"
            id="terms"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="terms">Aggree to terms</label>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
        <br />
        <br />
        <br />
        <div>
          <Link to="/">
            <h3>Go to home page</h3>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Edit;
