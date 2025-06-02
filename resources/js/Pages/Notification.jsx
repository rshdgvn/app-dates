import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"

export default function NotificationIndex({ notifications }) {
    return (
        <AuthenticatedLayout>
            <div className="max-w-3xl mx-auto mt-6">
                <h1 className="text-xl text-white mb-4">My Notifications</h1>
                <ul className="space-y-3">
                    {notifications.map((n) => (
                        <li key={n.id} className="bg-gray-800 p-4 rounded">
                            <p className="text-white">{n.data.message}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
