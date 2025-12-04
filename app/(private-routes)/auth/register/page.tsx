'use client'


import { validateEmail, validatePassword} from "@/app/validation/signSchema";
import { Form, Formik, Field} from "formik";
import { signSchema } from "@/app/validation/signSchema";
import { InitialValuesEdit } from "@/app/interfaces";
import css from './Register.module.css'
import Link from "next/link";
const initialValues: InitialValuesEdit= {
    email: '',
    password: '',
    name: ''
}
const handleRegister = () =>{

}
function Register(){
    return(
        <div className={css.container}>
            <section className={css.registerSection}>
                <div className={css.wrapperButton}>
                    <Link href={'/auth/register'}><button className={css.buttonRegister} type="button">Реєстрація</button></Link>
                    <Link href={'/auth/login'}><button className={css.buttonLogin} type="button">Вхід</button></Link>
                </div>
                <h2 className={css.headerRegister}>Реєстрація</h2>
                <p className={css.textRegister}>Раді вас бачити у спільноті мандрівників!</p>
                <Formik initialValues={initialValues} validationSchema={signSchema} onSubmit={handleRegister}>
                    {({errors, touched}) =>(
                        <Form className={css.form}>
                            <div className={css.wrapper}>
                                <label className={css.label}>Імʼя та Прізвище*</label>
                                <Field name="name" className={css.input} type="text" required placeholder="Ваше імʼя та прізвище"/>

                                
                                {errors.name && touched.name && <p className={css.validation}>{errors.name}</p>}
                            </div>

                            <div className={css.wrapper}>
                                <label className={css.label}>Пошта*</label>
                                <Field name="email" className={css.input} type='email' required placeholder="hello@podorozhnyky.ua" validate={validateEmail}/>
                                

                                {errors.email && touched.email && <p className={css.validation}>{errors.email}</p>}
                            </div>

                            <div className={css.wrapper}>
                                <label className={css.label}>Пароль*</label>
                                <Field name="password" className={css.input} type='password' required validate={validatePassword} placeholder="********"/>
                                
                            </div>
                            <button type="button" className={css.registerButton}>Зареєструватись</button>
                        </Form>
                    )}
                
                </Formik>
            </section>
            
        </div>
        
    )
}



export default Register;