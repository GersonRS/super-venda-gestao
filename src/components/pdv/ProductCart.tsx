
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProductCart() {
  return (
    <Card className="border-0 flex-1 bg-white/10 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
          Lista de Produtos
        </div>
        <ScrollArea className="h-[calc(100vh-400px)]">
          <Table>
            <TableHeader className="bg-blue-800/30 sticky top-0">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 py-3 text-white font-bold">Nº Item</TableHead>
                <TableHead className="py-3 text-white font-bold">Nome do Produto</TableHead>
                <TableHead className="w-32 py-3 text-white font-bold text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-white/90">
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Arroz Tio João 5kg</TableCell>
                <TableCell className="text-right">R$ 24,90</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Feijão Carioca 1kg</TableCell>
                <TableCell className="text-right">R$ 8,50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
