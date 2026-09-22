import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <form
      style={{
        backgroundColor: "lightgray",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userData);
        setUserData({ name: "", email: "" });
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="name"
          style={{
            marginRight: "10px",
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          style={{ padding: "5px", fontSize: "16px", outline: "none" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="email"
          style={{
            marginRight: "10px",
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          style={{ padding: "5px", fontSize: "16px", outline: "none" }}
        />
      </div>
      <div>
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
