<?php

namespace App\Http\Controllers;

use App\Models\CandonCampus;
use Illuminate\Http\Request;

class CandonCampusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
		$candoncampuses = CandonCampus::all([
			'CollegeOfBusinessManagementAndEntrepreneurship',
			'InstituteOfHospitalityManagement',
			'CollegeOfComputingStudies',
			'CollegeOfTeacherEducation',
		]);

		return response()->json($candoncampuses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CandonCampus $candonCampus)
    {
        return response()->json($candonCampus);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CandonCampus $candonCampus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CandonCampus $candonCampus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CandonCampus $candonCampus)
    {
        //
    }
}
