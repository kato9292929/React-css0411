import { CssMosules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssMosules />
      <StyledJsx />
    </div>
  );
}
