<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CampusFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
			'CandonCampus' => 'required' .$this->id,
            'CervantesCampus' => 'required' .$this->id,
            'MainCampus' => 'required' .$this->id,
            'NarvacanCampus' => 'required' .$this->id,
            'SanJuanCampus' => 'required' .$this->id,
            'SantiagoCampus' => 'required' .$this->id,
            'SantaMariaCampus' => 'required' .$this->id,
            'Tagudin' => 'required' .$this->id,
        ];
    }
}