import {BiRightArrow} from "react-icons/all";
import {ValidationError, useForm} from "@formspree/react";
import '../less/Suscribe.less';
import { useEffect, useState } from "react";
import { controlModal } from "../../Shared/Components/Modal/ControlModal";

export const Suscribe = () => {

    const [email, setEmail] = useState('')
    const [stateMail,handleSubmit]=useForm("myyvddev");


    useEffect(()=>{
        if(stateMail.succeeded){
            controlModal("Alerta!!!",<h4 style={{textAlign:'center',padding:20}}>Mensaje recibido!!!</h4>)
        }
    },[stateMail])
    
    const noSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleSubmit(e);
    }

  return (
    <>
    <div className="suscribe-cont">
        <div className="text">
            <p className="title-suscribe">NEWLSLETTER</p>
            <h2>SUSCRIBITE</h2>
            <p className="paragraph-text">y enterate de todas las novedades</p>
        </div>
        <div className="form">
            <form onSubmit={(e)=>noSubmit(e)}>
                <input type="email" name="email" id="email" placeholder="Ingresa tu email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit"><BiRightArrow></BiRightArrow></button>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={stateMail.errors}
                />
            </form>
        </div>
    </div>
    </>
  )
}
