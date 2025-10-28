<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CandonCampus extends Model
{
    use HasFactory;

	protected $fillable = [
		'CollegeOfBusinessManagementAndEntrepreneurship',
		'InstituteOfHospitalityManagement',
		'CollegeOfComputingStudies',
		'CollegeOfTeacherEducation',
	];

	public function college()
	{
		return $this->belongsTo(College::class);
	}
}
