import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  wrapperClassName?: string;
};

type ContactInputProps =
  | (BaseProps &
      React.ComponentProps<"input"> & {
        variant?: "1";
      })
  | (BaseProps &
      React.ComponentProps<"textarea"> & {
        variant: "2";
      });

const ContactInput = ({
  variant = "1",
  label,
  className,
  wrapperClassName,
  ...props
}: ContactInputProps) => {
  return (
    <div className={cn("flex flex-col gap-1 lg:w-150 w-full", wrapperClassName)}>
      <label className="font-poppins tracking-wider uppercase">{label}</label>

      {variant === "1" ? (
        <Input
          className={cn("border-black font-poppins tracking-wide rounded-none", className)}
          {...(props as React.ComponentProps<"input">)}
        />
      ) : (
        <Textarea
          className={cn("border-black font-poppins tracking-wide h-32 rounded-none resize-none", className)}
          {...(props as React.ComponentProps<"textarea">)}
        />
      )}
    </div>
  );
};

export default ContactInput;
