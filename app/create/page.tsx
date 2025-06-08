"use client";

import { DashboardLayout } from "@/components/dashboard-layout"
import { AgentCreationWizard } from "@/components/agent-creation-wizard"
import { useAuth } from "@/hooks/use-auth"

export default function CreateAgent() {
  useAuth();

  return (
    <DashboardLayout>
      <AgentCreationWizard />
    </DashboardLayout>
  )
}
