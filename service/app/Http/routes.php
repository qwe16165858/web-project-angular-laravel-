<?php

use App\Task;
use App\Common\MyView;
use App\Common\Dispatch;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
  return MyView::templateBuild('/home.html');
});

Route::get('{action}', function($action){
  return Dispatch::parse($action);
});

// Route::get('/api/getTask', function () {
//   $tasks = Task::orderBy('created_at', 'asc')->get();
//
//   // return view('tasks', [
//   //     'tasks' => $tasks
//   // ]);
//
//   return $tasks;
//   //return File::get(public_path() . '/home.html');
// });
//
// /**
//  * Add New Task
//  */
// Route::post('/task', function (Request $request) {
//   $validator = Validator::make($request->all(), [
//       'name' => 'required|max:255',
//   ]);
//
//   if ($validator->fails()) {
//       return redirect('/')
//           ->withInput()
//           ->withErrors($validator);
//   }
//
//   // Create The Task...
//   $task = new Task;
//   $task->name = $request->name;
//   $task->save();
//
//   return redirect('/');
// });
//
// /**
//  * Delete Task
//  */
// Route::delete('/task/{task}', function (Task $task) {
//   $task->delete();
//
//   return redirect('/');
// });
