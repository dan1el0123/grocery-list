const Content = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <p>{item.value}</p>
      ))}
    </>
  );
};

export default Content;
