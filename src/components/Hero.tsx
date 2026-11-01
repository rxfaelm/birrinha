import { ArrowDown, Clock3, MapPin, Utensils, Wallet, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { restaurant } from '../data/birrinhaData'

const metrics = [
  { icon: Wallet, label: 'PREÇO MÉDIO', value: 'R$ 20–40' },
  { icon: Clock3, label: 'TEMPO MÉDIO', value: '15–45 min' },
  { icon: Utensils, label: 'SERVIÇO', value: 'Buffet Livre' },
  { icon: Clock3, label: 'HORÁRIO', value: restaurant.hours },
]
export function Hero() {
  const [openNow,setOpenNow]=useState(false)
  useEffect(()=>{const update=()=>{const now=new Date();const day=now.getDay();const minutes=now.getHours()*60+now.getMinutes();setOpenNow(day!==2&&minutes>=660&&minutes<840)};update();const timer=window.setInterval(update,60000);return()=>window.clearInterval(timer)},[])
  return <section className="hero" id="inicio">
  <div className="hero-shade"/><div className="hero-content"><div className="status"><i className={openNow?'':'closed'}/>{openNow?'ABERTO AGORA':'FECHADO AGORA'} <span>•</span> Buffet Livre & Entregas em Araguaína - TO</div>
    <p className="eyebrow">COMIDA DE VERDADE, FEITA COM CARINHO</p><h1>Sabor caseiro<br/>em <em>Araguaína.</em></h1>
    <p className="hero-copy">Seu almoço favorito, com variedade no buffet e aquele tempero que faz a gente se sentir em casa.</p>
    <div className="hero-actions"><a className="button button-primary" href={`https://wa.me/${restaurant.phone}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de fazer um pedido.')}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Pedir pelo WhatsApp</a><a className="button button-ghost" href="#cardapio">Ver cardápio <ArrowDown size={16}/></a></div>
  </div><div className="hero-bottom"><span><MapPin size={15}/>{restaurant.address}</span><span>Tempero caseiro desde sempre</span></div>
  <div className="metrics">{metrics.map(({icon: Icon,label,value})=><article className="metric" key={label}><Icon size={18}/><div><small>{label}</small><strong>{value}</strong></div></article>)}</div>
  </section> }
