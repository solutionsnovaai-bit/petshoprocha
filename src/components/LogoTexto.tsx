import { LOJA } from '../loja'
import { Pata } from './Icones'

/** Logotipo em texto, para lojas sem arte de logotipo: selo com a pata + nome em duas linhas. */
export default function LogoTexto({ tamanho = 'topo' }: { tamanho?: 'topo' | 'rodape' | 'abertura' | 'chamada' }) {
  return <span className={`logo-texto logo-texto-${tamanho}`} aria-label={LOJA.nome} role="img">
    <span className="logo-texto-selo" aria-hidden="true"><Pata /><i /><i /><i /></span>
    <span className="logo-texto-nome" aria-hidden="true"><b>{LOJA.logo.linha1}</b><small>{LOJA.logo.linha2}</small></span>
  </span>
}
