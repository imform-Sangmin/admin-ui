import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { SelectHTMLAttributes, useState } from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "../ui/multi-select";
import { Icon } from "../Icons";

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
const FormFieldMultiSelect = <T extends FieldValues, U>({
  form,
  name,
  label,
  placeholder,
  description,
  options,
  ...props
}: FormFieldSelectProps<T, U>) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              {label && <FormLabel>{label}</FormLabel>}
              <MultiSelector
                values={field.value}
                onValuesChange={field.onChange}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder={placeholder} />
                  <Icon type="arrowFillDown" className="text-black" />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {options.map((option, i) => (
                      <MultiSelectorItem
                        key={`${option.value}-${i}`}
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
};

export { FormFieldMultiSelect };
