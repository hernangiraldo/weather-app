import { CityWeatherDetailResponseDto } from '@models/dto/CityWeatherDetailResponse.dto';

export class City {
  constructor(
    public id: number,
    public name: string,
    public weather?: CityWeatherDetailResponseDto
  ) { }
}
