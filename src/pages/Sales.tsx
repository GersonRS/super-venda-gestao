
import { Search } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Sales() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Vendas" 
        description="Gerencie todas as suas vendas"
      />

      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar venda..."
            className="pl-8"
          />
        </div>
        <Button>Nova Venda</Button>
      </div>

      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#1234</TableCell>
              <TableCell>João Silva</TableCell>
              <TableCell>15/04/2025</TableCell>
              <TableCell>
                <span className="rounded-full bg-success/20 px-2 py-1 text-xs text-success">
                  Concluída
                </span>
              </TableCell>
              <TableCell className="text-right">R$ 150,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="p-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
