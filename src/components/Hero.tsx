import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Heart, MessageCircle, Navigation, PawPrint, Scissors, Star, Truck } from 'lucide-react'
import { HERO, LOJA, MARCAS, MENSAGENS } from '../loja'
import { waLink } from '../lib/whatsapp'
import { linkRota } from '../lib/mapa'
import { useMotionPreferences } from '../hooks/useMotionPreferences'
import { useSceneActivity } from '../hooks/useSceneActivity'
import BrandIcon from './BrandIcon'
import StatusLoja from './StatusLoja'
import { Pata } from './Icones'
import { EASE } from './Reveal'

function PalavraQueGira({ pronto, ativo }: { pronto: boolean; ativo: boolean }) {
  const { reduced } = useMotionPreferences()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!pronto || !ativo || reduced) return
    const t = window.setInterval(() => setI(v => (v + 1) % HERO.palavras.length), 2400)
    return () => clearInterval(t)
  }, [pronto, ativo, reduced])
  const maior = HERO.palavras.reduce((a, b) => (b.length > a.length ? b : a))
  return <span className="hero-palavra" aria-hidden="true">
    <span className="hero-palavra-medida">{maior}</span>
    <AnimatePresence initial={false}>
      <motion.span key={i} className="hero-palavra-atual"
        initial={{ y: '90%', opacity: 0, rotate: 4 }} animate={pronto ? { y: 0, opacity: 1, rotate: 0 } : {}}
        exit={{ y: '-80%', opacity: 0, rotate: -3, transition: { duration: reduced ? 0 : 0.45, ease: EASE, delay: 0 } }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: pronto && i === 0 ? 0.45 : 0.05 }}>
        {HERO.palavras[i]}
        <svg className="hero-sublinhado" viewBox="0 0 300 18" preserveAspectRatio="none" focusable="false"><motion.path d="M4 13C60 5 140 3 296 9" initial={{ pathLength: reduced ? 1 : 0 }} animate={pronto ? { pathLength: 1 } : {}} transition={{ duration: 0.7, delay: pronto && i === 0 ? 0.95 : 0.3, ease: EASE }} /></svg>
      </motion.span>
    </AnimatePresence>
  </span>
}

/** Banheira desenhada (sem imagem), com espuma na borda e a pata na frente. */
function Banheira() {
  const espuma: [number, number, number][] = [[48, 60, 26], [86, 44, 32], [132, 52, 28], [176, 38, 34], [224, 50, 30], [268, 36, 36], [316, 48, 31], [362, 34, 35], [410, 50, 30], [452, 40, 33], [500, 52, 28], [544, 44, 30], [574, 62, 22], [22, 70, 18], [300, 60, 24], [196, 62, 22], [430, 64, 22]]
  return <svg className="hv-banheira" viewBox="0 0 600 236" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="hv-corpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset=".7" stopColor="#EAF4F7" /><stop offset="1" stopColor="#D3E4EA" /></linearGradient>
      <linearGradient id="hv-aro" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#DDEBEF" /></linearGradient>
      <radialGradient id="hv-espuma" cx=".38" cy=".32" r=".75"><stop offset="0" stopColor="#FFFFFF" /><stop offset=".72" stopColor="#F4FBFD" /><stop offset="1" stopColor="#CFEAF3" /></radialGradient>
    </defs>
    <ellipse cx="300" cy="226" rx="250" ry="10" fill="rgba(10, 60, 70, .16)" />
    <path d="M128 196c-4 14-14 22-26 26h40c2-8 2-18-2-26Z M472 196c4 14 14 22 26 26h-40c-2-8-2-18 2-26Z" fill="var(--acento)" />
    <path d="M36 96H564C560 150 548 178 520 192C498 203 470 206 440 206H160C130 206 102 203 80 192C52 178 40 150 36 96Z" fill="url(#hv-corpo)" />
    <path d="M60 112H540" stroke="rgba(15, 157, 148, .14)" strokeWidth="3" strokeLinecap="round" />
    <g transform="translate(300 150) scale(.95)" fill="var(--principal)" opacity=".9">
      <ellipse cx="0" cy="10" rx="17" ry="15" /><ellipse cx="-22" cy="-6" rx="7" ry="9" transform="rotate(-18 -22 -6)" /><ellipse cx="-9" cy="-19" rx="7.4" ry="9.8" transform="rotate(-6 -9 -19)" /><ellipse cx="9" cy="-19" rx="7.4" ry="9.8" transform="rotate(6 9 -19)" /><ellipse cx="22" cy="-6" rx="7" ry="9" transform="rotate(18 22 -6)" />
    </g>
    {espuma.map(([x, y, r], i) => <g key={i}><circle cx={x + 4} cy={y + 5} r={r} fill="#BFE3EE" /><circle cx={x} cy={y} r={r} fill="url(#hv-espuma)" /></g>)}
    <rect x="14" y="74" width="572" height="28" rx="14" fill="url(#hv-aro)" stroke="#CFE2E8" strokeWidth="2" />
  </svg>
}

const ICONES = { entrega: Truck, tesoura: Scissors, coracao: Heart, pata: PawPrint, mensagem: MessageCircle }

const BOLHAS = [
  { x: 14, s: 26, t: 6.2, d: 0 }, { x: 28, s: 14, t: 5.1, d: -2.4 }, { x: 44, s: 34, t: 7.4, d: -4.1 }, { x: 58, s: 18, t: 5.6, d: -1.2 },
  { x: 70, s: 28, t: 6.8, d: -3.3 }, { x: 84, s: 16, t: 5.3, d: -0.6 }, { x: 36, s: 12, t: 4.8, d: -3.9 }, { x: 78, s: 22, t: 6.1, d: -5.2 },
]

/**
 * Topo sem logotipo: o cachorro de banho tomado sai da banheira de espuma, o gato espia do lado,
 * as bolhas sobem e os selos (nota no Google, destaque da loja, entrega) aparecem em volta.
 */
export default function Hero({ pronto }: { pronto: boolean }) {
  const { reduced } = useMotionPreferences()
  const ref = useRef<HTMLElement>(null)
  const ativo = useSceneActivity(ref)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 })
  const cX = useTransform(sx, v => v * -8), cY = useTransform(sy, v => v * -6)
  const pX = useTransform(sx, v => v * 12), pY = useTransform(sy, v => v * 8)
  const gX = useTransform(sx, v => v * 6)
  const mover = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width * 2 - 1); my.set((e.clientY - r.top) / r.height * 2 - 1)
  }
  const surge = (delay: number) => ({ initial: reduced ? false as const : { opacity: 0, y: 18 }, animate: pronto ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, delay, ease: EASE } })
  const pop = (delay: number, rot = 0) => ({ initial: reduced ? false as const : { scale: 0, rotate: rot - 30 }, animate: pronto ? { scale: 1, rotate: rot } : {}, transition: { type: 'spring' as const, stiffness: 240, damping: 13, delay } })
  const nota = LOJA.avaliacao.nota
  const SeloIcone = ICONES[HERO.selos.destaque.icone]
  const BotaoIcone = ICONES[HERO.secundario.icone]

  return <section id="inicio" ref={ref} className={`hero hero-banho ${pronto ? 'is-pronto' : ''} ${ativo && !reduced ? 'is-ativo' : ''}`}>
    <span className="hero-fundo" aria-hidden="true"><i /><i /><i /></span>
    <div className="wrap hero-banho-grade">
      <div className="hero-visual" onPointerMove={mover} onPointerLeave={() => { mx.set(0); my.set(0) }}>
        <motion.span className="hv-circulo" aria-hidden="true" style={reduced ? undefined : { x: cX, y: cY }}
          initial={reduced ? false : { scale: 0.6, opacity: 0 }} animate={pronto ? { scale: 1, opacity: 1 } : {}} transition={{ type: 'spring', stiffness: 90, damping: 14 }} />
        <motion.div className="hv-gato-caixa" style={reduced ? undefined : { x: gX }}>
          <motion.img className="hv-gato" src="/loja/hero/gato-recorte.webp" width={702} height={975} alt="" decoding="async"
            initial={reduced ? false : { x: '40%', opacity: 0, rotate: 8 }} animate={pronto ? { x: 0, opacity: 1, rotate: 0 } : {}} transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.55 }} />
        </motion.div>
        <motion.div className="hv-cachorro-caixa" style={reduced ? undefined : { x: pX, y: pY }}>
          <motion.img className="hv-cachorro" data-hero-principal src="/loja/hero/cachorro-recorte.webp" srcSet="/loja/hero/cachorro-recorte-480.webp 480w, /loja/hero/cachorro-recorte.webp 925w" sizes="(max-width: 960px) 62vw, 380px" width={925} height={937}
            alt="Shih-tzu de banho tomado, com bandana verde, saindo de uma banheira cheia de espuma, com um gato laranja espiando ao lado" fetchPriority="high" decoding="async"
            initial={reduced ? false : { y: '45%' }} animate={pronto ? { y: 0 } : {}} transition={{ type: 'spring', stiffness: 110, damping: 13, delay: 0.25 }} />
        </motion.div>
        <motion.div className="hv-banheira-caixa" initial={reduced ? false : { y: 40, opacity: 0 }} animate={pronto ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
          <Banheira />
        </motion.div>
        <span className="hv-bolhas" aria-hidden="true">
          {BOLHAS.map((b, i) => <i key={i} style={{ '--x': `${b.x}%`, '--s': `${b.s}px`, '--t': `${b.t}s`, '--d': `${b.d}s` } as CSSProperties} />)}
        </span>
        {nota && <motion.span className="hv-nota" {...pop(1.0, -3)}>
          <span className="hv-estrelas" aria-hidden="true">{[0, 1, 2, 3, 4].map(i => <Star key={i} size={14} strokeWidth={0} fill="currentColor" />)}</span>
          <b>{nota}</b><span>{LOJA.avaliacao.total} avaliações no {LOJA.avaliacao.fonte}</span>
        </motion.span>}
        <motion.span className="hv-selo-banho" aria-hidden="true" {...pop(1.2, 10)}><SeloIcone size={22} strokeWidth={2.2} /><span>{HERO.selos.destaque.texto}</span></motion.span>
        {HERO.selos.entrega && <motion.span className="hv-selo-entrega" aria-hidden="true" {...pop(1.35, -4)}><Truck size={18} strokeWidth={2.2} />{HERO.selos.entrega}</motion.span>}
      </div>

      <div className="hero-cartao">
        <motion.span className="hero-selo" {...surge(0.25)}><Pata /><span><span className="hero-selo-pre">{HERO.seloPre} </span>{HERO.selo}</span></motion.span>
        <h1 aria-label={`${HERO.linha} ${HERO.palavras.join(' ')}`}>
          <motion.span className="hero-linha" aria-hidden="true" {...surge(0.32)}>{HERO.linha}</motion.span>
          <PalavraQueGira pronto={pronto} ativo={ativo} />
        </h1>
        <motion.p className="hero-texto" {...surge(0.5)}>{HERO.texto}</motion.p>
        <motion.div className="hero-acoes" {...surge(0.62)}>
          <a className="botao botao-whats" href={waLink(MENSAGENS.padrao)} target="_blank" rel="noopener noreferrer"><BrandIcon brand="whatsapp" /><span>{HERO.cta}</span></a>
          <a className="botao botao-claro" href={waLink(MENSAGENS[HERO.secundario.mensagem])} target="_blank" rel="noopener noreferrer"><BotaoIcone size={18} strokeWidth={2.2} aria-hidden="true" /><span>{HERO.secundario.texto}</span></a>
        </motion.div>
        <motion.div className="hero-infos" {...surge(0.74)}>
          <StatusLoja />
          <span className="hero-info"><b>+{MARCAS.length}</b> marcas</span>
          <a className="hero-info hero-info-link" href={linkRota} target="_blank" rel="noopener noreferrer"><Navigation size={14} strokeWidth={2.4} aria-hidden="true" />Como chegar</a>
        </motion.div>
      </div>
    </div>
  </section>
}
