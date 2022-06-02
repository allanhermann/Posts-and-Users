import axios from "axios";
import useSWR from "swr";

const useFetchPosts = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    "https://www.scalablepath.com/api/test/test-posts",
    fetcher
  );

  return { data, error };
};

export default useFetchPosts;
