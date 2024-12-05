// import React, { useState } from "react";
// import "../../css/login_page/UserPortal.css";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";

// const UserPortal: React.FC = () => {
//     const [activePage, setActivePage] = useState<"login" | "register">("login");
  
//     const handleToggle = (page: "login" | "register") => {
//       setActivePage(page);
//     };
  
//     return (
//       <div className="user-portal">
//         <div className="portal-container">
//           <div className="toggle-buttons">
//             <button
//               className={`toggle-btn ${activePage === "login" ? "active" : ""}`}
//               onClick={() => handleToggle("login")}
//             >
//               Sign In
//             </button>
//             <button
//               className={`toggle-btn ${activePage === "register" ? "active" : ""}`}
//               onClick={() => handleToggle("register")}
//             >
//               Sign Up
//             </button>
//           </div>
//           <div className="form-container">
//             {activePage === "login" && <LoginPage />}
//             {activePage === "register" && <RegisterPage />}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default UserPortal;