
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, Users } from "lucide-react";

const customerGrowthData = [
  { month: 'Jan', clientes: 120 },
  { month: 'Fev', clientes: 135 },
  { month: 'Mar', clientes: 148 },
  { month: 'Abr', clientes: 162 },
  { month: 'Mai', clientes: 180 },
  { month: 'Jun', clientes: 195 },
];

const topCustomers = [
  { name: 'João Silva', compras: 12, valor: 8500 },
  { name: 'Maria Santos', compras: 8, valor: 12000 },
  { name: 'Pedro Souza', compras: 10, valor: 6800 },
  { name: 'Ana Oliveira', compras: 6, valor: 9200 },
  { name: 'Carlos Mendes', compras: 5, valor: 7500 },
];

const customersByRegion = [
  { name: 'Sul', value: 35 },
  { name: 'Sudeste', value: 45 },
  { name: 'Centro-Oeste', value: 10 },
  { name: 'Nordeste', value: 8 },
  { name: 'Norte', value: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function CustomersReports() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Relatórios de Clientes" 
        description="Análise e segmentação de clientes"
      />

      <div className="flex justify-between items-center">
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Filtrar Período
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Users className="h-5 w-5" />
              Total de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.245</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Novos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">67</p>
            <p className="text-sm opacity-80">Últimos 30 dias</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 580,00</p>
            <p className="text-sm opacity-80">Por cliente</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="growth">Crescimento</TabsTrigger>
          <TabsTrigger value="top">Melhores Clientes</TabsTrigger>
          <TabsTrigger value="region">Por Região</TabsTrigger>
          <TabsTrigger value="recency">Recência</TabsTrigger>
        </TabsList>
        
        <TabsContent value="growth" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Crescimento da Base de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                width={1000}
                height={300}
                data={customerGrowthData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="clientes" 
                  stroke="#3b82f6" 
                  activeDot={{ r: 8 }} 
                  name="Novos Clientes"
                />
              </LineChart>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="top" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Clientes por Valor</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={topCustomers}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value, name) => name === "valor" ? `R$ ${value.toFixed(2)}` : value} />
                <Legend />
                <Bar dataKey="valor" fill="#8884d8" name="Valor Total (R$)" />
              </BarChart>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Clientes por Frequência</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={topCustomers}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="compras" fill="#10b981" name="Quantidade de Compras" />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="region" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Região</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <PieChart width={400} height={300}>
                <Pie
                  data={customersByRegion}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {customersByRegion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Recência</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para relatório de recência de clientes...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
