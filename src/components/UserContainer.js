import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchUsers from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, users, error } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        users &&
        users.length && (
          <div>
            {users.map((u) => (
              <p>{u.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
