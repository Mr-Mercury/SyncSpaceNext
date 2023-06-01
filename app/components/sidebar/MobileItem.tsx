'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({href, icon:Icon, active, onClick}) => {
    
    const handleClick = () => {
        if(onClick) {
            return onClick();
        }
    }

    return (
        <Link href={href} onClick={onClick} 
            className={clsx(`
              group 
              flex 
              gap-x-3 
              text-sm 
              leading-6 
              font-semibold 
              w-full 
              justify-center 
              p-4
              text-slate-300
              hover:text-slate-50
              hover:bg-zinc-700`,
              active && 'bg-zinc-700 text-slate-50')}
              >
            <Icon className='h-6 w-6' />
        </Link>
    )
}

export default MobileItem;