import { useEffect } from 'react';

export function useGetAllData({data, callback}) {
  useEffect(() => {
    callback();
  }, [data]); // 캐시에서 받는 데이터가 변하지 않을 때까지 받는다.
}