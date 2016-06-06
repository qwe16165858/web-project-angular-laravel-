<?php

namespace App\Common;

use Illuminate\Database\Eloquent\Model;
use File;

class Dispatch
{
  private static $my_prefix = 'target';

  private static $action_match = array(
    'get_task' => 'App\Task::doGetTask',
    'get_subject_detail' => 'App\Subject::doGetSubjectDetail',
    'get_subject_list' => 'App\Subject::doGetSubjectList',
  );

  public static function parse($action)
  {
    list($prefix, $action) = explode('=', $action, 2);

    if (strpos($action, '&'))
    {
      list($action, $args) = explode('&', $action, 2);
    }
    else
    {
      $args = '';
    }

    $my_prefix = self::$my_prefix;
    $action_match = self::$action_match;

    if($prefix == $my_prefix && array_key_exists($action, $action_match))
    {
      return call_user_func_array($action_match[$action], array($args));
    }
    else
    {
      return MyView::templateBuild('/error_404.html');
    }
  }
}
