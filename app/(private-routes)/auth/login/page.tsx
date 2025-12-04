'use client'

import { Form, Formik, Field} from "formik";
import { signSchema } from "@/app/validation/signSchema";
import { InitialValuesEdit } from "@/app/interfaces";
import css from './Login.module.css'
import Link from "next/link";
const initialValues: InitialValuesEdit= {
    email: '',
    password: '',
    name: ''
}
const handleLogin = () =>{

}
function Login(){
    return(
        <div className={css.container}>
            <section className={css.loginSection}>
                <div className={css.wrapperButton}>
                    <Link href={'/auth/register'}><button className={css.buttonRegister} type="button">Реєстрація</button></Link>
                    <Link href={'/auth/login'}><button className={css.buttonLogin} type="button">Вхід</button></Link>
                </div>
                <h2 className={css.headerLogin}>Вхід</h2>
                <p className={css.textLogin}>Вітаємо знову у спільноту мандрівників!</p>
                <Formik initialValues={initialValues} validationSchema={signSchema} onSubmit={handleLogin}>
                        
                        <Form className={css.form}>

                            <div className={css.wrapper}>
                                <label className={css.label}>Пошта*</label>
                                <Field className={css.input} name="email" type='email' required placeholder="hello@podorozhnyky.ua" />
                                

                                
                            </div>

                            <div className={css.wrapper}>
                                <label className={css.label}>Пароль*</label>
                                <Field className={css.input} name="password" type='password' required  placeholder="********"/>
                                
                            </div>
                            <button className={css.loginButton} type="button">Увійти</button>
                        </Form>
                    
                    
                </Formik>
            </section>
            
        </div>
        
    )
}



export default Login;