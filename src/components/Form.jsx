/* eslint-disable react/prop-types */
import { PersonalInformationSection } from "./Fieldsets";

export default function Form({ fields, handleChange }) {
  return (
    <form>
      <PersonalInformationSection
        fields={fields.personalInformation}
        handleChange={handleChange}
      />
      {/* <EducationSection />
      <WorkSection /> */}
    </form>
  );
}
