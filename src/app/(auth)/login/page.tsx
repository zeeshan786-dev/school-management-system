"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://10.13.40.144:7001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        router.push("/admin"); 
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };



  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-center text-xl font-semibold">Login</h2>

      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button
          type="button"
          onClick={handleLogin}
          className="w-full p-2 mt-2 text-white bg-blue-500 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
  
    </div>
  );
}
