import { useRef } from "react"
import { Root } from "react-dom/client"
import { IoMdCloseCircle } from "react-icons/io"
import '../less/Modal.less';

export default function Modal({ children, title, root }: { title: string, root: Root, children?: JSX.Element }): JSX.Element {

    const ref = useRef<any>(null);

    const close = () => {
        if (ref.current === null) {
            console.log("errore ne le useRef");
            return;
        }
        ref.current.classList.add('close');
        ref.current.addEventListener('animationend', () => {
            root.unmount();
        }, { once: true });
    }

    return (
        <div className='back shadow' ref={ref}>
            <div className='front'>
                <div className="header-close">
                    <div className="btn-icon" onClick={close}>
                        <IoMdCloseCircle fill='black' fontSize='30px' />
                    </div>
                </div>
                <div className="from-body">
                    {children}
                </div>
            </div>
        </div>
    )
}