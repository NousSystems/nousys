import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Mira’s teaching style is second to none. Everything was easy to follow every step of the way.',
      author: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
    {
      content:
        'Ability to be part of DeFi but with the professional structure of an institution. Opens up the ability to allow more experienced and sophisticated people manage my crypto.',
      author: {
        name: '',
        role: 'Early investor',
        image: avatarImage4,
      },
    },
    {
      content:
        'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
      author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
        'The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.',
      author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content:
        'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'I am tired of seeing the rich get richer by keeping the small investors out of the game, with high minimum investment barriers. This is a rare opportunity to work with a company at the very beginning. While the risk in start-ups is high, $NOUS has a solid team and a fantastic vision. I look forward to a lucrative future.',
      author: {
        name: '',
        role: 'Early investor',
        image: avatarImage5,
      },
    },
    {
      content:
        'I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.',
      author: {
        name: 'Carla Schoen',
        role: 'Startup Founder',
        image: avatarImage10,
      },
    },
    {
      content:
        'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
          <Image src={author.image} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </Container>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {testimonials
          .map((column) => column[0])
          .map((testimonial, testimonialIndex) => (
            <li key={testimonialIndex} className="lg:hidden">
              <Testimonial author={testimonial.author}>
                {testimonial.content}
              </Testimonial>
            </li>
          ))}
        {testimonials.map((column, columnIndex) => (
          <li
            key={columnIndex}
            className={clsx({ 'hidden lg:list-item': !isExpanded })}
          >
            <ul>
              {column
                .slice(0, isExpanded ? undefined : 2)
                .map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className={clsx({
                      'hidden lg:list-item': testimonialIndex === 0,
                      'lg:mt-8': testimonialIndex === 1,
                      'mt-8': testimonialIndex > 1,
                    })}
                  >
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      {!isExpanded && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
            onClick={() => setIsExpanded(true)}
          >
            Read more testimonials
            <svg aria-hidden="true" className="ml-2 h-6 w-6">
              <path
                d="m17 14-5 5-5-5M12 18.5V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
