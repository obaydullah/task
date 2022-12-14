import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { ref, onValue, remove } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { activeEdit, removeEdit } from "./features/activeEdit";
import { useDispatch } from "react-redux";

export default function Home() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((element) => {
        arr.push({ ...element.val(), key: element.key });
        setUsers(arr);
      });
    });
  }, []);

  const handleEdit = (user) => {
    dispatch(activeEdit(user));
  };

  const handleAddUser = () => {
    navigate("/edit");
    dispatch(removeEdit());
  };

  const handleDelete = (item) => {
    remove(ref(db, "users/" + item.key));
  };

  return (
    <>
      <div className="user-btn-div">
        <button className="add-user" onClick={handleAddUser}>
          Add user{" "}
        </button>
      </div>

      <div className="container">
        {users.map((user, index) => (
          <div className="userbox" key={index} onClick={() => handleEdit(user)}>
            <h3>Name : {user.name}</h3>
            <h4>Sectors: {user.sectors}</h4>

            <Link to="/edit">Edit</Link>
            <button className="delete-btn" onClick={() => handleDelete(user)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
