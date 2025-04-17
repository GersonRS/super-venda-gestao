
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Truck } from "lucide-react";

const suppliers = [
  { 
    id: 1, 
    name: "Fornecedor ABC", 
    contact: "João Silva", 
    phone: "(11) 99999-9999", 
    email: "contato@fornecedorabc.com", 
    lastPurchase: "15/04/2025", 
    status: "Ativo" 
  },
  { 
    id: 2, 
    name: "Distribuidora XYZ", 
    contact: "Maria Santos", 
    phone: "(11) 98888-8888", 
    email: "maria@distribuidoraxyz.com", 
    lastPurchase: "10/04/2025", 
    status: "Ativo" 
  },
  { 
    id: 3, 
    name: "Atacado 123", 
    contact: "Pedro Souza", 
    phone: "(11) 97777-7777", 
    email: "contato@atacado123.com", 
    lastPurchase: "05/04/2025", 
    status: "Inativo" 
  },
];

export function Suppliers() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Fornecedores" 
        description="Gerencie seus fornecedores"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Truck className="h-5 w-5" />
              Total de Fornecedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">48</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Fornecedores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Compras no Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 45.780,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar fornecedor..."
            className="pl-8"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Fornecedor
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Última Compra</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow key={supplier.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                  <TableCell>{supplier.phone}</TableCell>
                  <TableCell>{supplier.email}</TableCell>
                  <TableCell>{supplier.lastPurchase}</TableCell>
                  <TableCell>
                    <Badge variant={supplier.status === "Ativo" ? "success" : "outline"}>
                      {supplier.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
