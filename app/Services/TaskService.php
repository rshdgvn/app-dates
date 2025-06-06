<?php

namespace App\Services;

use App\Events\TaskCreated;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TaskService
{
    public function createTask(array $data): Task
    {
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        if (isset($data['image']) && $data['image']) {
            $data['image_path'] = $data['image']->store('task/' . Str::random(), 'public');
        }

        $task = Task::create($data);

        event(new TaskCreated($task));

        return $task;
    }

    public function updateTask(Task $task, array $data): Task
    {
        $data['updated_by'] = Auth::id();

        if (isset($data['image']) && $data['image']) {
            if ($task->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($task->image_path));
            }
            $data['image_path'] = $data['image']->store('task/' . Str::random(), 'public');
        }

        $task->update($data);

        return $task;
    }

    public function deleteTask(Task $task): void
    {
        if ($task->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($task->image_path));
        }

        $task->delete();
    }
}
