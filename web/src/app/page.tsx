import { User } from 'lucide-react'

import Image from 'next/image'

export default function Home() {
  return (
  <main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars-background.svg)] bg-cover px-28 py-16">      {/* blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full"/>
      {/* stripes */}
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>
      {/* sign in */}
      <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
        <p className="text-sm leading-snug">
          <span>Crie sua conta </span> e salve suas memórias!
        </p>
      </a>
      {/* welcome */}
      <div className="space-y-5">
        <div className="max-w-[420px] space-y-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
          </h1>
          <p className="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </p>
        </div>
        <a href="" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">Cadastrar uma lembrança</a>
      </div>
      

      {/* copyright */}
      <div className="text-sm leading-relaxed text-gray-200">
      Feito por <a className="underline hover:text-gray-100" href="https://github.com/kaylanelira" target="blank" rel="noreferrer">@kaylanelira</a> com base no NLW da <a className="underline hover:text-gray-100" href="https://rocketseat.com.br" target="blank" rel="noreferrer">Rocketseat</a>
      </div>
    </div>
    {/* Right */}
    <div className="flex flex-col p-16 bg-[url(../assets/stars-background.svg)] bg-cover">
      <div className="flex flex-1 items-center justify-center">
      <p className="text-center leading-relaxed w-[360]">
        Você ainda não registrou nenhuma lembrança, comece a {' '} 
        <a href="" className="underline hover: text-zinc-50">
          criar agora
        </a>
        !
      </p>
      </div>
    </div>
  </main>
  )
}
