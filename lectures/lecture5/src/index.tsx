/**
 * npx create-react-app lecture3 --template typescript
 * npm i --save-dev @types/styled-components
 * npm i styled-components@5.3.10
 * npm i react-router-dom@5.3.4
 * npm i --save-dev @types/react-router-dom
 * npm i @tanstack/react-query
 */

import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </QueryClientProvider>
);
