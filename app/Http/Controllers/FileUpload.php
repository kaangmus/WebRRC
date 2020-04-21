<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class FileUpload extends Controller
{

    public function uploadPost(Request $request) {
        $recordName = time().'.mp3';
        $imageName = time().'.'.$request["image"]->extension();
        $request["record"]->move(public_path('uploads/records/'), $recordName);
        $request["image"]->move(public_path('uploads/images/'), $imageName);
        $filesName = [
            "recordFile" => 'uploads/records/' . $recordName,
            "imageFile" => 'uploads/images/' . $imageName
        ];
        return $filesName;
    }

    public static function shell_Test()
    {

        $process = new Process(['ls', '-lsa']);
        $process->run();

        // executes after the command finishes
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        echo $process->getOutput();

    }
}
