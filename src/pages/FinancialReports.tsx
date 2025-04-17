
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, FileText } from "lucide-react";

const monthlyData = [
  { month: 'Jan', receitas: 15000, despesas: 10000 },
  { month: 'Fev', receitas: 18000, despesas: 12000 },
  { month: 'Mar', receitas: 16000, despesas: 10800 },
  { month: 'Abr', receitas: 19000, despesas: 11500 },
  { month: 'Mai', receitas: 21000, despesas: 13000 },
  { month: 'Jun', receitas: 20000, despesas: 12500 },
];

const categoryExpenseData = [
  { name: 'Aluguel', value: 2500 },
  { name: 'Salários', value: 7500 },
  { name: 'Insumos', value: 2000 },
  { name: 'Marketing', value: 1500 },
  { name: 'Outros', value: 1000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function FinancialReports() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Relatórios Financeiros" 
        description="Análise e insights financeiros"
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

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="cashflow">Fluxo de Caixa</TabsTrigger>
          <TabsTrigger value="expenses">Despesas</TabsTrigger>
          <TabsTrigger value="revenue">Receitas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5" />
                  Receita Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">R$ 109.000,00</p>
                <p className="text-sm opacity-80">+12% em relação ao período anterior</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-white">Despesas Totais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">R$ 69.800,00</p>
                <p className="text-sm opacity-80">+5% em relação ao período anterior</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-white">Lucro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">R$ 39.200,00</p>
                <p className="text-sm opacity-80">+21% em relação ao período anterior</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Receitas x Despesas</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={monthlyData}
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
                <Bar dataKey="receitas" fill="#3b82f6" name="Receitas" />
                <Bar dataKey="despesas" fill="#ef4444" name="Despesas" />
              </BarChart>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Despesas</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart width={400} height={300}>
                  <Pie
                    data={categoryExpenseData}
                    cx={200}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryExpenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                </PieChart>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tendência de Lucratividade</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart
                  width={450}
                  height={300}
                  data={monthlyData}
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
                    dataKey="receitas" 
                    stroke="#3b82f6" 
                    activeDot={{ r: 8 }} 
                    name="Receitas"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="despesas" 
                    stroke="#ef4444" 
                    name="Despesas"
                  />
                </LineChart>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="cashflow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fluxo de Caixa</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para Fluxo de Caixa</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Despesas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para Relatório de Despesas</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Receitas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para Relatório de Receitas</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
