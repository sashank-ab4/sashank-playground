import { useEffect, useState } from "react";
import { getQuotes } from "../API/dataAPI";

export default function useListOfQuotes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const res = await getQuotes();
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);
  return { data, loading };
}
