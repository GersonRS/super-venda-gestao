
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, Plus, Search, Filter, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data for initial development
const mockProducts = [
  { id: 1, code: '7891234567890', name: 'Arroz Branco 5kg', category: 'Alimentos', stock: 45, price: 29.90, costPrice: 23.50, active: true },
  { id: 2, code: '7891234567891', name: 'Feijão Carioca 1kg', category: 'Alimentos', stock: 32, price: 8.90, costPrice: 6.70, active: true },
  { id: 3, code: '7891234567892', name: 'Açúcar Refinado 1kg', category: 'Alimentos', stock: 50, price: 5.49, costPrice: 4.20, active: true },
  { id: 4, code: '7891234567893', name: 'Café Moído 500g', category: 'Bebidas', stock: 28, price: 12.90, costPrice: 9.80, active: true },
  { id: 5, code: '7891234567894', name: 'Óleo de Soja 900ml', category: 'Alimentos', stock: 40, price: 7.89, costPrice: 6.10, active: true },
  { id: 6, code: '7891234567895', name: 'Leite Integral 1L', category: 'Laticínios', stock: 60, price: 4.99, costPrice: 3.80, active: true },
  { id: 7, code: '7891234567896', name: 'Sabão em Pó 1kg', category: 'Limpeza', stock: 25, price: 14.90, costPrice: 11.20, active: true },
  { id: 8, code: '7891234567897', name: 'Papel Higiênico 12 rolos', category: 'Higiene', stock: 18, price: 19.90, costPrice: 15.30, active: true },
  { id: 9, code: '7891234567898', name: 'Detergente Líquido 500ml', category: 'Limpeza', stock: 42, price: 3.49, costPrice: 2.40, active: true },
  { id: 10, code: '7891234567899', name: 'Refrigerante 2L', category: 'Bebidas', stock: 35, price: 8.99, costPrice: 6.80, active: true },
];

export function Products() {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLowStock, setShowLowStock] = useState(false);

  // Filter products based on search term and low stock filter
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.code.includes(searchTerm);
    const matchesLowStock = showLowStock ? product.stock < 20 : true;
    return matchesSearch && matchesLowStock;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Produto</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-muted-foreground">
                Formulário de cadastro de produto a ser implementado.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou código de barras..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="lowStock" 
            checked={showLowStock} 
            onCheckedChange={(checked) => setShowLowStock(checked === true)}
          />
          <label
            htmlFor="lowStock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mostrar apenas estoque baixo
          </label>
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <FileText className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableCaption>Lista de produtos cadastrados no sistema.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Estoque</TableHead>
              <TableHead className="text-right">Preço Venda</TableHead>
              <TableHead className="text-right">Preço Custo</TableHead>
              <TableHead className="text-center">Ativo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id} className="cursor-pointer hover:bg-muted/60">
                  <TableCell className="font-medium">{product.code}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className={`text-right ${product.stock < 20 ? 'text-red-500 font-medium' : ''}`}>
                    {product.stock}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.costPrice)}
                  </TableCell>
                  <TableCell className="text-center">
                    {product.active ? 'Sim' : 'Não'}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <Package className="h-12 w-12 mb-2" />
                    <p>Nenhum produto encontrado</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Products;
