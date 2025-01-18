import { NavLink } from "react-router-dom";
import s from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <NavLink
        to="/"
        className={s.btnGoBack}
      >
        Back to Home
      </NavLink>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;