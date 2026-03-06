import { Ticket, CircleDot, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { tickets, ticketActivityData } from "@/data/mockData";
import { PriorityBadge } from "@/components/PriorityBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";

const stats = [
  { label: "Total Tickets", value: tickets.length, icon: Ticket, color: "text-primary", bg: "bg-primary/10" },
  { label: "Open Tickets", value: tickets.filter(t => t.status === "Open").length, icon: CircleDot, color: "text-status-open", bg: "bg-status-open/10" },
  { label: "Pending Tickets", value: tickets.filter(t => t.status === "Pending").length, icon: Clock, color: "text-status-pending", bg: "bg-status-pending/10" },
  { label: "Resolved Tickets", value: tickets.filter(t => t.status === "Resolved").length, icon: CheckCircle2, color: "text-status-resolved", bg: "bg-status-resolved/10" },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`rounded-lg p-2.5 ${s.bg}`}>
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold text-foreground mb-4">Ticket Activity</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ticketActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Line type="monotone" dataKey="tickets" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Tickets */}
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Tickets</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.slice(0, 5).map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-medium text-primary">{t.id}</TableCell>
                      <TableCell>{t.subject}</TableCell>
                      <TableCell>{t.customer}</TableCell>
                      <TableCell><PriorityBadge priority={t.priority} /></TableCell>
                      <TableCell><StatusBadge status={t.status} /></TableCell>
                      <TableCell className="text-muted-foreground">{t.assignedTo}</TableCell>
                      <TableCell className="text-muted-foreground">{t.lastUpdated}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/tickets/${t.id}`)}>View</Button>
                      </TableCell>
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
