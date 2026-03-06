import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { statusChartData, priorityChartData } from "@/data/mockData";
import { DashboardLayout } from "@/components/DashboardLayout";

const STATUS_COLORS = ["hsl(217, 91%, 60%)", "hsl(25, 95%, 53%)", "hsl(160, 84%, 39%)"];
const PRIORITY_COLORS = ["hsl(215, 16%, 47%)", "hsl(45, 93%, 47%)", "hsl(0, 84%, 60%)"];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Reports</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Tickets by Status</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statusChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {statusChartData.map((_, i) => (
                        <Cell key={i} fill={STATUS_COLORS[i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Tickets by Priority</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={priorityChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {priorityChartData.map((_, i) => (
                        <Cell key={i} fill={PRIORITY_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
