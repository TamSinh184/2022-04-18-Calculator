import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import Movie from "./components/Move";
import Alert from "./Alert";
import { Calculator } from "./components/Calculator";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<Movie firstName={4} lastName={4}/>);
// root.render(<Alert text={"Canh bao dang nhap"} />);
root.render(<Calculator />);
