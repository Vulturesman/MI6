<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;
use App\Mail\SendMissionDetails;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::with('people')->get();

        return $missions;
    }

    public function show($mission_id)
    {
        $mission = Mission::with('people')->findOrFail($mission_id);

        return ($mission);
    }

    public function store(Request $request, $mission_id)
    {

        $request->validate([
            'name' => 'required',
            'year' => 'required',
        ]);

        $mission = Mission::with('people')->find($mission_id);

        if (!$mission) {
            return [
                'message' => 'Mission not found :('
            ];
        }

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();

        return [
            'message' => 'Mission updated successfully!'
        ];
    }
    public function sendMissionDetails(Request $request)
    {
        $mission = Mission::with('people')->findOrFail($request->mission_id);

        // $user = $request->user_id; without user authrentication
        // $user = User::findOrFail($request->user_id);
        $user = auth()->user();

        Mail::to("test@test.com")
            // ->cc('copy@example.com')
            // ->bcc('hidden_copy@example.com')
            ->send(new SendMissionDetails($mission));

    }
}
