import { Button } from '@nexus-ds/react'

export default function Home() {
  return <HeroSection />
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
