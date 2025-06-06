import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <img
                                        src="/images/lvcc_logo.png"
                                        alt="App Logo"
                                        className="h-9 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className='flex-col justify-start gap-5'>
                    <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>App Dates</h1>
                    <p className='my-7 text-gray-900 dark:text-white'>
                        Streamline your workflow with a visual and efficient <br />
                        Kanban system—boost productivity, track progress, and <br />
                        stay organized effortlessly!
                    </p>
                    {user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 bg-blue-500 text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 bg-blue-500 text-white mr-5"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                               className="rounded-md px-3 py-2 bg-blue-800 text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
