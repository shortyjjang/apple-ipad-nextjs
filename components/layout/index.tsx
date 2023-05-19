
import { Roboto, Noto_Sans_KR } from 'next/font/google'
import Header from './header'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})
const noto = Noto_Sans_KR({
    subsets: ['latin'],
    weight: '400'
})

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className={`${roboto.className} ${noto.className}`}>
        <Header />
    </div>
  )
}
