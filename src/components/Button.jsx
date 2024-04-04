/* eslint-disable react/prop-types */
export default function Button({ classes, onClick, children }) {
  return (
    <button
      className={`text-slate-700 bg-slate-100 rounded-md border-slate-300 px-8 py-2 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
