import CarrosselFotos from './CarrosselFotos'
import { LOJA } from '../loja'
import { Pata } from './Icones'
import { Titulo } from './Reveal'

const FOTOS = [
  ['01', 'Shih-tzu com touca de banho roxa'],
  ['02', 'Spitz creme deitado com pingente laranja'],
  ['03', 'Spitz laranja com gravata colorida'],
  ['04', 'Yorkshire com laços laranja'],
  ['05', 'Cão de pelo creme com gravata colorida'],
  ['06', 'Spitz branco com laço laranja'],
]

export default function Galeria() {
  return <section id="galeria" className="secao diamond-galeria">
    <div className="wrap">
      <header className="secao-cabeca">
        <span className="sobretitulo"><Pata />Galeria</span>
        <Titulo linhas={['Quem passou pelo Diamond']} destaque="saiu de visual novo." className="h2" />
      </header>
      <CarrosselFotos>
        {FOTOS.map(([id, alt]) => <li key={id}><img src={`/diamond/galeria/${id}.webp`} width={506} height={506} alt={alt} loading="lazy" decoding="async" /></li>)}
      </CarrosselFotos>
      <p>Retratos recriados a partir das fotos dos cães.</p>
      <a className="link" href={LOJA.instagram} target="_blank" rel="noopener noreferrer">Veja mais no Instagram</a>
    </div>
  </section>
}
