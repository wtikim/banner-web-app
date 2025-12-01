import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://banner-web-app-1.onrender.com/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React + Express 연결 테스트</h1>
      <p>백엔드 응답: {message}</p>
    </div>
  );
}

export default App;
