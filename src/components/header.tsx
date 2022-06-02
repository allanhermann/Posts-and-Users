export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100px",
        paddingLeft: "50px",
        paddingRight: "50px",
        borderBottom: "2px solid black",
        backgroundColor: "#fffef0",
      }}
    >
      <h2>My blog</h2>
      <h2>Home | Contact</h2>
    </div>
  );
};
