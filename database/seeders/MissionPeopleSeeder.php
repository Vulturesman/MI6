<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MissionPeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mission_people = [
            ['person_id' => 185, 'mission_id' => 1],
            ['person_id' => 308, 'mission_id' => 18],
            ['person_id' => 78, 'mission_id' => 17],
            ['person_id' => 273, 'mission_id' => 8],
            ['person_id' => 55, 'mission_id' => 24],
            ['person_id' => 190, 'mission_id' => 19],
            ['person_id' => 15, 'mission_id' => 16],
            ['person_id' => 47, 'mission_id' => 5],
            ['person_id' => 27, 'mission_id' => 25],
            ['person_id' => 228, 'mission_id' => 5],
            ['person_id' => 108, 'mission_id' => 18],
            ['person_id' => 136, 'mission_id' => 15],
            ['person_id' => 66, 'mission_id' => 18],
            ['person_id' => 314, 'mission_id' => 21],
            ['person_id' => 207, 'mission_id' => 18],
            ['person_id' => 171, 'mission_id' => 21],
            ['person_id' => 293, 'mission_id' => 8],
            ['person_id' => 311, 'mission_id' => 14],
            ['person_id' => 242, 'mission_id' => 22],
            ['person_id' => 8, 'mission_id' => 22],
            ['person_id' => 59, 'mission_id' => 24],
            ['person_id' => 235, 'mission_id' => 4],
            ['person_id' => 222, 'mission_id' => 1],
            ['person_id' => 307, 'mission_id' => 17],
            ['person_id' => 220, 'mission_id' => 23],
            ['person_id' => 163, 'mission_id' => 7],
            ['person_id' => 152, 'mission_id' => 9],
            ['person_id' => 295, 'mission_id' => 5],
            ['person_id' => 239, 'mission_id' => 23],
            ['person_id' => 46, 'mission_id' => 6],
            ['person_id' => 169, 'mission_id' => 16],
            ['person_id' => 9, 'mission_id' => 9],
            ['person_id' => 270, 'mission_id' => 5],
            ['person_id' => 89, 'mission_id' => 22],
            ['person_id' => 212, 'mission_id' => 1],
            ['person_id' => 86, 'mission_id' => 11],
            ['person_id' => 312, 'mission_id' => 21],
            ['person_id' => 284, 'mission_id' => 21],
            ['person_id' => 216, 'mission_id' => 11],
            ['person_id' => 297, 'mission_id' => 17],
            ['person_id' => 199, 'mission_id' => 4],
            ['person_id' => 273, 'mission_id' => 9],
            ['person_id' => 216, 'mission_id' => 20],
            ['person_id' => 240, 'mission_id' => 9],
            ['person_id' => 87, 'mission_id' => 15],
            ['person_id' => 158, 'mission_id' => 9],
            ['person_id' => 205, 'mission_id' => 23],
            ['person_id' => 319, 'mission_id' => 18],
            ['person_id' => 109, 'mission_id' => 2],
            ['person_id' => 182, 'mission_id' => 17],
            ['person_id' => 236, 'mission_id' => 11],
            ['person_id' => 54, 'mission_id' => 12],
            ['person_id' => 279, 'mission_id' => 3],
            ['person_id' => 21, 'mission_id' => 3],
            ['person_id' => 127, 'mission_id' => 23],
            ['person_id' => 187, 'mission_id' => 19],
            ['person_id' => 282, 'mission_id' => 22],
            ];
        
        foreach ($mission_people as $value) {
            DB::table('mission_person')->insert(
                [
                    [
                    'person_id' => $value['person_id'],
                    'mission_id' => $value['mission_id']
                    ]
                ]
                );
        }
    }
}
