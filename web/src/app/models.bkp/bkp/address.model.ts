import { GeoLocation } from "./geo-location.model"

export class Address {
  constructor(
    public addressLine: string,
    public city: string,
    public zip: string,
    public geoLocation?: GeoLocation
  ) {}
}
