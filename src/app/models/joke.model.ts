export interface Joke {
    id: number;
    category: string;
    type: string;
    setup: string;
    delivery: string;
    joke: string;
    flags: JokeFlags;
    error: string;
}
export interface JokeFlags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
}