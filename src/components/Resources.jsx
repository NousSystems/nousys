import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/ventures.svg'
import figmaImage from '@/images/defi.svg'
import videoPlayerImage from '@/images/funds.svg'

const resources = [
  {
    title: 'Decentralised Finance',
    description:
      'Access yield generating opportunities through decentralised finance ',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" />
        </div>
      )
    },
  },
  {
    title: 'Funds',
    description:
      'Invest in a diverse range of funds.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={abstractBackgroundImage}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image src={videoPlayerImage} alt="" />
        </div>
      )
    },
  },
  {
    title: 'Ventures',
    description:
      "Early access to early-stage crypto projects which advance the DeFi and NFT ecosystems.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="marketplace"
      aria-labelledby="marketplace-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="marketplace-title">
          Marketplace
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Access a range of investment opporunties from trusted providers
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          We are building a marketplace for the next-generation of investment opportunities. Access DeFi, trading funds and new ventures with NFT investment contracts.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
