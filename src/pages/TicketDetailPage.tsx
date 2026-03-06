import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, StickyNote, CheckCircle2, Mail, User, Tag, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { tickets } from "@/data/mockData";
import { PriorityBadge } from "@/components/PriorityBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function TicketDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = tickets.find((t) => t.id === id);
  const [reply, setReply] = useState("");

  if (!ticket) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-muted-foreground mb-4">Ticket not found.</p>
          <Button variant="outline" onClick={() => navigate("/tickets")}>Back to Tickets</Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/tickets")} className="gap-1.5 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Tickets
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversation */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <h1 className="text-xl font-bold text-foreground mb-1">{ticket.subject}</h1>
                <p className="text-sm text-muted-foreground">{ticket.id} · {ticket.customer}</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {ticket.messages.map((msg) => (
                <Card key={msg.id} className={`shadow-sm ${msg.role === "agent" ? "border-l-2 border-l-primary" : ""}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${msg.role === "agent" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {msg.sender.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{msg.sender}</p>
                        <p className="text-xs text-muted-foreground">{msg.timestamp}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{msg.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Reply Box */}
            <Card className="shadow-sm">
              <CardContent className="p-4 space-y-3">
                <Textarea placeholder="Type your reply..." rows={3} value={reply} onChange={(e) => setReply(e.target.value)} />
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1.5"><Send className="h-4 w-4" /> Reply</Button>
                  <Button size="sm" variant="outline" className="gap-1.5"><StickyNote className="h-4 w-4" /> Add Note</Button>
                  <Button size="sm" variant="outline" className="gap-1.5 text-accent border-accent/20 hover:bg-accent/10"><CheckCircle2 className="h-4 w-4" /> Resolve</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Panel */}
          <Card className="shadow-sm h-fit">
            <CardContent className="p-5 space-y-4">
              <h2 className="font-semibold text-foreground">Ticket Details</h2>
              <Separator />
              <DetailRow icon={Tag} label="Ticket ID" value={ticket.id} />
              <DetailRow icon={Shield} label="Status"><StatusBadge status={ticket.status} /></DetailRow>
              <DetailRow icon={Tag} label="Priority"><PriorityBadge priority={ticket.priority} /></DetailRow>
              <DetailRow icon={User} label="Assigned To" value={ticket.assignedTo} />
              <DetailRow icon={Mail} label="Customer Email" value={ticket.customerEmail} />
              <DetailRow icon={User} label="Customer" value={ticket.customer} />
              <Separator />
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Created: {ticket.createdDate}</p>
                <p>Updated: {ticket.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function DetailRow({ icon: Icon, label, value, children }: { icon: any; label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      {children || <span className="text-sm font-medium text-foreground">{value}</span>}
    </div>
  );
}
