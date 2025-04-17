
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, Package } from "lucide-react";

const topSellingProducts = [
  { name: 'Smartphone X', vendas: 120, receita: 120000 },
  { name: 'Notebook Pro', vendas: 75, receita: 150000 },
  { name: 'Fone de Ouvido BT', vendas: 250, receita: 37500 },
  { name: 'Smart TV 50"', vendas: 90, receita: 135000 },
  { name: 'Mouse Sem Fio', vendas: 200, receita: 20000 },
];

const productsByCategory = [
  { name: 'Eletrônicos', value: 250 },
  { name: 'Informática', value: 180 },
  { name: 'Acessórios', value: 320 },
  { name: 'Áudio e Vídeo', value: 150 },
  { name: 'Outros', value: 100 },
];

const productProfitability = [
  { name: 'Smartphone X', margem: 35 },
  { name: 'Notebook Pro', margem: 25 },
  { name: 'Fone de Ouvido BT', margem: 45 },
  { name: 'Smart TV 50"', margem: 30 },
  { name: 'Mouse Sem Fio', margem: 55 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function ProductsReports() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Relatórios de Produtos" 
        description="Análise de desempenho e estoque de produtos"
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
              <Package className="h-5 w-5" />
              Total de Produtos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.243</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Produtos Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3.267</p>
            <p className="text-sm opacity-80">Últimos 30 dias</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-white">Receita Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 462.500,00</p>
            <p className="text-sm opacity-80">Últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="bestsellers" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="bestsellers">Mais Vendidos</TabsTrigger>
          <TabsTrigger value="profit">Lucratividade</TabsTrigger>
          <TabsTrigger value="inventory">Inventário</TabsTrigger>
          <TabsTrigger value="categories">Categorias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bestsellers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Produtos Mais Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={topSellingProducts}
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
                <Bar dataKey="vendas" fill="#3b82f6" name="Quantidade Vendida" />
              </BarChart>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Receita por Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={topSellingProducts}
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
                <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                <Legend />
                <Bar dataKey="receita" fill="#8884d8" name="Receita (R$)" />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Margem de Lucro por Produto</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={productProfitability}
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
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="margem" fill="#10b981" name="Margem de Lucro (%)" />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Inventário</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo para relatório de inventário...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Categoria</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <PieChart width={400} height={300}>
                <Pie
                  data={productsByCategory}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {productsByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
