import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import logo from '../assets/disney-logo.png';
import { useAuth } from "../context/AuthContext"; // 👈 Import AuthContext
import '../index.css';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const backgroundColor = isHome ? '#FFE4E1' : '#130f40';
  const textColor = isHome ? '#5D3A00' : '#FFE4E1';

  const { isLoggedIn, logout } = useAuth(); // 👈 Access auth state
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{ backgroundColor: backgroundColor, transition: '0.4s ease' }}
    >
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Disney Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <span
            className="fw-bold fs-3"
            style={{
              color: isHome ? '#a0522d' : '#f8d3ff',
              fontFamily: 'Princess Sofia, cursive',
            }}
          >
            DisneyWorld
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {["/", "/explore", "/about"].map((path, idx) => {
              const labels = ["Home", "Explore", "About"];
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    to={path}
                    end
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? "active-magic" : ""}`
                    }
                    style={{ color: textColor }}
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}

            {/* 🔒 Show login if not logged in */}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/">
                  <button
                    className="btn ms-3"
                    style={{
                      border: `1px solid ${textColor}`,
                      color: textColor,
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.1rem",
                      background: "transparent",
                    }}
                  >
                    Login / Signup
                  </button>
                </Link>
              </li>
            )}

            {/* 🔓 Show logout if logged in */}
            {isLoggedIn && (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn ms-3"
                  style={{
                    border: `1px solid ${textColor}`,
                    color: textColor,
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.1rem",
                    background: "transparent",
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
