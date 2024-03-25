import React from 'react'
import { Sofia_Sans } from "@next/font/google"

export default function Header() {
  return (
    <div className="py-20 flex flex-col gap-6 text-center bg-secondary p-3">
      <p className="text-5xl text-white font-pacifico font-bold">Bogumiła Zimnoch</p>
      <p className="text-xl text-primary">Logopeda | Pedagog </p>
    </div>
  )
}
