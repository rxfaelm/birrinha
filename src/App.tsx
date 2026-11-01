import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { AboutSection } from './components/AboutSection'
import { TaxCalculator } from './components/TaxCalculator'
import { ReviewsSection } from './components/ReviewsSection'
import { VisitSection } from './components/VisitSection'
import { Footer } from './components/Footer'
import { MessageCircle } from 'lucide-react'
import { restaurant } from './data/birrinhaData'
import { Reveal } from './components/Reveal'

export default function App(){return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo"><Hero/><Reveal><MenuSection/></Reveal><Reveal><AboutSection/></Reveal><Reveal><TaxCalculator/></Reveal><Reveal><ReviewsSection/></Reveal><Reveal><VisitSection/></Reveal></main><Footer/><a className="floating-whatsapp" href={`https://wa.me/${restaurant.phone}`} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle/></a></>}
