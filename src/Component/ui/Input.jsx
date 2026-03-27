import clsx from "clsx";

export default function Input({
  label,
  error,
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-1 text-gray-300">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "w-full px-4 py-2 rounded-lg bg-slate-800 border border-border text-white outline-none",
          "focus:ring-2 focus:ring-primary",
          error && "border-red-500"
        )}
        {...props}
      />

      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}