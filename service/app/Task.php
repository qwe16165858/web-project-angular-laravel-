<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public static function doGetTask()
    {
      $tasks = self::orderBy('created_at', 'asc')->get();

      return view('tasks', [
          'tasks' => $tasks
      ]);
    }
}
