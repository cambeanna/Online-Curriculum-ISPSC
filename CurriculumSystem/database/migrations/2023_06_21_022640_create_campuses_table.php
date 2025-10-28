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
        Schema::create('campuses', function (Blueprint $table) {
            $table->id();
            $table->string('CandonCampus');
            $table->string('CervantesCampus');
            $table->string('MainCampus');
            $table->string('NarvacanCampus');
            $table->string('SanJuanCampus');
            $table->string('SantiagoCampus');
            $table->string('SantaMariaCampus');
            $table->string('Tagudin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campuses');
    }
};
