import { Icon } from '@iconify/react';
const IconText = ({iconName, displayText, active})=>{
    return(
        <div className="flex items-center justify-start cursor-pointer">
            <div className='px-5 py-3'>
                {/* for icon */}
                <Icon 
                    icon={iconName} 
                    color={active?'white':"gray"} 
                    fontSize={25}
                />
            </div>
            <div className={`${active? "text-white":"text-gray-400"} text-sm font-semibold hover:text-white`}>
                {/* for text  */}
                {displayText}
            </div>
        </div>

    );
};
export default IconText;