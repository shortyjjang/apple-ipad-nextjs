import Link from "next/link";
import Container from "./container";
import { navigations } from "../data/navigations";
import Image from "next/image";
import { useEffect, useState } from "react";
import CartDropdown from "./cart_dropdown";
import Search from "./search";


export default function Header() {
    const [cartDropdown, showCartDropdown] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const Menu = ({
        children,
        url,
        onClick
    }:{
        children: React.ReactNode
        url?: string
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
    }) => {
        return(
            <li className="flex text-gray-50 opacity-80 text-xs
            hover:opacity-100">
                {url ? <Link href={url} className="flex items-center px-[10px] ">
                    {children}
                </Link>
                : onClick && <div onClick={onClick} className="flex items-center px-[10px] cursor-pointer">
                    {children}
                </div>}
            </li>
        )
    }
    useEffect(() => {
        const handleButtonClick = (e: MouseEvent) => {
          // Called when button is clicked
          showCartDropdown(false)
        };
    
        window.addEventListener("click", handleButtonClick);
        return () => {
            window.removeEventListener("click", handleButtonClick);
        };
    },[])
    return (
        <header className="fixed top-0 left-0 w-full">
            <nav className=" bg-neutral-700">
                <Container>
                    {showSearch 
                        ? <Search showSearch={showSearch} setShowSearch={setShowSearch} />
                        :<>
                            <ul className="h-[44px] flex justify-between text-white">
                                <Menu url="/"><Image src="/assets/images/header_apple.svg" width={14} height={17}  alt="애플" /></Menu>
                                {navigations.find(menu => menu.title === '쇼핑 및 알아보기') &&
                                navigations.find(menu => menu.title === '쇼핑 및 알아보기')?.maps.map(menu => 
                                    <Menu url={menu.url} key={menu.url}>{menu.name}</Menu>
                                )}
                                <Menu url="/">고객지원</Menu>
                                <Menu onClick={(e) => {
                                    e.stopPropagation()
                                    setShowSearch(!cartDropdown)
                                }}><Image src="/assets/images/header_search.svg" width={15} height={15}  alt="검색" /></Menu>
                                <Menu onClick={(e) => {
                                    e.stopPropagation()
                                    showCartDropdown(!cartDropdown)
                                }}><Image src="/assets/images/header_bag.svg" width={13} height={15} alt="장바구니" /></Menu>
                            </ul>
                            <CartDropdown cartDropdown={cartDropdown} />
                        </>
                    }
                </Container>
            </nav>
            <div className="bg-white shadow">
                <Container className="flex justify-between items-center">
                    <h1 className="text-xl font-extrabold">iPad</h1>
                    <div className="flex items-center py-3">
                        <Link href="/" className="bg-blue-500 py-1 px-3 text-white rounded-s-xl rounded-e-xl text-xs font-bold">구입하기</Link>
                    </div>
                </Container>
            </div>
        </header>
  )
}
