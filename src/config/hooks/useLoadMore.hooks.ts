import { useEffect, useRef, useCallback } from "react";

const useLoadMore = (callback: () => void, isLoading: boolean, hasMoreData: boolean, isError?: boolean): React.RefCallback<HTMLElement> => {
  const observer = useRef<IntersectionObserver | null>(null);
  const observe = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading || !hasMoreData || isError == true) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreData) {
          callback();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMoreData, callback]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return observe;
};

export default useLoadMore;
