import { TopBar } from "@/components/layout/top-bar";
import { PageHeader } from "@/components/layout/page-header";

export default function DashboardPage() {
  return (
    <>
      <TopBar title="Dashboard" />
      <main className="flex-1 overflow-y-auto">
        <PageHeader
          title="Dashboard"
          description="Welcome to your application."
        />
        <div className="px-6 pb-6">
          {/* Build your dashboard here */}
        </div>
      </main>
    </>
  );
}
