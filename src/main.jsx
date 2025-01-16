import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// BrowserRouter로 App컴포넌트를 감싸주게 되면
// React App 의 모든 컴포넌트들이
// pagingrouter와 관련된 모든 데이터들을 공급받아 사용할 수 있게된다.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
