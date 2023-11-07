<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(Request $request)
    {

        $status = $request->query('status');
        // $people = Person::get();

        $perPage = 10;

        if ($status) {
            $people = Person::where('status_id', $status)
                ->paginate($perPage);
        } else {
            $people = Person::paginate($perPage);
        }


        return $people;
    }

    // public function detail() 
    // {

    //     $detail = Person::findOrFail();
        

    // }

    public function show($person_id)
    {

        $person = Person::findOrFail($person_id);
        return($person);

        
    }
}

