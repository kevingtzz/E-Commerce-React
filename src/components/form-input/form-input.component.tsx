import { InputHTMLAttributes, FC } from "react";

import { Group, Input, FormInputLable } from "./form-input.styles.jsx";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLable
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
