
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from "@/components/ui/badge";

const customersData = [
  { name: 'Jan', clientes: 120 },
  { name: 'Fev', clientes: 150 },
  { name: 'Mar', clientes: 180 },
  { name: 'Abr', clientes: 220 },
  { name: 'Mai', clientes: 260 },
  { name: 'Jun', clientes: 310 },
];

const segmentData = [
  { name: 'Varejo', value: 60 },
  { name: 'Atacado', value: 25 },
  { name: 'Empresarial', value: 15 },
];

const statusData = [
  { name: 'Ativos', value: 75 },
  { name: 'Inativos', value: 15 },
  { name: 'Novos', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function CustomersReports() {
  const formatPercent = (value: number) => `${value}%`;

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
        title="Relatórios de Clientes"
        description="Análise detalhada de clientes"
      />

      <Tabs defaultValue="principais" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="principais">Principais Métricas</TabsTrigger>
          <TabsTrigger value="segmentacao">Segmentação</TabsTrigger>
          <TabsTrigger value="comportamento">Comportamento</TabsTrigger>
        </TabsList>

        <TabsContent value="principais" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total de Clientes</CardTitle>
                <CardDescription>Crescimento anual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,240</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+14%</Badge>
                  <span className="text-sm text-muted-foreground">vs. ano anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Novos Clientes</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">124</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+8%</Badge>
                  <span className="text-sm text-muted-foreground">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Taxa de Retenção</CardTitle>
                <CardDescription>Clientes ativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">78%</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success">+3%</Badge>
                  <span className="text-sm text-muted-foreground">vs. trimestre anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Evolução de Clientes</CardTitle>
              <CardDescription>
                Crescimento mensal no número de clientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customersData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="clientes" fill="#3b82f6" name="Clientes" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segmentacao" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Clientes por Segmento</CardTitle>
                <CardDescription>
                  Distribuição percentual por tipo de cliente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={segmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {segmentData.map((entry, index) => (
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
              <CardHeader>
                <CardTitle>Status de Clientes</CardTitle>
                <CardDescription>
                  Classificação dos clientes por status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comportamento" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comportamento de Compra</CardTitle>
              <CardDescription>
                Análise de frequência e valor médio de compras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Frequência média de compras</div>
                    <div className="text-2xl font-bold">2.4 compras/mês</div>
                    <div className="text-sm text-muted-foreground">
                      +0.3 em relação ao período anterior
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Valor médio por compra</div>
                    <div className="text-2xl font-bold">R$ 187,50</div>
                    <div className="text-sm text-muted-foreground">
                      +12% em relação ao período anterior
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Categorias mais compradas</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Eletrônicos (32%)</Badge>
                    <Badge>Alimentos (24%)</Badge>
                    <Badge>Vestuário (18%)</Badge>
                    <Badge>Cosméticos (12%)</Badge>
                    <Badge>Outros (14%)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
