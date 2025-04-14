import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const PDV = () => {
  return (
    <div className="min-h-screen p-4 md:p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">CAIXA ABERTO</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-semibold">Código de Barras</h2>
            <Input placeholder="Código de Barras" />
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-semibold">Valor Unitário</h2>
            <p>R$ 0,00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-semibold">Total do Item</h2>
            <p>R$ 0,00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-semibold">Código</h2>
            <Input placeholder="Código" />
          </div>
          <div>
            <p>F2 - Código Interno</p>
            <p>F3 - Excluir Item</p>
            <p>F4 - Inserir Quantidade</p>
            <p>F5 - Nova Venda</p>
          </div>
        </div>

        {/* Middle Section - Product List */}
        <div className="col-span-2">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-semibold">Lista de Produtos</h2>
            <Table>
              <TableCaption>Lista de produtos adicionados</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Nº Item</TableHead>
                  <TableHead>Código Descrição</TableHead>
                  <TableHead>Qtd</TableHead>
                  <TableHead>Vlr. Unit.</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell>7896011102856 BISC CARTOON FLOCOS 140G</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>1.59</TableCell>
                  <TableCell>1.59</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7</TableCell>
                  <TableCell>7896085075575 BIS ZABET MOUSSE LIMAO 145G</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>1.89</TableCell>
                  <TableCell>1.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">8</TableCell>
                  <TableCell>7896085075575 BIS ZABET MOUSSE LIMAO 145G</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>1.89</TableCell>
                  <TableCell>1.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9</TableCell>
                  <TableCell>7896085075674 BIS ZABET MOUSSE BALCK MORANGO 145</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>1.89</TableCell>
                  <TableCell>1.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">10</TableCell>
                  <TableCell>7896109800022 ACUCAR CRISTAL GUARANI 2KG</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>6.99</TableCell>
                  <TableCell>6.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">11</TableCell>
                  <TableCell>7896428700027 CAFE CENTRAL 500G</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>9.79</TableCell>
                  <TableCell>9.79</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">12</TableCell>
                  <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">13</TableCell>
                  <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">14</TableCell>
                  <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">15</TableCell>
                  <TableCell>7896011127088 REFRESCO TRINK 30G LIMAO</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">16</TableCell>
                  <TableCell>7896279600538 OLEO SOJA COAMO 900ML</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>3.89</TableCell>
                  <TableCell>3.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">17</TableCell>
                  <TableCell>2598 CARNE MOIDA KG</TableCell>
                  <TableCell>1.206</TableCell>
                  <TableCell>14.99</TableCell>
                  <TableCell>18.08</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">18</TableCell>
                  <TableCell>6960 LINGUICA PERNIL/ABOBRINHA KG</TableCell>
                  <TableCell>1.016</TableCell>
                  <TableCell>13.90</TableCell>
                  <TableCell>14.12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">19</TableCell>
                  <TableCell>2630 BIG CHICKEN C/QUEIJO PERDIGAO KG</TableCell>
                  <TableCell>0.274</TableCell>
                  <TableCell>29.99</TableCell>
                  <TableCell>8.22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">20</TableCell>
                  <TableCell>6965 SALGADO P/ FRITAR PEQ KG</TableCell>
                  <TableCell>0.338</TableCell>
                  <TableCell>29.99</TableCell>
                  <TableCell>10.14</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">21</TableCell>
                  <TableCell>7896011127071 REFRESCO TRINK 30G UVA</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">22</TableCell>
                  <TableCell>7896011127071 REFRESCO TRINK 30G UVA</TableCell>
                  <TableCell>1.000</TableCell>
                  <TableCell>0.85</TableCell>
                  <TableCell>0.85</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Bottom Section - Totals */}
      <div className="bg-gray-100 p-4 rounded-md flex flex-col md:flex-row justify-between">
        <div>
          <p>F7 - Pesquisar Venda</p>
          <p>F8 - Pesquisar Produto</p>
          <p>F9 - Alterar Venda</p>
          <p>F10 - Finalizar</p>
          <p>F11 - Excluir Venda</p>
        </div>
        <div>
          <p>Ctrl+O - CPF</p>
          <p>Ctrl+P - Preço Produto</p>
          <p>Ctrl+R - Contas Receber</p>
          <p>P - Imprimir</p>
          <p>Esc - Sair</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>110,45</p>
          </div>
          <div className="flex justify-between">
            <p>Total Recebido:</p>
            <p>R$ 110,45</p>
          </div>
          <div className="flex justify-between">
            <p>Troco:</p>
            <p>R$ 0,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDV
