/**
 * npx create-react-app lecture3 --template typescript
 * npm i --save-dev @types/styled-components @types/react-router-dom
 * npm i styled-components@5.3.10 react-router-dom@6.4
 */

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(<RouterProvider router={router} />);
