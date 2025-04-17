
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Users } from "lucide-react";

const customers = [
  { id: 1, name: "João Silva", email: "joao@email.com", phone: "(11) 99999-9999", lastPurchase: "15/04/2025", totalPurchases: "R$ 1.250,00" },
  { id: 2, name: "Maria Santos", email: "maria@email.com", phone: "(11) 98888-8888", lastPurchase: "14/04/2025", totalPurchases: "R$ 3.450,00" },
  { id: 3, name: "Pedro Souza", email: "pedro@email.com", phone: "(11) 97777-7777", lastPurchase: "13/04/2025", totalPurchases: "R$ 890,00" },
];

export function Customers() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Clientes" 
        description="Gerencie seus clientes"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5" />
              Total de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.234</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-400 to-blue-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Novos este mês</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">45</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-300 to-blue-400 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Média de Compras</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 850,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar cliente..."
            className="pl-8"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <Card>
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Última Compra</TableHead>
                <TableHead className="text-right">Total em Compras</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.lastPurchase}</TableCell>
                  <TableCell className="text-right">{customer.totalPurchases}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
