<?php

namespace App\Listeners;

use App\Events\TaskCreated;
use App\Notifications\TaskCreatedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendTaskCreatedNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(TaskCreated $event): void
    {
        if ($event->task->assignedUser) {
            Notification::send($event->task->assignedUser, new TaskCreatedNotification($event->task));
        }
    }
}
