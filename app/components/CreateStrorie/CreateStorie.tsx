'user client'

import css from './CreateStorie.module.css'
import Image from 'next/image';
import { useState } from 'react';
function CreateStorie(){

    const [isChangeImage, setIsChangeImage] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);


    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h2 className={css.mainHeader}>Створити нову історію</h2>
                <h3 className={css.coverHeading}>Обкладинка статті</h3>
                <div className={css.secondWrapper}>
                    
                    <div className={css.contentWrapper}>
                        
                        <Image className={css.image} src={isChangeImage === true && imageUrl !== null ? imageUrl : "/desktop/placeholderImage.png"} alt='image story' width={865} height={576}/>


                        <input onChange={
                            (e) => {
                                const file = e.target.files?.[0];
                                if(file){
                                    const url = URL.createObjectURL(file);
                                    setImageUrl(url)
                                }
                            }
                        } type='file' id='image' name='image' hidden accept='image/*'/>
                        <label className={css.label} htmlFor='image' onClick={() => setIsChangeImage(true)}>Завантажити фото</label>

                        <form className={css.form}>
                            <label htmlFor='topic' className={css.labelForm}>Загаловок</label>
                            <input placeholder='Введіть заголовок історії' type='text' className={css.input} name='topic' id="topic"/>

                            <label htmlFor='category' className={css.labelForm}>Категорія</label>
                            <select name='category' id='category'  className={css.select}>
                                <option className={css.optionFirst}>Категорія</option>
                            </select>

                            <label htmlFor='text' className={css.labelForm}>Текст історії</label>
                            <textarea name='text' id='text' className={css.textarea} placeholder='Ваша історія тут'></textarea>
                        </form>

                    </div>
                    
                     <div className={css.wrapperForButtons}>
                        <button type='button' className={css.saveButton}>Зберегти</button>
                        <button type='button' className={css.cancelButton}>Відмінити</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default CreateStorie;