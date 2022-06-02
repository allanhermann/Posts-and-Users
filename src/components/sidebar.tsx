export const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 143px)",
        borderLeft: "2px solid black",
        borderTop: "2px solid black",
        position: "absolute",
        right: "0",
        top: "100px",
        width: "400px",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fffef0",
      }}
    >
      <h1>Sidebar</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur
        illum esse pariatur architecto numquam, doloremque eligendi repellendus
        quos incidunt nam harum at vero ducimus consequatur iste, ex aliquam
        quae minus nihil neque vitae minima placeat dolore?
      </h2>
    </div>
  );
};
