
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Filter, Plus } from "lucide-react";

const accounts = [
  { 
    id: 1, 
    description: "Aluguel", 
    supplier: "Imobiliária XYZ", 
    dueDate: "25/04/2025", 
    value: "R$ 2.500,00", 
    status: "Pendente"
  },
  { 
    id: 2, 
    description: "Energia Elétrica", 
    supplier: "Companhia Elétrica", 
    dueDate: "20/04/2025", 
    value: "R$ 780,00", 
    status: "Pendente"
  },
  { 
    id: 3, 
    description: "Internet", 
    supplier: "Provedor Internet", 
    dueDate: "22/04/2025", 
    value: "R$ 250,00", 
    status: "Pendente"
  },
  { 
    id: 4, 
    description: "Fornecedor ABC", 
    supplier: "Fornecedor ABC", 
    dueDate: "15/04/2025", 
    value: "R$ 1.200,00", 
    status: "Pago"
  },
  { 
    id: 5, 
    description: "Água", 
    supplier: "Companhia de Água", 
    dueDate: "18/04/2025", 
    value: "R$ 180,00", 
    status: "Pago"
  },
];

export function AccountsPayable() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Contas a Pagar" 
        description="Gerencie suas despesas e pagamentos"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <DollarSign className="h-5 w-5" />
              Total a Pagar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 3.530,00</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Vence Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 0,00</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Próximos 7 dias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 3.530,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Filtrar por Data
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Conta
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{account.description}</TableCell>
                  <TableCell>{account.supplier}</TableCell>
                  <TableCell>{account.dueDate}</TableCell>
                  <TableCell>{account.value}</TableCell>
                  <TableCell>
                    <Badge variant={account.status === "Pago" ? "success" : "outline"}>
                      {account.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {account.status === "Pendente" && (
                      <Button variant="outline" size="sm">
                        <DollarSign className="mr-1 h-3 w-3" />
                        Pagar
                      </Button>
                    )}
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
