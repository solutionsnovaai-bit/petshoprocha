import { Navigation } from 'lucide-react'
import { waLink } from '../lib/whatsapp'
import { linkRota } from '../lib/mapa'
import BrandIcon from './BrandIcon'
import { Pata } from './Icones'

export default function Hero({ pronto }: { pronto: boolean }) {
  return <section id="inicio" className={`hero hero-banho diamond-hero ${pronto ? 'is-pronto' : ''}`}>
    <picture className="diamond-hero-arte">
      <source media="(max-width: 760px)" srcSet="/diamond/hero-cotton-mobile-v2.webp" />
      <img data-hero-principal src="/diamond/hero-cotton-desktop-v2.webp" width={1536} height={864}
        fetchPriority="high" alt="" />
    </picture>
    <div className="wrap diamond-hero-conteudo">
      <div className="hero-cartao">
        <span className="hero-selo"><Pata />Vila Carrão · São Paulo</span>
        <h1>Cuidado que faz<br /><span>seu pet brilhar.</span></h1>
        <p className="hero-texto">Banho e tosa, táxi dog e os produtos que fazem parte do dia a dia do seu pet.</p>
        <div className="hero-acoes">
          <a className="botao botao-whats" href={waLink()} target="_blank" rel="noopener noreferrer"><BrandIcon brand="whatsapp" />Agendar no WhatsApp</a>
          <a className="botao botao-claro" href={linkRota} target="_blank" rel="noopener noreferrer"><Navigation size={18} aria-hidden="true" />Como chegar</a>
        </div>
      </div>
    </div>
  </section>
}
