import { useEffect, useRef } from 'react';

type ClickEvent = React.MouseEvent<HTMLButtonElement>;

interface Props {
  onClickOutside: (e: ClickEvent) => void;
}

function useOuterClick({
  onClickOutside,
}: Props): React.RefObject<HTMLDivElement> {
  const callbackRef: React.MutableRefObject<(e: ClickEvent) => void> = useRef();
  const innerRef: React.MutableRefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    callbackRef.current = onClickOutside;
  });

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  return innerRef;
}

export default useOuterClick;
