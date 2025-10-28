<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CervantesCampus;
use App\Models\MainCampus;
use App\Models\NarvacanCampus;
use App\Models\SanJuanCampus;
use App\Models\SantaMariaCampus;
use App\Models\SantiagoCampus;
use App\Models\TagudinCampus;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
		$this->call([
			CervantesCampus::class,
			MainCampus::class,
			NarvacanCampus::class,
			SanJuanCampus::class,
			SantiagoCampus::class,
			SantaMariaCampus::class,
			TagudinCampus::class,
		]);
    }
}
