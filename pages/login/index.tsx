import React, { useState } from 'react';
import { useRouter } from 'next/router';

import useAuth from '@/hooks/useAuth';
import FormField from '@/components/formField/FormField';
import Form from '@/components/form/Form';
import Text from '@/components/text/Text';

const Login: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);

  const { signIn } = useAuth();

  const goToPage = () =>
    router.push((router?.query?.redirectTo || '/') as string);

  const shouldSignIn = async (data) => {
    setError(false);
    const areCredentialsRight = await signIn(data);
    if (areCredentialsRight) {
      goToPage();
    } else {
      setError(true);
      console.error('Invalid credentials');
    }
  };

  return (
    <Form submitLabel="Login" onConfirm={shouldSignIn}>
      <FormField required label="Username" type="text" name="userName" />
      <FormField required label="Password" type="password" name="password" />
      {error && (
        <Text bold textAlignCenter variant="body1" text="Invalid credentials" />
      )}
    </Form>
  );
};

export default Login;
