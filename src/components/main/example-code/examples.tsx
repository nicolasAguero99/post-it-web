import { useEffect, useState } from "preact/hooks"
import PostIt from "@/lib"

// Constants
import { POST_IT_CONTAINER_CLASS } from "@/constants/constants"

// Types
import type { PostItPropsType } from "@/lib/types/types"

// i18n
import { getI18N } from "@/i18n"

export function SinglePostIt () {
  return <PostIt id={'unique-id'} position={{ x: 20, y: 100 }} text={'Hi, I am a post it! 🧉'} action={'copy'} fill={'#FEE440'} />
}

export function ListPostIt ({ containerRef }: { containerRef: { current: HTMLDivElement | null } }) {
  const [postItList, setPostItList] = useState<PostItPropsType[]>([])
  const [i18n, setI18n] = useState<{ [key: string]: string } | null>(null)

  useEffect(() => {
    const currentPathname = window.location.pathname
    const i18nData = getI18N(currentPathname).CODE
    setI18n(i18nData)
  }, [])

  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.classList.contains(POST_IT_CONTAINER_CLASS)) return
      const isPostIt = target.classList.contains('post-it')
      if (isPostIt) return
      const postItData = {
        id: crypto.randomUUID(),
        position: { x: e.offsetX, y: e.offsetY },
        text: '',
        fill: '#FEE440'
      }
      console.log(postItData.position)
      setPostItList([...postItList, postItData])
    }
    containerRef.current?.addEventListener('dblclick', clickEvent)
    return () => containerRef.current?.removeEventListener('dblclick', clickEvent)
  }, [postItList])

  return (
    <>
      {
        postItList.length > 0
          ? postItList.map(({ id, position, text, fill }) => (
              <PostIt key={id} postItListState={[postItList, setPostItList]} id={id} position={position} text={text} fill={fill} action={'delete'} />
            ))
          : <span class='text-gray-400 absolute inset-0 m-auto size-fit select-none'>{i18n?.DOUBLE_CLICK}</span>
      }
    </>
  )
}

export function PostItActions ({ actionFixed }: { actionFixed: boolean }) {
  return (
    <>
      {/* Copy action: Copy the Post It value text */}
      <PostIt id={'id-1'} position={{ x: 20, y: 10 }} fill={'#FEE440'} text={'Copy action 📋'} action={'copy'} actionFixed={actionFixed} />

      {/* Delete action: Delete the Post It */}
      <PostIt id={'id-2'} position={{ x: 20, y: 90 }} fill={'#FEE440'} text={'Delete action ❌'} action={'delete'} actionFixed={actionFixed} />

      {/* Block action: Blocks dragging functionality of the Post It */}
      <PostIt id={'id-3'} position={{ x: 20, y: 170 }} fill={'#FEE440'} text={'Block action 🔒'} action={'block'} actionFixed={actionFixed} />

      {/* Custom action: Set your own custom action */}
      <PostIt id={'id-3-custom-action'} position={{ x: 20, y: 250 }} fill={'#FEE440'} text={'Custom action ✅'} action={
        [
          <span>❗</span>, // Custom button
          () => alert('Custom action!'), // Custom function
          'custom-action-class', // Custom class
          { fill: '#EFE9AE' } // Custom style (optional)
        ]
      } actionFixed={actionFixed} />
    </>
  )
}

export function PostItDisableActions () {
  return (
    <>
      {/* Edit disabled: Disables the edit functionality of the Post It */}
      <PostIt id={'id-1'} position={{ x: 20, y: 50 }} fill={'#FEE440'} text={'Edit disabled ✍'} disableEditPostIt />

      {/* Delete disabled: Disables the delete functionality of the Post It  */}
      <PostIt id={'id-2'} position={{ x: 20, y: 160 }} fill={'#FEE440'} text={'Delete disabled ❌'} disableDeletePostIt />

      {/* Drag action: Disables the drag functionality of the Post It */}
      <PostIt id={'id-3'} position={{ x: 20, y: 280 }} fill={'#FEE440'} text={'Drag disabled 🛑'} disableDragPostIt />
    </>
  )
}

export function PostItOtherStyles () {
  return (
    <>
      <PostIt id={'unique-id'} position={{ x: 20, y: 60 }} text={'Hi, I am a post it! 🧉'} action={'copy'} fill={'#FEE440'} styleBentCorner />
      <PostIt id={'unique-id'} position={{ x: 20, y: 220 }} text={'Hi, I am a post it! 🧉'} fill={'#FEE440'} stylePinned />
    </>
  )
}