<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Common\MyView;

class Subject extends Model
{
    public static function doGetSubjectDetail($args)
    {
      $args = preg_split('/&/', $args);

      return MyView::templateBuild('/subject_detail.html');
    }

    public static function doGetSubjectList($args)
    {
      echo $args;
      if (empty($args))
      {
        $args = preg_split('/&/', $args);
      }

      return MyView::templateBuild('/subject_list.html');
    }
}
