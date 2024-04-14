/* eslint-disable react/prop-types */
import Button from "./Button";
import { InputField, TextareaField } from "./Fields";

export function WorkFieldset({
  data,
  handleWorkDataChange,
  handleAddWork,
  handleDeleteWork,
}) {
  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Work History</legend>
      <ul>
        {data.map((work) => {
          const { id, role, employer, startDate, endDate, responsibilites } =
            work;
          return (
            <li className="grid grid-cols-2 gap-2" key={id}>
              <InputField
                name={"role"}
                label={"Role:"}
                type={"text"}
                value={role}
                handleChange={(e) => handleWorkDataChange(id, e)}
              />
              <InputField
                name={"employer"}
                label={"Employer:"}
                type={"text"}
                value={employer}
                handleChange={(e) => handleWorkDataChange(id, e)}
              />
              <InputField
                name={"startDate"}
                label={"Start Date:"}
                type={"month"}
                value={startDate}
                handleChange={(e) => handleWorkDataChange(id, e)}
              />
              <InputField
                name={"endDate"}
                label={"End Date:"}
                type={"month"}
                value={endDate}
                handleChange={(e) => handleWorkDataChange(id, e)}
              />
              <TextareaField
                name={"responsibilites"}
                label={"Responsibilities"}
                value={responsibilites}
                handleChange={(e) => handleWorkDataChange(id, e)}
              />
              <Button handleClick={() => handleDeleteWork(id)}>Delete</Button>
            </li>
          );
        })}
      </ul>
      <Button handleClick={handleAddWork}>Add</Button>
    </fieldset>
  );
}
