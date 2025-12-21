import css from './ModalError.module.css'
import Image from 'next/image'
import { createPortal } from 'react-dom'
function ModalError(){



    return createPortal(
        <div className={css.backDrop}>
            <div className={css.modal}>
                <Image src={'/icons/close.svg'} alt='close icon' width={24} height={24}/>
                <h2 className={css.header}>Помилка під час збереження</h2>
                <p className={css.text}>Щоб зберегти статтю вам треба увійти, якщо ще немає облікового запису зареєструйтесь</p>

                <div className={css.wrapperForButtons}>
                    <button type='button' className={css.loginButton}>Увійти</button>
                    <button type='button' className={css.registerButton}>Зареєструватись</button>
                </div>
            </div>
        </div>,
        document.body
    )

}



export default ModalError;