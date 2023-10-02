import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout/Layout";
import { TooltipProvider } from "./components/ui/tooltip";
import { Home } from "./pages/Home/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Home />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
