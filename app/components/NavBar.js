'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  const handleMouseEnter = () => {
    setShowSidebar(true);
  };

  const handleMouseLeave = () => {
    setShowSidebar(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "999",
        width: showSidebar ? "200px" : "0",
        backgroundColor: "#1E3854",
        padding: "1rem",
        transition: "width 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div style={{ display: showSidebar ? "block" : "none" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
                {rutas.map(({ rutas, label }) => (
                <li key={rutas} style={{ marginBottom: "0.5rem" }}>
                    <Link href={rutas} legacyBehavior>
                    <a
                        style={{
                        display: "block",
                        padding: "0.5rem",
                        color: "#FFF",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease-in-out",
                        }}
                        className={`navbar-link ${rutas === pathname ? "active" : ""}`}
                        onMouseOver={(e) => e.target.classList.add("text-white")}
                        onMouseOut={(e) => {
                        if (rutas !== pathname)
                            e.target.classList.remove("text-white");
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
  );
};

export default Navbar;
