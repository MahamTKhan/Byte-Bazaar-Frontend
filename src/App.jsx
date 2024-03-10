import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCard from "./UserPanel/components/itemCard/ItemCard";
import xboxController from "./UserPanel/assets/images/items/controllers/xboxController.png";
import UserNavbar from "./UserPanel/components/Navbar/UserNavbar";
import AdminNavbar from "./AdminPanel/components/Navbar/AdminNavbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminNavbar />} />
          <Route path="/" element={<UserNavbar />} />
        </Routes>
      </BrowserRouter>

      <ItemCard
        itemImg={xboxController}
        itemName="XBOX 360 Controller"
        itemCategory="Gaming Controller"
        itemPrice="4500"
        alt="XBOX-Controller"
      />
    </>
  );
}
