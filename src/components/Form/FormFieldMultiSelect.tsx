import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { SelectHTMLAttributes } from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "../ui/multi-select";

type FormFieldSelectProps<T extends FieldValues, U> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "form"
> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  options: { label: string; value: string }[];
};

export default function FormFieldSelect<T extends FieldValues, U>({
  form,
  name,
  label,
  placeholder,
  description,
  options,
  ...props
}: FormFieldSelectProps<T, U>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          console.log(field);

          return (
            <FormItem>
              {label && <FormLabel>{label}</FormLabel>}
              <MultiSelector
                values={field.value}
                onValuesChange={field.onChange}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder={placeholder} />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {options.map((option) => (
                      <MultiSelectorItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
              {description && <FormDescription>{description}</FormDescription>}
            </FormItem>
          );
        }}
      />
    </>
  );
}
