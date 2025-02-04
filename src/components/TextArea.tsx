import React, { useState, useEffect } from "react";
import { Paper, TextField } from "@mui/material";

interface TextAreaProps {
  text: string;
  setText: (text: string) => void;
  findText: string;
  caseSensitive: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  text,
  setText,
  findText,
  caseSensitive,
}) => {
  const [inputText, setInputText] = useState(text);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setText(e.target.value);
  };

  const highlightText = (text: string, find: string) => {
    if (!find.trim()) return text;

    const escapedFindText = find.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const flags = caseSensitive ? "g" : "gi";
    const regex = new RegExp(`(${escapedFindText})`, flags);

    return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`);
  };

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <Paper className="p-4 shadow-md bg-white">
      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={inputText}
        onChange={handleInputChange}
        className="mb-4"
      />

      <pre className="whitespace-pre-wrap">
        <div
          className="text-gray-700 mt-10"
          dangerouslySetInnerHTML={{
            __html: highlightText(inputText, findText),
          }}
        />
      </pre>
    </Paper>
  );
};

export default TextArea;
