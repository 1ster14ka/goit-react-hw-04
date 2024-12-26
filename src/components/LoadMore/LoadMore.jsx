const LoadMore = ({ changePage }) => {
  function handleIncrease() {
    changePage((prev) => prev + 1);
  }

  return <button onClick={handleIncrease}>LoadMore</button>;
};

export default LoadMore;
