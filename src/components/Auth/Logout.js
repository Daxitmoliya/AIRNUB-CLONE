import React from "react";
import { auth } from "../../firebase"; 
import { useHistory, Link } from "react-router-dom";


function Logout() {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push("/login"); 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="logout">
      <div className="logout__container">
        <h2>Are you sure you want to logout?</h2>
        <div className="logout__buttons">
          <button onClick={handleLogout} className="logout__button logout__confirmButton">
            Yes, Logout
          </button>
          <Link to="/" className="logout__button logout__cancelButton">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
