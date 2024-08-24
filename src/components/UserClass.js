class UserClass extends React.Component {
  constructor(props) {
    super(props); // mandatory
    console.log(props);
    this.state = {
      count: 1,
      count2: 2,
      color: "red",
    };
  }
  render() {
    let { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Name: Shivam</h1>
        <h2>Location: Kanpur</h2>
        <h3>Contact: @shivam29</h3>
        <p>Count : {count}</p>
        <p>Count2 : {count2}</p>
        <button
          onClick={() => {
            console.log("clicked");
            // this.state.count++; //! this not how we modify a state in class based, never ever directlyupdate ur state variables (even in func component we dont directly do this)
            this.setState({
              count: count + 1,
              count2: count2 + 2,
            });
            // color will remain as it is. Whatever state vaariables u pass only those will be updated. And reconciliation will happen.
            // we can use setState anywhere in the class
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;