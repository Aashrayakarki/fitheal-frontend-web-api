import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Registerpage from './Registerpage';
import { toast } from 'react-toastify';
import {registerUserApi } from '../../apis/Api';

//import browser router
// import { BrowserRouter } from 'react-router-dom';

//Mocking the API js (No sending request to real backend)
jest.mock('../../apis/Api');

//Making test case
describe('Login Component Test', () => {
    //Clear all the mock data
    afterEach(() => {
        jest.clearAllMocks();
    });

    //defining test1
    it('should show error message on failed register', async () => {
        //rendering login component
        render(<Registerpage />) //Built Screen

        //render(
        //    <BrowserRouter>
        //        <Login/>
        //    </BrowserRouter>
        //)

        //Mocking register fail response
        const mockResponse = {
            data: {
                success: false,
                message: "Please enter all fields!"
            }
        }

        //Config mock resolved value
        registerUserApi.mockResolvedValue(mockResponse);

        //Config that toast error message as a test function
        toast.error = jest.fn();

        //Testing real UI component
        //1. Finding teh details and button
        const fname = await screen.getByPlaceholderText("Enter your first name")
        const lname = await screen.getByPlaceholderText("Enter your last name")
        const email = await screen.getByPlaceholderText("Enter your email address")
        const password = await screen.getByPlaceholderText("Enter your password")
        const confirmPassword = await screen.getByPlaceholderText("Type your password again")
        const phone = await screen.getByPlaceholderText("Enter your phone number")
        const height = await screen.getByPlaceholderText("Enter your height")
        const weight = await screen.getByPlaceholderText("Enter your weight")
        const age = await screen.getByPlaceholderText("Enter your age")
        const gender = await screen.getByPlaceholderText("Enter your gender")
        const registerBtn = screen.getByText("Create an Account")

        //2. Simulating the details
        fireEvent.change(fname, { target: { value: "test" } })
        fireEvent.change(lname, { target: { value: "test" } })            
        fireEvent.change(email, { target: { value: "test@gmail.com" } })
        fireEvent.change(password, { target: { value: "test123" } })
        fireEvent.change(confirmPassword, { target: { value: "test123" } })
        fireEvent.change(phone, { target: { value: "1234567890" } })
        fireEvent.change(height, { target: { value: "175" } })
        fireEvent.change(weight, { target: { value: "70" } })
        fireEvent.change(age, { target: { value: "25" } })
        fireEvent.change(gender, { target:{value: "male"}})
        fireEvent.click(registerBtn)
        //We have done all setup above
        waitFor(
            () => {
                expect(registerUserApi).toHaveBeenCalledWith({
                    firstName: "test",
                    lastName: "test",
                    email: "test@gmail.com",
                    password: "test123",
                    confirmPassword: "test",
                    phone: "1234567890",
                    height: "175",
                    weight: "70",
                    age: "25",
                    gender: "male"
                })
                //Toast error
                expect(toast.error).toHaveBeenCalledWith("Please enter all fields!")

            });
    })

});