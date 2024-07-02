import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/components/landing/Landing';

const queryClient = new QueryClient();

function App() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <Landing />
            </QueryClientProvider>
        </main>
    );
}

export default App;
