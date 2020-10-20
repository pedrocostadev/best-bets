const useMockedData = (): boolean =>
  process.env.NEXT_PUBLIC_MOCKED_DATA === 'true';

const USER_MOCKED_DATA = useMockedData();

export { USER_MOCKED_DATA };
