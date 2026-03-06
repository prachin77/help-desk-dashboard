import { Badge } from "@/components/ui/badge";
import type { Priority } from "@/data/mockData";

const styles: Record<Priority, string> = {
  Low: "bg-priority-low/10 text-priority-low border-priority-low/20",
  Medium: "bg-priority-medium/10 text-priority-medium border-priority-medium/20",
  High: "bg-priority-high/10 text-priority-high border-priority-high/20",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return <Badge variant="outline" className={styles[priority]}>{priority}</Badge>;
}
