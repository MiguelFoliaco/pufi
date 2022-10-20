import { useState } from "react";
import { Button } from "../../Shared/Components/Button"
import { Loading } from "../../Shared/Components/Loading";
import '../less/Product.less';

type prop={
    title:string;
    image1:string;
    image2:string;
    description:string;
}

export const Product=({description,image1,image2,title}:prop)=>{

    const [load, setLoad] = useState(true);

    const loaded=()=>setLoad(false);

    return (
        <div className="product-content">
            <div className="float"></div>
            <div className="cont-img">
                <Loading load={load} />
                <img src={image1} alt="Imagen de freepik" onLoad={()=>loaded()}/>
                <Button className="btn-shop" outlineColor="primary" textColor="primary"><>SHOP</></Button>
            </div>
            <div className="cont-text"> 
                <div className="img-right">
                    <img src={image2} alt="sombrilla" />
                    <h4>{title}</h4>
                    <span className="line"></span>
                </div>
                <div className="text">
                    <p className="description">{description}</p>

                    <Button outlineColor="primary" textColor="text" ><>VER MAS</></Button>
                </div>
            </div>
        </div>
    )
}