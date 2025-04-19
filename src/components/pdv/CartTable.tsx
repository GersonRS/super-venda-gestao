
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { trash } from 'lucide-react';

export function CartTable() {
  return (
    <ScrollArea className="flex-1 rounded-md border border-white/20">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="hover:bg-transparent border-white/20">
            <TableHead className="text-white">Código</TableHead>
            <TableHead className="text-white">Produto</TableHead>
            <TableHead className="text-white text-right">Qtd</TableHead>
            <TableHead className="text-white text-right">Preço Un.</TableHead>
            <TableHead className="text-white text-right">Total</TableHead>
            <TableHead className="text-white w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-white/20">
            <TableCell className="text-white">7891234567890</TableCell>
            <TableCell className="text-white">Arroz Integral 1kg</TableCell>
            <TableCell className="text-white text-right">2</TableCell>
            <TableCell className="text-white text-right">R$ 8,90</TableCell>
            <TableCell className="text-white text-right">R$ 17,80</TableCell>
            <TableCell>
              <button className="p-1 hover:bg-white/10 rounded">
                <trash className="h-4 w-4 text-white" />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
