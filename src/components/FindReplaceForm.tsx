import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";

interface FindReplaceFormProps {
  onReplace: (replaceText: string, replaceAll: boolean) => void;
  findText: string;
  replaceText: string;
  setReplaceText: (text: string) => void;
  setFindText: (text: string) => void;
  setCaseSensitive: (flag: boolean) => void;
  caseSensitive: boolean;
}

const FindReplaceForm: React.FC<FindReplaceFormProps> = ({
  onReplace,
  findText,
  replaceText,
  setReplaceText,
  caseSensitive,
  setFindText,
  setCaseSensitive,
}) => {
  const [replaceAll, setReplaceAll] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onReplace(replaceText, replaceAll);
  };

  return (
    <Paper className="p-4 shadow-md bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextField
          label="Find"
          variant="outlined"
          fullWidth
          value={findText}
          onChange={(e) => {
            setFindText(e.target.value);
          }}
        />
        <TextField
          label="Replace With"
          variant="outlined"
          fullWidth
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={caseSensitive}
              onChange={() => {
                setCaseSensitive(!caseSensitive);
              }}
            />
          }
          label="Case Sensitive"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={replaceAll}
              onChange={() => setReplaceAll(!replaceAll)}
            />
          }
          label="Replace All"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!findText || !replaceText}
        >
          Replace
        </Button>
      </form>
    </Paper>
  );
};

export default FindReplaceForm;
