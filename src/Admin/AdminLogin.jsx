// import { useState } from "react";
// import "./style/Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Basic validation
//   const validate = () => {
//     let newErrors = {};

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});
//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       alert("Logged in successfully!");
//     }, 1500);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Logo */}
//         <div className="logo-area">
//           <div className="logo-circle">🌿</div>
//           <h2>Krishna Naturals</h2>
//         </div>

//         <h3 className="login-title">Admin Login</h3>
//         <p className="login-subtitle">Welcome back! Please sign in.</p>

//         <form onSubmit={handleSubmit} noValidate>
//           {/* Email */}
//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="admin@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? "error-input" : ""}
//             />
//             {errors.email && (
//               <span className="error-text">{errors.email}</span>
//             )}
//           </div>

//           {/* Password */}
//           <div className="form-group">
//             <label>Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={errors.password ? "error-input" : ""}
//               />
//               <button
//                 type="button"
//                 className="toggle-password"
//                 onClick={() => setShowPassword(!showPassword)}
//                 aria-label="Toggle Password Visibility"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && (
//               <span className="error-text">{errors.password}</span>
//             )}
//           </div>

//           {/* Remember & Forgot */}
//           <div className="form-options">
//             <label className="remember-me">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formData.remember}
//                 onChange={handleChange}
//               />
//               Remember Me
//             </label>

//             <a href="#" className="forgot-link">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="login-btn"
//             disabled={loading}
//           >
//             {loading ? "Signing In..." : "Sign In"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Form validation
  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // ✅ Hardcoded Login Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // ✅ HARDCODED ADMIN CREDENTIALS
    const adminEmail = "admin@krishnanaturals.com";
    const adminPassword = "Admin@123";

    setTimeout(() => {
      setLoading(false);

      if (
        formData.email === adminEmail &&
        formData.password === adminPassword
      ) {
        // ✅ Save login status
        localStorage.setItem("adminLoggedIn", "true");

        // ✅ Redirect to Dashboard
        navigate("/AdminDashboard");
      } else {
        alert("Invalid login credentials");
      }
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo-area">
          <div className="logo-circle">🌿</div>
          <h2>Krishna Naturals</h2>
        </div>

        <h3 className="login-title">Admin Login</h3>
        <p className="login-subtitle">Welcome back! Please sign in.</p>

        <form onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="admin@krishnanaturals.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && (
              <span className="error-text">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error-input" : ""}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;