import React from 'react';
import { useRouter } from 'next/router';

import useAuth from '@/hooks/useAuth';
import FormField from '@/components/formField/FormField';
import Form from '@/components/form/Form';

const Login: React.FC = () => {
  const router = useRouter();

  const { signIn } = useAuth();

  const goToPage = () =>
    router.push((router?.query?.redirectTo || '/') as string);

  const shouldSignIn = async (data) => {
    console.log('data', data);
    const areCredentialsRight = await signIn(data);
    console.log('areCredentialsRight', areCredentialsRight);
    if (areCredentialsRight) {
      goToPage();
    } else {
      console.error('Invalid credentials');
    }
  };

  return (
    <Form submitLabel="Login" onConfirm={shouldSignIn}>
      <FormField required label="Username" type="text" name="userName" />
      <FormField required label="Password" type="password" name="password" />
    </Form>
  );
};

export default Login;
