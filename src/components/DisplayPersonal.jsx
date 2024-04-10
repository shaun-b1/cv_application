/* eslint-disable react/prop-types */
export function DisplayPersonal({ data }) {
  const { firstName, lastName, phone, email, personalStatement } = data;
  return (
    <section className="text-slate-100 grid grid-cols-2 gap-6 place-items-center m-6">
      <h2 className="text-4xl bg-slate-700 rounded-md place-self-stretch">
        {firstName + " " + lastName}
      </h2>
      <div>
        <h3 className="text-2xl">Contact Information</h3>
        <p>
          <span className="font-bold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-bold">Email:</span> {email}
        </p>
      </div>
      <div className="col-span-2">{personalStatement}</div>
    </section>
  );
}
