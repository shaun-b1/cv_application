/* eslint-disable react/prop-types */
import Button from "./Button";
import { InputField } from "./Fields";

export function EducationFieldset({
  data,
  handleEducationDataChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <fieldset className="border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Education History</legend>
      <ul>
        {data.map((education) => {
          const { id, degree, school, startDate, endDate } = education;
          return (
            <li className="grid grid-cols-2 gap-2" key={id}>
              <InputField
                name={"degree"}
                label={"Degree:"}
                type={"text"}
                value={degree}
                handleChange={(e) => handleEducationDataChange(id, e)}
              />
              <InputField
                name={"school"}
                label={"School:"}
                type={"text"}
                value={school}
                handleChange={(e) => handleEducationDataChange(id, e)}
              />
              <InputField
                name={"startDate"}
                label={"Start Date:"}
                type={"month"}
                value={startDate}
                handleChange={(e) => handleEducationDataChange(id, e)}
              />
              <InputField
                name={"endDate"}
                label={"End Date:"}
                type={"month"}
                value={endDate}
                handleChange={(e) => handleEducationDataChange(id, e)}
              />
              <Button handleClick={() => handleDeleteEducation(id)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
      <Button handleClick={handleAddEducation}>Add</Button>
    </fieldset>
  );
}
