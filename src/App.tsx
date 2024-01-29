import { useEffect, useState } from "react";
import "./App.css";

const URL = "http://127.0.0.1:8000/subscribe";

function App() {
  const [connected, setConnected] = useState(true);

  const eventSource = new EventSource(URL, {
    // withCredentials: true,
  });

  useEffect(() => {
    if (eventSource) {
      if (connected) {
        fetchSSE();
      } else {
        eventSource.close();
        console.log("===== SSE CLOSED =====");
      }
    }

    return () => eventSource.close();
  }, [eventSource, connected]);

  const fetchSSE = async () => {
    eventSource.onopen = () => {
      console.log("===== SSE OPEN =====");
    };

    eventSource.onmessage = async (e) => {
      const res = await e.data;
      console.log("%c SSE ONMESSAGE >> ", "background:green;color:white", res);
    };

    eventSource.onerror = (e: any) => {
      console.warn("SSE ERROR >> ", e);
      eventSource.close();

      if (e.target.readyState === EventSource.CLOSED) {
        console.log("===== SSE CLOSED =====");
      }
    };

    eventSource.addEventListener("notification", (e) => {
      const data = JSON.parse(e.data as string);
      console.log("%c notification : ", "background:blue;color:white", data);
    });

    eventSource.addEventListener("message", (e) => {
      const data = JSON.parse(e.data as string);
      console.log("%c message : ", "background:green;color:white", data);
    });
  };

  return (
    <div className="App">
      <button onClick={() => setConnected(true)}>START SSE</button>
      <button onClick={() => setConnected(false)}>STOP SSE</button>
    </div>
  );
}

export default App;
