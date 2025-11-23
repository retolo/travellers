'use client'


import { validateEmail, validatePassword} from "@/app/validation/signSchema";
import { Form, Formik, Field} from "formik";
import { signSchema } from "@/app/validation/signSchema";
import { InitialValuesEdit } from "@/app/interfaces";
import css from './Register.module.css'
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
            <Formik initialValues={initialValues} validationSchema={signSchema} onSubmit={handleRegister}>
                {({errors, touched}) =>(
                    <Form className={css.form}>
                        <div className={css.wrapper}>
                            <Field className={css.input} type="text" required placeholder="Ваше імʼя та прізвище"/>

                            <label className={css.label}>Імʼя та Прізвище*</label>
                            {errors.name && touched.name && <p className={css.validation}>{errors.name}</p>}
                        </div>

                        <div className={css.wrapper}>
                            <Field className={css.input} type='email' required placeholder="hello@podorozhnyky.ua" validate={validateEmail}/>
                            <label className={css.label}>Пошта*</label>

                            {errors.email && touched.email && <p className={css.validation}>{errors.email}</p>}
                        </div>

                        <div className={css.wrapper}>
                            <Field className={css.input} type='password' required validate={validatePassword} placeholder="********"/>
                            <label className={css.label}>Пароль*</label>
                        </div>
                    </Form>
                )}
            
            </Formik>
        </div>
        
    )
}



export default Register;