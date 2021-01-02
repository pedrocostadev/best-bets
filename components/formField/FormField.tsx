import React from 'react';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import Text from '@/components/text/Text';

import styles from './FormField.module.scss';

interface Props extends React.ComponentProps<'input'> {
  type: 'text' | 'password';
  label: string;
  name: string;
  onType?: (value: string) => void;
}

const Field: React.FC<Props> = ({
  label,
  name,
  onType,
  ...otherProps
}: Props) => {
  // TODO: fix
  const aditionalProps = onType
    ? { onChange: (ev) => onType(ev.target.value) }
    : {};
  return (
    <FlexContainer directionColumn columnGap rowGap paddingTop paddingBottom>
      <label htmlFor={name}>
        <Text as="span" bold variant="body1" text={label} />
      </label>
      <input
        className={styles.field}
        {...otherProps}
        {...aditionalProps}
        name={name}
      />
    </FlexContainer>
  );
};

export default Field;
