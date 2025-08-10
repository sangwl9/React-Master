/**
 * npx create-react-app lecture3 --template typescript
 * npm i --save-dev @types/styled-components
 * npm i styled-components@5.3.10
 * npm i react-router-dom@5.3.4
 * npm i --save-dev @types/react-router-dom
 * npm i @tanstack/react-query
 * npm i -D @tanstack/react-query-devtools
 * npm i --save react-apexcharts apexcharts
 * npm i react-helmet
 * npm i --save-dev @types/react-helmet
 */

import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);
