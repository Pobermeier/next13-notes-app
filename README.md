This is a version of the [Server-Components Demo-Application](https://github.com/reactjs/server-components-demo) (build and released by the React Core-Team in December 2020) rebuild with Next.js 13.

The API for this project was implemented with JSON-server and can be found [here](https://github.com/Pobermeier/next13-notes-app-api).

A hosted version of this project, can be found [here](https://next13-notes-app.vercel.app/note/m_LJ1lo7IdcNsNfs-CSF9).

## Features

* Full CRUD (simple Note-taking app)
* Next.js 13 app-directory
* React 18 server-components
* Nested layouts
* Intermixing client- & server-components
* Data-fetching inside server-components
* Calling mutations inside Client-components and refreshing (server-side) router state
* Definition of per-segment error boundaries & error handling
* Definition of loading states per route-segment
* Styling via global stylesheet

## Getting Started

First, run the development server:

```bash
npm run dev
```

or with experimental Turbo-support:

```bash
npm run dev:turbo
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
