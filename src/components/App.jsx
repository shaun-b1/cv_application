import { useState } from "react";
import Form from "./Form.jsx";
import "../styles/App.css";
import Button from "./Button.jsx";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? <Form /> : null}
      <Button handleClick={() => setShowForm(!showForm)}>Open!</Button>
    </>
  );
}
