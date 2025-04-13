import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toom",
  description: "Video calling app",
  icons :{
    icon : '/icons/logo.svg'
  }
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <ClerkProvider appearance={{
                layout: {
                logoImageUrl: '/icons/yoom-logo.svg',
                socialButtonsVariant:
                'iconButton'
                },
                variables: {
                colorText: '#ffff',
                colorPrimary:'#0E78F9',
                colorBackground :'#1c1f2e'
                },
              }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 `}
      ><Toaster richColors position="top-right"/>
        {children}
      </body>
      </ClerkProvider>
    </html>
  );
}

export default RootLayout


