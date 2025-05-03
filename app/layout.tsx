import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Anusha Surendran's Portfolio",
	description: "A Full Stack Web Developer's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='icon'  sizes='any' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content="A Full Stack Web Developer's Portfolio"
				/>
				<meta name='theme-color' content='#000000' />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme=''
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
