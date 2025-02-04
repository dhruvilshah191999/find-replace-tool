# Advanced Find & Replace Tool

This tool provides advanced find and replace functionality, supports HTML-type text, and as well as undo changes.

## Installation

To get started, clone this repository and open the project in your preferred code editor.

```bash
git clone <repository-url>
cd <project-directory>
```

Run the command below to install all dependencies

```bash
npm install
```

Use the next command to launch the project

```bash
npm run dev
```

Open http://localhost:3000 to view it in the browser.

## Features

### 1. **Find Text**
- Input field to enter the text or string to search within the content.

### 2. **Replace Once**
- Button to replace only the first occurrence of the found text with new input text.

### 3. **Replace All**
- Button to replace all occurrences of the found text with the new text.
- Option to preview all replacements before applying.

### 4. **Undo Changes**
- Undo button to revert the last find/replace action.
- Ability to step backward through multiple changes.

### 5. **Support HTML-type Text**
- Parse and manipulate raw HTML content safely (e.g., handling `<div>`, `<p>`, etc.).
- Replace text inside HTML tags without affecting tag structure.
- Ensure that tag attributes (e.g., `href`, `src`) are not accidentally altered during replacement.

### 6. **Visual Feedback**
- Highlight the found text within the HTML structure before performing the replace.

### 7. **Customizable Search Settings**
- Case-sensitive/insensitive search.


![image](https://github.com/user-attachments/assets/e781791f-7a11-44ea-9fa2-12a793a73559)
![image](https://github.com/user-attachments/assets/b29095c8-88c4-4819-8649-4b8d711f45ee)
![image](https://github.com/user-attachments/assets/9d42a67a-3dcd-4781-b318-461ff2cd67ee)



