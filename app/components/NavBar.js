'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const rutas = [
  {
    rutas: "/",
    label: "Inicio",
  },
  {
    rutas: "/productos",
    label: "Productos",
  },
  {
    rutas: "/contactos",
    label: "Nuestros Contactos",
  },
  {
    rutas: "/about",
    label: "Sobre nosotros",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  //Para hacer que el menu se cierre si se esta en otra ruta/
  useEffect(() => {
    setShowSidebar(false);
    setShowMenuButton(true);
  }, [pathname]);

  if (pathname.match(/^\/productos\/[0-9]$/)) {
    return null;
}

  const handleReturnClick = () => {
    setShowSidebar(false);
    setShowMenuButton(true);
  };

  const handleLinkClick = (route) => {
    setActiveRoute(route);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "1000",
          top: showSidebar ? "50%" : "calc(100% - 30rem)",
          left: "0.4rem",
          width: showMenuButton ? "3rem" : "0",
          height: showMenuButton ? "3rem" : "0",
          borderRadius: "10px",
          backgroundColor: showMenuButton ? "#1E3854" : "transparent",
          display: showSidebar ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={() => {
          setShowSidebar(true);
          setShowMenuButton(false);
        }}
      >
        {showMenuButton && (
          <span style={{ color: "#FFF", fontSize: "1.5rem" }}>☰</span>
        )}
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          width: showSidebar ? "200px" : "0",
          backgroundColor: showSidebar ? "#1E3854" : "transparent",
          opacity: showSidebar ? "1" : "0",
          padding: "1rem",
          transition: "opacity 0.3s ease-in-out",
          borderRadius: "10px",
        }}
        onMouseLeave={() => {
          setShowSidebar(false);
          setShowMenuButton(true);
        }}
      >
        <div style={{ display: showSidebar ? "block" : "none" }}>
          <button
            onClick={handleReturnClick}
            style={{
              color: "#FFF",
              backgroundColor: "#1E3854",
              border: "none",
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            &larr;
          </button>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {rutas.map(({ rutas, label }) => (
              <li key={rutas} style={{ marginBottom: "0.5rem" }}>
                <Link href={rutas} legacyBehavior>
                  <a
                    className={`navbar-link ${rutas === activeRoute ? "active" : ""}`}
                    onClick={() => {
                      setActiveRoute(rutas);
                      setShowSidebar(false);
                      setShowMenuButton(true);
                    }}
                    style={{
                      color: rutas === activeRoute ? "#FFF" : "#000",
                      opacity: rutas === activeRoute ? "1" : "0.5",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#FFF";
                    }}
                    onMouseOut={(e) => {
                      if (rutas !== activeRoute) {
                        e.target.style.color = "#000";
                      }
                    }}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
