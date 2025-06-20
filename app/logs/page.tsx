"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { AgentLogs } from "@/components/agent-logs";
import { useAuth } from "@/hooks/use-auth";

export default function Logs() {
  useAuth();

  return (
    <DashboardLayout>
      <AgentLogs />
    </DashboardLayout>
  );
}
