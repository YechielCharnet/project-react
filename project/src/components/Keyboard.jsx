import React, { useState } from "react";

const Keyboard = () => {
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','!', '@', '&', '(', ')', '-', ';', ':', '"', "'", ',', '.','/', '?'];
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','!', '@', '&', '(', ')', '-', ';', ':', '"', "'", ',', '.','/', '?'];
  const hebrew =  ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', 'ך', 'ם', 'ן', 'ף', 'ץ','!', '@', '&', '(', ')', '-', ';', ':', '"', "'", ',', '.','/', '?'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '<', '>', '/','`', '?'];
  const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
    '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
    '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
    '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗',
    '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯',
    '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐',
    '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈',
    '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾',
    '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿',
    '😾', '👋', '🤚', '🖐', '✋', '🖖', '👌', '🤌', '🤏', '✌️',
    '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️',
    '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲',
    '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦵', '🦿', '🦶',
    '👣', '👀', '👁', '👅', '👄', '💋', '🩸', '🧠', '🦷', '🦴',
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
    '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
    '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
    '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️',
    '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
    '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
    '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
    '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️',
    '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓',
    '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
    '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠',
    'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳', '🈂️',
    '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '⚧', '🚻', '🚮',
    '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗',
    '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣',
    '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '⏏️', '▶️',
    '⏸', '⏯', '⏹', '⏺', '⏭', '⏮', '⏩', '⏪', '⏫', '⏬',
    '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️',
    '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂',
    '🔄', '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️', '♾', '💲',
    '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛',
    '🔝', '🔜', '✔️', '☑️', '🔘', '🔴', '🟠', '🟡', '🟢', '🔵',
    '🟣', '⚫️', '⚪️', '🟤', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷',
    '🔳', '🔲', '▪️', '▫️', '◾️', '◽️', '◼️', '◻️', '🟥', '🟧',
    '🟨', '🟩', '🟦', '🟪', '⬛️', '⬜️', '🟫', '🔈', '🔇', '🔉',
    '🔊', '🔔', '🔕', '📣', '📢', '👁‍🗨', '💬', '💭', '🗯', '♠️',
    '♣️', '♥️', '♦️', '🃏', '🎴', '🀄️', '🕐', '🕑', '🕒', '🕓',
    '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝',
    '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'
  ];
  const fontFamilies = [
    'Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'
  ];

  
  const [keys, setKeys] = useState(uppercase);
  const [textVal, setTextVal] = useState("");
  const [fontWeight, setFontWeight] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamilyIndex, setFontFamilyIndex] = useState(0);
  const [color, setColor] = useState('black');
  
  const textStyle = {
    fontWeight: fontWeight,
    fontSize: `${fontSize}px`,
    fontFamily: fontFamilies[fontFamilyIndex],
    color: color
  };

  return (
    <div>
      <div className="keyboard">
        <textarea type="text" value={textVal} readOnly style={textStyle}/>
      </div>
      <div>
        {keys.map((key, i) => (
          <button key={i} onClick={() => setTextVal(textVal + key)}>
            {key}
          </button>
      ))}
      </div>
      <button onClick={() => setTextVal(textVal + " ")}>space</button>
      <button onClick={() => setTextVal(textVal.slice(0, -1))}>delete</button>
      <br />
      <button onClick={() => setFontFamilyIndex((fontFamilyIndex+1)%fontFamilies.length)}>{fontFamilies[fontFamilyIndex]}</button>
      <button onClick={() => setFontSize(fontSize+2)}>🅰️➕</button>
      <button onClick={() => setFontSize(fontSize-2)}>🅰️➖</button>
      <button onClick={() => {fontWeight === "bold" ? setFontWeight("") : setFontWeight("bold")}}>🅱️</button>
      <br />
      <button onClick={() => setColor("red")}>🟥</button>
      <button onClick={() => setColor("orange")}>🟧</button>
      <button onClick={() => setColor("yellow")}>🟨</button>
      <button onClick={() => setColor("green")}>🟩</button>
      <button onClick={() => setColor("blue")}>🟦</button>
      <button onClick={() => setColor("purple")}>🟪</button>
      <button onClick={() => setColor("black")}>⬛️</button>
      <button onClick={() => setColor("brown")}>🟫</button>

      <br />
      <button onClick={() => setTextVal("")}>clear</button>
      <div>
        <button onClick={() => setKeys(uppercase)}>uppercase</button>
        <button onClick={() => setKeys(lowercase)}>lowercase</button>
        <button onClick={() => setKeys(hebrew)}>עברית</button>
        <button onClick={() => setKeys(numbers)}>numbers</button>
        <button onClick={() => setKeys(emojis)}>emojis</button>
      </div>
    </div>
  );
};

export default Keyboard;
