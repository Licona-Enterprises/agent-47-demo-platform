"use client";

import { DashboardLayout } from "@/components/dashboard-layout"
import { AgentDetail } from "@/components/agent-detail"
import { useAuth } from "@/hooks/use-auth"

export default function AgentDetailPage({ params }: { params: { id: string } }) {
  useAuth();

  return (
    <DashboardLayout>
      <AgentDetail id={params.id} />
    </DashboardLayout>
  )
}
