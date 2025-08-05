/**
 * npx create-react-app lecture3 --template typescript
 * npm i --save-dev @types/styled-components
 * npm i styled-components@5.3.10
 */

import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);
