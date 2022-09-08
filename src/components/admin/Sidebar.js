import { Link as A } from "react-router-dom"
const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <A to={"/admin"}>Home</A>
          <A to={"/admin/all-movies"}>movies</A>
          <A to={"/admin/users"}>users</A>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar
