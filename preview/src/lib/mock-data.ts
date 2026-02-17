// Realistic mock data for the clarity-ui preview app

export const revenueData = [
  { month: "Jan", revenue: 28400, users: 1200 },
  { month: "Feb", revenue: 31200, users: 1350 },
  { month: "Mar", revenue: 29800, users: 1280 },
  { month: "Apr", revenue: 35600, users: 1520 },
  { month: "May", revenue: 38200, users: 1680 },
  { month: "Jun", revenue: 36900, users: 1590 },
  { month: "Jul", revenue: 42100, users: 1840 },
  { month: "Aug", revenue: 39800, users: 1720 },
  { month: "Sep", revenue: 44500, users: 1960 },
  { month: "Oct", revenue: 41200, users: 1850 },
  { month: "Nov", revenue: 46800, users: 2100 },
  { month: "Dec", revenue: 48234, users: 2240 },
];

export const segmentData = [
  { name: "Enterprise", value: 42 },
  { name: "Growth", value: 28 },
  { name: "Starter", value: 18 },
  { name: "Free", value: 12 },
];

export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Invited" | "Inactive";
  lastActive: string;
  department: string;
};

export const users: User[] = [
  { id: "1", name: "Jane Cooper", email: "jane@acmecorp.com", role: "Admin", status: "Active", lastActive: "2 min ago", department: "Engineering" },
  { id: "2", name: "John Doe", email: "john@acmecorp.com", role: "Editor", status: "Active", lastActive: "15 min ago", department: "Product" },
  { id: "3", name: "Sarah Miller", email: "sarah@acmecorp.com", role: "Viewer", status: "Invited", lastActive: "—", department: "Marketing" },
  { id: "4", name: "Mike Johnson", email: "mike@acmecorp.com", role: "Editor", status: "Active", lastActive: "1 hr ago", department: "Engineering" },
  { id: "5", name: "Emily Chen", email: "emily@acmecorp.com", role: "Admin", status: "Active", lastActive: "5 min ago", department: "Engineering" },
  { id: "6", name: "David Kim", email: "david@acmecorp.com", role: "Viewer", status: "Inactive", lastActive: "2 weeks ago", department: "Sales" },
  { id: "7", name: "Lisa Wang", email: "lisa@acmecorp.com", role: "Editor", status: "Active", lastActive: "30 min ago", department: "Design" },
  { id: "8", name: "Tom Wilson", email: "tom@acmecorp.com", role: "Viewer", status: "Active", lastActive: "3 hr ago", department: "Sales" },
  { id: "9", name: "Anna Roberts", email: "anna@acmecorp.com", role: "Editor", status: "Active", lastActive: "10 min ago", department: "Product" },
  { id: "10", name: "Chris Lee", email: "chris@acmecorp.com", role: "Viewer", status: "Invited", lastActive: "—", department: "Marketing" },
  { id: "11", name: "Rachel Green", email: "rachel@acmecorp.com", role: "Admin", status: "Active", lastActive: "Just now", department: "Engineering" },
  { id: "12", name: "Mark Taylor", email: "mark@acmecorp.com", role: "Editor", status: "Active", lastActive: "45 min ago", department: "Product" },
];

export type Activity = {
  id: string;
  user: string;
  action: string;
  date: string;
  status: "Completed" | "Processing" | "Pending";
};

export const activities: Activity[] = [
  { id: "1", user: "Jane Cooper", action: "Upgraded to Enterprise plan", date: "Feb 16, 2026", status: "Completed" },
  { id: "2", user: "John Doe", action: "New user signup", date: "Feb 16, 2026", status: "Completed" },
  { id: "3", user: "Sarah Miller", action: "Invitation sent", date: "Feb 15, 2026", status: "Pending" },
  { id: "4", user: "Mike Johnson", action: "Payment processed", date: "Feb 15, 2026", status: "Completed" },
  { id: "5", user: "Emily Chen", action: "API key generated", date: "Feb 14, 2026", status: "Completed" },
];

export type Invoice = {
  id: string;
  number: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
};

export const invoices: Invoice[] = [
  { id: "1", number: "INV-001", date: "Feb 01, 2026", amount: "$2,400.00", status: "Paid" },
  { id: "2", number: "INV-002", date: "Jan 01, 2026", amount: "$2,400.00", status: "Paid" },
  { id: "3", number: "INV-003", date: "Dec 01, 2025", amount: "$2,200.00", status: "Paid" },
  { id: "4", number: "INV-004", date: "Nov 01, 2025", amount: "$2,200.00", status: "Paid" },
  { id: "5", number: "INV-005", date: "Oct 01, 2025", amount: "$1,800.00", status: "Paid" },
];
