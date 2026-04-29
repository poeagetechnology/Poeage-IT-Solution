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
          "border-[#1E6DE0]/40",

          // FOCUS STATE
          "focus:ring-2 focus:ring-[#1CB7C8] focus:border-[#1E6DE0]",

          // ERROR STATE (kept red intentionally — standard UX pattern)
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