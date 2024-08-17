import type { Dispatch } from "preact/compat";
import type { StateUpdater } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

// Constants
import { TABS_ITEMS_USAGE } from "../../../constants/constants";

export default function TabUsage({ activeTabId, setActiveTabId }: { activeTabId: number, setActiveTabId: Dispatch<StateUpdater<number>> }) {
  const handleSetTabId = (e: JSX.TargetedEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    if (!target) return;
    setActiveTabId(Number(target.id));
  }

  return (
    <div class='flex gap-2 border-b-2 border-primary pb-2 [&>span]:text-xl'>
      {
        TABS_ITEMS_USAGE.length > 0 &&
          TABS_ITEMS_USAGE.map(({ id, name }) => (
            <button onClick={handleSetTabId} id={String(id)} class={`${activeTabId === id ? 'text-primary custom-usage-tab-active' : ''} relative tab-title py-1.5 px-4 text-lg font-semibold custom-usage-tab after:bg-primary/20`}>
              {name}
            </button>
          ))
      }
    </div>
  )
}
