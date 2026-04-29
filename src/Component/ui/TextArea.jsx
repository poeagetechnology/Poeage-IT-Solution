import clsx from "clsx";

export default function TextArea({
  label,
  error,
  rows = 4,
  ...props
}) {
  return (
    <div className="w-full">

      {label && (
        <label className="block text-sm mb-1 text-gray-600 font-medium">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        className={clsx(
          "w-full px-4 py-2 rounded-lg border bg-white text-gray-900 outline-none transition resize-none",

          // DEFAULT
          "border-[#1E6DE0]/40",

          // FOCUS
          "focus:ring-2 focus:ring-[#1CB7C8] focus:border-[#1E6DE0]",

          // ERROR (kept red intentionally)
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