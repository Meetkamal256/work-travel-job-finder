import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
