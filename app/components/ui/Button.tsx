import { forwardRef } from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", children, ...props }, ref) => {
    return (
      <button type={type} className={className} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";