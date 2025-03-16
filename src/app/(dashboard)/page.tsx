import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-center text-xl font-semibold">Admin Dashboard</h2>
      <div className="mt-4 space-y-2">
        <Link href="/dashboard/add-student" className="block p-2 text-center bg-blue-500 text-white rounded">
          Add Student
        </Link>
        <Link href="/dashboard/add-teacher" className="block p-2 text-center bg-green-500 text-white rounded">
          Add Teacher
        </Link>
      </div>
    </div>
  );
}
