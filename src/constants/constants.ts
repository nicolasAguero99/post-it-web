export const POST_IT_CONTAINER_CLASS = 'post-it-container'

export const CODES = {
  single: `  import PostIt from 'post-it-react'

  function App () {
    return <PostIt id={'unique-id'} position={{ x: 316, y: 212 }} text={'Hi, I am a post it! 🧉'} action={'copy'} fill={'#FEE440'} />
  }`,
  list: `  import { useState, useEffect } from 'react';
  import PostIt from 'post-it-react';

  export default function App() {
    const [postItList, setPostItList] = useState([]);

    useEffect(() => {
      const clickEvent = (e) => {
        const isPostIt = e.target.classList.contains('post-it');
        if (isPostIt) return;
        const postItData = {
          id: crypto.randomUUID(),
          position: { x: e.clientX, y: e.clientY },
          text: '',
          fill: '#FEE440'
        };
        setPostItList([...postItList, postItData]);
      };
      window.addEventListener('dblclick', clickEvent);
      return () => window.removeEventListener('dblclick', clickEvent);
    }, [postItList]);

    return (
      <>
        {
          postItList.length > 0 && postItList.map(({ id, position, text, fill }) => (
            <PostIt key={id} postItListState={[postItList, setPostItList]} id={id} position={position} text={text} fill={fill} action={'delete'} />
          ))
        }
      </>
    );
  }`,
  action: `  import PostIt from 'post-it-react'

  function App() {
    return (
      <>
        {/* Copy action: Copy the Post It value text */}
        <PostIt id={'id-1'} position={{ x: 101, y: 78 }} fill={'#FEE440'} text={'Copy action 📋'} action={'copy'} />

        {/* Delete action: Delete the Post It */}
        <PostIt id={'id-2'} position={{ x: 238, y: 211 }} fill={'#FEE440'} text={'Delete action ❌'} action={'delete'} />

        {/* Block action: Blocks dragging functionality of the Post It */}
        <PostIt id={'id-3'} position={{ x: 440, y: 74 }} fill={'#FEE440'} text={'Block action 🔒'} action={'block'} />

        {/* Custom action: Set your own custom action */}
        <PostIt id={'id-3'} position={{ x: 661, y: 192 }} fill={'#FEE440'} text={'Custom action ✅'} action={
          [
            <span>❗</span>, // Custom button
            () => alert('Custom action!'), // Custom function
            'custom-action-class', // Custom class
            { fill: '#EFE9AE' } // Custom style (optional)
          ]
        } />
      </>
    )
  }`,
  actionFixed: `  import PostIt from 'post-it-react'

  function App() {
    return (
      <>
        {/* Copy action: Copy the Post It value text */}
        <PostIt id={'id-1'} position={{ x: 101, y: 78 }} actionFixed fill={'#FEE440'} text={'Copy action 📋'} action={'copy'} />

        {/* Delete action: Delete the Post It */}
        <PostIt id={'id-2'} position={{ x: 238, y: 211 }} actionFixed fill={'#FEE440'} text={'Delete action ❌'} action={'delete'} />

        {/* Block action: Blocks dragging functionality of the Post It */}
        <PostIt id={'id-3'} position={{ x: 440, y: 74 }} actionFixed fill={'#FEE440'} text={'Block action 🔒'} action={'block'} />

        {/* Custom action: Set your own custom action */}
        <PostIt id={'id-3'} position={{ x: 661, y: 192 }} fill={'#FEE440'} text={'Custom action ✅'} action={
          [
            <span>❗</span>, // Custom button
            () => alert('Custom action!'), // Custom function
            'custom-action-class', // Custom class
            { fill: '#EFE9AE' } // Custom style (optional)
          ]
        } actionFixed />
      </>
    )
  }`,
  disable: `  import PostIt from 'post-it-react'

  function App() {
    return (
      <>
        {/* Edit disabled: Disables the edit functionality of the Post It */}
        <PostIt id={'id-1'} position={{ x: 120, y: 78 }} fill={'#FEE440'} text={'Edit disabled ✍'} disableEditPostIt />

        {/* Delete disabled: Disables the delete functionality of the Post It  */}
        <PostIt id={'id-2'} position={{ x: 380, y: 211 }} fill={'#FEE440'} text={'Delete disabled ❌'} disableDeletePostIt />

        {/* Drag action: Disables the drag functionality of the Post It */}
        <PostIt id={'id-3'} position={{ x: 640, y: 74 }} fill={'#FEE440'} text={'Drag disabled 🛑'} disableDragPostIt />
      </>
    )
  }`,
  styles: `  import PostIt from 'post-it-react'

  function App () {
    return (
      <>
        <PostIt id={'unique-id'} position={{ x: 116, y: 162 }} text={'Hi, I am a post it! 🧉'} action={'copy'} fill={'#FEE440'} styleBentCorner />
        <PostIt id={'unique-id'} position={{ x: 610, y: 162 }} text={'Hi, I am a post it! 🧉'} fill={'#FEE440'} stylePinned />
      </>
    )
  }`
}

export const TABS_ITEMS_USAGE = [
  {
    id: 1,
    name: 'Singular',
    code: CODES.single
  },
  {
    id: 2,
    name: 'Lista',
    code: CODES.list
  }
]

export const SECTIONS_NAMES = {
  ACTIONS: 'Actions',
  DISABLE: 'Disable',
  STYLES: 'Styles'
}

export const SECTIONS_ITEMS = [
  {
    section: SECTIONS_NAMES.ACTIONS,
    code: CODES.action
  },
  {
    section: SECTIONS_NAMES.DISABLE,
    code: CODES.disable
  },
  {
    section: SECTIONS_NAMES.STYLES,
    code: CODES.styles
  }
]

export const HEADERS_TABLE = ["Prop", "Type", "Description", "Default", "Examples"]

export const PROPS_TABLE = [
  "id",
  "position",
  "text",
  "className?",
  "fill?",
  "color?",
  "opacity?",
  "rounded?",
  "hidden?",
  "font?",
  "postItListState?",
  "styleBentCorner?",
  "stylePinned?",
  "customPlaceholder?",
  "customDefaultText?",
  "action?",
  "actionFixed?",
  "disableEditPostIt?",
  "disableDeletePostIt?",
  "disableDragPostIt?",
];

export const TYPES_TABLE = [
  "T",
  "{ x: number, y: number }",
  "string",
  "string",
  "string",
  "string",
  "number",
  "number",
  "boolean",
  "[number / string(Css unit), {100-900} / {lighter-bolder}, string]",
  "[T[], React.Dispatch<React.SetStateAction<T[]>>]",
  "boolean",
  "boolean",
  "string / string[]",
  "string",
  "none / copy / delete / block / [JSX.Element, ((...args: T[]) => T), string, React.CSSProperties?]",
  "boolean",
  "boolean",
  "boolean",
  "boolean",
];

export const DESCRIPTION_TABLE = [
  "Set Id unique for post it",
  "Set coords (x/y) for post it position",
  "Set text for post it",
  "Set Css class for post it",
  "Set the background-color of post it",
  "Set the text color of post it",
  "Set the opacity of post it (from 0 to 1)",
  "Set the border-radius of post it",
  "Set the display: hidden for post it if true",
  "Set the fontSize (if value is number it will be in px), fontWeight and fontFamily of the post it",
  "Set the current state and the state updater function. This allows you to store all the post its and iterate through them",
  "Set the preset style (styleBentCorner) for post it if true",
  "Set the preset style (stylePinned) for post it if true",
  "Set one or more placeholders for post it. (If it is an array, each value will be set randomly)",
  "Set a initial default text for post it",
  "Set an action button with onClick function for post it",
  "Set the action button to always be visible",
  "Disable the edit functionality of post it if true",
  "Disable the delete functionality of post it if true",
  "Disable the drag functionality of post it if true",
];

export const DEFAULTS_TABLE = [
  "-",
  "-",
  '""',
  "post-it-classic",
  "yellow",
  "black",
  "1",
  "0",
  "false",
  '["", "", ""]',
  "-",
  "false",
  "false",
  "Write something...",
  '""',
  "none",
  "false",
  "false",
  "false",
  "false",
];

export const EXAMPLES_TABLES = [
  "Number: 12345 - String: post-it-id-1 - Other values...",
  "{ x: 212, y: 316 }",
  "Hi, I'm a post it! 🧉",
  "post-it-class",
  "ColorName: yellow - Hex: #EFE9AE",
  "ColorName: black - Hex: #000000",
  "0 to 1",
  "30",
  "true - false",
  "['2em', 'bold', '\"Inter\", sans-serif'] - [18, 600, '\"Inter\", sans-serif'] - [18, '', '']",
  "[postItList, setPostItList] (Recommended: useState())",
  "true - false",
  "true - false",
  "String: Write something... - Array: ['Write here', 'Type something', 'I'm thinking about...']",
  "Default text example",
  "none - copy - delete - block - [<span>❗</span>, handleShowInfo, action-class, { fill: '#EFE9AE' }]",
  "true - false",
  "true - false",
  "true - false",
  "true - false",
];
