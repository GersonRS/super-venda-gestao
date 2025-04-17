
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Filter, Search } from "lucide-react";

const productsData = [
  { 
    id: 1, 
    name: "Leite Integral", 
    batch: "LT-2025-001", 
    category: "Laticínios", 
    expiryDate: "25/04/2025", 
    daysRemaining: 8, 
    stock: 24 
  },
  { 
    id: 2, 
    name: "Iogurte Natural", 
    batch: "YG-2025-003", 
    category: "Laticínios", 
    expiryDate: "23/04/2025", 
    daysRemaining: 6, 
    stock: 12 
  },
  { 
    id: 3, 
    name: "Pão de Forma", 
    batch: "PF-2025-010", 
    category: "Padaria", 
    expiryDate: "21/04/2025", 
    daysRemaining: 4, 
    stock: 8 
  },
  { 
    id: 4, 
    name: "Queijo Mussarela", 
    batch: "QM-2025-005", 
    category: "Laticínios", 
    expiryDate: "19/04/2025", 
    daysRemaining: 2, 
    stock: 5 
  },
  { 
    id: 5, 
    name: "Presunto Cozido", 
    batch: "PC-2025-008", 
    category: "Frios", 
    expiryDate: "18/04/2025", 
    daysRemaining: 1, 
    stock: 3 
  },
];

export function ProductExpiry() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Validades" 
        description="Controle de validade dos produtos"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              Vencendo em 3 dias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">16 itens</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Vencendo em 7 dias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">52 itens</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Vencendo em 15 dias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">124 itens</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produto..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Filtrar por Data
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Lote</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Data de Validade</TableHead>
                <TableHead>Dias Restantes</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsData.map((product) => (
                <TableRow key={product.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.batch}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.expiryDate}</TableCell>
                  <TableCell>{product.daysRemaining}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant={
                      product.daysRemaining > 5 ? "success" :
                      product.daysRemaining > 2 ? "warning" : "destructive"
                    }>
                      {product.daysRemaining > 5 ? "Normal" :
                       product.daysRemaining > 2 ? "Atenção" : "Crítico"}
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
