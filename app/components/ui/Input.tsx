import { forwardRef } from "react";
import { cn } from "../../lib/utils"
type InputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", placeholder, id, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={cn(
          "flex h-10 w-full rounded-full border border-[#8C8680] bg-white px-3 py-2 text-sm text-[#4F6064] ring-offset-background placeholder:text-[#8C8680]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";