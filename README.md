# Vite + TailwindCSS (no framework)

`npm start` will...start the `localhost:3000` server.

See the `// TODO` in [`tailwind.config.js`](./tailwind.config.js). 

If you want to load Tailwind from the HTML, you may need to switch this to something like: `content: ["./index.{html,js}"],`. If your Tailwind styles aren't loading, it's probably something here. More ℹ️ info in the [Tailwind docs](https://tailwindcss.com/docs/content-configuration).

Other than that, there is some opinionated/standard stuff included for ESLint and Prettier. These are wired up to do some automatic things in VS Code via [`settings.json`](./.vscode/settings.json). For example, as soon as you leave the file it will auto save, format and even fix linting stuff for you. If that's too much, you may want to reconfigure it.

Hope it helps. Give it a ⭐, will ya? 🤓