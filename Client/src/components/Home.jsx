import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
export default function MangerHomePage() {
  const [UserData, setUserData] = useState(null);
  const [passportID, setpassportID] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const ADDpassportID = location.state?.passportID;
  const handleClick = () => {
    fetch("http://localhost:5001/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setUserData(res);
      });
  };
  useEffect(() => {
    handleClick();
  }, []);
  const GetUserById = () => {
    fetch(`http://localhost:5001/api/users/${passportID}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setUserData(res);
      });
  };

  const handelAdd = () => {
    navigate("/addUser");
  };

  const handelEdit = () => {
    navigate("/editUser");
  };
  const handleChangepassportId = (e) => {
    setpassportID(e.target.value);
  };
  // const handelUpdate = () => {
  //   let user = { passportID: passportID };

  //   if (email !== "") {
  //     user = Object.assign(user, { email: email });
  //   }

  //   if (totalCash !== "") {
  //     user = Object.assign(user, { totalCash: totalCash });
  //   }

  //   if (totalCredit !== "") {
  //     user = Object.assign(user, { totalCredit: totalCredit });
  //   }

  //   console.log("user", user);

  //   fetch(`http://localhost:5001/api/users/${passportID}`, {
  //     method: "PUT",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res", res);
  //     });
  // };

  const handleDelete = () => {
    fetch(`http://localhost:5001/api/users/${passportID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
    console.log("iam here");
  };

  return (
    <>
      <h1> Manger Home Page</h1>
      <input
        type="text"
        value={passportID}
        onChange={handleChangepassportId}
        placeholder="passport id "
      ></input>
      <button onClick={handelAdd}> add </button>

      <button onClick={GetUserById}>Get user by ID</button>
      {/* <button onClick={handelUpdate}> Update </button> */}
      <button onClick={handelEdit}> Edit User</button>
      <button onClick={handleDelete}> Delete User </button>

      <table>
        <thead>
          <tr>
            <th>Passport ID</th>
            <th>Email</th>
            <th>Total Cash</th>
            <th>Total Credit</th>
          </tr>
        </thead>
        <tbody>
          {UserData &&
            UserData.map((user) => (
              <tr key={user._id}>
                <td>{user.passportID}</td>
                <td>{user.email}</td>
                <td>{user.totalCash}</td>
                <td>{user.totalCredit}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
