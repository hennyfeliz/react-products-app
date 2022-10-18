import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return (
    <>
      <NavBar />
      <div>hola</div>
    </>
  );
};

root.render(<App />);
