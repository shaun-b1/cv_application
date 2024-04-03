// import Button from "./Button";

function PersonalInformationSection() {
  return (
    <fieldset className="grid grid-columns-2 gap-2 border border-slate-700 rounded-md p-4 m-4">
      <legend className="text-xl">Personal Information</legend>
      <label>
        <p>First Name: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Last Name: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="text"
        />
      </label>
      <label>
        <p>Phone: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="tel"
        />
      </label>
      <label>
        <p>Email: </p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          type="email"
        />
      </label>
      <label className="col-span-2">
        <p>Personal Statement: </p>
        <textarea className="bg-slate-100 rounded-md border-slate-300 w-full text-slate-700" />
      </label>
    </fieldset>
  );
}

export default function Form() {
  return (
    <form className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-100">
      <PersonalInformationSection />
    </form>
  );
}
