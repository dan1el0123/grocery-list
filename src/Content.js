const Content = ({ items }) => {
  return (
    <>
      {items.length ? (
        items.map((item) => <p>{item.value}</p>)
      ) : (
        <p>Your list is empty...</p>
      )}
    </>
  );
};

export default Content;
