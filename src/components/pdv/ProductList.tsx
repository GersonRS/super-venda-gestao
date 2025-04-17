import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProductList() {
  return (
    <ScrollArea className="h-[calc(100vh-380px)]">
      <Table>
        <TableHeader className="bg-blue-800/30 sticky top-0">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-16 py-3 text-white font-bold">Nº Item</TableHead>
            <TableHead className="py-3 text-white font-bold">Código Descrição</TableHead>
            <TableHead className="w-24 py-3 text-white font-bold">Qtd</TableHead>
            <TableHead className="w-24 py-3 text-white font-bold">Vlr. Unit.</TableHead>
            <TableHead className="w-24 py-3 text-white font-bold">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-white/90">
          <TableRow>
            <TableCell className="font-medium text-center">6</TableCell>
            <TableCell>7896011102856 BISC CARTOON FLOCOS 140G</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">1.59</TableCell>
            <TableCell className="text-right">1.59</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">7</TableCell>
            <TableCell>7896085075575 BIS ZABET MOUSSE LIMAO 145G</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">1.89</TableCell>
            <TableCell className="text-right">1.89</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">8</TableCell>
            <TableCell>7896085075575 BIS ZABET MOUSSE LIMAO 145G</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">1.89</TableCell>
            <TableCell className="text-right">1.89</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">9</TableCell>
            <TableCell>7896085075674 BIS ZABET MOUSSE BALCK MORANGO 145</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">1.89</TableCell>
            <TableCell className="text-right">1.89</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">10</TableCell>
            <TableCell>7896109800022 ACUCAR CRISTAL GUARANI 2KG</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">6.99</TableCell>
            <TableCell className="text-right">6.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">11</TableCell>
            <TableCell>7896428700027 CAFE CENTRAL 500G</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">9.79</TableCell>
            <TableCell className="text-right">9.79</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">12</TableCell>
            <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">13</TableCell>
            <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">14</TableCell>
            <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">15</TableCell>
            <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">16</TableCell>
            <TableCell>7896279600538 OLEO SOJA COAMO 900ML</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">3.89</TableCell>
            <TableCell className="text-right">3.89</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">17</TableCell>
            <TableCell>2598 CARNE MOIDA KG</TableCell>
            <TableCell className="text-right">1.206</TableCell>
            <TableCell className="text-right">14.99</TableCell>
            <TableCell className="text-right">18.08</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">18</TableCell>
            <TableCell>6960 LINGUICA PERNIL/ABOBRINHA KG</TableCell>
            <TableCell className="text-right">1.016</TableCell>
            <TableCell className="text-right">13.90</TableCell>
            <TableCell className="text-right">14.12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">19</TableCell>
            <TableCell>2630 BIG CHICKEN C/QUEIJO PERDIGAO KG</TableCell>
            <TableCell className="text-right">0.274</TableCell>
            <TableCell className="text-right">29.99</TableCell>
            <TableCell className="text-right">8.22</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">20</TableCell>
            <TableCell>6965 SALGADO P/ FRITAR PEQ KG</TableCell>
            <TableCell className="text-right">0.338</TableCell>
            <TableCell className="text-right">29.99</TableCell>
            <TableCell className="text-right">10.14</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">21</TableCell>
            <TableCell>7896011127071 REFRESCO TRINK 30G UVA</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center">22</TableCell>
            <TableCell>7896011127071 REFRESCO TRINK 30G UVA</TableCell>
            <TableCell className="text-right">1.000</TableCell>
            <TableCell className="text-right">0.85</TableCell>
            <TableCell className="text-right">0.85</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
