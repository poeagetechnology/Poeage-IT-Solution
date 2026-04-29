export default function Badge({ children, color = "primary" }) {
  const styles = {
    primary: "bg-[#1E6DE0]/20 text-[#1E6DE0]",
    accent: "bg-[#1CB7C8]/20 text-[#1CB7C8]",
    secondary: "bg-[#5A2DDB]/20 text-[#5A2DDB]",
    soft: "bg-[#EAF2FF] text-[#1E6DE0]",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[color]}`}
    >
      {children}
    </span>
  );
}