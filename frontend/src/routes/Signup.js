import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useCookies} from "react-cookie";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers"

const SignupComponent = ()=>{
    const [email, setEmail] =useState("");
    const [confirmEMail, setConfirmEmail] =useState("");
    const [username, setUserName] =useState("");
    const [password, setPassword] =useState("");
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [cookie, setCookie] = useCookies(['token']);

    const SignUp = async () =>{
        if(email !== confirmEMail)
        {
            alert("Email and Confirm Email does not match, Please check again!");
            return;
        }
        const data = {email,username,password,firstName,lastName};
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);

        if(response && !response.err)
        {
            console.log(response)
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() +30 );
            setCookie("token", token,{path :"/", expires:date} );
            alert("Success")
        }
        else{
            alert("failed")
        }
    };
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-4 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className='font-bold mb-4 text-2xl'>
                    Signup for free to start listening.
                </div>
                <TextInput 
                    label="Email address" 
                    placeholder="Enter your email address"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <TextInput 
                    label="Confirm Email address" 
                    placeholder="Re-Enter your email address"
                    className="mb-6"
                    value={confirmEMail}
                    setValue={setConfirmEmail}
                />
                <TextInput 
                    label="Username" 
                    placeholder="Enter Your Username"
                    className="mb-6"
                    value={username}
                    setValue={setUserName}
                />
                <PasswordInput 
                    label="Create Password" 
                    placeholder="Enter strong password" 
                    value={password}
                    setValue={setPassword}
                />
                <div className='w-full flex justify-between items-center space-x-8'>
                    <TextInput 
                        label="First Name" 
                        placeholder="Enter Your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput 
                        label="Last Name" 
                        placeholder="Enter Your last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                <div className='w-full flex items-center justify-center my-8'>
                    <button 
                        className='bg-green-400 text-lg font-semibold p-3 px-10 rounded-full'
                        onClick={(e)=>{
                            e.preventDefault();
                            SignUp();
                        }}>
                        SIGN 
                    </button>
                </div>
                <div className='w-full border border-solid border-gray-300'></div>
                <div className='my-6 font-semibold text-lg'>Already have an Account ?</div>
                <div className='border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold'>
                    <Link to="/login">LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;