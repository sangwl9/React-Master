/**
 * npx create-react-app lecture3 --template typescript
 * npm i react@18.3.1 react-dom@18.3.1
 * npm i --save-dev @types/styled-components styled-components@5.3.10
 * npm i --save-dev @types/react-router-dom react-router-dom@5.3.4
 * npm i --save-dev @tanstack/react-query-devtools @tanstack/react-query
 * npm i --save react-apexcharts apexcharts
 * npm i --save-dev @types/react-helmet react-helmet
 * npm i recoil
 */

import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </RecoilRoot>
);
