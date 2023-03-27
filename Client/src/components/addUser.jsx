import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const [passportID, setpassportID] = useState("");
  const [email, setemail] = useState("");
  const [totalCash, settotalCash] = useState("");
  const [totalCredit, settotalCredit] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setemail(e.target.value);
  };
  const handleChangepassportId = (e) => {
    setpassportID(e.target.value);
  };
  const handleChangeTotalCash = (e) => {
    settotalCash(e.target.value);
  };
  const handleChangeTotalCredit = (e) => {
    settotalCredit(e.target.value);
  };
  const handelAdd = () => {
    navigate("/", { state: { passportID } });
    const user = {
      passportID: passportID,
      email: email,
      totalCash: totalCash,
      totalCredit: totalCredit,
    };
    console.log("client", user);
    fetch("http://localhost:5001/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
  };

  return (
    <>
      <input
        type="text"
        value={passportID}
        onChange={handleChangepassportId}
        placeholder="passport id "
      ></input>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        value={totalCash}
        onChange={handleChangeTotalCash}
        placeholder="totalCash"
      />
      <input
        type="text"
        value={totalCredit}
        onChange={handleChangeTotalCredit}
        placeholder="totalCredit"
      />
      <button onClick={handelAdd}> Add user </button>
    </>
  );
}
