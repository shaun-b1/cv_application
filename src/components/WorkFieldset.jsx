/* eslint-disable react/prop-types */
import { InputField, TextareaField } from "./Fields";

export function WorkFieldset({ data, handleWorkDataChange }) {
  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Work History</legend>
      <ul>
        {data.map((work, index) => (
          <li className="grid grid-cols-2 gap-2" key={index}>
            <InputField
              name={"role"}
              label={"Role:"}
              type={"text"}
              value={work.role}
              handleChange={(e) => handleWorkDataChange(index, e)}
            />
            <InputField
              name={"employer"}
              label={"Employer:"}
              type={"text"}
              value={work.employer}
              handleChange={(e) => handleWorkDataChange(index, e)}
            />
            <InputField
              name={"startDate"}
              label={"Start Date:"}
              type={"month"}
              value={work.startDate}
              handleChange={(e) => handleWorkDataChange(index, e)}
            />
            <InputField
              name={"endDate"}
              label={"End Date:"}
              type={"month"}
              value={work.endDate}
              handleChange={(e) => handleWorkDataChange(index, e)}
            />
            <TextareaField
              name={"responsibilites"}
              label={"Responsibilities"}
              value={work.responsibilites}
              handleChange={(e) => handleWorkDataChange(index, e)}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
