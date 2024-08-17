import { useEffect, useState } from "preact/hooks";

// Components
import TabUsage from "./tab-usage";
import ExampleUsage from "./example-usage";
import CodeUsage from "./code-usage";

// Constants
import { TABS_ITEMS_USAGE } from "@/constants/constants";

// i18n
import { getI18N } from "@/i18n";
// const i18n = getI18N(Astro.url.pathname).USAGE;

export default function ExampleCodeUsage() {
  const [activeTabId, setActiveTabId] = useState<number>(TABS_ITEMS_USAGE[0].id);
  const [i18n, setI18n] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const i18nData = getI18N(currentPathname).USAGE;
    setI18n(i18nData);
  }, []);

  // if (!i18n) return null;

  return (
    <>
      <TabUsage activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      <div class='flex flex-col gap-2 my-8 [&>h3]:text-3xl [&>h3]:font-semibold [&>p]:text-gray-500'>
        {
          i18n === null && (
            <>
              <span class='bg-gray-200 w-[300px] h-6 rounded-lg'></span>
              <span class='bg-gray-200 w-[500px] h-4 rounded-lg'></span>
            </>
          )
        } 
        {
          activeTabId === TABS_ITEMS_USAGE[0].id
            ? (
              <>
                <h3>{i18n?.SINGLE_TITLE}</h3>
                <p>{i18n?.SINGLE_DESCRIPTION}</p>
              </>
            ) : activeTabId === TABS_ITEMS_USAGE[1].id ? (
              <>
                <h3>{i18n?.LIST_TITLE}</h3>
                <p>{i18n?.LIST_DESCRIPTION}</p>
              </>
            ) : null
        }
      </div>
      <ExampleUsage activeTabId={activeTabId} />
      <CodeUsage activeTab={activeTabId} />
    </>
  );
}
