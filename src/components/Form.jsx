/* eslint-disable react/prop-types */
import { PersonalFieldset } from "./PersonalFieldset";
import { EducationFieldset } from "./EducationFieldset";
import { WorkFieldset } from "./WorkFieldset";

export default function Form({
  data,
  handlePersonalDataChange,
  handleEducationDataChange,
  handleWorkDataChange,
}) {
  return (
    <form>
      <PersonalFieldset
        data={data.personalInformation}
        handlePersonalDataChange={handlePersonalDataChange}
      />
      <EducationFieldset
        data={data.educationInformation}
        handleEducationDataChange={handleEducationDataChange}
      />
      <WorkFieldset
        data={data.workInformation}
        handleWorkDataChange={handleWorkDataChange}
      />
    </form>
  );
}
