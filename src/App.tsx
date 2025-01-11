import { useCallback, useMemo } from "react";

function App() {
  const memoizedValue = useMemo(() => {
    return "Hello World";
  }, []);
  const handleClick = useCallback(() => {
    console.log("clicked");
    console.log(memoizedValue);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
