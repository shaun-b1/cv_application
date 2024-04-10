/* eslint-disable react/prop-types */
// import { PersonalInformationSection } from "./Fieldsets";
import { PersonalFieldset } from "./PersonalFieldset";

export default function Form({ data, handlePersonalDataChange }) {
  return (
    <form>
      <PersonalFieldset
        data={data.personalInformation}
        handlePersonalDataChange={handlePersonalDataChange}
      />
      {/* <EducationSection />
      <WorkSection /> */}
    </form>
  );
}
