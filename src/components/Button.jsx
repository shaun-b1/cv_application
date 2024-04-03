/* eslint-disable react/prop-types */
export default function Button({ onClick, children }) {
  return (
    <button
      className="text-slate-700 bg-slate-100 rounded-md border-slate-300 px-8 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
