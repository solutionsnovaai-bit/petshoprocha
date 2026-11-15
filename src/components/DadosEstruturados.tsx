import { LOJA, SEO } from '../loja'
import { temWhatsApp } from '../lib/whatsapp'


/** Dados para o Google entender o negócio (tipo LocalBusiness). */
export default function DadosEstruturados() {
  const e = LOJA.endereco
  const dados: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: LOJA.nome,
    description: SEO.descricao,
    url: `${__SITE_ORIGIN__}/`,
    image: `${__SITE_ORIGIN__}/diamond/og.jpg`,
    logo: `${__SITE_ORIGIN__}/diamond/logo-640.webp`,
    address: { '@type': 'PostalAddress', streetAddress: e.rua, addressLocality: e.cidade, addressRegion: e.uf, postalCode: e.cep, addressCountry: 'BR' },
  }
  if (temWhatsApp) dados.telephone = `+${LOJA.whatsapp.replace(/\D/g, '')}`
  if (LOJA.instagram) dados.sameAs = [LOJA.instagram]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
}
