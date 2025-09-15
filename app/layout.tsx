import type React from "react"
import type { Metadata } from "next"
import { Fira_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ReduxProvider } from "@/components/redux-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Front-End Developer Portfolio",
  description:
    "Professional portfolio showcasing 3.7+ years of front-end development experience with React.js, Next.js, and modern web technologies.",
  keywords: "front-end developer, react, next.js, typescript, javascript, portfolio, web development",
  authors: [{ name: "Front-End Developer" }],
  openGraph: {
    title: "Front-End Developer Portfolio",
    description: "Professional portfolio showcasing 3.7+ years of front-end development experience",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // path in /public
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark", "blue", "purple"]}
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
