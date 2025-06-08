"use client";

import { DashboardLayout } from "@/components/dashboard-layout"
import { MultiAgentView } from "@/components/multi-agent-view"
import { useAuth } from "@/hooks/use-auth"

export default function MultiAgent() {
  useAuth();

  return (
    <DashboardLayout>
      <MultiAgentView />
    </DashboardLayout>
  )
}
