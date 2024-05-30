import React, {useState} from 'react'
import { registerUserApi } from '../../apis/Api'
import { toast } from 'react-toastify'

const Registerpage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastname = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, password, confirmPassword)

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        registerUserApi(data).then((res) => {
            if(res.data.success==true){
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err)
            toast.error('Internal Server Error!')
        })
    }

    return (
        <>
            <div className='container mt-2'>
                <h1>Create an account</h1>
                <form className='w-50'>
                    <label>Firstname: {firstName}</label>
                    <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your first name' />

                    <label className='mt-2'>Lastname: {lastName}</label>
                    <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your last name' />

                    <label className='mt-2'>Email: {email}</label>
                    <input onChange={handleEmail} type="text" className='form-control' placeholder='Enter your email address' />

                    <label className='mt-2'>Password: {password}</label>
                    <input onChange={handlePassword} type="text" className='form-control' placeholder='Enter your password' />

                    <label className='mt-2'>ConfirmPassword: {confirmPassword}</label>
                    <input onChange={handleConfirmPassword} type="text" className='form-control' placeholder='Type your password again' />

                    <button onClick={handleSubmit} className='btn btn-dark mt-3 w-100'>Create an Account</button>
                </form>
            </div>
        </>
    )
}

export default Registerpage
