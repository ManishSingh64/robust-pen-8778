import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

=======
import { Provider } from "react-redux";
import { store } from "./store/store";
>>>>>>> master
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
<<<<<<< HEAD
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
=======
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
>>>>>>> master
    </ChakraProvider>
  </React.StrictMode>
);
