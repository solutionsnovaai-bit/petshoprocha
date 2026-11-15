import { LOJA } from '../loja'

export default function Marca({ tamanho = 'topo' }: { tamanho?: 'topo' | 'rodape' }) {
  return <img className={`marca marca-${tamanho}`} src="/diamond/logo-640.webp" width={640} height={640} alt={LOJA.nome} decoding="async" />
}
