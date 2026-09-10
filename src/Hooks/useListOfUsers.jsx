import { useEffect, useState } from "react";
import { getUserDetails } from "../API/dataAPI";

export default function useListOfUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const userList = await getUserDetails();
        setData(userList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { data, loading, error };
}
