import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="w-full  flex flex-row flex-wrap overflow-hidden gap-4 text-2xl underline ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/fetch">Fetch</Link>
        </li>
        <li>
          <Link to="/children">Children</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
