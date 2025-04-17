
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Package, Search, TrendingDown } from "lucide-react";

const stockItems = [
  { id: 1, name: "Arroz Integral", code: "7891234567890", quantity: 45, minQuantity: 20, status: "OK" },
  { id: 2, name: "Feijão Carioca", code: "7891234567891", quantity: 12, minQuantity: 15, status: "BAIXO" },
  { id: 3, name: "Macarrão", code: "7891234567892", quantity: 8, minQuantity: 25, status: "CRÍTICO" },
];

export function Stock() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Estoque" 
        description="Gerenciamento de estoque"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Package className="h-5 w-5" />
              Total em Estoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2.567</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingDown className="h-5 w-5" />
              Produtos Baixos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <AlertCircle className="h-5 w-5" />
              Produtos Críticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar produto..."
            className="pl-8"
          />
        </div>
        <Button>Ajustar Estoque</Button>
      </div>

      <Card>
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Mínimo</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.minQuantity}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      item.status === 'OK' ? 'bg-green-100 text-green-800' :
                      item.status === 'BAIXO' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
