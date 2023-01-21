import { useRef, useState } from "@builder.io/mitosis";
import { className, cssText, preClassName, Props, styles } from "./Editor.model";

export default function Editor(props: Props) {
  let input = useRef<HTMLTextAreaElement>(null);
  let [highlighted, setHighlighted] = useState(props.highlight(input.value || ""));

  return (
    <div style={{ ...styles.container }}>
      <pre
        className={preClassName}
        style={{ ...styles.editor, ...styles.highlight }}
        aria-hidden="true"
        {...(typeof highlighted === "string"
          ? { innerHTML: `${highlighted}<br />` }
          : { children: highlighted })}
      />
      <textarea
        ref={input}
        style={{
          ...styles.editor,
          ...styles.textarea,
        }}
        className={className}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readonly}
        required={props.required}
        autoCapitalize={props.autocapitalize}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        onFocus={props.onFocus}
      />
      <style innerHTML={cssText} />
    </div>
  );
}
