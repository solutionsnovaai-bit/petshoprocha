import { CHAMADA, LOJA, MENSAGENS } from '../loja'
import { waLink } from '../lib/whatsapp'
import BrandIcon from './BrandIcon'
import { Pata } from './Icones'
import Reveal from './Reveal'

/** Cartão final com a madeira vermelha das portas do celeiro. */
export default function ChamadaFinal() {
  return <section id="pedir" className="chamada">
    <Reveal className="wrap" y={40}>
      <div className="chamada-cartao">
        <svg className="chamada-traves" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M3 3H97V97H3Z M3 3L97 97 M97 3L3 97" /></svg>
        <img className="chamada-logo" src="/diamond/logo-640.webp" width={640} height={640} alt="" decoding="async" />
        <div className="chamada-texto">
          <h2><span>{CHAMADA.titulo}</span> <em>{CHAMADA.destaque}</em></h2>
          <p>{CHAMADA.texto}</p>
          <a className="botao botao-whats botao-grande" href={waLink(MENSAGENS.padrao)} target="_blank" rel="noopener noreferrer"><BrandIcon brand="whatsapp" /><span>{CHAMADA.cta}</span></a>
          {LOJA.whatsappExibicao && <p className="chamada-numero"><Pata />{LOJA.whatsappExibicao}</p>}
        </div>
      </div>
    </Reveal>
  </section>
}
