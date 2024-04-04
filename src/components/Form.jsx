/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function FieldSection({ title, fields, initialValue, buttonText }) {
  const [items, setItems] = useState(initialValue);

  const addField = (e) => {
    e.preventDefault();
    setItems([...items, {}]);
  };

  const handleInput = (index, fieldName, value) => {
    const newItems = [...items];
    newItems[index][fieldName] = value;
    setItems(newItems);
  };

  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">{title}</legend>
      <ul>
        {items &&
          items.map((item, index) => (
            <li className="grid grid-cols-2 gap-2" key={index}>
              {fields &&
                fields.map((field, fieldIndex) => (
                  <label key={fieldIndex}>
                    <p>{field.label}</p>
                    <input
                      className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
                      type={field.type}
                      value={item[field.name] || ""}
                      onChange={(e) =>
                        handleInput(index, field.name, e.target.value)
                      }
                    />
                  </label>
                ))}
            </li>
          ))}
      </ul>
      <Button classes={"mt-4"} onClick={addField}>
        {buttonText}
      </Button>
    </fieldset>
  );
}

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
  const fields = [
    { name: "degree", label: "Degree", type: "text" },
    { name: "school", label: "School", type: "text" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
  ];

  return (
    <FieldSection
      title="Education History"
      fields={fields}
      initialValue={[{}]}
      buttonText="Add Education"
    />
  );
}

function WorkSection() {
  const fields = [
    { name: "role", label: "Role", type: "text" },
    { name: "employer", label: "Employer", type: "text" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
    { name: "responsibilities", label: "Responsibilities", type: "textarea" },
  ];

  return (
    <FieldSection
      title="Work History"
      fields={fields}
      initialValue={[{}]}
      buttonText="Add Work"
    />
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
