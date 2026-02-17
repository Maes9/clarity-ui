"use client";

import { TopBar } from "@/components/layout/top-bar";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { invoices } from "@/lib/mock-data";
import { CreditCard, Receipt, ArrowUpRight } from "lucide-react";

export default function BillingPage() {
  return (
    <>
      <TopBar title="Billing" />
      <main className="flex-1 overflow-y-auto">
        <PageHeader
          title="Billing"
          description="Manage your subscription and payment methods."
        />

        <div className="space-y-6 px-6 pb-6">
          {/* Plan cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard
              label="Current Plan"
              value="Growth"
              change={{ value: "Active", trend: "up" }}
              icon={CreditCard}
            />
            <StatCard
              label="Monthly Cost"
              value="$2,400"
              change={{ value: "+$200", trend: "up", label: "from last month" }}
              icon={Receipt}
            />
            <StatCard
              label="Next Billing Date"
              value="Mar 01"
              icon={ArrowUpRight}
            />
          </div>

          {/* Current plan detail */}
          <div className="rounded-md border border-border bg-bg-primary p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-fg-primary">Growth Plan</h3>
                <p className="mt-1 text-sm text-fg-secondary">
                  Up to 50 team members, 100GB storage, priority support.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Change Plan</Button>
                <Button variant="ghost" size="sm" className="text-status-error">Cancel</Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
              <div>
                <p className="text-xs text-fg-muted">Team members</p>
                <p className="text-sm font-medium text-fg-primary">12 / 50</p>
              </div>
              <div>
                <p className="text-xs text-fg-muted">Storage used</p>
                <p className="text-sm font-medium text-fg-primary">34.2 GB / 100 GB</p>
              </div>
              <div>
                <p className="text-xs text-fg-muted">API calls this month</p>
                <p className="text-sm font-medium text-fg-primary font-mono">148,203</p>
              </div>
            </div>
          </div>

          {/* Invoices */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-fg-secondary">Invoice History</h3>
            <div className="rounded-md border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Invoice</th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Date</th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wide text-fg-muted">Amount</th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-fg-muted">Status</th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wide text-fg-muted" />
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="border-b border-border last:border-0 hover:bg-bg-hover transition-colors duration-75">
                      <td className="px-4 py-2.5 text-sm font-mono text-fg-primary">{inv.number}</td>
                      <td className="px-4 py-2.5 text-sm text-fg-secondary">{inv.date}</td>
                      <td className="px-4 py-2.5 text-right text-sm font-mono text-fg-primary">{inv.amount}</td>
                      <td className="px-4 py-2.5">
                        <StatusBadge
                          label={inv.status}
                          variant={inv.status === "Paid" ? "success" : inv.status === "Pending" ? "warning" : "error"}
                        />
                      </td>
                      <td className="px-4 py-2.5 text-right">
                        <Button variant="ghost" size="sm" className="text-accent">
                          Download
                        </Button>
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
