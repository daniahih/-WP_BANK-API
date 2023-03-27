import { useState } from "react";
import "../styles/EditUser.css";
export default function EditUser() {
  const [passportID, setpassportID] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setwithdrawAmount] = useState("");
  const [destinationUser, setdestinationUser] = useState("");
  const [transferAmount, settransferAmount] = useState("");
  const [updatecredit, setupdatecredit] = useState("");
  const handleChangepassportId = (e) => {
    setpassportID(e.target.value);
  };
  const handleDeposit = () => {
    fetch(`http://localhost:5001/api/users/${passportID}/deposit`, {
      method: "PUT",
      body: JSON.stringify({ cash: depositAmount }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Server response:", res);
      });
  };
  const handelUpdateCridit = () => {
    fetch(`http://localhost:5001/api/users/${passportID}/updateCredit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credit: updatecredit }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
  };
  const handelwithdrawAmount = () => {
    fetch(`http://localhost:5001/api/users/${passportID}/withdrawMoney`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ withdrawAmount: withdrawAmount }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
  };
  const handelTransfer = () => {
    fetch(`http://localhost:5001/api/users/${passportID}/Transfer`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destinationUser: destinationUser,
        transferAmount: transferAmount,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="passport-id">Passport ID</label>
        <input
          type="text"
          id="passport-id"
          value={passportID}
          onChange={handleChangepassportId}
          placeholder="Enter passport id"
        />
      </div>

      <div className="form-group">
        <label htmlFor="deposit-amount">Deposit Amount</label>
        <input
          type="text"
          id="deposit-amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          placeholder="Enter deposit amount"
        />
      </div>
      <button onClick={handleDeposit}>Deposit</button>

      <div className="form-group">
        <label htmlFor="update-credit">Update Credit</label>
        <input
          type="text"
          id="update-credit"
          value={updatecredit}
          onChange={(e) => setupdatecredit(e.target.value)}
          placeholder="Enter update credit amount"
        />
      </div>

      <button onClick={handelUpdateCridit}>Update Credit</button>

      <div className="form-group">
        <label htmlFor="withdraw-amount">Withdraw Amount</label>
        <input
          type="text"
          id="withdraw-amount"
          value={withdrawAmount}
          onChange={(e) => setwithdrawAmount(e.target.value)}
          placeholder="Enter withdraw amount"
        />
      </div>
      <button onClick={handelwithdrawAmount}>Withdraw</button>

      <div className="form-group">
        <label htmlFor="destination-user">Destination User</label>
        <input
          type="text"
          id="destination-user"
          value={destinationUser}
          onChange={(e) => setdestinationUser(e.target.value)}
          placeholder="Enter destination user"
        />
      </div>

      <div className="form-group">
        <label htmlFor="transfer-amount">Transfer Amount</label>
        <input
          type="text"
          id="transfer-amount"
          value={transferAmount}
          onChange={(e) => settransferAmount(e.target.value)}
          placeholder="Enter transfer amount"
        />
      </div>

      <button onClick={handelTransfer}>Transfer</button>
    </>
  );
}
