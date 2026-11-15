import { Bath, CarFront, Package, ShoppingBag } from 'lucide-react'
import { waLink } from '../lib/whatsapp'
import { Titulo } from './Reveal'

const SERVICOS = [
  { titulo: 'Banho e tosa', texto: 'Combine o cuidado e o horário que funcionam para o seu pet.', assunto: 'agendar banho ou tosa', Icone: Bath },
  { titulo: 'Táxi dog', texto: 'Consulte a disponibilidade do transporte para o atendimento.', assunto: 'consultar o táxi dog', Icone: CarFront },
  { titulo: 'Loja pet', texto: 'Rações, petiscos, brinquedos, acessórios, antipulgas e medicamentos.', assunto: 'consultar os produtos da loja', Icone: ShoppingBag },
  { titulo: 'Entregas', texto: 'Peça pelo WhatsApp e consulte a área atendida.', assunto: 'consultar as entregas', Icone: Package },
]

export default function Servicos() {
  return <section id="servicos" className="secao">
    <div className="wrap">
      <Titulo linhas={['Tudo para o bem-estar']} destaque="do seu pet." className="h2" />
      <ul className="diamond-servicos">
        {SERVICOS.map(({ titulo, texto, assunto, Icone }) => <li key={titulo}>
          <Icone aria-hidden="true" />
          <h3>{titulo}</h3>
          <p>{texto}</p>
          <a className="link" href={waLink(`Olá! Vim pelo site do Pet Shop Diamond e gostaria de ${assunto}.`)} target="_blank" rel="noopener noreferrer">Consultar no WhatsApp</a>
        </li>)}
      </ul>
    </div>
  </section>
}
