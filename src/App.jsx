import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");
  const [donations, setDonations] = useState([]);
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }
    setPage("dashboard");
  };

  const handleDonate = () => {
    if (food && quantity) {
      setDonations([...donations, { food, quantity }]);
      setFood("");
      setQuantity("");
      setPage("dashboard");
    }
  };

  return (
    <div style={styles.container}>
      {page !== "login" && (
        <div style={styles.nav}>
          <h2>Food Waste Platform</h2>
          <button style={styles.logout} onClick={() => setPage("login")}>
            Logout
          </button>
        </div>
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div style={styles.center}>
          <h1>Login</h1>

          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <div style={styles.content}>
          <h1>Welcome {email}</h1>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Donate Food</h3>
              <button
                style={styles.button}
                onClick={() => setPage("donate")}
              >
                Donate
              </button>
            </div>

            <div style={styles.card}>
              <h3>Request Food</h3>
              <button
                style={styles.button}
                onClick={() => setPage("request")}
              >
                Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DONATE PAGE */}
      {page === "donate" && (
        <div style={styles.content}>
          <h2>Donate Food</h2>

          <input
            style={styles.input}
            placeholder="Food name"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button style={styles.button} onClick={handleDonate}>
            Submit
          </button>
        </div>
      )}

      {/* REQUEST PAGE */}
      {page === "request" && (
        <div style={styles.content}>
          <h2>Available Donations</h2>

          {donations.length === 0 && <p>No donations available</p>}

          {donations.map((item, index) => (
            <div key={index} style={styles.listItem}>
              <strong>{item.food}</strong> - {item.quantity}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    background: "#1f1f1f",
    minHeight: "100vh",
    color: "white",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#38c172",
    padding: "15px 30px",
  },
  logout: {
    background: "black",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "150px",
  },
  content: {
    padding: "40px",
  },
  cards: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#2c2c2c",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  },
  button: {
    background: "#38c172",
    border: "none",
    padding: "10px 15px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  input: {
    display: "block",
    padding: "10px",
    marginBottom: "10px",
    width: "250px",
  },
  listItem: {
    background: "#2c2c2c",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
  },
};

export default App;
