import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFoundPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import "./i18n";
import Loader from "./components/Loader";
import HomePage from "./components/HomePage";
import CV from "./components/CV";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
