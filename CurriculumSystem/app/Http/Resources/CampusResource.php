<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CampusResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
			'id' => (string) $this->getKey(),
			'CandonCampus' => (string) $this->getKey(),
            'CervantesCampus' => (string) $this->getKey(),
            'MainCampus' => (string) $this->getKey(),
            'NarvacanCampus' => (string) $this->getKey(),
            'SanJuanCampus' => (string) $this->getKey(),
            'SantiagoCampus' => (string) $this->getKey(),
            'SantaMariaCampus' => (string) $this->getKey(),
            'Tagudin' => (string) $this->getKey(),
		];
    }
}
