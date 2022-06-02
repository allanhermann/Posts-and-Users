import { useEffect, useState } from "react";
import "./App.css";
import { Body } from "./components/body";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import useFetchPosts from "./hooks/useFetchPosts";
import useFetchUsers from "./hooks/useFetchUsers";
import { Post, User } from "./types/types";

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const [users, setUsers] = useState<User[]>();

  const fetchedPosts = useFetchPosts();
  const fetchedUsers = useFetchUsers();

  useEffect(() => {
    setUsers(fetchedUsers.data);
    setPosts(fetchedPosts.data);
  }, [fetchedPosts, fetchedUsers]);

  return (
    <>
      <Header />
      <Body>
        {users && posts && !fetchedUsers.error && !fetchedPosts.error ? (
          posts.map((post: Post) => <Card post={post} users={users} />)
        ) : (
          <h3>"Loading..."</h3>
        )}
        <Sidebar />
      </Body>
    </>
  );
}

export default App;
