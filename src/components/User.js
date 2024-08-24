const User = (props) => {
  console.log(props);
  console.log(props.userInfo);
  console.log(props.extraParam);
  return (
    <div className="user-card">
      <h1>Name: Shivam</h1>
      <h2>Location: Kanpur</h2>
      <h3>Contact: @shivam29</h3>
    </div>
  );
};

export default User;
