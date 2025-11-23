import css from './Info.module.css'
import Image from 'next/image';

function Info(){
    return(
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.wrapperBlock}>
                    
                    <h2 className={css.headerSectionItem}>Проєкт, створений для тих, хто живе подорожами</h2>
                    <p className={css.textSectionItem}>Ми віримо, що кожна подорож — це унікальна історія, варта того, щоб нею поділилися. Наша платформа створена, щоб об&apos;єднати людей, закоханих у відкриття нового. Тут ви можете ділитися власним досвідом, знаходити друзів та надихатися на наступні пригоди разом з нами.</p>
                </div>
                <ul className={css.listItems}>
                    <li>
                        <Image src={'/icons/star.svg'} width={48} height={48} alt='star-icon'/>
                        <h3 className={css.headerList}>Наша місія</h3>
                        <p className={css.headerText}>Об&apos;єднувати людей через любов до пригод та надихати на нові відкриття.</p>
                    </li>
                    <li>
                        <Image src={'/icons/bag.svg'} width={48} height={48} alt='bag-icon'/>
                        <h3 className={css.headerList}>Автентичні історії</h3>
                        <p className={css.headerText}>Ми цінуємо справжні, нередаговані враження від мандрівників з усього світу.</p>
                    </li>
                    <li>
                        <Image src={'/icons/people.svg'} width={48} height={48} alt='people-icon'/>
                        <h3 className={css.headerList}>Ваша спільнота</h3>
                        <p className={css.headerText}>Станьте частиною спільноти, де кожен може бути і автором, і читачем.</p>
                    </li>
                    
                </ul>
            </div>
            
            
        </div>
    )
}



export default Info;