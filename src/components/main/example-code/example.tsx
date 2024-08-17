import { type Dispatch, type StateUpdater } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

// Components
import { PostItActions, PostItDisableActions, PostItOtherStyles } from "./examples";

// Constants
import { POST_IT_CONTAINER_CLASS, SECTIONS_NAMES } from "@/constants/constants";

export default function Example({ section, actionFixed, setActionFixed }: { section: string, actionFixed: boolean, setActionFixed: Dispatch<StateUpdater<boolean>> | null }) {
  const handleCheckbox = (e: JSX.TargetedEvent<HTMLInputElement, MouseEvent>) => {
    if (setActionFixed === null) return;
    const { checked } = e.currentTarget;
    setActionFixed(checked);
  }

  return (
    <div class={`${POST_IT_CONTAINER_CLASS} max-[280px]:hidden rounded-lg relative h-96 ${section === SECTIONS_NAMES.ACTIONS ? '[&>div]:scale-75' : '[&>div]:scale-75 min-[420px]:[&>div]:scale-90'} overflow-x-auto`} style={{ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;' }}>
      {
        section === SECTIONS_NAMES.ACTIONS
          ? <PostItActions actionFixed={actionFixed} />
          : section === SECTIONS_NAMES.DISABLE
            ? <PostItDisableActions />
            : section === SECTIONS_NAMES.STYLES
              ? <PostItOtherStyles />
              : null
      }
      {
        setActionFixed && (
          <label htmlFor="checkbox-action-fixed" class='absolute bottom-4 left-4 flex gap-2 items-center cursor-pointer z-20'>
            <input type="checkbox" id='checkbox-action-fixed' class='custom-checkbox relative size-0 cursor-pointer after:border-primary checked:after:outline-primary checked:before:bg-primary [&+img+span]:checked:text-primary' onChange={handleCheckbox} />
            <img class='absolute top-[7px] left-[1px] size-3 opacity-0' src="/icons/check-icon.svg" alt="check icon" />
            <span class='ml-4 text-gray-400 select-none'>Fixed action</span>
          </label>
        )
      }
    </div>
  )
}