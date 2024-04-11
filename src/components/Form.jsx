/* eslint-disable react/prop-types */
// import { PersonalInformationSection } from "./Fieldsets";
import { PersonalFieldset } from "./PersonalFieldset";
import { EducationFieldset } from "./EducationFieldset";

export default function Form({
  data,
  handlePersonalDataChange,
  handleEducationDataChange,
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
      {/* <WorkSection /> */}
    </form>
  );
}
