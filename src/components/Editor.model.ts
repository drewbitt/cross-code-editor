import { JSX } from "@builder.io/mitosis/jsx-runtime";

export type Props = {
  value: string;
  onValueChange?: (value: string) => void;
  highlight: (value: string) => string | JSX.Element;

  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autocapitalize?: string;
} & JSX.HTMLAttributes<HTMLTextAreaElement>;

export const className = "editor__textarea";
export const preClassName = "editor__pre";

export const cssText = /* CSS */ `
/**
 * Reset the text fill color so that placeholder is visible
 */
.${className}:empty {
  -webkit-text-fill-color: inherit !important;
}
`;

// For testing, overwrite the highlight function
export const highlight = (value: string): string | JSX.Element => {
  const regex = /\d{1,2}\)/g;

  const lines = value.split("\n");
  const highlightedLines = lines.map((line) => {
    const matches = line.match(regex);
    if (matches) {
      return matches.map((match) => {
        return `<span style="color: red">${match}</span>`;
      });
    }
    return line;
  });
  return highlightedLines.join("\n");
};

export const styles = {
  container: {
    position: "relative",
    textAlign: "left",
    boxSizing: "border-box",
    padding: "0",
    overflow: "hidden",
    height: "300px",
  },
  textarea: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "hidden",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent",
  },
  highlight: {
    position: "relative",
    pointerEvents: "none",
  },
  editor: {
    margin: "0",
    border: "0",
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word",
  },
} as const;
