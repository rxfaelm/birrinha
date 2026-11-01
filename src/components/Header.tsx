import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { restaurant } from '../data/birrinhaData'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header"><a className="brand" href="#inicio"><span className="brand-mark">B</span><span>RESTAURANTE<br/><b>DA BIRRINHA</b></span></a>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}><a onClick={() => setOpen(false)} href="#cardapio">Cardápio</a><a onClick={() => setOpen(false)} href="#sobre">Nossa casa</a><a onClick={() => setOpen(false)} href="#avaliacoes">Avaliações</a><a className="nav-cta" href={`https://wa.me/${restaurant.phone}`} target="_blank" rel="noreferrer">Fazer pedido <ArrowUpRight size={15}/></a></nav>
  </header>
}
