export default function Badge({ children, color = "green" }) {
  const styles = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-400/20 text-yellow-300",
    purple: "bg-purple-500/20 text-purple-300",
    blue: "bg-blue-500/20 text-blue-300",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[color]}`}
    >
      {children}
    </span>
  );
}