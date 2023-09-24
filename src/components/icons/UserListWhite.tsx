import { IconContext } from "react-icons";
import { PiUserList } from "react-icons/pi";

function UserListWhite() {
  return (
    <IconContext.Provider
      value={{ color: '#fff', size: '22px' }}
    >
      <div>
        <PiUserList />
      </div>
    </IconContext.Provider>
  );
}

export default UserListWhite
