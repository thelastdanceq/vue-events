export interface IEvent {
    "id": number | string,
    "title": string,
    "date": string,
    "time": string,
    "location": string,
    "description": string,
    "organizer": string | IOrganizer[] | IOrganizer,
    "category": string,
    "attendees": IAttend[];
}
export interface IAttend {
    id: string,
    name: string;
}
export interface IOrganizer {
    "id": string,
    "name": string
}