
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const vendasMensais = [
  { name: 'Jan', vendas: 65000 },
  { name: 'Fev', vendas: 59000 },
  { name: 'Mar', vendas: 80000 },
  { name: 'Abr', vendas: 81000 },
  { name: 'Mai', vendas: 90000 },
  { name: 'Jun', vendas: 95000 },
];

const vendasPorVendedor = [
  { name: 'João Silva', vendas: 125000 },
  { name: 'Maria Oliveira', vendas: 118000 },
  { name: 'Pedro Santos', vendas: 98000 },
  { name: 'Ana Costa', vendas: 89000 },
  { name: 'Carlos Pereira', vendas: 67000 },
];

const vendasPorCanal = [
  { name: 'Loja Física', valor: 45 },
  { name: 'E-commerce', valor: 30 },
  { name: 'Marketplace', valor: 15 },
  { name: 'Televendas', valor: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function SalesReports() {
  const formatCurrency = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

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
        title="Relatórios de Vendas"
        description="Análise detalhada do desempenho de vendas"
      />

      <Tabs defaultValue="geral" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="vendedores">Vendedores</TabsTrigger>
          <TabsTrigger value="canais">Canais de Venda</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Vendas Totais</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 95.240</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+12%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Pedidos</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">432</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+8%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Ticket Médio</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 220,46</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+3.5%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vendas Mensais</CardTitle>
              <CardDescription>
                Evolução das vendas nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={vendasMensais}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="vendas" 
                      stroke="#3b82f6" 
                      name="Vendas"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendedores" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Vendedor</CardTitle>
              <CardDescription>
                Ranking de vendas por vendedor (ano atual)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={vendasPorVendedor} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={120} />
                    <Tooltip formatter={(value) => `R$ ${value}`} />
                    <Legend />
                    <Bar dataKey="vendas" fill="#3b82f6" name="Vendas Totais" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Metas de Vendas</CardTitle>
                <CardDescription>Progresso mensal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">João Silva</span>
                      <span className="text-sm font-medium">92% da meta</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[92%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Maria Oliveira</span>
                      <span className="text-sm font-medium">88% da meta</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[88%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pedro Santos</span>
                      <span className="text-sm font-medium">75% da meta</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[75%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Ana Costa</span>
                      <span className="text-sm font-medium">68% da meta</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[68%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Estatísticas de Vendedores</CardTitle>
                <CardDescription>Último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Taxa de Conversão Média</span>
                    <span className="font-medium">24.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Tempo Médio de Fechamento</span>
                    <span className="font-medium">3.2 dias</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Produtos por Venda</span>
                    <span className="font-medium">2.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Vendas Canceladas</span>
                    <span className="font-medium">3.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="canais" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Canal</CardTitle>
                <CardDescription>
                  Distribuição percentual das vendas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={vendasPorCanal}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="valor"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {vendasPorCanal.map((entry, index) => (
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
                <CardTitle className="text-lg font-medium">Desempenho por Canal</CardTitle>
                <CardDescription>Último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Loja Física</span>
                      <span className="text-sm font-medium text-emerald-600">+5%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[45%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">E-commerce</span>
                      <span className="text-sm font-medium text-emerald-600">+18%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[30%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Marketplace</span>
                      <span className="text-sm font-medium text-emerald-600">+24%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[15%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Televendas</span>
                      <span className="text-sm font-medium text-red-600">-3%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[10%] rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Métricas por Canal</CardTitle>
              <CardDescription>Comparativo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-2 text-left font-medium">Canal</th>
                      <th className="pb-2 text-right font-medium">Ticket Médio</th>
                      <th className="pb-2 text-right font-medium">Conversão</th>
                      <th className="pb-2 text-right font-medium">Itens/Venda</th>
                      <th className="pb-2 text-right font-medium">Crescimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Loja Física</td>
                      <td className="py-3 text-right">R$ 245,60</td>
                      <td className="py-3 text-right">28%</td>
                      <td className="py-3 text-right">3.2</td>
                      <td className="py-3 text-right text-emerald-600">+5%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">E-commerce</td>
                      <td className="py-3 text-right">R$ 212,40</td>
                      <td className="py-3 text-right">3.5%</td>
                      <td className="py-3 text-right">2.8</td>
                      <td className="py-3 text-right text-emerald-600">+18%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Marketplace</td>
                      <td className="py-3 text-right">R$ 195,20</td>
                      <td className="py-3 text-right">2.2%</td>
                      <td className="py-3 text-right">1.9</td>
                      <td className="py-3 text-right text-emerald-600">+24%</td>
                    </tr>
                    <tr>
                      <td className="py-3">Televendas</td>
                      <td className="py-3 text-right">R$ 315,80</td>
                      <td className="py-3 text-right">18%</td>
                      <td className="py-3 text-right">3.8</td>
                      <td className="py-3 text-right text-red-600">-3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
