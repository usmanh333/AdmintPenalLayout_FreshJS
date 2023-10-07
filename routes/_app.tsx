import { AppProps } from "$fresh/server.ts";
import DrawerMenu from "../components/DrawerMenu.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="main.css" />
        <title>Admin Panel</title>
      </head>
      <body>
        <div class={'flex'}>
        <DrawerMenu />
        <Component />
        </div>
        <script src="/main.js"></script>
      </body>
    </html>
  );
}
