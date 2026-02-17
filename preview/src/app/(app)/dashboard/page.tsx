"use client";

import { TopBar } from "@/components/layout/top-bar";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/badge";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { DonutChartComponent } from "@/components/charts/donut-chart";
import { Button } from "@/components/ui/button";
import { revenueData, segmentData, activities } from "@/lib/mock-data";
import {
  DollarSign,
  Users,
  TrendingUp,
  CreditCard,
  Download,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <TopBar title="Dashboard" />
      <main className="flex-1 overflow-y-auto">
        <PageHeader
          title="Dashboard"
          actions={
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          }
        />

        <div className="space-y-6 px-6 pb-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Total Revenue"
              value="$48,234"
              change={{ value: "+12.5%", trend: "up", label: "from last month" }}
              icon={DollarSign}
            />
            <StatCard
              label="Active Users"
              value="2,240"
              change={{ value: "+5.3%", trend: "up", label: "from last month" }}
              icon={Users}
            />
            <StatCard
              label="Conversion Rate"
              value="3.24%"
              change={{ value: "-0.8%", trend: "down", label: "from last month" }}
              icon={TrendingUp}
            />
            <StatCard
              label="MRR"
              value="$18,420"
              change={{ value: "+8.1%", trend: "up", label: "from last month" }}
              icon={CreditCard}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-md border border-border bg-bg-primary p-5 lg:col-span-2">
              <h3 className="text-sm font-medium text-fg-secondary">Revenue Over Time</h3>
              <div className="mt-4 h-64">
                <AreaChartComponent data={revenueData} dataKeys={["revenue"]} />
              </div>
            </div>
            <div className="rounded-md border border-border bg-bg-primary p-5">
              <h3 className="text-sm font-medium text-fg-secondary">Revenue by Segment</h3>
              <div className="mt-4 h-64">
                <DonutChartComponent data={segmentData} />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-fg-secondary">Recent Activity</h3>
              <Button variant="ghost" size="sm" className="text-accent">
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            <div className="rounded-md border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">User</th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Action</th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Date</th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((a) => (
                    <tr key={a.id} className="border-b border-border last:border-0 hover:bg-bg-hover transition-colors duration-75">
                      <td className="px-4 py-2.5 text-sm font-medium text-fg-primary">{a.user}</td>
                      <td className="px-4 py-2.5 text-sm text-fg-secondary">{a.action}</td>
                      <td className="px-4 py-2.5 text-sm text-fg-secondary">{a.date}</td>
                      <td className="px-4 py-2.5">
                        <StatusBadge
                          label={a.status}
                          variant={a.status === "Completed" ? "success" : a.status === "Processing" ? "info" : "warning"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
