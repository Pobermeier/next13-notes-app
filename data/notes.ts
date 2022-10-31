import { v4 } from "uuid";

export type Note = {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
  body: string;
};

const timeStampNow = new Date().getTime();

const notes: Note[] = [
  {
    id: v4(),
    createdAt: timeStampNow,
    updatedAt: timeStampNow,
    title: "Meeting Notes",
    body: `This is an example note. It contains **Markdown**!`,
  },
  {
    id: v4(),
    createdAt: timeStampNow,
    updatedAt: timeStampNow,
    title: "Make a thing",
    body: `It's very easy to make some words **bold** and other words *italic* with
    Markdown. You can even [link to React's website!](https://www.reactjs.org).`,
  },
  {
    id: v4(),
    createdAt: timeStampNow,
    updatedAt: timeStampNow,
    title:
      "A note with a very long title because sometimes you need more words",
    body: `You can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing)
    notes in this app! These note live on the server in the \`notes\` folder.
    
    ![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)`,
  },
];

export default notes;
