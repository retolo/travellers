import { createPortal } from "react-dom";
import css from './ModalLogOut.module.css'
import Image from "next/image";




function ModalLogOut(){


    return createPortal(
        
        <div className={css.backDrop}>
            <div className={css.modal}>
                <Image src={'/icons/close.svg'} width={24} height={24} alt="close icon"/>
                <h2 className={css.header}>Ви точно хочете вийти?</h2>
                <p className={css.text}>Ми будемо сумувати за вами!</p>

                <div className={css.wrapperForButtons}>
                    <button type="button" className={css.cancelButton}>Відмінити</button>
                    <button type="button" className={css.logOutButton}>Вийти</button>
                </div>
            </div>
        </div>,
        document.body
    )

}



export default ModalLogOut;