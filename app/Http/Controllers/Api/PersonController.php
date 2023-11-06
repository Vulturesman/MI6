<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::get();


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

