import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="text-stone-900" to="/">Home</Link>
          </li>
          <li>
            <Link to="/remaining">Remaining</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;