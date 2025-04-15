
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Arroz Integral",
    code: "7891234567890",
    stock: 45,
    price: 8.99,
  },
  {
    id: 2,
    name: "Feijão Carioca",
    code: "7891234567891",
    stock: 32,
    price: 6.99,
  },
  {
    id: 3,
    name: "Macarrão Espaguete",
    code: "7891234567892",
    stock: 78,
    price: 4.99,
  },
];

export function Products() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Produtos" 
        description="Gerencie seu catálogo de produtos"
      />
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total de Produtos</CardTitle>
            <CardDescription>Quantidade em catálogo</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.234</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Valor em Estoque</CardTitle>
            <CardDescription>Total em mercadorias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 45.678,90</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Produtos em Baixa</CardTitle>
            <CardDescription>Itens para repor</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-destructive">23</p>
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
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead className="text-right">Estoque</TableHead>
              <TableHead className="text-right">Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
                <TableCell className="text-right">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
