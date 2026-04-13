import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
  fullWidth = false,
  type = "button",
  className = "",
  ...props
}) {

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  primary:
    "bg-[linear-gradient(90deg,#22c55e,#16a34a,#4ade80)] bg-[length:200%_100%] bg-left hover:bg-right text-black focus:ring-green-500",

  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",

  outline:
    "border border-green-400 text-green-500 hover:bg-green-50 focus:ring-green-400",

  ghost:
    "bg-transparent text-green-500 hover:bg-green-50 focus:ring-green-400",
};
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {loading ? (
        <LoadingSpinner size="sm" />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}