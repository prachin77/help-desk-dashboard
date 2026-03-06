import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { tickets } from "@/data/mockData";
import { PriorityBadge } from "@/components/PriorityBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function TicketsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filtered = tickets.filter((t) => {
    const matchSearch = t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || t.status === statusFilter;
    const matchPriority = priorityFilter === "all" || t.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Tickets</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tickets..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Priority" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((t) => (
                    <TableRow key={t.id} className="cursor-pointer hover:bg-muted/50" onClick={() => navigate(`/tickets/${t.id}`)}>
                      <TableCell className="font-medium text-primary">{t.id}</TableCell>
                      <TableCell>{t.subject}</TableCell>
                      <TableCell>{t.customer}</TableCell>
                      <TableCell><PriorityBadge priority={t.priority} /></TableCell>
                      <TableCell><StatusBadge status={t.status} /></TableCell>
                      <TableCell className="text-muted-foreground">{t.assignedTo}</TableCell>
                      <TableCell className="text-muted-foreground">{t.createdDate}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No tickets found.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
