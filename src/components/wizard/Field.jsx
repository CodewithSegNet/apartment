import React from "react";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  );
}

export function Input(props) {
  const { invalid, ...rest } = props;
  return (
    <input
      {...rest}
      className={`w-full rounded-full border px-5 py-5 outline-none placeholder:text-gray-400 bg-white shadow-sm focus:ring-2 focus:ring-orange-300 ${
        invalid ? "border-red-400" : "border-gray-200"
      }`}
    />
  );
}

export function Select({ children, invalid, ...rest }) {
  return (
    <select
      {...rest}
      className={`w-full rounded-full border px-5 py-5 bg-white shadow-sm focus:ring-2 focus:ring-orange-300 ${
        invalid ? "border-red-400" : "border-gray-200"
      }`}
    >
      {children}
    </select>
  );
}

export function TextArea({ invalid, ...rest }) {
  return (
    <textarea
      {...rest}
      className={`w-full rounded-2xl border px-5 py-4 min-h-[120px] outline-none placeholder:text-gray-400 bg-white shadow-sm focus:ring-2 focus:ring-orange-300 ${
        invalid ? "border-red-400" : "border-gray-200"
      }`}
    />
  );
}



