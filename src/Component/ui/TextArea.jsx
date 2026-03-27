export default function TextArea({
  label,
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-1 text-gray-300">
          {label}
        </label>
      )}

      <textarea
        rows={4}
        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-border text-white outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
    </div>
  );
}