import React from 'react'
import { Sofia_Sans } from "@next/font/google"

export default function Header() {
  return (
    <div className="py-20 flex flex-col gap-3 text-center bg-secondary p-3 text-background">
      <p className="text-5xl">Fajna Logopedka </p>
      <p className="text-2xl">Bogusia Zimnoch - Logopeda</p>
    </div>
  )
}
