import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { LinkType } from "./cart_dropdown"

const links = [
    {url:'/',name:'Apple Store 임시 휴무 관련 자주하는 질문'},
    {url:'/',name:'Apple Store Online에서 쇼핑하기'},
    {url:'/',name:'AirPods'},
    {url:'/',name:'AirTag'}
]

export default function Search({showSearch, setShowSearch}:{
    showSearch: boolean
    setShowSearch: (show:boolean) => void
}) {
    const {register, handleSubmit, setValue} = useForm()
    const [suggest, setSuggest ] = useState<LinkType[]>([])
    const onSearch = handleSubmit((data) => {
        console.log(data)
        const {keyword} = data
        if(!keyword) return;
        setShowSearch(false)
        setValue('keyword','')
    })
    const Keyword = ({url, name}: LinkType) => {
        return(
            <li><Link href={url} className="block py-3 font-base px-5 hover:text-blue-500 hover:bg-gray-200">{name}</Link></li>
        )
    }
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60" onClick={() => setShowSearch(false)}></div>
            <div className="flex h-[44px] relative">
                <Image src="/assets/images/header_search.svg" width={15} height={15}  alt="검색" /> 
                <input {...register('keyword')} placeholder="apple.com 검색" onKeyDown={(e) => e.key === 'Enter' && onSearch()} className="text-lg w-full bg-transparent px-3 outline-none text-white" />
                <button type="button" onClick={() => setShowSearch(false)} className="aspect-square w-[44px] text-center"><Image src="/assets/images/header_close.svg" width={11} height={11}  alt="닫기" /></button>
            </div>
            {suggest && suggest.length > 0 && <div className="absolute bg-white rounded-b-lg py-5 px-10 shadow-sm w-full">
                <h3 className="font-bold text-gray-500 font-sm pb-2">빠른 링크</h3>
                <ul>
                    {suggest.map(keyword => <Keyword key={keyword.url} name={keyword.name} url={keyword.url} />)}
                </ul>
            </div>}
        </div>
    )
}
