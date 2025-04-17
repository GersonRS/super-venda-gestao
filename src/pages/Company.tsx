
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Save, Upload, User } from "lucide-react";

export function Company() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <PageHeader 
        title="Empresa" 
        description="Gerencie os dados da sua empresa"
      />

      <Card className="mb-6">
        <CardHeader className="pb-2 flex-row justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Dados da Empresa
          </CardTitle>
          <div className="flex gap-2">
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Salvar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="address">Endereço</TabsTrigger>
              <TabsTrigger value="contact">Contato</TabsTrigger>
              <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 bg-slate-100 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                  <Building className="h-14 w-14 text-muted-foreground" />
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Empresa</Label>
                  <Input id="name" placeholder="Razão Social" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trading">Nome Fantasia</Label>
                  <Input id="trading" placeholder="Nome Fantasia" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ie">Inscrição Estadual</Label>
                  <Input id="ie" placeholder="Inscrição Estadual" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="address" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Endereço</Label>
                  <Input id="street" placeholder="Rua, Avenida, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Número</Label>
                  <Input id="number" placeholder="Número" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complement">Complemento</Label>
                  <Input id="complement" placeholder="Complemento" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input id="neighborhood" placeholder="Bairro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="Cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="Estado" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 0000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Celular</Label>
                  <Input id="mobile" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="contato@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="www.empresa.com" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fiscal" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="regimeTributario">Regime Tributário</Label>
                  <Input id="regimeTributario" placeholder="Regime Tributário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cfop">CFOP Padrão</Label>
                  <Input id="cfop" placeholder="CFOP Padrão" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="codigoMunicipio">Código do Município</Label>
                  <Input id="codigoMunicipio" placeholder="Código do Município" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certificado">Certificado Digital</Label>
                  <Input id="certificado" placeholder="Certificado Digital" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Responsáveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="responsibleName">Nome do Responsável</Label>
              <Input id="responsibleName" placeholder="Nome do Responsável" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsibleCpf">CPF</Label>
              <Input id="responsibleCpf" placeholder="000.000.000-00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsiblePhone">Telefone</Label>
              <Input id="responsiblePhone" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsibleEmail">Email</Label>
              <Input id="responsibleEmail" placeholder="responsavel@empresa.com" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
