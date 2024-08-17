import { useEffect, useState } from 'preact/hooks';
import Prism from 'prismjs';

// Constants
import { TABS_ITEMS_USAGE } from '@/constants/constants';

// i18n
import { getI18N } from '@/i18n';

export default function CodeUsage({ activeTab }: { activeTab: number }) {
  const [isCopied, setIsCopied] = useState(false);
  const [i18n, setI18n] = useState<{ [key: string]: string } | null>(null);
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const i18nData = getI18N(currentPathname).CODE;
    setI18n(i18nData);
  }, []);

  const handleCopyCode = () => {
    if (isCopied) return;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  useEffect(() => {
    const currentTab = TABS_ITEMS_USAGE.find(({ id }) => id === activeTab);
    if (!currentTab) return;
    setCode(currentTab.code);
  }, [activeTab]);

  const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

  return (
    <div class='relative'>
      <button onClick={handleCopyCode} class={`${isCopied ? 'bg-green-500' : 'bg-neutral-50'} absolute top-4 right-4 p-2 rounded-lg z-20 transition-colors ease-out duration-500 ${isCopied ? '' : 'button-copy-shadow'}`}>
        <img src="/icons/clipboard-icon.svg" alt="Copy to code" class={`${isCopied ? 'invert' : ''} size-5 transition-all ease-out duration-500`} />
      </button>
      <div class={`${isCopied ? 'block' : 'hidden'} absolute top-4 right-11 bg-green-500 text-white text-sm font-semibold rounded-l-lg p-2 pr-3 pointer-events-none copied-text-anim`}>{i18n?.COPIED_TEXT}</div>
      <pre>
        <code class="language-javascript" dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  )
}
