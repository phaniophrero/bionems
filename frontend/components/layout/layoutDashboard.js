import NavbarDashboard from "../navbar/dashboard/navbar-dashboard";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="dashboard--content">
      <NavbarDashboard />
      {children}
    </div>
  );
};

export default LayoutDashboard;
