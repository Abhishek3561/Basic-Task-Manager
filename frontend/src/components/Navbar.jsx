import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <button onClick={logout}>Logout</button>
      <hr />
    </div>
  );
}

export default Navbar;
