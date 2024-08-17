import { useState } from "preact/hooks";

// Components
import Example from "./example";

// Constants
import CodeUsage from "./code";
import { SECTIONS_NAMES } from "@/constants/constants";

export default function ExampleCodeUsage({ section }: { section: string }) {
  const [actionFixed, setActionFixed] = useState<boolean>(false);
  const actionFixedCheck = section === SECTIONS_NAMES.ACTIONS ? actionFixed : null;
  const actionSetFixedCheck = section === SECTIONS_NAMES.ACTIONS ? setActionFixed : null;

  return (
    <>
      <Example section={section} actionFixed={actionFixedCheck as boolean} setActionFixed={actionSetFixedCheck} />
      <CodeUsage section={section} actionFixed={actionFixedCheck} />
    </>
  );
}
