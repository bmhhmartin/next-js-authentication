'use client'
import './globals.css'
import {SessionProvider} from "next-auth/react";



export default function RootLayout({ children, ...props }) {
  return (
    <html>
      <body>
        <SessionProvider session={props.session}>
            {children}
        </SessionProvider>
      </body>
    </html>
  )
}
