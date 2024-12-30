export interface IVideo {
    id: string | {videoId: string};
    snippet: {
        channelId: string;
        channelTitle: string;
        publishedAt: string;
        title: string;
        thumbnails: {
            maxres: {url: string};
            high: {url: string};
            medium: {url: string};
        };
    };
    contentDetails: {
        videoId: string;
        duration: string;
    };
    statistics: {viewCount: string};
    channelInfo: {
        snippet: {
            title: string;
            thumbnails: {
                default: {
                    url: string;
                };
                medium: {
                    url: string;
                };
            };
        };
    };
    kind: Responses;
}

export interface IChannel {
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

export enum Responses {
    video = 'youtube#video',
    search = 'youtube#searchResult',
}

export interface IVideoItemProps {
    video: IVideo;
    videoId: string;
    kind: Responses;
}
