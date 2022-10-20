import {AiOutlineUser} from "react-icons/ai";
import { Button } from "../../Shared/Components/Button";
import "../less/UserCard.less";

const UserCard = () => {
  return (
    <div className='user-container'>
      <div className="user-card-header">
            <div className="circle-user">
              <AiOutlineUser></AiOutlineUser>
            </div>
      </div>
      <div className="user-card-body">
        <p>User: exmaple13</p>
        <Button outlineColor="text">Cerrar Session</Button>
      </div>
    </div>
  )
}

export default UserCard