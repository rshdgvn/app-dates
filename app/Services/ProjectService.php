<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectService
{
    public function createProject(array $data): Project
    {
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        if (isset($data['image']) && $data['image']) {
            $data['image_path'] = $data['image']->store('project/' . Str::random(), 'public');
        }

        return Project::create($data);
    }

    public function updateProject(Project $project, array $data): Project
    {
        $data['updated_by'] = Auth::id();

        if (isset($data['image']) && $data['image']) {
            if ($project->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }

            $data['image_path'] = $data['image']->store('project/' . Str::random(), 'public');
        }

        $project->update($data);

        return $project;
    }

    public function deleteProject(Project $project): void
    {
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }

        $project->delete();
    }
}
