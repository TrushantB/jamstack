import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preload"
					href="/fonts/Neo-Sans/Neo-Sans-Pro.woff"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Neo-Sans/Neo-Sans-Pro-Medium.OTF"
					as="font"
					type="font/otf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Neo-Sans/Neo-Sans-Pro-Bold.OTF"
					as="font"
					type="font/otf"
					crossOrigin=""
				/>
					<link
					rel="preload"
					href="/fonts/Inter/Inter.woff2"
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="fonts/Inter/Inter-Medium.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="fonts/Inter/Inter-Bold.ttf"
					as="font"
					type="font/ttf"
					crossOrigin=""
				/>
				<link rel="stylesheet" href="/fonts/Neo-Sans/font.css" />
				<link rel="stylesheet" href="/fonts/Inter/font.css" />
			</Head>
			<body className='antialiased'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
