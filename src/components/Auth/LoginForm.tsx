import { Button, TextInput, Paper, Title, Text } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/app.store";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "admin@demo.com") {
      login();
      navigate("/launches");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Light gray background
      }}
    >
      <Paper
        withBorder
        p="xl"
        radius="lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        }}
      >
        <Title order={3} align="center" style={{ marginBottom: "20px", fontWeight: 700 }}>
          Login
        </Title>
        <Text align="center" style={{ color: "#6c757d", marginBottom: "20px", fontSize: "1rem" }}>
          Enter your email address to access the app
        </Text>

        <TextInput
          label="Email"
          placeholder="admin@demo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "20px",
            borderColor: "#ced4da", // Subtle border color
            borderRadius: "8px",
          }}
          size="md"
        />
        <Button
          fullWidth
          onClick={handleSubmit}
          style={{
            backgroundColor: "#007bff", // Blue background for button
            color: "#fff",
            fontWeight: 600,padding: "px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"} // Darker blue on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"} // Reset back to original color
        >
          Login
        </Button>
      </Paper>
    </div>
  );
}
