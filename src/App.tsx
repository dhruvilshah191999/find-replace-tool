import { useCallback, useState } from "react";
import TextArea from "./components/TextArea";
import FindReplaceForm from "./components/FindReplaceForm";
import Toolbar from "./components/Toolbar";

const App = () => {
  const [text, setText] = useState("");
  const [prevText, setPrevText] = useState<string[]>([]);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleReplace = useCallback(
    (replace: string, replaceAll: boolean) => {
      if (!findText) return;
      setPrevText((prev) => [...prev, text]);

      const flags = caseSensitive ? "g" : "gi";
      const regex = new RegExp(findText, flags);

      let newText = text;
      if (replaceAll) {
        newText = newText.replace(regex, replace);
      } else {
        newText = newText.replace(regex, (match, offset) => {
          return offset === newText.search(regex) ? replace : match;
        });
      }

      setText(newText);
    },
    [caseSensitive, findText, text]
  );

  const handleUndo = useCallback(() => {
    const tempPrevText = [...prevText];
    const lastText = tempPrevText.pop();
    setText(lastText as string);
    setPrevText(tempPrevText);
  }, [prevText]);

  const handleClear = useCallback(() => {
    setText("");
    setPrevText([]);
    setFindText("");
    setReplaceText("");
  }, []);

  return (
    <div className="w-[100%] min-w-screen flex flex-col md:flex-row min-h-screen p-4 gap-4">
      <div className="md:w-[70%] w-full">
        <TextArea
          setText={setText}
          findText={findText}
          text={text}
          caseSensitive={caseSensitive}
        />
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-4 h-[100%] md:sticky top-0">
        <FindReplaceForm
          onReplace={handleReplace}
          caseSensitive={caseSensitive}
          findText={findText}
          replaceText={replaceText}
          setReplaceText={setReplaceText}
          setFindText={setFindText}
          setCaseSensitive={setCaseSensitive}
        />
        <Toolbar
          handleClear={handleClear}
          handleUndo={handleUndo}
          text={text}
          isUndoDisabled={Boolean(prevText.length)}
        />
      </div>
    </div>
  );
};

export default App;
