import { type RefObject, useEffect, useRef, useState } from 'react'
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
import {
  motion,
  type Transition,
  useScroll,
  type Variants
} from 'framer-motion'

// static assets
import Landing from '@/assets/img/landing.gif'
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
      <hr className={`w-full border-neutral-800 my-16`} />
      <FeaturesSection />
      <hr className={`w-full border-neutral-800 mt-4 mb-16`} />
      <CallToAction />
    </>
  )
}

function HeroSection() {
  const containerRef = useRef(null)
  const triggerCrossed = useScrollTrigger(containerRef, 0.5)

  // Animation constants
  const opacity = triggerCrossed ? 0 : 1
  const scale = triggerCrossed ? 0.8 : 1

  return (
    <div
      ref={containerRef}
      className={`sticky top-0 h-screen -mt-16 w-full flex flex-col items-center justify-center`}
    >
      {/*Background image*/}
      <motion.div
        className={`absolute w-full h-full top-0 left-0 -z-10`}
        style={{
          backgroundImage: `url(${Landing.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'brightness(0.3)'
        }}
        animate={{
          opacity
        }}
        transition={{
          type: 'tween',
          duration: 1
        }}
      ></motion.div>

      <motion.div
        className={`w-full md:w-1/2 p-4 flex flex-col gap-8 items-center justify-center`}
        animate={{
          opacity,
          scale
        }}
        transition={{
          type: 'tween',
          duration: 0.25,
          ease: 'easeInOut'
        }}
      >
        <motion.h1
          className={`text-6xl md:text-8xl font-light text-center`}
          initial={{
            opacity: 0,
            y: '-10px'
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            type: 'linear',
            ease: 'easeInOut',
            duration: 0.5
          }}
        >
          An amazing title
        </motion.h1>
        <motion.p
          className={`text-2xl text-center text-foreground-300`}
          initial={{
            opacity: 0,
            y: '-10px'
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            type: 'linear',
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.25
          }}
        >
          An even more amazing subtitle for your landing page
        </motion.p>
        <Button
          radius='full'
          variant='ghost'
          color='primary'
          size='lg'
        >
          A call to action
        </Button>
      </motion.div>
    </div>
  )
}

function ReviewsSection() {
  const containerRef = useRef(null)
  const triggerCrossed = useScrollTrigger(containerRef, 1.25)

  // Animation constants
  const opacity = triggerCrossed ? 0 : 1
  const scale = triggerCrossed ? 0.9 : 1
  const transitionConfig: Transition = {
    type: 'tween',
    duration: 0.5
  }

  return (
    <motion.div
      ref={containerRef}
      className={`sticky top-0 h-screen w-full p-4 flex flex-col gap-8 items-center justify-center`}
      animate={{
        opacity,
        scale
      }}
      transition={transitionConfig}
    >
      <ReviewsStrip />
      <ReviewsStrip direction={'right'} />
      <ReviewsStrip />
    </motion.div>
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
  thumbnail: string
  review: string
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
  const containerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      className={`top-0 w-full h-screen p-8 flex items-center justify-center`}
    >
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
  const title = 'A list of companies / brands'
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
      <p className={`text-xl font-light text-foreground-400`}>{title}</p>
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
    </div>
  )
}

function FeaturesSection() {
  return (
    <div
      className={`w-full md:w-3/4 p-8 m-auto flex flex-col items-center gap-8`}
    >
      <h1 className={`text-6xl text-primary`}>A Grand Setup</h1>
      <h1 className={`text-5xl font-thin`}>A superb punchline</h1>
      <p className={`my-4 text-xl text-foreground-600 font-light`}>
        More about how awesome your page is
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
        <h1 className={`text-2xl`}>Feature card</h1>
        <p className={`text-foreground-500 font-light`}>
          Description of a feature
        </p>
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
  const featureTimelineCards: IFeatureTimelineCardProps[] = [
    {
      iconPath: Logo3.src,
      title: 'Feature',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vulputate mi. Morbi placerat eros at elit semper, vel placerat ante viverra.'
    },
    {
      iconPath: Logo3.src,
      title: 'Feature',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vulputate mi. Morbi placerat eros at elit semper, vel placerat ante viverra.'
    }
  ]

  return (
    <div
      className={`w-full md:w-3/4 p-8 m-auto flex flex-col items-center gap-8`}
    >
      {featureTimelineCards.map((props, i) => (
        <FeatureTimelineCard
          key={i}
          {...props}
        />
      ))}
    </div>
  )
}

interface IFeatureTimelineCardProps {
  iconPath: string
  title: string
  content: string
}

function FeatureTimelineCard(props: IFeatureTimelineCardProps) {
  return (
    <motion.div
      className={`w-full md:p-8 flex flex-col items-center gap-4`}
      initial={{
        opacity: 0,
        y: '-100px'
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 'all'
      }}
      transition={{
        type: 'linear',
        ease: 'easeInOut',
        duration: 0.5
      }}
    >
      <Image
        src={props.iconPath}
        isBlurred
        isZoomed
      />
      <h1 className={`text-4xl font-light`}>{props.title}</h1>
      <p
        className={`mt-4 md:w-2/3 text-center text-xl font-light text-foreground-400`}
      >
        {props.content}
      </p>
    </motion.div>
  )
}

function CallToAction() {
  // Animation constants
  const variants: Variants = {
    hidden: {
      y: '150px',
      opacity: 0,
      transition: {
        bounce: 0.1,
        staggerChildren: 0.3
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0.1,
        staggerChildren: 0.3
      }
    }
  }

  return (
    <div
      className={`w-3/4 md:w-1/2 m-auto pt-24 pb-48 flex flex-col gap-8 items-center`}
    >
      <motion.div
        className={`flex flex-row flex-wrap gap-6 items-center justify-center`}
        variants={variants}
        initial='hidden'
        whileInView='visible'
      >
        <motion.div
          className={`text-6xl md:text-8xl text-primary font-light text-center`}
          variants={variants}
        >
          This
        </motion.div>
        <motion.div
          className={`text-6xl md:text-8xl text-primary font-light text-center`}
          variants={variants}
        >
          page
        </motion.div>
        <motion.div
          className={`text-6xl md:text-8xl text-primary font-light text-center`}
          variants={variants}
        >
          kills
        </motion.div>
      </motion.div>
      <p className={`text-2xl text-foreground-400 font-light text-center`}>
        Another call to action text
      </p>
      <Button
        radius='full'
        variant='ghost'
        color='primary'
        size='lg'
      >
        Call to action
      </Button>
    </div>
  )
}

function useScrollTrigger(ref: RefObject<HTMLElement>, distance: number) {
  const elementInitialOffset = useRef<null | number>(null)

  const { scrollY } = useScroll()
  const [triggerCrossed, setTriggerCrossed] = useState(false)

  useEffect(() => {
    if (ref.current === null) return
    elementInitialOffset.current = ref.current.offsetTop
  }, [ref])

  scrollY.on('change', val => {
    if (elementInitialOffset.current === null) return
    const triggerPoint =
      elementInitialOffset.current + window.innerHeight * distance
    setTriggerCrossed(val > triggerPoint)
  })

  return triggerCrossed
}
