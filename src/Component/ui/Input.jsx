import clsx from "clsx";

export default function Input({
  label,
  error,
  ...props
}) {
  return (
    <div className="w-full">

      {label && (
        <label className="block text-sm mb-1 text-gray-600 font-medium">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "w-full px-4 py-2 rounded-lg border bg-white text-gray-900 outline-none transition",

          // DEFAULT BORDER
          "border-green-300",

          // FOCUS STATE
          "focus:ring-2 focus:ring-green-400 focus:border-green-500",

          // ERROR STATE
          error && "border-red-500 focus:ring-red-400"
        )}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}

    </div>
  );
}