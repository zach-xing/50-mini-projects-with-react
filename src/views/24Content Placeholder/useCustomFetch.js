/**
 * 自定义一个简易的 获取“数据”的钩子
 */
import {useState, useEffect} from 'react'

function useCustomFetch(fetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetcher()
      .then((res) => {
        console.log('fetch', res);
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetcher]);

  if (loading) {
    throw Promise.resolve(null);
  } else {
    return data;
  }
}

export default useCustomFetch;
