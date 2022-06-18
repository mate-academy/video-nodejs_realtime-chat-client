export function LongPollingLoader({ onData }) {
  function loadData() {
    axios.get(API_URL)
      .then(res => {
        onData(res.data);

        loadData();
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return <h1 className="title">Long polling</h1>;
}
