import { useRef } from "preact/hooks";

// Components
import { SinglePostIt, ListPostIt } from "../example-code/examples"

// Constants
import { POST_IT_CONTAINER_CLASS } from "@/constants/constants"

export default function ExampleUsage({ activeTabId }: { activeTabId: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={containerRef} class={`${POST_IT_CONTAINER_CLASS} ${activeTabId === 2 ? 'cursor-pointer' : ''} max-[280px]:hidden rounded-lg h-96 relative [&>div]:scale-75 min-[420px]:[&>div]:scale-90`} style={{ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;' }}>
        {
          activeTabId === 1
            ? <SinglePostIt /> 
            : activeTabId === 2
              ? <ListPostIt containerRef={containerRef} />
              : null
        }
      </div>
    </>
  )
}