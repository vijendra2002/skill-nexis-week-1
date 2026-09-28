import { useState } from "react";
import Button from "./Button.jsx";

export default function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !role.trim()) {
      setError("Please enter both your name and learning goal.");
      return;
    }
    onAdd({ name: name.trim(), role: role.trim() });
    setName("");
    setRole("");
    setError("");
  }

  return <form className="stack-form" onSubmit={handleSubmit}>
    <label>Your name<input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" /></label>
    <label>Learning goal<input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Practice React props" /></label>
    {error && <p className="error">{error}</p>}
    <Button type="submit">Add goal</Button>
  </form>;
}
