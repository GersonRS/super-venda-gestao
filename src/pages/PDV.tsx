
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const PDV = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [codeValue, setCodeValue] = useState('');
  
  return (
    <div className="flex flex-col h-screen bg-blue-800 p-2 gap-2">
      {/* Header - CAIXA ABERTO */}
      <div className="bg-white rounded-md p-4">
        <h1 className="text-3xl font-bold text-center text-blue-900">CAIXA ABERTO</h1>
      </div>

      <div className="flex flex-1 gap-2">
        {/* Left Column */}
        <div className="flex flex-col w-56 gap-2">
          {/* Logo */}
          <div className="bg-white rounded-md p-3 flex items-center justify-center">
            <img 
              src="/lovable-uploads/3b557cbb-a5b2-4ce5-ae37-b0509e3e6768.png" 
              alt="Logo do Carrinho" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Barcode Input */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Código de Barras
              </div>
              <div className="bg-white p-2">
                <Input 
                  value={barcodeValue}
                  onChange={(e) => setBarcodeValue(e.target.value)}
                  className="border-2 border-gray-300 h-16"
                />
              </div>
            </CardContent>
          </Card>

          {/* Unit Value */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Valor Unitário
              </div>
              <div className="bg-white p-4 flex justify-center">
                <p className="text-xl font-bold">R$ 0,00</p>
              </div>
            </CardContent>
          </Card>

          {/* Item Total */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Total do Item
              </div>
              <div className="bg-white p-4 flex justify-center">
                <p className="text-xl font-bold">R$ 0,00</p>
              </div>
            </CardContent>
          </Card>

          {/* Code Input */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Código
              </div>
              <div className="bg-white p-4">
                <Input 
                  value={codeValue}
                  onChange={(e) => setCodeValue(e.target.value)}
                  className="border-2 border-gray-300 text-center font-bold text-xl h-12"
                  placeholder="69883"
                />
              </div>
            </CardContent>
          </Card>

          {/* Keyboard Shortcuts */}
          <Card className="border-0 mt-auto">
            <CardContent className="p-0">
              <div className="bg-blue-100 p-2 text-xs">
                <p>F2 - Código Interno</p>
                <p>F3 - Excluir Item</p>
                <p>F4 - Inserir Quantidade</p>
                <p>F5 - Nova Venda</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 gap-2">
          {/* Product List */}
          <Card className="border-0 flex-1">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Lista de Produtos
              </div>
              <div className="bg-white">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  <Table>
                    <TableHeader className="bg-gray-100 sticky top-0">
                      <TableRow>
                        <TableHead className="w-16 py-2">Nº Item</TableHead>
                        <TableHead className="py-2">Código Descrição</TableHead>
                        <TableHead className="w-20 py-2">Qtd</TableHead>
                        <TableHead className="w-20 py-2">Vlr. Unit.</TableHead>
                        <TableHead className="w-20 py-2">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
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
              </div>
            </CardContent>
          </Card>

          {/* Subtotal */}
          <Card className="border-0">
            <CardContent className="p-0">
              <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                Subtotal
              </div>
              <div className="bg-white p-4 flex justify-end">
                <p className="text-4xl font-bold text-blue-900">110,45</p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Row with Total and Change */}
          <div className="flex gap-2">
            {/* Left Bottom - Function Keys */}
            <Card className="border-0 flex-1">
              <CardContent className="p-2 grid grid-cols-3 gap-2 bg-blue-100 text-xs">
                <div>
                  <p>F2 - Código Interno</p>
                  <p>F3 - Excluir Item</p>
                  <p>F4 - Inserir Quantidade</p>
                </div>
                <div>
                  <p>F7 - Pesquisar Venda</p>
                  <p>F8 - Pesquisar Produto</p>
                  <p>F9 - Alterar Venda</p>
                </div>
                <div>
                  <p>Ctrl+O - CPF</p>
                  <p>Ctrl+P - Preço Produto</p>
                  <p>Ctrl+R - Contas Receber</p>
                </div>
                <div>
                  <p>F5 - Nova Venda</p>
                </div>
                <div>
                  <p>F10 - Finalizar</p>
                  <p>F11 - Excluir Venda</p>
                </div>
                <div>
                  <p>P - Imprimir</p>
                  <p>Esc - Sair</p>
                </div>
              </CardContent>
            </Card>

            {/* Total Received */}
            <Card className="border-0 w-52">
              <CardContent className="p-0">
                <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                  Total Recebido
                </div>
                <div className="bg-white p-4 flex justify-center">
                  <p className="text-2xl font-bold">R$ 110,45</p>
                </div>
              </CardContent>
            </Card>

            {/* Change */}
            <Card className="border-0 w-52">
              <CardContent className="p-0">
                <div className="bg-blue-900 text-white p-2 uppercase font-bold">
                  Troco
                </div>
                <div className="bg-white p-4 flex justify-center">
                  <p className="text-2xl font-bold">R$ 0,00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDV;
