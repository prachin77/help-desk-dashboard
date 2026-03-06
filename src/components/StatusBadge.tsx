import { Badge } from "@/components/ui/badge";
import type { Status } from "@/data/mockData";

const styles: Record<Status, string> = {
  Open: "bg-status-open/10 text-status-open border-status-open/20",
  Pending: "bg-status-pending/10 text-status-pending border-status-pending/20",
  Resolved: "bg-status-resolved/10 text-status-resolved border-status-resolved/20",
};

export function StatusBadge({ status }: { status: Status }) {
  return <Badge variant="outline" className={styles[status]}>{status}</Badge>;
}
