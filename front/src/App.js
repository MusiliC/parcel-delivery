import Login from "./components/Log/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Parcel from "./components/parcel/Parcel";
import ParcelList from "./components/ParcelList/ParcelList";
import Tracking from "./components/Tracking/Tracking";
import About from "./components/about/About";
import ParcelDetails from "./components/parcelDetails/ParcelDetails";
import User from "./components/users/User";
import Profile from "./components/profile/Profile";
import { useSelector } from "react-redux";
import Admin from "./components/admin/Admin";
import Maps from "./components/maps/Maps";

function App() {
const userSystem = useSelector((state) => state.allUsers);
//  console.log(userSystem);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/services"
            element={userSystem.authUser ? <Service /> : <Login />}
          ></Route>
          <Route path="/create" element={<Parcel />}></Route>
          <Route path="/parcels" element={<ParcelList />}></Route>
          <Route path="/track" element={<Tracking />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/parcel/:id" element={<ParcelDetails />}></Route>
          <Route path="/users" element={<User />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
