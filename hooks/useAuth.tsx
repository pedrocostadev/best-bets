import React, { useContext, useState } from 'react';

interface User {
  userName: string;
  password: string;
}

interface AuthProvider {
  user: User;
  isLogged: boolean;
  signIn: (userData: User) => Promise<boolean>;
}

const initiaAuth: AuthProvider = {
  user: undefined,
  isLogged: false,
  signIn: async () => Promise.resolve(undefined),
};

const AuthContext = React.createContext<AuthProvider>(initiaAuth);

interface Props {
  children: React.ReactNode;
}

const useAuthProvider = (): AuthProvider => {
  const [user, setUser] = useState(null);

  const signIn = async ({ userName, password }: User) => {
    if (
      process.env.NEXT_PUBLIC_USERNAME !== userName ||
      process.env.NEXT_PUBLIC_PASSWORD !== password
    ) {
      return false;
    }
    await setUser({ userName, password });
    return true;
  };

  const isLogged = user?.userName !== undefined;

  return {
    user,
    isLogged,
    signIn,
  };
};

export const AuthProvider = ({ children }: Props): React.ReactElement => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthProvider => {
  return useContext(AuthContext);
};

export default useAuth;
