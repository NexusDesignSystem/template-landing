import {
  Card,
  Avatar,
  Button,
  Chip,
  Image,
  CardHeader,
  CardBody
} from '@nexus-ds/react'
import Marquee from 'react-fast-marquee'

// static assets
import Landing from '@/assets/img/landing.jpg'
import Screenshot from '@/assets/img/screenshot.jpg'
import Logo1 from '@/assets/img/logo/1.png'
import Logo2 from '@/assets/img/logo/2.png'
import Logo3 from '@/assets/img/logo/3.png'
import Logo4 from '@/assets/img/logo/4.png'
import Logo5 from '@/assets/img/logo/5.png'
import Logo6 from '@/assets/img/logo/6.png'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewsSection />
      <ProductScreenshotSection />
      <LogoSection />
      <FeaturesSection />
    </>
  )
}

function HeroSection() {
  return (
    <div
      className={`h-screen -mt-16 w-full flex flex-col items-center justify-center`}
    >
      {/*Background image*/}
      <div
        className={`absolute w-full h-full top-0 left-0 -z-10`}
        style={{
          backgroundImage: `url(${Landing.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'brightness(0.2)'
        }}
      ></div>

      <div
        className={`w-full md:w-1/2 p-4 flex flex-col gap-8 items-center justify-center`}
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

function ProductScreenshotSection() {
  return (
    <div className={`w-full h-screen p-8 flex items-center justify-center`}>
      <Image
        src={Screenshot.src}
        width={1000}
        alt='Product screenshot'
        isBlurred
      />
    </div>
  )
}

function LogoSection() {
  const title = 'Works with your datastack'
  const logoImgSrcs = [
    Logo1.src,
    Logo2.src,
    Logo3.src,
    Logo4.src,
    Logo5.src,
    Logo6.src
  ]

  return (
    <div className={`flex flex-col items-center gap-10 w-full p-8`}>
      <p className={`text-xl font-light text-neutral-400`}>{title}</p>
      <div
        className={`flex flex-row flex-wrap gap-8 items-center justify-around w-full md:w-1/2`}
      >
        {logoImgSrcs.map((logoImgSrc, i) => (
          <Image
            key={i}
            src={logoImgSrc}
            width={70}
            alt={`This is a brand logo`}
            isBlurred
            isZoomed
          />
        ))}
      </div>
      <hr className={`w-full border-neutral-800 my-16`} />
    </div>
  )
}

function FeaturesSection() {
  return (
    <div
      className={`w-full md:w-3/4 p-8 m-auto flex flex-col items-center gap-8`}
    >
      <h1 className={`text-6xl text-primary`}>Nexus Designer</h1>
      <h1 className={`text-5xl font-thin`}>thinks like a designer</h1>
      <p className={`my-4 text-xl text-neutral-600 font-light`}>
        Talks like a designer. Works like a designer
      </p>
      <FeaturesGrid />
      <FeaturesTimeline />
    </div>
  )
}

function FeaturesGrid() {
  return (
    <div
      className={`my-8 md:my-16 sm:px-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8`}
    >
      <FeatureCard wide />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </div>
  )
}

interface IFeatureCardProps {
  wide?: boolean
}

function FeatureCard(props: IFeatureCardProps) {
  return (
    <Card className={`${props.wide ? 'md:col-span-2' : ''}`}>
      <CardHeader className={`p-8 flex flex-col gap-4 items-center`}>
        <h1 className={`text-2xl`}>Nuanced answers</h1>
        <p className={`text-neutral-400 font-light`}>Nothing like a chatbot</p>
      </CardHeader>
      <CardBody className={`flex flex-col gap-4 items-center`}>
        <Image
          src={Logo1.src}
          alt='Yummy baby'
        />
      </CardBody>
    </Card>
  )
}

function FeaturesTimeline() {
  // TODO
  return <></>
}
