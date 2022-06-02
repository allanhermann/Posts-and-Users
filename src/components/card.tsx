import { Post, User } from "../types/types";

type CardProps = {
  post: Post;
  users: User[];
};

export const Card = ({ post, users }: CardProps) => {
  return (
    <div
      key={post.id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "8px",
        margin: "50px",
        width: "40%",
        padding: "10px",
        backgroundColor: "#fffef0",
      }}
    >
      <img
        src={"https://libreshot.com/wp-content/uploads/2016/07/books.jpg"}
        alt="Book"
        width="60%"
      />
      <h3>{post.title}</h3>
      <h3>By: {users[post.userId - 1].name}</h3>
    </div>
  );
};
