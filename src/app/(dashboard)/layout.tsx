export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-gray-400">Dashboard layout has been cleared</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
