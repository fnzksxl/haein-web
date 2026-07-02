import { useEffect, useState } from "react";

export function useJson<T>(url: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    fetch(url)
      .then((res) => (res.ok ? res.json() : fallback))
      .then((json: T) => setData(json))
      .catch(() => setData(fallback));
  }, [url]);

  return data;
}
