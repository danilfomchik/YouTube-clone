import type {ResponseType} from 'axios';

interface Request {
    url: string;
    body?: any;
}

export interface IFetch {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    request: Request;
    override?: {
        [key: string]: string;
    };
    responseType?: ResponseType;
}

export interface IError {
    message: string | string[];
}
