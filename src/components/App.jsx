import { useRef, useState } from "react";
import Form from "./Form.jsx";
import "../styles/App.css";
import Button from "./Button.jsx";
import { Display } from "./Display.jsx";

export default function App() {
  const [data, setData] = useState({
    personalInformation: {
      firstName: "Shaun",
      lastName: "MacWilliam",
      phone: "012-3456-7890",
      email: "shaun@email.com",
      personalStatement: "Lorem ipsum dolor ...",
    },
  });

  function handlePersonalDataChange(e) {
    setData({
      ...data,
      personalInformation: {
        ...data.personalInformation,
        [e.target.name]: e.target.value,
      },
    });
  }

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
        <Form data={data} handlePersonalDataChange={handlePersonalDataChange} />
        <Button classes={"m-4"} handleClick={closeModal}>
          Close
        </Button>
      </dialog>
      <Display data={data} />
      <Button handleClick={openModal}>Open!</Button>
    </>
  );
}

// let person = {
//   firstName: 'Shaun',
//   lastName: 'MacWilliam',
//   phone: "012-3456-7890",
//   email: 'shaun@email.com',
//   personalStatement: "Lorem ipsum dolor ...",
//   education: [
//     {
//       degree: "Bachelor of bachelors",
//       school: "School of Rock",
//       startDate: "2010-01-01",
//       endDate: "2013-01-01"
//     },
//     {
//       degree: "Master of masters",
//       school: "Juliard",
//       startDate: "2014-01-01",
//       endDate: "2017-01-01"
//     },
//   ],
//   jobs: [
//     {
//       role: "janitor",
//       employer: "acme corp",
//       startDate: "2018-01-01",
//       endDate: "2020-01-01",
//       responsibilites: "I cleaned up the messes"
//     },
//     {
//       role: "senior janitor",
//       employer: "mom corp",
//       startDate: "2021-01-01",
//       endDate: "2023-01-01",
//       responsibilites: "I cleaned up the messes"
//     }
//   ]
// }
