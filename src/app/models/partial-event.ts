 
export interface PartialEvent {
  id: string,
  name: string,
  startDateTime: Date,
  endDateTime: Date,
  description: string,
  eventCategory: EventCategory,
  location: Location,
  allowedEventRoles: AllowedEventRole[],
}

export interface EventCategory {
    categoryName: string;
}

export interface Location{
    locationId: string;
    name: string;
    address: string;
    country: string;
}

export interface AllowedEventRole{
    eventId: string;
    eventRole: string;
    canSubscribe: boolean;
}