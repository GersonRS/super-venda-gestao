import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { MainLayout } from "./components/layout/MainLayout"
import { Auth } from "./pages/Auth"
import { Dashboard } from "./pages/Dashboard"
import { Products } from "./pages/Products"
import { Sales } from "./pages/Sales"
import { Customers } from "./pages/Customers"
import { Reports } from "./pages/Reports"
import { Settings } from "./pages/Settings"
import { Stock } from "./pages/Stock"
import PDV from "./pages/PDV"
import { OrdersService } from "./pages/OrdersService"
import { Company } from "./pages/Company"
import { Suppliers } from "./pages/Suppliers"
import { Cash } from "./pages/Cash"
import { AccountsPayable } from "./pages/AccountsPayable"
import { AccountsReceivable } from "./pages/AccountsReceivable"
import { FinancialReports } from "./pages/FinancialReports"
import { ProductExpiry } from "./pages/ProductExpiry"
import { Inventory } from "./pages/Inventory"
import { SalesReports } from "./pages/SalesReports"
import { ProductsReports } from "./pages/ProductsReports"
import { CustomersReports } from "./pages/CustomersReports"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/produtos" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/pdv" element={<MainLayout><PDV /></MainLayout>} />
          <Route path="/vendas" element={<MainLayout><Sales /></MainLayout>} />
          <Route path="/clientes" element={<MainLayout><Customers /></MainLayout>} />
          <Route path="/relatorios" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/estoque" element={<MainLayout><Stock /></MainLayout>} />
          <Route path="/configuracoes" element={<MainLayout><Settings /></MainLayout>} />
          
          {/* Novas rotas */}
          <Route path="/ordens-servico" element={<MainLayout><OrdersService /></MainLayout>} />
          <Route path="/empresa" element={<MainLayout><Company /></MainLayout>} />
          <Route path="/fornecedores" element={<MainLayout><Suppliers /></MainLayout>} />
          <Route path="/caixa" element={<MainLayout><Cash /></MainLayout>} />
          <Route path="/contas-pagar" element={<MainLayout><AccountsPayable /></MainLayout>} />
          <Route path="/contas-receber" element={<MainLayout><AccountsReceivable /></MainLayout>} />
          <Route path="/relatorios-financeiros" element={<MainLayout><FinancialReports /></MainLayout>} />
          <Route path="/validades" element={<MainLayout><ProductExpiry /></MainLayout>} />
          <Route path="/inventario" element={<MainLayout><Inventory /></MainLayout>} />
          <Route path="/relatorios-vendas" element={<MainLayout><SalesReports /></MainLayout>} />
          <Route path="/relatorios-produtos" element={<MainLayout><ProductsReports /></MainLayout>} />
          <Route path="/relatorios-clientes" element={<MainLayout><CustomersReports /></MainLayout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
)

export default App
