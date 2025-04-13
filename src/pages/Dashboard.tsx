
import React from 'react';
import { 
  BarChart3, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  Users, 
  ArrowUpRight, 
  Calendar, 
  Clock,
  AlertTriangle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

// Dados de exemplo para os gráficos
const salesData = [
  { name: 'Jan', value: 12400 },
  { name: 'Fev', value: 15600 },
  { name: 'Mar', value: 18200 },
  { name: 'Abr', value: 16800 },
  { name: 'Mai', value: 19500 },
  { name: 'Jun', value: 21300 },
  { name: 'Jul', value: 22800 },
];

const productCategories = [
  { name: 'Alimentos', value: 35 },
  { name: 'Bebidas', value: 25 },
  { name: 'Limpeza', value: 20 },
  { name: 'Higiene', value: 15 },
  { name: 'Outros', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const expiryProducts = [
  { id: 1, name: 'Leite Integral', code: '7891234567890', expires: '2025-04-20', stock: 12 },
  { id: 2, name: 'Iogurte Natural', code: '7891234567891', expires: '2025-04-18', stock: 8 },
  { id: 3, name: 'Presunto Fatiado', code: '7891234567892', expires: '2025-04-16', stock: 5 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Visão geral do seu negócio e principais indicadores.
        </p>
      </div>

      {/* Estatísticas principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.550,00</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-success mr-1 flex items-center">
                <ArrowUpRight className="h-3 w-3" /> +12.5%
              </span>
              desde ontem
            </p>
          </CardContent>
        </Card>
        
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-success mr-1 flex items-center">
                <ArrowUpRight className="h-3 w-3" /> +4.3%
              </span>
              desde o mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Produtos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.432</div>
            <p className="text-xs text-muted-foreground">
              87 com estoque baixo
            </p>
          </CardContent>
        </Card>
        
        <Card className="stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pedidos Pendentes</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              8 aguardando envio
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Vendas dos Últimos Meses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={salesData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Vendas']} />
                  <Area type="monotone" dataKey="value" stroke="#2563eb" fill="#3b82f6" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Vendas por Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {productCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentagem']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas e ações rápidas */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <AlertTriangle className="h-5 w-5 text-warning mr-2" />
              Produtos a Vencer
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2">Produto</th>
                    <th className="text-left py-2">Código</th>
                    <th className="text-left py-2">Validade</th>
                    <th className="text-right py-2">Estoque</th>
                  </tr>
                </thead>
                <tbody>
                  {expiryProducts.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="py-2">{product.name}</td>
                      <td className="py-2 text-muted-foreground text-sm">{product.code}</td>
                      <td className="py-2">
                        <span className="bg-warning/20 text-warning text-xs px-2 py-1 rounded-full">
                          {new Date(product.expires).toLocaleDateString('pt-BR')}
                        </span>
                      </td>
                      <td className="py-2 text-right">{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Clock className="h-5 w-5 text-muted-foreground mr-2" />
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Nova venda registrada</p>
                  <p className="text-xs text-muted-foreground">Venda #1234 - R$ 357,50</p>
                  <p className="text-xs text-muted-foreground">Há 10 minutos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Cliente cadastrado</p>
                  <p className="text-xs text-muted-foreground">Maria Silva</p>
                  <p className="text-xs text-muted-foreground">Há 45 minutos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Produtos atualizados</p>
                  <p className="text-xs text-muted-foreground">15 produtos atualizados</p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
