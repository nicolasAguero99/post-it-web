// Components
import PostIt from "@/lib";

const color = '#7371FC';

export default function ContainerPostIt() {
  return (
    <>
      <div class='max-[260px]:hidden md:hidden relative min-[320px]:min-w-[300px] w-full md:w-[300px] h-[400px] [&>div]:scale-75 min-[360px]:[&>div]:scale-90 [&>div]:font-medium [&>div]:rounded-lg custom-container-hero-post-it'>
        <PostIt id={'post-it-1'} position={{ x: 28, y: 60 }} text={'Hola, soy un post it!'} fill={color} color="white" />
        <PostIt id={'post-it-2'} position={{ x: 32, y: 160 }} text={`I'm a post it!`} fill={color} color="white" />
        <PostIt id={'post-it-3'} position={{ x: 30, y: 260 }} text={'npm i post-it-react'} action={'copy'} fill={'white'} color={color} actionFixed />
      </div>
      <div class='max-md:hidden relative min-w-[300px] w-full md:w-[300px] h-[400px] [&>div]:scale-90 [&>div]:font-medium [&>div]:rounded-lg custom-container-hero-post-it'>
        <PostIt id={'post-it-1'} position={{ x: 24, y: 60 }} text={'Hola, soy un post it!'} fill={color} color="white" />
        <PostIt id={'post-it-2'} position={{ x: 85, y: 160 }} text={`I'm a post it!`} fill={color} color="white" />
        <PostIt id={'post-it-3'} position={{ x: 30, y: 260 }} text={'npm i post-it-react'} action={'copy'} fill={'white'} color={color} actionFixed />
      </div>
    </>
  )
}