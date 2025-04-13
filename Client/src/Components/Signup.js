import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "#f5f5f5",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    fontSize: "0.9rem",
    color: "#555",
  },
  input: {
    padding: "0.6rem",
    fontSize: "1rem",
    marginBottom: "1.2rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    transition: "border-color 0.3s ease",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  message: {
    textAlign: "center",
    color: "#d9534f",
    marginBottom: "1rem",
  },
  textCenter: {
    textAlign: "center",
    fontSize: "0.9rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/signup", formData);
      setMessage(`Signup successful! Welcome, ${res.data.user.username}`);
      setTimeout(() => {
        navigate("/login"); // Redirect to login after successful signup
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data.message || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Signup</h2>
        <form onSubmit={onSubmit} style={styles.form}>
          <label style={styles.label}>Username</label>
          <input
            style={styles.input}
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            required
            placeholder="Choose a username"
          />
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            placeholder="Enter your email"
          />
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            placeholder="Create a password"
          />
          <button style={styles.button} type="submit">
            Signup
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p style={styles.textCenter}>
          Already have an account?{" "}
          <Link style={styles.link} to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
