import "./userPage.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, getService } from "../../store/user/thunks";
import { selectProfile } from "../../store/user/selectors";
import { useEffect } from "react";

const UserPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = parseInt(params.id);
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (profile) {
      if (profile.provideService === true) {
        dispatch(getService(id));
      } else {
        dispatch(getFavorites(id));
      }
    }
  }, [profile, dispatch, id]);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export { UserPage };
