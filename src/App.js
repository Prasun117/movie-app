import "./styles.css";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Footer } from "./Footer";
import { SubHeader } from "./SubHeader";
export default function App() {
  const [drawerToggle, setDrawerToggle] = useState(false);
  return (
    <div className="App">
      <HeaderComponent />
      <SubHeader />
      <div className="Content"></div>

      <Footer />
    </div>
  );
}
