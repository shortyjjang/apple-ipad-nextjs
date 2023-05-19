import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apple (KR)" />
        <meta property="og:title" content="iPad 10.2" />
        <meta property="og:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
        <meta property="og:image" content="/assets/images/ipad-seo.png" />
        <meta property="og:url" content="https://apple.com/kr/ipad-10.2" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Apple (KR)" />
        <meta property="twitter:title" content="iPad 10.2" />
        <meta property="twitter:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
        <meta property="twitter:image" content="/assets/images/ipad-seo.png" />
        <meta property="twitter:url" content="https://apple.com/kr/ipad-10.2" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
