import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAuth from '@/hooks/useAuth';

const usePrivatePage = (): void => {
  const router = useRouter();
  const { isLogged } = useAuth();
  useEffect(() => {
    if (!isLogged) {
      router.push(`/login?redirectTo=${router.asPath}`);
    }
  }, [isLogged]);
};

export default usePrivatePage;
