import { Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <SettingsIcon className="h-12 w-12 mb-4 opacity-30" />
            <p className="text-lg font-medium">Settings page</p>
            <p className="text-sm">Configuration options will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
