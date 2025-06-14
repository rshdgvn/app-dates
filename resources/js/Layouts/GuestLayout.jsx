import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                <div className="flex justify-center mb-4">
                    <Link href="/">
                        <img
                            src="/images/lvcc_logo.png"
                            alt="App Logo"
                            className="h-20 w-auto"
                        />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
