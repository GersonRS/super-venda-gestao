
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const vendaPorCategoria = [
  { name: 'Eletrônicos', valor: 35 },
  { name: 'Alimentos', valor: 25 },
  { name: 'Vestuário', valor: 20 },
  { name: 'Casa', valor: 15 },
  { name: 'Outros', valor: 5 },
];

const produtosMaisVendidos = [
  { name: 'Smartphone X', vendas: 85 },
  { name: 'Notebook Y', vendas: 65 },
  { name: 'Smart TV Z', vendas: 58 },
  { name: 'Monitor UltraWide', vendas: 45 },
  { name: 'Tablet Pro', vendas: 42 },
];

const estoquePorDeposito = [
  { name: 'Depósito Principal', valor: 65 },
  { name: 'Filial Norte', valor: 20 },
  { name: 'Filial Sul', valor: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function ProductsReports() {
  // Custom tooltip component for PieChart that formats the number with 'toFixed'
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      // Safely check if the value can have toFixed called on it
      const value = typeof payload[0].value === 'number' 
        ? payload[0].value.toFixed(2) 
        : payload[0].value;
        
      return (
        <div className="bg-background border p-2 rounded-md shadow-md">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{`${value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader
        title="Relatórios de Produtos"
        description="Análise detalhada de produtos, vendas e estoque"
      />

      <Tabs defaultValue="vendas" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vendas">Vendas por Produto</TabsTrigger>
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
          <TabsTrigger value="estoque">Estoque</TabsTrigger>
        </TabsList>

        <TabsContent value="vendas" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Produtos Vendidos</CardTitle>
                <CardDescription>Último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">742</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+12%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Valor Médio</CardTitle>
                <CardDescription>Por produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 245,50</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+5%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Margem Média</CardTitle>
                <CardDescription>Por produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">32%</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="warning">-2%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Produtos Mais Vendidos</CardTitle>
              <CardDescription>
                Ranking dos produtos com maior volume de vendas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={produtosMaisVendidos} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={150} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vendas" fill="#3b82f6" name="Unidades Vendidas" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categorias" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
                <CardDescription>
                  Distribuição percentual das vendas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={vendaPorCategoria}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="valor"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {vendaPorCategoria.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Desempenho por Categoria</CardTitle>
                <CardDescription>Último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Eletrônicos</span>
                      <span className="text-sm font-medium text-emerald-600">+18%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[75%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Alimentos</span>
                      <span className="text-sm font-medium text-emerald-600">+5%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[62%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Vestuário</span>
                      <span className="text-sm font-medium text-red-600">-3%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[45%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Casa</span>
                      <span className="text-sm font-medium text-emerald-600">+7%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[38%] rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="estoque" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Produtos em Estoque</CardTitle>
                <CardDescription>Total</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,283</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+8%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Valor do Estoque</CardTitle>
                <CardDescription>Custo total</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 247.500</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="warning">+12%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Giro de Estoque</CardTitle>
                <CardDescription>Média mensal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2.4x</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+0.3</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição do Estoque</CardTitle>
                <CardDescription>
                  Por depósito/filial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={estoquePorDeposito}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="valor"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {estoquePorDeposito.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Status do Estoque</CardTitle>
                <CardDescription>Produtos críticos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Produtos Abaixo do Mínimo</span>
                    <span className="font-medium text-red-600">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Produtos Sem Estoque</span>
                    <span className="font-medium text-red-600">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Produtos Próximos do Vencimento</span>
                    <span className="font-medium text-amber-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Produtos com Excesso</span>
                    <span className="font-medium text-amber-600">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Pedidos de Compra Pendentes</span>
                    <span className="font-medium">7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
