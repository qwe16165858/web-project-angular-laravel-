<?php

namespace App\Common;

use Illuminate\Database\Eloquent\Model;
use File;

class MyView
{
  private static $header;
  private static $footer;

  public static function templateBuild($templateUrl)
  {
    $header = self::getHeader();
    $footer = self::getFooter();

    $content = File::get(public_path() . $templateUrl);

    return $header  . $content . $footer;
  }

  public static function getHeader()
  {
    return File::get(public_path() . '/header.html');
  }

  public static function getFooter()
  {
    return File::get(public_path() . '/footer.html');
  }
}
