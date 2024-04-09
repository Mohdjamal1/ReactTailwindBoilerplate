import Signup from "./Components/Signup";
import UserForm from "./Components/UserForm";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/userForm" element={<UserForm/>} />
        <Route path="/terms" />
      </Routes>

    </div>
  );
}

export default App;
