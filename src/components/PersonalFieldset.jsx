/* eslint-disable react/prop-types */
import { InputField, TextareaField } from "./Fields";

export default function PersonalFieldset({ fields, handlePersonalDataChange }) {
  const { firstName, lastName, phone, email, personalStatement } = fields;
  return (
    <fieldset className=" grid grid-cols-2 gap-2 border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Personal Information</legend>
      <InputField
        name={"firstName"}
        label={"First Name:"}
        type={"text"}
        value={firstName}
        handleChange={handlePersonalDataChange}
      />
      <InputField
        name={"lastName"}
        label={"Last Name:"}
        type={"text"}
        value={lastName}
        handleChange={handlePersonalDataChange}
      />
      <InputField
        name={"phone"}
        label={"Phone:"}
        type={"text"}
        value={phone}
        handleChange={handlePersonalDataChange}
      />
      <InputField
        name={"email"}
        label={"Email:"}
        type={"text"}
        value={email}
        handleChange={handlePersonalDataChange}
      />
      <TextareaField
        name={"personalStatement"}
        label={"Personal Statement:"}
        type={"text"}
        value={personalStatement}
        handleChange={handlePersonalDataChange}
      />
    </fieldset>
  );
}
