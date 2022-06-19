export function ServerSentEventsLoader({ onData }) {
  useEffect(() => {
    const source = new EventSource(API_URL);

    source.onmessage = (event) => {
      const message = JSON.parse(event.data);

      onData(message);
    }

    return () => {
      source.close();
    };
  }, []);

  return <h1 className="title">Server Sent Events</h1>;
}
