import { useState } from "react";
import Button from "./Button";

function PersonalInformationSection() {
  return (
    <fieldset className="grid grid-columns-2 gap-2 border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Personal Information</legend>
      <label>
        <p>First Name: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Last Name: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Phone: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="tel"
        />
      </label>
      <label>
        <p>Email: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="email"
        />
      </label>
      <label className="col-span-2">
        <p>Personal Statement: </p>
        <textarea className="bg-slate-100 rounded-md border-slate-300 w-full text-slate-700" />
      </label>
    </fieldset>
  );
}

function EducationSection() {
  const [education, setEducation] = useState([]);

  const addField = (e) => {
    e.preventDefault();
    const newField = (
      <li className="grid grid-cols-2 gap-2" key={education.length}>
        <EducationBlock />
      </li>
    );
    setEducation([...education, newField]);
  };

  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Education History</legend>
      <ul>{education.map((item) => item)}</ul>
      <Button classes={"mt-4"} onClick={addField}>
        Add Education
      </Button>
    </fieldset>
  );
}

function EducationBlock() {
  return (
    <>
      <label>
        <p>Degree</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>School</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Start Date</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="date"
        />
      </label>
      <label>
        <p>End Date</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="date"
        />
      </label>
    </>
  );
}

function WorkSection() {
  const [work, setWork] = useState([]);

  const addField = (e) => {
    e.preventDefault();
    const newField = (
      <li className="grid grid-cols-2 gap-2" key={work.length}>
        <WorkBlock />
      </li>
    );
    setWork([...work, newField]);
  };

  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Work History</legend>
      <ul>{work.map((item) => item)}</ul>
      <Button classes={"mt-4"} onClick={addField}>
        Add Work
      </Button>
    </fieldset>
  );
}

function WorkBlock() {
  return (
    <>
      <label>
        <p>Role</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Employer</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Start Date</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="date"
        />
      </label>
      <label>
        <p>End Date</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="date"
        />
      </label>
      <label className="col-span-2">
        <p>Responsibilties: </p>
        <textarea className="bg-slate-100 rounded-md border-slate-300 w-full text-slate-700" />
      </label>
    </>
  );
}

export default function Form() {
  return (
    <form className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-100">
      <PersonalInformationSection />
      <EducationSection />
      <WorkSection />
    </form>
  );
}
