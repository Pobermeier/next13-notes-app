import TextWithMarkdown from "./TextWithMarkdown";

type NotePreviewProps = {
  body: string;
  id: string;
};

const NotePreview = ({ body, id }: NotePreviewProps) => {
  return (
    <div className="note-preview">
      <TextWithMarkdown text={body} />
    </div>
  );
};

export default NotePreview;
