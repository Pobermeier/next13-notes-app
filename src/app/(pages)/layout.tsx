/* eslint-disable @next/next/no-img-element */
import NoteList from "app/(components)/NoteList";
import "styles/globals.css";

const NoteListComponent = NoteList as unknown as () => JSX.Element;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="A notes app using Next.js 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next13 Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {" "}
        <div className="main">
          <section className="col sidebar">
            <section className="sidebar-header">
              <img
                className="logo"
                src="/icons/svg/logo.svg"
                width="22px"
                height="20px"
                alt=""
                role="presentation"
              />
              <strong>Next13 Notes</strong>
            </section>
            <section className="sidebar-menu" role="menubar"></section>
            <nav>
              <NoteListComponent />
            </nav>
          </section>
          <section className="col note-viewer">{children}</section>
        </div>
      </body>
    </html>
  );
}
