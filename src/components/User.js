import { useState } from "react";

const User = (props) => {
  console.log("user comp");
  return (
    <div className="user-card">
      <h1>Name: Shivam</h1>
      <h3>Contact: @shivam29</h3>
    </div>
  );
};

export default User;
