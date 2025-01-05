```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count > 0) {
      interval = setInterval(() => {
        console.log('Count is greater than 0');
      }, 1000);
    }

    // Cleanup function to clear the interval when component unmounts or count changes
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```