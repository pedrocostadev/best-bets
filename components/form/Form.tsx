import React from 'react';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import Button from '@/components/button/Button';
import Text from '@/components/text/Text';

import styles from './Form.module.scss';

interface FieldsData {
  [fieldName: string]: string | number;
}

interface FormProps extends React.ComponentProps<'form'> {
  submitLabel: string;
  onConfirm: (formData: FieldsData) => void;
  children: React.ReactElement | React.ReactElement[];
}

const getParsedFormData = (ev: React.FormEvent<HTMLFormElement>): FieldsData =>
  Array.from(ev.currentTarget.elements).reduce(
    (fieldsData: FieldsData, currentField: HTMLInputElement) => {
      if (currentField.tagName === 'INPUT') {
        fieldsData[currentField.name] = currentField.value;
      }
      return fieldsData;
    },
    {},
  );

const Form: React.FC<FormProps> = ({
  children,
  onConfirm,
  submitLabel,
  ...otherFormProps
}) => {
  return (
    <FlexContainer directionColumn columnGap rowGap paddingTop paddingBottom>
      <form
        {...otherFormProps}
        onSubmit={(ev) => {
          ev.preventDefault();
          onConfirm(getParsedFormData(ev));
        }}
      >
        {React.Children.toArray(children)}
        <Button
          variant="contained"
          className={styles.submitButton}
          value="submit"
        >
          <Text
            as="span"
            bold
            textAlignCenter
            variant="body1"
            text={submitLabel}
          />
        </Button>
      </form>
    </FlexContainer>
  );
};

export default Form;
