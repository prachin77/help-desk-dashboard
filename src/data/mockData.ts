export type Priority = "Low" | "Medium" | "High";
export type Status = "Open" | "Pending" | "Resolved";

export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  customerEmail: string;
  priority: Priority;
  status: Status;
  assignedTo: string;
  createdDate: string;
  lastUpdated: string;
  messages: Message[];
}

export interface Message {
  id: number;
  sender: string;
  role: "customer" | "agent";
  content: string;
  timestamp: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  tickets: number;
  lastContact: string;
}

export const tickets: Ticket[] = [
  {
    id: "TKT-001", subject: "Login issue on mobile app", customer: "Alice Johnson", customerEmail: "alice@example.com",
    priority: "High", status: "Open", assignedTo: "Agent Smith", createdDate: "2026-03-01", lastUpdated: "2026-03-05",
    messages: [
      { id: 1, sender: "Alice Johnson", role: "customer", content: "I can't log into the mobile app. It keeps showing an error after entering my password.", timestamp: "2026-03-01 10:00" },
      { id: 2, sender: "Agent Smith", role: "agent", content: "Hi Alice, could you try clearing the app cache and attempting again?", timestamp: "2026-03-01 10:30" },
      { id: 3, sender: "Alice Johnson", role: "customer", content: "I tried that but still getting the same error.", timestamp: "2026-03-02 09:00" },
    ],
  },
  {
    id: "TKT-002", subject: "Billing discrepancy", customer: "Bob Williams", customerEmail: "bob@example.com",
    priority: "Medium", status: "Pending", assignedTo: "Agent Davis", createdDate: "2026-03-02", lastUpdated: "2026-03-04",
    messages: [
      { id: 1, sender: "Bob Williams", role: "customer", content: "I was charged twice for my subscription this month.", timestamp: "2026-03-02 14:00" },
      { id: 2, sender: "Agent Davis", role: "agent", content: "I've escalated this to our billing team. We'll get back to you shortly.", timestamp: "2026-03-02 15:00" },
    ],
  },
  {
    id: "TKT-003", subject: "Feature request: dark mode", customer: "Carol Davis", customerEmail: "carol@example.com",
    priority: "Low", status: "Open", assignedTo: "Agent Lee", createdDate: "2026-03-03", lastUpdated: "2026-03-03",
    messages: [
      { id: 1, sender: "Carol Davis", role: "customer", content: "Would love to see a dark mode option in the dashboard.", timestamp: "2026-03-03 11:00" },
    ],
  },
  {
    id: "TKT-004", subject: "Payment gateway timeout", customer: "David Brown", customerEmail: "david@example.com",
    priority: "High", status: "Open", assignedTo: "Agent Smith", createdDate: "2026-03-03", lastUpdated: "2026-03-05",
    messages: [
      { id: 1, sender: "David Brown", role: "customer", content: "Payment keeps timing out when I try to checkout.", timestamp: "2026-03-03 16:00" },
    ],
  },
  {
    id: "TKT-005", subject: "Account verification", customer: "Eve Martinez", customerEmail: "eve@example.com",
    priority: "Medium", status: "Resolved", assignedTo: "Agent Davis", createdDate: "2026-02-28", lastUpdated: "2026-03-02",
    messages: [
      { id: 1, sender: "Eve Martinez", role: "customer", content: "I need help verifying my account.", timestamp: "2026-02-28 09:00" },
      { id: 2, sender: "Agent Davis", role: "agent", content: "Verification email has been resent. Please check your inbox.", timestamp: "2026-02-28 09:30" },
      { id: 3, sender: "Eve Martinez", role: "customer", content: "Got it, verified now. Thanks!", timestamp: "2026-02-28 10:00" },
    ],
  },
  {
    id: "TKT-006", subject: "Slow dashboard loading", customer: "Frank Garcia", customerEmail: "frank@example.com",
    priority: "Medium", status: "Pending", assignedTo: "Agent Lee", createdDate: "2026-03-04", lastUpdated: "2026-03-05",
    messages: [
      { id: 1, sender: "Frank Garcia", role: "customer", content: "Dashboard takes over 10 seconds to load.", timestamp: "2026-03-04 13:00" },
    ],
  },
  {
    id: "TKT-007", subject: "Password reset not working", customer: "Grace Lee", customerEmail: "grace@example.com",
    priority: "High", status: "Open", assignedTo: "Agent Smith", createdDate: "2026-03-05", lastUpdated: "2026-03-05",
    messages: [
      { id: 1, sender: "Grace Lee", role: "customer", content: "I'm not receiving the password reset email.", timestamp: "2026-03-05 08:00" },
    ],
  },
  {
    id: "TKT-008", subject: "API rate limit exceeded", customer: "Henry Wilson", customerEmail: "henry@example.com",
    priority: "Low", status: "Resolved", assignedTo: "Agent Davis", createdDate: "2026-02-25", lastUpdated: "2026-03-01",
    messages: [
      { id: 1, sender: "Henry Wilson", role: "customer", content: "Getting 429 errors on the API.", timestamp: "2026-02-25 11:00" },
      { id: 2, sender: "Agent Davis", role: "agent", content: "We've increased your rate limit. Let us know if it persists.", timestamp: "2026-02-25 12:00" },
    ],
  },
];

export const customers: Customer[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", tickets: 3, lastContact: "2026-03-05" },
  { id: 2, name: "Bob Williams", email: "bob@example.com", tickets: 1, lastContact: "2026-03-04" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", tickets: 2, lastContact: "2026-03-03" },
  { id: 4, name: "David Brown", email: "david@example.com", tickets: 1, lastContact: "2026-03-05" },
  { id: 5, name: "Eve Martinez", email: "eve@example.com", tickets: 4, lastContact: "2026-03-02" },
  { id: 6, name: "Frank Garcia", email: "frank@example.com", tickets: 2, lastContact: "2026-03-05" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", tickets: 1, lastContact: "2026-03-05" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", tickets: 5, lastContact: "2026-03-01" },
];

export const ticketActivityData = [
  { date: "Feb 24", tickets: 5 },
  { date: "Feb 25", tickets: 8 },
  { date: "Feb 26", tickets: 6 },
  { date: "Feb 27", tickets: 10 },
  { date: "Feb 28", tickets: 7 },
  { date: "Mar 01", tickets: 12 },
  { date: "Mar 02", tickets: 9 },
  { date: "Mar 03", tickets: 14 },
  { date: "Mar 04", tickets: 8 },
  { date: "Mar 05", tickets: 11 },
];

export const statusChartData = [
  { name: "Open", value: 4 },
  { name: "Pending", value: 2 },
  { name: "Resolved", value: 2 },
];

export const priorityChartData = [
  { name: "Low", value: 2 },
  { name: "Medium", value: 3 },
  { name: "High", value: 3 },
];
