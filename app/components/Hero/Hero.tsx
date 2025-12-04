import css from './Hero.module.css'


function Hero(){
    return(
        <section className={css.hero}>
            <div className={css.container}>
                    <div className={css.wrapper}>
                        <h1 className={css.heroHeader}>Відкрийте світ подорожей з нами!</h1>
                        <p className={css.heroText}>Приєднуйтесь до нашої спільноти мандрівників, де ви зможете ділитися своїми історіями та отримувати натхнення для нових пригод. Відкрийте для себе нові місця та знайдіть однодумців!</p>
                        <button className={css.joinButton}>Доєднатись</button>
                    </div>
                    
            </div>
        </section>
        
    )
}



export default Hero;