import {
  Group,
  Input,
  FormInputLable
} from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}/>
      {label && (
        <FormInputLable shrink={otherProps.value.length}>
          {label}
        </FormInputLable>)}
    </Group>
  );
};

export default FormInput;