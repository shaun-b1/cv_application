import { useRef } from "react";
import Form from "./Form.jsx";
import "../styles/App.css";
import Button from "./Button.jsx";

export default function App() {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="text-slate-100 bg-slate-500 rounded-md"
      >
        <Form />
        <Button classes={"m-4"} handleClick={closeModal}>
          Close
        </Button>
      </dialog>
      <Button handleClick={openModal}>Open!</Button>
    </>
  );
}
