<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class FileUpload extends Controller
{

    public function uploadPost(Request $request) {
        $recordName = time().'.ogg';
        $imageName = time().'.'.$request["image"]->extension();
        $request["record"]->move(public_path('uploads/records/'), $recordName);
        $request["image"]->move(public_path('uploads/images/'), $imageName);
        $filesName = [
            "recordFile" => $recordName,
            "imageFile" => 'uploads/images/' . $imageName
        ];
        return $filesName;
    }

    public static function shell_Test($recName)
    {
        $str = '/var/www/html/WebRRC/public/uploads/records/' . $recName .PHP_EOL;
        file_put_contents('playlist.txt', $str);
        $process = new Process(['/usr/local/bin/ices', '-c', '/etc/ices/ices.conf', '-v']);
        $process->run();

        // executes after the command finishes
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        echo $process->getOutput();

    }
}
