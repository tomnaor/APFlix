import { Layout } from "./components/Layout/Layout";
import { TooltipProvider } from "./components/ui/tooltip";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Layout>
      <TooltipProvider>
        <Home />
      </TooltipProvider>
    </Layout>
  );
}

export default App;
