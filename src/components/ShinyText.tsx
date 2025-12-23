import React from "react";
import styles from "../styles/ShinyText.module.css";

type ShinyTextProps = {
  children: React.ReactNode;

  speed?: number;

  disabled?: boolean;

  className?: string;
};

export const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  speed = 3,
  disabled = false,
  className,
}) => {
  const classes = [
    styles.shinyText,
    disabled ? styles.shinyTextDisabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      style={
        !disabled ? { ["--shine-duration" as any]: `${speed}s` } : undefined
      }
    >
      {children}
    </span>
  );
};
