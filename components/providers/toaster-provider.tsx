"use client";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
export const ToastProvider = () => {
  const { theme } = useTheme();
  return (
    <Toaster
      toastOptions={{
        style: {
          border: theme === "dark" ? "1px solid #4B5563" : "1px solid #020617",
          padding: "16px",
          color: theme === "dark" ? "white" : "black",
          backgroundColor: theme === "dark" ? "#1e293b" : "#f8fafc",
        },
      }}
    />
  );
};
