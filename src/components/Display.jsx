/* eslint-disable react/prop-types */
import { DisplayEducation } from "./DisplayEducation";
import { DisplayPersonal } from "./DisplayPersonal";
import { DisplayWork } from "./DisplayWork";

export function Display({ data }) {
  return (
    <main>
      <DisplayPersonal data={data.personalInformation} />
      <DisplayEducation data={data.educationInformation} />
      <DisplayWork data={data.workInformation} />
    </main>
  );
}
