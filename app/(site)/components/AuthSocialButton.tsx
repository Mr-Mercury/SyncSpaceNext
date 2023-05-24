import { IconType } from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({icon: Icon, onClick}) => {
    return (
        <button 
          type='button' 
          onClick={onClick}
          className='
            inline-flex
            w-full
            justify-center
            rounded-md
            bg-slate-200
            shadow-sm
            ring-1
            ring-inset
            ring-slate-300
            hover:bg-slate-300
            focus:outline-offset-0' >

        </button>
    );
}

export default AuthSocialButton;