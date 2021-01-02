const useMockedData = (): boolean => {
  console.log('Use mocked data:', process.env.NEXT_PUBLIC_MOCKED_DATA);
  return process.env.NEXT_PUBLIC_MOCKED_DATA === 'true';
};

const USER_MOCKED_DATA = useMockedData();

export { USER_MOCKED_DATA };
