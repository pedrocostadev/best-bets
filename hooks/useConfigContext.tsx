import React, { useContext } from 'react';
import config from '../config.json';
import { Config } from '../types';

const UseConfigContext = React.createContext<Config>(config);

const useConfigContext = (): Config => {
  const config = useContext(UseConfigContext);
  return config;
};

export default useConfigContext;
