import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        transition={Zoom}
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />
    </BrowserRouter>
  </Provider>
);
