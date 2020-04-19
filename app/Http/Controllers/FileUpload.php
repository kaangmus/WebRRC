<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use function GuzzleHttp\Promise\all;

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


}
