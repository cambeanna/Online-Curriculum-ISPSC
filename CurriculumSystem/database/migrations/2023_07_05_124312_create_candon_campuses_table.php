<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('candon_campuses', function (Blueprint $table) {
            $table->id();
            $table->CollegeOfBusinessManagementAndEntrepreneurship();
            $table->InstituteOfHospitalityManagement();
            $table->CollegeOfComputingStudies();
            $table->CollegeOfTeacherEducation();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candon_campuses');
    }
};
