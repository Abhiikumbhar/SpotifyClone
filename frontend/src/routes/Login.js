import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';

const LoginComponent = ()=>{
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-4 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>
            <div className='inputRegion w-1/3 py-10 flex item-center justify-center flex-col'>
                <div className='font-bold mb-10'>to continue, login here</div>
                <TextInput label="Email address or username" placeholder="Email address or Username"/>
                <PasswordInput label="Password" placeholder="Password" />
            </div>
            

        </div>
    );
};

export default LoginComponent;