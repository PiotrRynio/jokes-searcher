import { useEffect, useState } from 'react';

type UseDebounce<T> = {
  debouncedValue: T;
  debouncingValue: T;
  isDebouncing: boolean;
  setDebouncingValue: (value: T) => void;
  setValueWithoutCallback: (value: T) => void;
};

type UseDebounceProps<T> = {
  initialValue: T;
  delay?: number;
  debouncedCallback?: (debouncedValue: T) => void;
};

export function useDebounce<T>({ initialValue, debouncedCallback, delay }: UseDebounceProps<T>): UseDebounce<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const [debouncingValue, setDebouncingValue] = useState<T>(initialValue);
  const isDebouncing = debouncingValue !== debouncedValue;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncingValue === debouncedValue) {
        return;
      }
      setDebouncedValue(debouncingValue);
      debouncedCallback?.(debouncingValue);
    }, delay || 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [debouncingValue, delay, debouncedCallback, debouncedValue]);

  const setValueWithoutCallback = (value: T) => {
    setDebouncingValue(value);
    setDebouncedValue(value);
  };

  return { debouncedValue, debouncingValue, isDebouncing, setDebouncingValue, setValueWithoutCallback };
}
