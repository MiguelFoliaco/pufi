import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootUserState } from "../../Context/User.context";
import { resetUser, setUser } from "../../Home/data/UserSlice";
import { Button } from "../../Shared/Components/Button";
import "../less/UserCard.less";

const UserCard = () => {
  const [userTxt, setUserTxt] = useState('')
  const user =useSelector((state:RootUserState)=>state.user);
  const dispatch=useDispatch()

  const login=()=>{
    dispatch(setUser(userTxt));
  }
  const close=()=>{
    dispatch(resetUser())
  }


  return (
    <div className='user-container'>
      {
        user.username === '' ?
          <div className="form-user">
            <div className="control-form">
              <label htmlFor="user">USUARIO</label>
              <input type={'text'} name='user' value={userTxt} onChange={(e) => setUserTxt(e.target.value)} />
            </div>
            <Button outlineColor="text" click={login}>Ingresar</Button>
          </div>
          :
          <>
            <div className="user-card-header">
              <div className="circle-user">
                <AiOutlineUser></AiOutlineUser>
              </div>
            </div>
            <div className="user-card-body">
              <p>User: {user.username}</p>
              <Button outlineColor="text" click={close}>Cerrar Session</Button>
            </div>
          </>
      }
    </div>
  )
}

export default UserCard