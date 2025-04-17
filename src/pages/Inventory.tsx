
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Archive, BarChart, Clipboard, Filter, Plus, Search } from "lucide-react";

const inventoryData = [
  { 
    id: 1, 
    name: "Smartphone X", 
    sku: "SM-X-001", 
    category: "Eletrônicos", 
    stockCurrent: 24,
    stockMin: 10,
    stockMax: 50,
    location: "Prateleira A1",
    status: "Normal"
  },
  { 
    id: 2, 
    name: "Notebook Pro", 
    sku: "NB-PRO-002", 
    category: "Eletrônicos", 
    stockCurrent: 8,
    stockMin: 5,
    stockMax: 20,
    location: "Prateleira A2",
    status: "Alerta"
  },
  { 
    id: 3, 
    name: "Mouse Sem Fio", 
    sku: "MS-SF-010", 
    category: "Periféricos", 
    stockCurrent: 35,
    stockMin: 15,
    stockMax: 50,
    location: "Prateleira B1",
    status: "Normal"
  },
  { 
    id: 4, 
    name: "Teclado Mecânico", 
    sku: "TC-MEC-005", 
    category: "Periféricos", 
    stockCurrent: 12,
    stockMin: 10,
    stockMax: 30,
    location: "Prateleira B2",
    status: "Alerta"
  },
  { 
    id: 5, 
    name: "Cabo HDMI", 
    sku: "CB-HDMI-008", 
    category: "Acessórios", 
    stockCurrent: 3,
    stockMin: 20,
    stockMax: 100,
    location: "Gaveta C3",
    status: "Crítico"
  },
];

export function Inventory() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Inventário" 
        description="Gestão do estoque e inventário"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Archive className="h-5 w-5" />
              Total de Itens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.243 itens</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <AlertTriangle className="h-5 w-5" />
              Itens em Alerta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24 itens</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <BarChart className="h-5 w-5" />
              Valor em Estoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 234.567,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar item..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clipboard className="mr-2 h-4 w-4" />
            Iniciar Contagem
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Item
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Estoque Atual</TableHead>
                <TableHead>Mínimo</TableHead>
                <TableHead>Máximo</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.stockCurrent}</TableCell>
                  <TableCell>{item.stockMin}</TableCell>
                  <TableCell>{item.stockMax}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    <Badge variant={
                      item.status === "Normal" ? "success" :
                      item.status === "Alerta" ? "warning" : "destructive"
                    }>
                      {item.status}
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
