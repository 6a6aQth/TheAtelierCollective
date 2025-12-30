"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  MessageSquare, 
  Package, 
  Scissors, 
  LogOut, 
  Search,
  ChevronRight,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Plus,
  Eye,
  Home
} from "lucide-react"

// Dummy data
const hairBookings = [
  { id: 1, client: "Sarah Johnson", service: "Full Wig Installation", date: "2025-01-02", time: "10:00 AM", status: "confirmed", phone: "+1 234-567-8901", email: "sarah@email.com" },
  { id: 2, client: "Michelle Lee", service: "Lace Front Install", date: "2025-01-02", time: "2:00 PM", status: "pending", phone: "+1 234-567-8902", email: "michelle@email.com" },
  { id: 3, client: "Aisha Williams", service: "Wig Maintenance", date: "2025-01-03", time: "11:00 AM", status: "confirmed", phone: "+1 234-567-8903", email: "aisha@email.com" },
  { id: 4, client: "Jessica Brown", service: "Custom Wig Fitting", date: "2025-01-04", time: "3:00 PM", status: "pending", phone: "+1 234-567-8904", email: "jessica@email.com" },
  { id: 5, client: "Tanya Davis", service: "Full Wig Installation", date: "2025-01-05", time: "9:00 AM", status: "confirmed", phone: "+1 234-567-8905", email: "tanya@email.com" },
]

const wigInquiries = [
  { id: 1, client: "Emma Thompson", wig: "The Sovereign", message: "Is this available in a darker shade?", date: "2025-01-01", status: "unread", email: "emma@email.com" },
  { id: 2, client: "Lisa Chen", wig: "The Empress", message: "What is the hair length and density?", date: "2025-01-01", status: "read", email: "lisa@email.com" },
  { id: 3, client: "Nicole Adams", wig: "The Muse", message: "Can I schedule a viewing appointment?", date: "2024-12-30", status: "replied", email: "nicole@email.com" },
  { id: 4, client: "Keisha Moore", wig: "The Opulent", message: "Is custom coloring available?", date: "2024-12-29", status: "unread", email: "keisha@email.com" },
]

const wigInventory = [
  { id: 1, name: "The Sovereign", status: "In Stock", price: 850, views: 124, inquiries: 8 },
  { id: 2, name: "The Empress", status: "In Stock", price: 1200, views: 89, inquiries: 5 },
  { id: 3, name: "The Muse", status: "Reserved", price: 750, views: 156, inquiries: 12 },
  { id: 4, name: "The Ethereal", status: "In Stock", price: 680, views: 67, inquiries: 3 },
  { id: 5, name: "The Opulent", status: "Sold", price: 1500, views: 203, inquiries: 15 },
  { id: 6, name: "The Refined", status: "In Stock", price: 920, views: 78, inquiries: 6 },
  { id: 7, name: "The Visionary", status: "In Stock", price: 1100, views: 112, inquiries: 9 },
]

const tattooBookings = [
  { id: 1, client: "Marcus Johnson", design: "Ornamental Sleeve", date: "2025-01-03", time: "1:00 PM", duration: "4 hours", status: "confirmed", deposit: 200 },
  { id: 2, client: "Zara Mitchell", design: "Fine Line Rose", date: "2025-01-04", time: "11:00 AM", duration: "2 hours", status: "pending", deposit: 100 },
  { id: 3, client: "David Kim", design: "Blackwork Mandala", date: "2025-01-05", time: "2:00 PM", duration: "3 hours", status: "confirmed", deposit: 150 },
  { id: 4, client: "Olivia Parker", design: "Script Lettering", date: "2025-01-06", time: "10:00 AM", duration: "1.5 hours", status: "pending", deposit: 75 },
]

type Tab = "bookings" | "inquiries" | "inventory" | "tattoo"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState<Tab>("bookings")
  const [searchQuery, setSearchQuery] = useState("")

  // Check if already authenticated (persisted in session)
  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "1234") {
      setIsAuthenticated(true)
      sessionStorage.setItem("adminAuth", "true")
      setError("")
    } else {
      setError("Invalid password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("adminAuth")
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <Image
              src="/Atelier Logo with no background.png"
              alt="The Atelier Collective"
              width={120}
              height={60}
              className="h-16 w-auto mx-auto brightness-0 invert mb-8"
            />
            <h1 className="text-4xl font-serif italic text-background mb-3">Admin Portal</h1>
            <p className="text-background/50 text-sm font-sans">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-background/50 mb-3 font-sans">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background/5 border border-background/20 text-background px-5 py-4 text-sm font-sans focus:outline-none focus:border-primary transition-colors placeholder:text-background/30"
                placeholder="Enter admin password"
              />
              {error && (
                <p className="text-red-400 text-xs mt-3 font-sans">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-primary/90 transition-colors font-sans"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-background/30 text-[10px] uppercase tracking-[0.2em] mt-12 font-sans">
            © 2025 The Atelier Collective
          </p>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-secondary/20 flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-foreground text-background p-8 flex flex-col min-h-screen">
        <div className="mb-12">
          <Image
            src="/Atelier Logo with no background.png"
            alt="The Atelier Collective"
            width={100}
            height={50}
            className="h-12 w-auto brightness-0 invert mb-4"
          />
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/40 font-sans">Admin Dashboard</p>
        </div>

        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-sans transition-all ${
              activeTab === "bookings" 
                ? "bg-primary text-primary-foreground" 
                : "text-background/60 hover:text-background hover:bg-background/5"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Hair Bookings</span>
            <span className="ml-auto text-[10px] opacity-60">
              {hairBookings.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-sans transition-all ${
              activeTab === "inquiries" 
                ? "bg-primary text-primary-foreground" 
                : "text-background/60 hover:text-background hover:bg-background/5"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Wig Inquiries</span>
            {wigInquiries.filter(i => i.status === "unread").length > 0 && (
              <span className="ml-auto bg-primary text-primary-foreground text-[10px] px-2 py-0.5">
                {wigInquiries.filter(i => i.status === "unread").length} new
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("inventory")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-sans transition-all ${
              activeTab === "inventory" 
                ? "bg-primary text-primary-foreground" 
                : "text-background/60 hover:text-background hover:bg-background/5"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Wig Inventory</span>
            <span className="ml-auto text-[10px] opacity-60">
              {wigInventory.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("tattoo")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-sans transition-all ${
              activeTab === "tattoo" 
                ? "bg-primary text-primary-foreground" 
                : "text-background/60 hover:text-background hover:bg-background/5"
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Tattoo Appointments</span>
            <span className="ml-auto text-[10px] opacity-60">
              {tattooBookings.length}
            </span>
          </button>
        </nav>

        <div className="pt-8 border-t border-background/10 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm text-background/60 hover:text-background transition-colors font-sans"
          >
            <Home className="w-4 h-4" />
            <span>View Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-background/60 hover:text-background transition-colors font-sans"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-serif italic text-foreground mb-2">
              {activeTab === "bookings" && "Hair Installation Bookings"}
              {activeTab === "inquiries" && "Wig Inquiries"}
              {activeTab === "inventory" && "Wig Inventory"}
              {activeTab === "tattoo" && "Tattoo Appointments"}
            </h1>
            <p className="text-muted-foreground text-sm font-sans">
              {activeTab === "bookings" && "Manage upcoming hair installation appointments"}
              {activeTab === "inquiries" && "View and respond to wig inquiries"}
              {activeTab === "inventory" && "Update and manage wig stock"}
              {activeTab === "tattoo" && "View upcoming tattoo sessions"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-11 pr-4 py-3 border border-primary/10 bg-background text-sm font-sans w-72 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {activeTab === "inventory" && (
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-foreground transition-colors font-sans">
                <Plus className="w-4 h-4" />
                Add Wig
              </button>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {activeTab === "bookings" && (
            <>
              <StatCard title="Today's Bookings" value="2" subtitle="appointments" />
              <StatCard title="This Week" value="5" subtitle="appointments" />
              <StatCard title="Pending" value={hairBookings.filter(b => b.status === "pending").length.toString()} subtitle="to confirm" accent />
              <StatCard title="Revenue (Week)" value="$2,450" subtitle="estimated" />
            </>
          )}
          {activeTab === "inquiries" && (
            <>
              <StatCard title="Total Inquiries" value={wigInquiries.length.toString()} subtitle="this month" />
              <StatCard title="Unread" value={wigInquiries.filter(i => i.status === "unread").length.toString()} subtitle="messages" accent />
              <StatCard title="Replied" value={wigInquiries.filter(i => i.status === "replied").length.toString()} subtitle="messages" />
              <StatCard title="Response Rate" value="92%" subtitle="average" />
            </>
          )}
          {activeTab === "inventory" && (
            <>
              <StatCard title="Total Pieces" value={wigInventory.length.toString()} subtitle="in catalog" />
              <StatCard title="In Stock" value={wigInventory.filter(w => w.status === "In Stock").length.toString()} subtitle="available" />
              <StatCard title="Reserved" value={wigInventory.filter(w => w.status === "Reserved").length.toString()} subtitle="pending" accent />
              <StatCard title="Total Value" value="$6,900" subtitle="inventory" />
            </>
          )}
          {activeTab === "tattoo" && (
            <>
              <StatCard title="This Week" value={tattooBookings.length.toString()} subtitle="sessions" />
              <StatCard title="Pending" value={tattooBookings.filter(b => b.status === "pending").length.toString()} subtitle="to confirm" accent />
              <StatCard title="Total Hours" value="10.5" subtitle="booked" />
              <StatCard title="Deposits" value="$525" subtitle="collected" />
            </>
          )}
        </div>

        {/* Content Tables */}
        {activeTab === "bookings" && (
          <div className="bg-background border border-primary/10">
            <div className="px-6 py-5 border-b border-primary/10">
              <h3 className="font-serif text-xl italic">Upcoming Appointments</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/10 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans">
                  <th className="text-left px-6 py-4 font-medium">Client</th>
                  <th className="text-left px-6 py-4 font-medium">Service</th>
                  <th className="text-left px-6 py-4 font-medium">Date & Time</th>
                  <th className="text-left px-6 py-4 font-medium">Contact</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {hairBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-primary/5 hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium font-sans">{booking.client}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-sans">{booking.service}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm font-sans">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        {booking.date} at {booking.time}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                          <Mail className="w-3 h-3" />
                          {booking.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                          <Phone className="w-3 h-3" />
                          {booking.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Confirm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Cancel">
                          <XCircle className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "inquiries" && (
          <div className="space-y-4">
            {wigInquiries.map((inquiry) => (
              <div key={inquiry.id} className={`bg-background border border-primary/10 p-6 hover:shadow-md transition-all ${inquiry.status === "unread" ? "border-l-4 border-l-primary" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 flex items-center justify-center ${inquiry.status === "unread" ? "bg-primary text-primary-foreground" : "bg-secondary/50"}`}>
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-serif text-lg">{inquiry.client}</h4>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-primary bg-primary/10 px-2.5 py-1 font-sans">
                          {inquiry.wig}
                        </span>
                        <InquiryStatusBadge status={inquiry.status} />
                      </div>
                      <p className="text-muted-foreground mb-3 font-sans">{inquiry.message}</p>
                      <div className="flex items-center gap-5 text-xs text-muted-foreground font-sans">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3" />
                          {inquiry.email}
                        </span>
                        <span>{inquiry.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-primary hover:text-foreground transition-colors font-sans font-medium">
                    Reply
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="bg-background border border-primary/10">
            <div className="px-6 py-5 border-b border-primary/10">
              <h3 className="font-serif text-xl italic">Wig Collection</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/10 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans">
                  <th className="text-left px-6 py-4 font-medium">Piece</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">Price</th>
                  <th className="text-left px-6 py-4 font-medium">Views</th>
                  <th className="text-left px-6 py-4 font-medium">Inquiries</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wigInventory.map((wig) => (
                  <tr key={wig.id} className="border-b border-primary/5 hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-5">
                      <span className="font-serif text-lg">{wig.name}</span>
                    </td>
                    <td className="px-6 py-5">
                      <InventoryStatusBadge status={wig.status} />
                    </td>
                    <td className="px-6 py-5 font-medium font-sans">${wig.price.toLocaleString()}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-muted-foreground font-sans">
                        <Eye className="w-3.5 h-3.5" />
                        {wig.views}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-muted-foreground font-sans">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {wig.inquiries}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Edit">
                          <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "tattoo" && (
          <div className="bg-background border border-primary/10">
            <div className="px-6 py-5 border-b border-primary/10">
              <h3 className="font-serif text-xl italic">Upcoming Tattoo Sessions</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/10 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans">
                  <th className="text-left px-6 py-4 font-medium">Client</th>
                  <th className="text-left px-6 py-4 font-medium">Design</th>
                  <th className="text-left px-6 py-4 font-medium">Date & Time</th>
                  <th className="text-left px-6 py-4 font-medium">Duration</th>
                  <th className="text-left px-6 py-4 font-medium">Deposit</th>
                  <th className="text-left px-6 py-4 font-medium">Status</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tattooBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-primary/5 hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-foreground/5 flex items-center justify-center">
                          <Scissors className="w-4 h-4" />
                        </div>
                        <span className="font-medium font-sans">{booking.client}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-sans">{booking.design}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm font-sans">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        {booking.date} at {booking.time}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-sans">{booking.duration}</td>
                    <td className="px-6 py-5 font-medium text-green-600 font-sans">${booking.deposit}</td>
                    <td className="px-6 py-5">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Confirm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-primary/10 transition-colors" title="Cancel">
                          <XCircle className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}

// Helper Components
function StatCard({ title, value, subtitle, accent = false }: { title: string; value: string; subtitle: string; accent?: boolean }) {
  return (
    <div className={`p-6 border ${accent ? "border-primary bg-primary/5" : "border-primary/10 bg-background"}`}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-sans">{title}</p>
      <p className={`text-4xl font-serif italic ${accent ? "text-primary" : "text-foreground"}`}>{value}</p>
      <p className="text-sm text-muted-foreground mt-1 font-sans">{subtitle}</p>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    confirmed: "bg-green-50 text-green-700 border-green-200",
    pending: "bg-amber-50 text-amber-700 border-amber-200",
  }
  return (
    <span className={`text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 border font-sans font-medium ${styles[status as keyof typeof styles] || styles.pending}`}>
      {status}
    </span>
  )
}

function InquiryStatusBadge({ status }: { status: string }) {
  const styles = {
    unread: "bg-primary/10 text-primary",
    read: "bg-secondary/50 text-muted-foreground",
    replied: "bg-green-50 text-green-700",
  }
  return (
    <span className={`text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 font-sans font-medium ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  )
}

function InventoryStatusBadge({ status }: { status: string }) {
  const styles = {
    "In Stock": "bg-green-50 text-green-700 border-green-200",
    "Reserved": "bg-amber-50 text-amber-700 border-amber-200",
    "Sold": "bg-secondary/50 text-muted-foreground border-primary/10",
  }
  return (
    <span className={`text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 border font-sans font-medium ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  )
}
