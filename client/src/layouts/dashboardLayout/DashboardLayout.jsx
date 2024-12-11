import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import ChatList from "../../components/chatList/ChatList";

function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  const toggleComponent = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <button className="floating-button" onClick={toggleComponent}>
        <img src="/menu.svg" className="menu-img" alt="Toggle" />
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ChatList />
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;
