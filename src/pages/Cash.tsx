
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Calendar, CreditCard, DollarSign, PlusCircle } from "lucide-react";

const cashTransactions = [
  { id: 1, type: "Entrada", description: "Venda #1234", method: "Dinheiro", date: "17/04/2025", value: "R$ 150,00" },
  { id: 2, type: "Saída", description: "Pagamento Fornecedor", method: "Transferência", date: "17/04/2025", value: "R$ 500,00" },
  { id: 3, type: "Entrada", description: "Venda #1235", method: "Cartão", date: "17/04/2025", value: "R$ 320,00" },
  { id: 4, type: "Entrada", description: "Venda #1236", method: "Pix", date: "16/04/2025", value: "R$ 75,00" },
  { id: 5, type: "Saída", description: "Pagamento Aluguel", method: "Transferência", date: "15/04/2025", value: "R$ 1.200,00" },
];

export function Cash() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Caixa" 
        description="Controle de entradas e saídas"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <DollarSign className="h-5 w-5" />
              Saldo Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 5.480,00</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <ArrowUp className="h-5 w-5" />
              Entradas (Hoje)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 1.845,00</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-rose-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <ArrowDown className="h-5 w-5" />
              Saídas (Hoje)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 700,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Filtrar por Data
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <ArrowDown className="mr-2 h-4 w-4" />
            Registrar Saída
          </Button>
          <Button>
            <ArrowUp className="mr-2 h-4 w-4" />
            Registrar Entrada
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Movimentações</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="today">Hoje</TabsTrigger>
              <TabsTrigger value="week">Esta Semana</TabsTrigger>
              <TabsTrigger value="month">Este Mês</TabsTrigger>
              <TabsTrigger value="all">Todas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="today" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cashTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="cursor-pointer hover:bg-muted/60">
                      <TableCell>
                        <Badge variant={transaction.type === "Entrada" ? "success" : "destructive"}>
                          {transaction.type === "Entrada" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
                          {transaction.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {transaction.method === "Cartão" && <CreditCard className="h-3 w-3" />}
                          {transaction.method === "Dinheiro" && <DollarSign className="h-3 w-3" />}
                          {transaction.method}
                        </div>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className={`text-right font-medium ${transaction.type === "Entrada" ? "text-emerald-600" : "text-red-600"}`}>
                        {transaction.type === "Entrada" ? transaction.value : `- ${transaction.value}`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="week" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Esta Semana</CardTitle>
                  <CardDescription>Movimentações de caixa dos últimos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo para movimentações da semana...</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="month" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Este Mês</CardTitle>
                  <CardDescription>Movimentações de caixa do mês atual</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo para movimentações do mês...</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Todas as Movimentações</CardTitle>
                  <CardDescription>Histórico completo de movimentações</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo para todas as movimentações...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
