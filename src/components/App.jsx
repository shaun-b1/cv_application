import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
    educationInformation: [
      {
        id: uuidv4(),
        degree: "Bachelor of bachelors",
        school: "School of Rock",
        startDate: "2010-01",
        endDate: "2013-01",
      },
    ],
    workInformation: [
      {
        id: uuidv4(),
        role: "janitor",
        employer: "acme corp",
        startDate: "2018-01",
        endDate: "2020-01",
        responsibilites: "I cleaned up the messes",
      },
    ],
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

  function handleEducationDataChange(id, e) {
    setData({
      ...data,
      educationInformation: data.educationInformation.map((education) => {
        if (education.id === id) {
          return { ...education, [e.target.name]: e.target.value };
        } else {
          return education;
        }
      }),
    });
  }

  function handleAddEducation() {
    setData({
      ...data,
      educationInformation: [
        ...data.educationInformation,
        {
          id: uuidv4(),
          degree: "",
          school: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  }

  function handleDeleteEducation(id) {
    setData({
      ...data,
      educationInformation: data.educationInformation.filter(
        (education) => education.id !== id,
      ),
    });
  }

  function handleWorkDataChange(id, e) {
    setData({
      ...data,
      workInformation: data.workInformation.map((work, index) => {
        if (index === id) {
          return { ...work, [e.target.name]: e.target.value };
        } else {
          return work;
        }
      }),
    });
  }

  function handleAddWork() {
    setData({
      ...data,
      workInformation: [
        ...data.workInformation,
        {
          id: uuidv4(),
          role: "",
          employer: "",
          startDate: "",
          endDate: "",
          responsibilites: "",
        },
      ],
    });
  }

  function handleDeleteWork(id) {
    setData({
      ...data,
      workInformation: data.workInformation.filter((work) => work.id !== id),
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
        <Form
          data={data}
          handlePersonalDataChange={handlePersonalDataChange}
          handleEducationDataChange={handleEducationDataChange}
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
          handleWorkDataChange={handleWorkDataChange}
          handleAddWork={handleAddWork}
          handleDeleteWork={handleDeleteWork}
        />
        <Button classes={"m-4"} handleClick={closeModal}>
          Close
        </Button>
      </dialog>
      <Display data={data} />
      <Button handleClick={openModal}>Open!</Button>
    </>
  );
}
