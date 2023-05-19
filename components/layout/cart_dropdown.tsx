import Link from 'next/link'
import { useState } from 'react'

export type LinkType = {
    url: string
    name: string
}
const cartMenu:LinkType[] = [
    {
        url: '/',
        name: '장바구니'
    },
    {
        url: '/',
        name: '저장된 항목'
    },
    {
        url: '/',
        name: '주문'
    },
    {
        url: '/',
        name: '저장'
    },
    {
        url: '/',
        name: '로그인'
    }
]
export default function CartDropdown({cartDropdown}:
    {
        cartDropdown: boolean
    }) {
    const cart = useState<{}[]>([])
    const CartMenu = ({url, name}:LinkType) => {
        return (<li><Link href={url} className="py-3 px-4 text-sm border-t border-gray-200 block text-blue-400 hover:underline">{name}</Link></li>)
    }
    return (
        <div onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} 
            className={`w-[290px] border transition-opacity border-gray-200 bg-white top-100 mt-3 rounded right-3 absolute
            ${cartDropdown 
                ? 'opacity-1 py-2 px-4 '
                : 'opacity-0'
            }
        `}
        >
            {cartDropdown &&<>
                <div className="absolute bottom-full right-3 w-[20px] h-[10px] overflow-hidden"><div className="w-[18px] h-[18px] border border-gray-200 rotate-45 mt-[3px] bg-white" style={{borderBottomColor: '#fff'}}></div></div>
                {cart.length > 0 
                ?<div className="text-center text-gray-500 py-10">장바구니가 비어있습니다</div>
                :<div></div>}
                <ul>
                    {cartMenu.map(menu => <CartMenu {...menu} key={menu.url}/>)}
                </ul>
            </>}
        </div>
    )
}
