export interface IEvent {
    "id": number,
    "title": string,
    "date": string,
    "time": string,
    "location": string,
    "description": string,
    "organizer": string | IOrganizer,
    "category": string,
    "attendees": IAttend[];
}
export interface IAttend {
    id: string,
    name: string;
}
export interface IOrganizer {
    user: {
        "id": string,
        "name": string
    }
}