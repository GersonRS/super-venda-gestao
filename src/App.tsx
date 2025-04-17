
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import { Dashboard } from "./pages/Dashboard"
import { Products } from "./pages/Products"
import { Sales } from "./pages/Sales"
import { Customers } from "./pages/Customers"
import { Reports } from "./pages/Reports"
import { Settings } from "./pages/Settings"
import { Stock } from "./pages/Stock"
import PDV from "./pages/PDV"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/produtos" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/pdv" element={<MainLayout><PDV /></MainLayout>} />
          <Route path="/vendas" element={<MainLayout><Sales /></MainLayout>} />
          <Route path="/clientes" element={<MainLayout><Customers /></MainLayout>} />
          <Route path="/relatorios" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/estoque" element={<MainLayout><Stock /></MainLayout>} />
          <Route path="/configuracoes" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
