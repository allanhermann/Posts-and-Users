import axios from "axios";
import useSWR from "swr";

const useFetchUsers = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    "https://www.scalablepath.com/api/test/test-users",
    fetcher
  );

  return { data, error };
};

export default useFetchUsers;
