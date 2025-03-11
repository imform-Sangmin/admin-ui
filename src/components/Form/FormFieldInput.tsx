import { Path, type UseFormReturn, type FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputHTMLAttributes } from "react";
import { Input, InputVariants } from "../ui/input";
import type { VariantProps } from "class-variance-authority";

type FormFieldInputProps<T extends FieldValues, U> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "form"
> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  description?: string;
};

export default function FormFieldInput<T extends FieldValues, U>({
  form,
  name,
  label,
  type,
  placeholder,
  description,
  ...props
}: FormFieldInputProps<T, U>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field, fieldState: { error, isDirty } }) => {
          let inputVariant: VariantProps<typeof InputVariants>["variant"] =
            "default";
          if (error) {
            inputVariant = "error";
          } else if (isDirty) {
            inputVariant = "complete";
          }

          return (
            <FormItem>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  type={type || "text"}
                  placeholder={placeholder || (label ? label + "..." : "")}
                  variant={inputVariant}
                  {...props}
                />
              </FormControl>
              {description && (
                <FormDescription variant={inputVariant}>
                  {description}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
}
