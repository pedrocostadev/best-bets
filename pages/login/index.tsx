import React from 'react';
import { useRouter } from 'next/router';

import useAuth from '@/hooks/useAuth';
import Field from '@/components/field/Field';
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
      <Field required label="Username" type="text" name="userName" />
      <Field required label="Password" type="password" name="password" />
    </Form>
  );
};

export default Login;
