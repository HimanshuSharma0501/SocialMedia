//importing react dependencies
import { BrowserRouter as Router } from "react-router-dom";

//import components
import Header from "./Components/Header/Header";

//app function
function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
