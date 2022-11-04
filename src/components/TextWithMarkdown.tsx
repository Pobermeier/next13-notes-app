import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

type TextWithMarkdownProps = {
  text: string;
};

const allowedTags = [...sanitizeHtml.defaults.allowedTags, "img", "h1", "h2", "h3"];

const allowedAttributes = {
  ...sanitizeHtml.defaults.allowedAttributes,
  img: ["alt", "src"],
};

const TextWithMarkdown = ({ text }: TextWithMarkdownProps) => (
  <div
    className="text-with-markdown"
    dangerouslySetInnerHTML={{
      __html: sanitizeHtml(marked.parse(text), {
        allowedTags,
        allowedAttributes,
      }),
    }}
  />
);

export default TextWithMarkdown;
