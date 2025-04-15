
import { BarChart3, DollarSign, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";

const stats = [
  {
    name: "Vendas Hoje",
    value: "R$ 3.250,00",
    change: "+4.75%",
    icon: DollarSign,
  },
  {
    name: "Clientes Novos",
    value: "12",
    change: "+10.18%",
    icon: Users,
  },
  {
    name: "Total Pedidos",
    value: "45",
    change: "+12.30%",
    icon: ShoppingCart,
  },
  {
    name: "Média de Vendas",
    value: "R$ 72,22",
    change: "-3.24%",
    icon: BarChart3,
  },
];

export function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Dashboard" 
        description="Visão geral do seu negócio"
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="tracking-tight text-sm font-medium">
                  {stat.name}
                </h3>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={cn(
                  "text-xs",
                  stat.change.startsWith("+") 
                    ? "text-success" 
                    : "text-destructive"
                )}>
                  {stat.change} em relação ao mês anterior
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
