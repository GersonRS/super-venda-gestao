
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { name: 'Jan', receita: 24000, despesa: 18000 },
  { name: 'Fev', receita: 26000, despesa: 19000 },
  { name: 'Mar', receita: 32000, despesa: 22000 },
  { name: 'Abr', receita: 28000, despesa: 20000 },
  { name: 'Mai', receita: 35000, despesa: 23000 },
  { name: 'Jun', receita: 40000, despesa: 25000 },
];

const despesasPorCategoria = [
  { name: 'Folha de Pagamento', valor: 45 },
  { name: 'Impostos', valor: 20 },
  { name: 'Fornecedores', valor: 15 },
  { name: 'Aluguel', valor: 10 },
  { name: 'Outros', valor: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function FinancialReports() {
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
        title="Relatórios Financeiros"
        description="Análise detalhada das finanças da empresa"
      />

      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resumo">Resumo Financeiro</TabsTrigger>
          <TabsTrigger value="fluxo">Fluxo de Caixa</TabsTrigger>
          <TabsTrigger value="despesas">Despesas</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Receita Total</CardTitle>
                <CardDescription>Último trimestre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 185.000</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+15%</Badge>
                  <span className="text-sm text-muted-foreground">vs. trimestre anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Despesas Totais</CardTitle>
                <CardDescription>Último trimestre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 127.000</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="warning">+8%</Badge>
                  <span className="text-sm text-muted-foreground">vs. trimestre anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Lucro Líquido</CardTitle>
                <CardDescription>Último trimestre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 58.000</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+22%</Badge>
                  <span className="text-sm text-muted-foreground">vs. trimestre anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Receitas vs Despesas</CardTitle>
              <CardDescription>
                Comparativo mensal dos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}`} />
                    <Legend />
                    <Bar dataKey="receita" fill="#3b82f6" name="Receita" />
                    <Bar dataKey="despesa" fill="#ef4444" name="Despesa" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fluxo" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fluxo de Caixa</CardTitle>
              <CardDescription>
                Evolução do caixa nos últimos meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="receita" 
                      stroke="#3b82f6" 
                      name="Entradas"
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="despesa" 
                      stroke="#ef4444" 
                      name="Saídas"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Projeção de Caixa</CardTitle>
                <CardDescription>Próximos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Saldo Atual</span>
                    <span className="font-medium">R$ 87.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Entradas Previstas</span>
                    <span className="font-medium text-emerald-600">+ R$ 42.800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Saídas Previstas</span>
                    <span className="font-medium text-red-600">- R$ 29.300</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-sm font-medium">Saldo Projetado</span>
                    <span className="font-bold">R$ 101.000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Indicadores Financeiros</CardTitle>
                <CardDescription>Último trimestre</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Margem de Lucro</span>
                    <span className="font-medium">31.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">ROI</span>
                    <span className="font-medium">28.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Índice de Liquidez</span>
                    <span className="font-medium">2.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Ciclo Financeiro</span>
                    <span className="font-medium">24 dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="despesas" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Despesas por Categoria</CardTitle>
                <CardDescription>
                  Distribuição percentual das despesas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={despesasPorCategoria}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="valor"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {despesasPorCategoria.map((entry, index) => (
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
                <CardTitle className="text-lg font-medium">Maiores Despesas</CardTitle>
                <CardDescription>Último mês</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Salários</span>
                    <span className="font-medium">R$ 12.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Impostos</span>
                    <span className="font-medium">R$ 8.300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Fornecedor XYZ</span>
                    <span className="font-medium">R$ 4.750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Aluguel</span>
                    <span className="font-medium">R$ 3.800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Energia</span>
                    <span className="font-medium">R$ 1.250</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Evolução das Despesas</CardTitle>
              <CardDescription>
                Comparativo dos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `R$ ${value}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="despesa" 
                      stroke="#ef4444" 
                      name="Despesas"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
