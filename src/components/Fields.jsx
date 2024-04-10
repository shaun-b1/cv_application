/* eslint-disable react/prop-types */
export function InputField({ name, label, type, value, handleChange }) {
  return (
    <>
      <label>
        <p>{label}</p>
        <input
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700"
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export function TextareaField({ name, label, value, handleChange }) {
  return (
    <>
      <label className="col-span-2">
        <p>{label}</p>
        <textarea
          className="bg-slate-100 rounded-md border-slate-300 text-slate-700 w-full"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
