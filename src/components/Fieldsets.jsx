/* eslint-disable react/prop-types */
// import Button from "./Button";

function FieldSection({ title, inputs, initialValue, handleChange }) {
  //   const handleAddField = () => {
  //     setItems([...items, {}]);
  //   };

  //   const handleDeleteField = (index) => {
  //     setItems((prevItems) => {
  //       const newItems = [...prevItems];
  //       newItems.splice(index, 1);
  //       return newItems;
  //     });
  //   };

  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">{title}</legend>
      <ul>
        {initialValue &&
          initialValue.map((item, index) => (
            <li className="grid grid-cols-2 gap-2" key={index}>
              {inputs.map((input, inputIndex) => (
                <label
                  key={inputIndex}
                  className={input.type === "textarea" ? "col-span-2" : ""}
                >
                  <p>{input.label}</p>
                  {input.type === "textarea" ? (
                    <textarea
                      className="bg-slate-100 rounded-md border-slate-300 w-full text-slate-700"
                      value={item[input.name] || ""}
                      onChange={() => handleChange()}
                    />
                  ) : (
                    <input
                      className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
                      type={input.type}
                      value={initialValue}
                      onChange={() => handleChange()}
                    />
                  )}
                </label>
              ))}
              {/* {buttonText && items.length > 1 && <Button handleClick={() => handleDeleteField(index)}>Delete</Button>} */}
            </li>
          ))}
      </ul>
      {/* {buttonText && (
        <Button classes={"mt-4"} handleClick={handleAddField}>
          {buttonText}
        </Button> */}
      {/* )} */}
    </fieldset>
  );
}

export function PersonalInformationSection(fields, handleChange) {
  const inputs = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "email", label: "Email", type: "email" },
    {
      name: "personalStatement",
      label: "Personal Statement",
      type: "textarea",
    },
  ];
  return (
    <FieldSection
      title="Personal Information"
      inputs={inputs}
      initialValue={fields}
      handleChange={handleChange}
    />
  );
}

// function EducationSection() {
//   const fields = [
//     { name: "degree", label: "Degree", type: "text" },
//     { name: "school", label: "School", type: "text" },
//     { name: "startDate", label: "Start Date", type: "date" },
//     { name: "endDate", label: "End Date", type: "date" },
//   ];

//   return (
//     <FieldSection
//       title="Education History"
//       fields={fields}
//       initialValue={[{}]}
//       buttonText="Add Education"
//     />
//   );
// }

// function WorkSection() {
//   const fields = [
//     { name: "role", label: "Role", type: "text" },
//     { name: "employer", label: "Employer", type: "text" },
//     { name: "startDate", label: "Start Date", type: "date" },
//     { name: "endDate", label: "End Date", type: "date" },
//     { name: "responsibilities", label: "Responsibilities", type: "textarea" },
//   ];

//   return (
//     <FieldSection
//       title="Work History"
//       fields={fields}
//       initialValue={[{}]}
//       buttonText="Add Work"
//     />
//   );
// }
