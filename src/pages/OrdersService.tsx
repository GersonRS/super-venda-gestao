
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Filter, Plus, Search } from "lucide-react";

const ordersData = [
  { 
    id: "OS-2025001", 
    client: "João Silva", 
    service: "Manutenção de Computador", 
    status: "Pendente", 
    date: "17/04/2025", 
    deadline: "19/04/2025",
    value: "R$ 150,00"
  },
  { 
    id: "OS-2025002", 
    client: "Maria Santos", 
    service: "Formatação de Notebook", 
    status: "Em andamento", 
    date: "16/04/2025", 
    deadline: "18/04/2025",
    value: "R$ 120,00"
  },
  { 
    id: "OS-2025003", 
    client: "Pedro Souza", 
    service: "Troca de Tela", 
    status: "Concluído", 
    date: "15/04/2025", 
    deadline: "17/04/2025",
    value: "R$ 350,00"
  },
];

export function OrdersService() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Ordens de Serviço" 
        description="Gerencie suas ordens de serviço"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <FileText className="h-5 w-5" />
              Total de OS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">234</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              OS Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">28</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 180,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar ordem de serviço..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova OS
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nº OS</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Serviço</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>
                    <Badge variant={
                      order.status === "Concluído" ? "success" :
                      order.status === "Em andamento" ? "default" : "outline"
                    }>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.deadline}</TableCell>
                  <TableCell className="text-right">{order.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
