
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, TrendingUp } from "lucide-react";

const salesMonthlyData = [
  { month: 'Jan', vendas: 32000 },
  { month: 'Fev', vendas: 35000 },
  { month: 'Mar', vendas: 38000 },
  { month: 'Abr', vendas: 42000 },
  { month: 'Mai', vendas: 40000 },
  { month: 'Jun', vendas: 45000 },
];

const salesByCategory = [
  { name: 'Eletrônicos', value: 42 },
  { name: 'Móveis', value: 28 },
  { name: 'Vestuário', value: 15 },
  { name: 'Alimentos', value: 10 },
  { name: 'Outros', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const salesByPaymentMethod = [
  { method: 'Cartão de Crédito', value: 35000 },
  { method: 'Dinheiro', value: 12000 },
  { method: 'Pix', value: 24000 },
  { method: 'Boleto', value: 6000 },
  { method: 'Outros', value: 3000 },
];

export function SalesReports() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Relatórios de Vendas" 
        description="Análise do desempenho de vendas"
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
              <TrendingUp className="h-5 w-5" />
              Total de Vendas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 232.000,00</p>
            <p className="text-sm opacity-80">+18% em relação ao período anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Qtde. de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.876</p>
            <p className="text-sm opacity-80">+12% em relação ao período anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 123,67</p>
            <p className="text-sm opacity-80">+5% em relação ao período anterior</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="products">Por Produtos</TabsTrigger>
          <TabsTrigger value="categories">Por Categorias</TabsTrigger>
          <TabsTrigger value="payment">Por Forma de Pagamento</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                width={1000}
                height={300}
                data={salesMonthlyData}
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
                <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="vendas" 
                  stroke="#3b82f6" 
                  activeDot={{ r: 8 }} 
                  name="Vendas"
                />
              </LineChart>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PieChart width={400} height={300}>
                  <Pie
                    data={salesByCategory}
                    cx={200}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {salesByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  width={450}
                  height={300}
                  data={salesByPaymentMethod}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="method" />
                  <YAxis />
                  <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                  <Legend />
                  <Bar dataKey="value" fill="#3b82f6" name="Valor" />
                </BarChart>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo de vendas por produto...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise por Categorias</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo de análise por categorias...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise por Forma de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo de análise por forma de pagamento...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
