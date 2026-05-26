import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) {
    return <div></div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-dvh bg-[#FBFBFB]">
        <BrowserRouter basename="/Forelsket">
          <Index isMobile={isMobile} />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
