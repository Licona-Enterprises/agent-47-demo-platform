"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { AgentDashboard } from "@/components/agent-dashboard";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  useAuth();

  return (
    <DashboardLayout>
      <AgentDashboard />
    </DashboardLayout>
  );
}
