<?php

namespace Database\Seeders;

use App\Models\CandonCampus;
use App\Models\CervantesCampus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MainCampus;
use App\Models\NarvacanCampus;
use App\Models\SanJuanCampus;
use App\Models\SantaMariaCampus;
use App\Models\SantiagoCampus;
use App\Models\TagudinCampus;
use App\Models\User_Group;
use App\Models\Campus;

class CampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // select all campuses
		$candoncampus = CandonCampus::all();
		$cervantescampus = CervantesCampus::all();
		$maincampus = MainCampus::all();
		$narvacancampus = NarvacanCampus::all();
		$sanjuancampus = SanJuanCampus::all();
		$santamariacampus = SantaMariaCampus::all();
		$santiagocampus = SantiagoCampus::all();
		$tagudincampus = TagudinCampus::all();
		$User_Group = User_Group::all();
		$campus = Campus::all();

			$arrays = [
				[
					//start here
					'user' => [
						'username' => 'admin',
						'email' => 'ispsc.curriculum@gmail.com.ph',
						'password' => bcrypt('ispsc.curriculum'),
						'user_group_id' => $User_Group->getKey(),
					],
					'campus' => [
						'CandonCampus' => $candoncampus->getKey(),
						'CervantesCampus' => $cervantescampus->getKey(),
						'MainCampus' => $maincampus->getKey(),
						'NarvacanCampus' => $narvacancampus->getKey(),
						'SanJuanCampus' => $sanjuancampus->getKey(),
						'SantiagoCampus' => $santiagocampus->getKey(),
						'SantaMariaCampus' => $santamariacampus->getKey(),
						'Tagudin' => $tagudincampus->getKey(),
					]
				] // end here
					];
    }
}