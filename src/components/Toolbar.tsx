import { Button, Paper } from "@mui/material";

interface ToolbarProps {
  handleClear: () => void;
  handleUndo: () => void;
  isUndoDisabled: boolean;
  text: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  handleUndo,
  handleClear,
  isUndoDisabled,
  text,
}) => {
  return (
    <Paper className="p-4 flex gap-4 justify-center shadow-md bg-white">
      <Button
        onClick={() => navigator.clipboard.writeText(text)}
        variant="outlined"
        color="secondary"
        disabled={!text}
      >
        Copy to clipboard
      </Button>
      <Button
        onClick={handleUndo}
        variant="outlined"
        color="secondary"
        disabled={!isUndoDisabled}
      >
        Undo
      </Button>
      <Button onClick={handleClear} variant="outlined" color="secondary">
        Clear All
      </Button>
    </Paper>
  );
};

export default Toolbar;
