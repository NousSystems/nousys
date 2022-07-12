import Image from 'next/image'
import Polygon from '../images/Polygon.svg'
import { ButtonLink } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/NousA2.png'

export function Hero() {
  return (
    <header className="overflow-hidden bg-white lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-0 rounded-br-6xl bg-gradient-to-bl from-slate-50 to-slate-100 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z- mx-auto flex w-64 rounded-xl bg-transparent  md:w-80 lg:w-auto">
            <Image className="shadow-2xl" src={coverImage} alt="" priority />
            {/* <div className="absolute left-0 top-0 rounded-full py-2 px-2 sm:py-3 sm:px-3 bg-white shadow-lg ">
              <h1 className="font-semibold text-xs sm:text-sm">New Release</h1>
            </div> */}
          </div>
        </div>
        {/* <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <div className="flex justify-center text-blue-600 lg:justify-start">
              <StarRating />
            </div>
            <blockquote className="mt-2">
              <p className="font-display text-xl font-medium text-slate-900">
                “This method of designing icons is genius. I wish I had known
                this method a lot sooner.”
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              <strong className="font-semibold text-blue-600 before:content-['—_']">
                Stacey Solomon
              </strong>
              , Founder at Retail Park
            </figcaption>
          </figure>
        </div> */}
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:pt-16 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="flex">
              <h1 className="flex font-bold text-4xl items-center">Built on</h1>
              <Image className="flex-2" src={Polygon}/>
            </div>
            <h1 className="font-display tracking-tighter text-5xl font-extrabold text-slate-900 sm:text-5xl">
             Own your investment, 
            </h1>
            <h1 className="font-display tracking-tighter text-5xl font-extrabold text-slate-900 sm:text-8xl">
             as an NFT.
            </h1>
            <p className="mt-4 tex-xl tracking-tight sm:text-3xl text-slate-600">
              Unlock your wealth. Access the best investment opportunities in crypto, from as little as $100.
            </p>
            <div className="mt-8 flex space-x-4">
              <ButtonLink href="#free-chapters" color="blue">
                Mint an NFT
              </ButtonLink>
              <ButtonLink href="#pricing" variant="outline" color="blue">
                Buy $NOUS
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
