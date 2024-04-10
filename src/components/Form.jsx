/* eslint-disable react/prop-types */
// import { PersonalInformationSection } from "./Fieldsets";
import { PersonalFieldset } from "./PersonalFieldset";

export default function Form({ fields, handlePersonalDataChange }) {
  return (
    <form>
      <PersonalFieldset
        fields={fields.personalInformation}
        handlePersonalDataChange={handlePersonalDataChange}
      />
      {/* <EducationSection />
      <WorkSection /> */}
    </form>
  );
}
