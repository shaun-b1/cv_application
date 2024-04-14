/* eslint-disable react/prop-types */
import { PersonalFieldset } from "./PersonalFieldset";
import { EducationFieldset } from "./EducationFieldset";
import { WorkFieldset } from "./WorkFieldset";

export default function Form({
  data,
  handlePersonalDataChange,
  handleEducationDataChange,
  handleAddEducation,
  handleDeleteEducation,
  handleWorkDataChange,
  handleAddWork,
  handleDeleteWork,
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
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <WorkFieldset
        data={data.workInformation}
        handleWorkDataChange={handleWorkDataChange}
        handleAddWork={handleAddWork}
        handleDeleteWork={handleDeleteWork}
      />
    </form>
  );
}
