import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormField } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectHTMLAttributes } from "react";

type FormFieldSelectProps<T extends FieldValues, U> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "form"
> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
};

export default function FormFieldSelect<T extends FieldValues, U>({
  form,
  name,
  ...props
}: FormFieldSelectProps<T, U>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <Select>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />
    </>
  );
}
