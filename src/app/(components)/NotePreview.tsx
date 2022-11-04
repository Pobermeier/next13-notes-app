import TextWithMarkdown from "./TextWithMarkdown";

type NotePreviewProps = {
  body: string;
};

const NotePreview = ({ body }: NotePreviewProps) => {
  return (
    <div className="note-preview">
      <TextWithMarkdown text={body} />
    </div>
  );
};

export default NotePreview;
