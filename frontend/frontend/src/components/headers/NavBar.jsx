// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";
// import { Switch } from "@mui/material";
// import { motion } from "framer-motion";
// import photoURL from "../../assets/home/girl.jpg";
// import { FaBars } from "react-icons/fa";

// const navLinks = [
//   { name: "Home", route: "/" },
//   { name: "Instructors", route: "/instructors" },
//   { name: "Classes", route: "/classes" },
// ];

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#ff0000",
//     },
//     secondary: {
//       main: "#00ff00",
//     },
//   },
// });

// const NavBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isHome, setIsHome] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isFixed, setIsFixed] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [navBg, setNavBg] = useState("bg-[#15151580]");
//   const user = true;

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(isMobileMenuOpen);
//   };
//   useEffect(() => {
//     const darkClass = "dark";
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add(darkClass);
//     } else {
//       root.classList.remove(darkClass);
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     setIsHome(location.pathname === "/");
//     setIsLogin(location.pathname === "/login");
//     setIsFixed(
//       location.pathname === "/register" || location.pathname === "/login"
//     );
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       setScrollPosition(currentPosition);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (scrollPosition > 100) {
//       if (isHome) {
//         setNavBg(
//           "bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black"
//         );
//       } else {
//         setNavBg("bg-white dark:bg-black dark:text-white text-black");
//       }
//     } else {
//       setNavBg(
//         `${
//           isHome || location.pathname === "/"
//             ? "bg-transparent"
//             : "bg-white dark:bg-black"
//         }dark:text-white text-white`
//       );
//     }
//   }, [scrollPosition]);

//   const handleLogout = () => {
//     console.log("Logged out");
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={`${
//         isHome ? navBg : "bg-white dark-bg-black backdrop-blur-2xl"
//       }${
//         isFixed ? "static" : "fixed"
//       }top-0 transition-colors duration-500 ease-in-out w-full z-10`}
//     >
//       <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
//         <div className="px-4 py-4 flex items-center justify-between">
//           {/*logo*/}
//           <div>
//             <div
//               onClick={() => navigate("/")}
//               className="flex-shrink-0 cursor-pointer pl-7 md:p-0 flex items-center"
//             >
//               <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
//                 FitSync <img src="/logo.png" alt="" className="w-8 h-8" />
//               </h1>
//               <p className="font-bold text-[13px] tracking-[8px]">Calm Core</p>
//             </div>
//           </div>
//           {/*mobile menu icons */}

//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               onClick={toggleMobileMenu}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <FaBars className="h-6 w-6 hover:text-primary" />
//             </button>
//           </div>

//           {/*Navigational Link*/}
//           <div className="hidden md:block text-black dark:text-white">
//             <div className="flex">
//               <ul className="ml-10 flex items-center space-x-4 pr-4">
//                 {navLinks.map((Link) => (
//                   <li key={Link.route}>
//                     <NavLink
//                       to={Link.route}
//                       style={{ whiteSpace: "nowrap" }}
//                       className={({ isActive }) =>
//                         `font-bold ${
//                           isActive
//                             ? "text-secondary"
//                             : navBg.includes("bg-transparent")
//                             ? "text-white"
//                             : "text-black dark:text-white"
//                         } hover:text-secondary duration-300`
//                       }
//                     >
//                       {Link.name}
//                     </NavLink>
//                   </li>
//                 ))}

//                 {/*Based on users */}

//                 {user ? null : isLogin ? (
//                   <li>
//                     <NavLink
//                       to="/register"
//                       className={({ isActive }) =>
//                         `font-bold ${
//                           isActive
//                             ? "text-secondary"
//                             : navBg.includes("bg-transparent")
//                             ? "text-white"
//                             : "text-black dark:text-white"
//                         } hover:text-secondary duration-300`
//                       }
//                     >
//                       Register
//                     </NavLink>
//                   </li>
//                 ) : (
//                   <li>
//                     <NavLink
//                       to="/login"
//                       className={({ isActive }) =>
//                         `font-bold ${
//                           isActive
//                             ? "text-secondary"
//                             : navBg.includes("bg-transparent")
//                             ? "text-white"
//                             : "text-black dark:text-white"
//                         } hover:text-secondary duration-300`
//                       }
//                     >
//                       Login
//                     </NavLink>
//                   </li>
//                 )}

//                 {user && (
//                   <li>
//                     <NavLink
//                       to="/dashboard"
//                       className={({ isActive }) =>
//                         `font-bold ${
//                           isActive
//                             ? "text-secondary"
//                             : navBg.includes("bg-transparent")
//                             ? "text-white"
//                             : "text-black dark:text-white"
//                         } hover:text-secondary duration-300`
//                       }
//                     >
//                       Dashboard
//                     </NavLink>
//                   </li>
//                 )}

//                 {user && (
//                   <li>
//                     <img
//                       src={photoURL}
//                       alt=""
//                       className="h-[40px] rounded-full w-[40px]"
//                     />
//                   </li>
//                 )}

//                 {user && (
//                   <li>
//                     <NavLink
//                       onClick={handleLogout}
//                       className={
//                         "font-bold px-3 py-2 bg-secondary text-white rounded-xl"
//                       }
//                     >
//                       Logout
//                     </NavLink>
//                   </li>
//                 )}
//                 {/*color toggle */}
//                 <li>
//                   <ThemeProvider theme={theme}>
//                     <div className="flex flex-col justify-center items-center">
//                       <Switch
//                         onChange={() => setIsDarkMode(!isDarkMode)}
//                       ></Switch>
//                       <h1 className="text-[8px]">Light/Dark</h1>
//                     </div>
//                   </ThemeProvider>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default NavBar;


import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { motion } from "framer-motion";
import photoURL from "../../assets/home/girl.jpg";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];

const theme = createTheme({
  palette: {
    primary: { main: "#ff0000" },
    secondary: { main: "#00ff00" },
  },
});

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent");

  const user = true;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const darkClass = "dark";
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add(darkClass);
    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode]);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavBg("bg-white dark:bg-black shadow-lg");
    } else {
      setNavBg(isHome ? "bg-transparent" : "bg-white dark:bg-black");
    }
  }, [scrollPosition, isHome]);

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${navBg} fixed top-0 left-0 w-full z-50 transition-all duration-500`}
    >
      <div className="lg:w-[95%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex flex-col items-start"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-medium text-white">FitSync</h1>
              <img src="/logo.png" alt="Logo" className="w-10 h-10 justify-center" />
            </div>
            <p className="text-sm font-bold tracking-wider text-white ">
              Calm Core
            </p>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FaBars className="h-6 w-6 hover:text-primary" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:block ${isMobileMenuOpen ? "" : ""}`}>
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <NavLink
                    to={link.route}
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive
                          ? "text-secondary"
                          : navBg.includes("bg-transparent")
                          ? "text-white"
                          : "text-black dark:text-white"
                      } hover:text-secondary transition duration-300`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {/* User Options */}
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="font-bold text-white dark:text-white hover:text-secondary transition"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <img
                      src={photoURL}
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="font-bold px-4 py-2 bg-secondary text-white rounded-lg"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

              {/* Theme Toggle */}
              <li>
                <ThemeProvider theme={theme}>
                  <div className="flex flex-col justify-center items-center">
                    <Switch
                      onChange={() => setIsDarkMode(!isDarkMode)}
                      checked={isDarkMode}
                    />
                    <span className="text-xs">Light/Dark</span>
                  </div>
                </ThemeProvider>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
