
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell } from 'recharts';

const salesData = [
  { month: 'Jan', vendas: 4000 },
  { month: 'Fev', vendas: 3000 },
  { month: 'Mar', vendas: 2000 },
  { month: 'Abr', vendas: 2780 },
  { month: 'Mai', vendas: 1890 },
  { month: 'Jun', vendas: 2390 },
];

const categoryData = [
  { name: 'Alimentos', value: 400 },
  { name: 'Bebidas', value: 300 },
  { name: 'Limpeza', value: 300 },
  { name: 'Higiene', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function Reports() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Relatórios" 
        description="Análise de dados e métricas"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vendas Mensais</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart width={500} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="vendas" fill="#3b82f6" />
            </BarChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vendas por Categoria</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                data={categoryData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Tendência de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={1000} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vendas" stroke="#3b82f6" activeDot={{ r: 8 }} />
            </LineChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
