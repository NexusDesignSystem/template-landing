import { Avatar, Button, Chip } from '@nexus-ds/react'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SampleQuestionsSection />
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

function SampleQuestionsSection() {
  return (
    <div
      className={`h-screen w-full p-4 flex flex-col gap-8 items-center justify-center`}
    >
      <QuestionsStrip />
      <QuestionsStrip direction={'right'} />
      <QuestionsStrip />
    </div>
  )
}

interface IQuestionsStripProps {
  direction?: 'left' | 'right'
}

function QuestionsStrip(props: IQuestionsStripProps) {
  const direction = props.direction ?? 'left'

  const questions: IQuestionChipProps[] = [
    {
      thumbnail: 'foo',
      question:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      question:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      question:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?'
    },
    {
      thumbnail: 'foo',
      question:
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
      {questions.map((q, i) => (
        <QuestionChip
          key={i}
          {...q}
        />
      ))}
    </Marquee>
  )
}

interface IQuestionChipProps {
  thumbnail: String
  question: String
}

function QuestionChip(props: IQuestionChipProps) {
  return (
    <Chip
      avatar={<Avatar />}
      className={'mx-4 p-8 bg-neutral-800'}
    >
      <span className={'text-2xl font-extralight'}>{props.question}</span>
    </Chip>
  )
}
