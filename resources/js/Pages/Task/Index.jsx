import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";

import { Head, Link } from "@inertiajs/react";

import TasksTable from "./TasksTable";

export default function Index({ auth, success, tasks, queryParams = null }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center gap-5 mx-5 mb-7">
                        <TextInput
                            className="w-[70%] rounded-3xl"
                            // defaultValue={queryParams.name}
                            placeholder="Search Tasks..."
                        // onBlur={(e) => searchFieldChanged("name", e.target.value)}
                        // onKeyPress={(e) => onKeyPress("name", e)}
                        />
                        <Link
                            href={route("task.create")}
                            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                        >
                            Add new
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable
                                tasks={tasks}
                                queryParams={queryParams}
                                success={success}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}