import emptyCartImage from "../utils/images/emprtyCart.png";

const EmptyCart = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    width: "80%",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "green",
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Empty Cart! Why not add something delicious?</h1>
      <img src={`${emptyCartImage}`} style={{ height: "440px" }} />
    </div>
  );
};

export default EmptyCart;
