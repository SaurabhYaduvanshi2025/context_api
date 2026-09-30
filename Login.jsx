import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert("Username daalo!");

    setUser({ username, password });
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md max-w-sm mx-auto mb-6 text-center">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Login Form</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-orange-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-orange-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}