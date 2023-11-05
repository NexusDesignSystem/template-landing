import { Avatar, Button, Chip } from '@nexus-ds/react'
import Marquee from 'react-fast-marquee'
import type { PropsWithChildren } from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewsSection />
    </>
  )
}

function HeroSection() {
  return (
    <div
      className={`h-screen -mt-16 w-full md:w-1/2 p-4 m-auto flex flex-col gap-8 items-center justify-center`}
    >
      <h1 className={`text-6xl text-center`}>The AI design assistant</h1>
      <p className={`text-xl text-foreground-300`}>
        Get answers to all your design needs
      </p>
      <Button
        radius='full'
        variant='ghost'
        color='primary'
        size='lg'
      >
        Try Nexus Designer
      </Button>
    </div>
  )
}

function ReviewsSection() {
  return (
    <div
      className={`h-screen w-full p-4 flex flex-col gap-8 items-center justify-center`}
    >
      <ReviewsStrip />
      <ReviewsStrip direction={'right'} />
      <ReviewsStrip />
    </div>
  )
}

interface IQuestionsStripProps {
  direction?: 'left' | 'right'
}

function ReviewsStrip(props: IQuestionsStripProps) {
  const direction = props.direction ?? 'left'

  const reviews: IReviewChipProps[] = [
    {
      thumbnail: 'foo',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    }
  ]

  return (
    <Marquee
      direction={direction}
      className={`
        before:h-full before:absolute before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10
        after:right-0 after:h-full after:absolute after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10
     `}
    >
      {reviews.map((r, i) => (
        <ReviewChip
          key={i}
          {...r}
        />
      ))}
    </Marquee>
  )
}

interface IReviewChipProps {
  thumbnail: String
  review: String
}

function ReviewChip(props: IReviewChipProps) {
  return (
    <Chip
      avatar={<Avatar />}
      className={'mx-4 p-8 bg-neutral-800'}
    >
      <span className={'text-2xl font-extralight'}>{props.review}</span>
    </Chip>
  )
}
