
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Store, User, Receipt, Printer } from "lucide-react";

export function Settings() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Configurações" 
        description="Gerencie as configurações do sistema"
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Store className="h-5 w-5 text-blue-500" />
              <CardTitle>Dados da Empresa</CardTitle>
            </div>
            <CardDescription>Configure os dados da sua empresa</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input id="companyName" placeholder="Digite o nome da empresa" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" placeholder="Digite o CNPJ" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Digite o endereço" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-500" />
              <CardTitle>Usuário</CardTitle>
            </div>
            <CardDescription>Configure suas informações de usuário</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Digite sua senha" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-blue-500" />
              <CardTitle>Fiscal</CardTitle>
            </div>
            <CardDescription>Configure as informações fiscais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="certificado">Certificado Digital</Label>
              <div className="flex gap-2">
                <Input id="certificado" type="file" className="flex-1" />
                <Button variant="outline">Upload</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Printer className="h-5 w-5 text-blue-500" />
              <CardTitle>Impressão</CardTitle>
            </div>
            <CardDescription>Configure as opções de impressão</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="printer">Impressora Padrão</Label>
              <Input id="printer" placeholder="Selecione a impressora" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
