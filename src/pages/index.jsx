import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Invest'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import { Invest } from '@/components/Invest'
import { Header } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Nous - Own your investment, as an NFT.
        </title>
        <meta
          name="description"
          content="Nous Systems is building the world's first decentralised investment platform."
        />
      </Head>
      <Header/>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="tommy-stroman-testimonial-1"
        author={{
          name: '',
          role: 'Early investor',
          image: avatarImage1,
        }}
      >
        <p>
          “Ability to be part of DeFi but with the professional structure of an institution. Opens up the ability to allow more experienced and sophisticated people manage my crypto.”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="gerardo-stark-testimonial-2"
        author={{
          name: 'Gerardo Stark',
          role: 'Early investor',
          image: avatarImage2,
        }}
      >
        <p>
          “I am tired of seeing the rich get richer by keeping the small investors out of the game, with high minimum investment barriers. This is a rare opportunity to work with a company at the very beginning. While the risk in start-ups is high, $NOUS has a solid team and a fantastic vision. I look forward to a lucrative future.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Invest />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
