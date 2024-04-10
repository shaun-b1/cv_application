/* eslint-disable react/prop-types */
import { DisplayPersonal } from "./DisplayPersonal";

export function Display({ data }) {
  return (
    <main>
      <DisplayPersonal data={data.personalInformation} />
    </main>
  );
}
