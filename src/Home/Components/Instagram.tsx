import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootInstagramState } from '../../Context/InstagramIMG';
import { Loading } from '../../Shared/Components/Loading';
import { getID } from '../../Shared/Service/IDs';
import '../less/Instagram.less';

const Instagram = () => {

    const {imgs}=useSelector((state:RootInstagramState)=>state);

    return (
        <div>
            <div className="title">
                <h5>INSTAGRAM</h5>
                <span className="line"></span>

                <p><a href='https://www.instagram.com' target={'_blank'}>#ESPUFI</a></p>
            </div>

            <div className="grid-images">
                {
                    imgs.map(e=>(
                        <ImgComponent e={e} key={getID(10)}/>
                    ))
                }
                
            </div>
        </div>
    )
}

const ImgComponent=({e}:{e:string})=>{
    const [load, setLoad] = useState(true);
    const loaded=()=>setLoad(false);
    return(
        <div className="img" key={getID()}>
            <Loading load={load}/>
            <img src={e} alt="img_test" onLoad={()=>loaded()}/>
        </div>
    )
}

export default Instagram