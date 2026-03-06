import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { customers } from "@/data/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Customers</h1>
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Tickets</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="font-medium text-foreground">{c.name}</TableCell>
                      <TableCell className="text-muted-foreground">{c.email}</TableCell>
                      <TableCell>{c.tickets}</TableCell>
                      <TableCell className="text-muted-foreground">{c.lastContact}</TableCell>
                      <TableCell><Button variant="ghost" size="sm">View</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
