import { IExtendedProps } from "./test.model";

export interface ICalendarEvent {
  title: string;
  date: Date;
  start: Date;
  end: Date;
  allDay: boolean;
  classNames: string[];
  extendedProps: IExtendedProps;
  //capacity
  //location
  //
}