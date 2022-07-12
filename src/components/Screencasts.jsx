import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '../images/NousV1.png'
import gridsImage from '../images/NousA1.png'
import setupImage from '../images/smartbond.png'
import strokesImage from '../images/NousM1.png'

const videos = [
  {
    title: 'Smart Bond',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: setupImage,
    runtime: 'Available now',
    href: 'https://www.nous.fund/bond'
  },
  {
    title: 'Nous A1',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: gridsImage,
    runtime: 'Coming soon',
  },
  {
    title: 'Nous M1',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: strokesImage,
    runtime: 'Late 2022',
  },
  {
    title: 'Nous X1',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: duotoneImage,
    runtime: 'Early 2023',
  },
]

export function Screencasts() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="products-title">
          Products
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          A debut suite of proprietary investment products. 
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Nous&apos; first product offering is designed to offer investors a diverse portfolio of managed investment products.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <a href={video.href}>
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl  shadow-lg"
                /* style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }} */
              >
                
                <div className="flex overflow-hidden rounded-2xl shadow-sm">
                  <Image src={video.image} alt="" />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  {/* <svg
                    aria-hidden="true"
                    className="h-4 w-4 fill-current stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx="8" cy="8" r="6.25" fill="none" />
                  </svg> */}
                  <p> {video.runtime}</p>
                </div>
              </div>
              </a>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
