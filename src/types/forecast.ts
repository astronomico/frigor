import {IWeather} from './weather';

export interface IForecast {
  weather: IWeather;
  updateDate: string;
}
