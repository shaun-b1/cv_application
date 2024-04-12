/* eslint-disable react/prop-types */
import { InputField } from "./Fields";

export function EducationFieldset({ data, handleEducationDataChange }) {
  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Education History</legend>
      <ul>
        {data.map((education, index) => (
          <li className="grid grid-cols-2 gap-2" key={index}>
            <InputField
              name={"degree"}
              label={"Degree:"}
              type={"text"}
              value={education.degree}
              handleChange={(e) => handleEducationDataChange(index, e)}
            />
            <InputField
              name={"school"}
              label={"School:"}
              type={"text"}
              value={education.school}
              handleChange={(e) => handleEducationDataChange(index, e)}
            />
            <InputField
              name={"startDate"}
              label={"Start Date:"}
              type={"month"}
              value={education.startDate}
              handleChange={(e) => handleEducationDataChange(index, e)}
            />
            <InputField
              name={"endDate"}
              label={"End Date:"}
              type={"month"}
              value={education.endDate}
              handleChange={(e) => handleEducationDataChange(index, e)}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
