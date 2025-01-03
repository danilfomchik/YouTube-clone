import moment from 'moment';

import {renderWithProviders} from '@/app/tests/utils';
import {Responses} from '../types';
import VideoItem from '..';

export const mockedVideo = {
    kind: Responses.video,
    etag: 'ZaRFbK8NWKv9F-R5lGQkVwl13M8',
    id: 'Z8en_A09EDg',
    snippet: {
        publishedAt: '2024-12-29T17:56:35Z',
        channelId: 'video-item-test-id',
        thumbnails: {
            medium: {
                url: 'https://i.ytimg.com/vi/Z8en_A09EDg/mqdefault.jpg',
                width: 320,
                height: 180,
            },
            high: {
                url: 'https://i.ytimg.com/vi/Z8en_A09EDg/hqdefault.jpg',
                width: 480,
                height: 360,
            },
            maxres: {
                url: 'https://i.ytimg.com/vi/Z8en_A09EDg/maxresdefault.jpg',
                width: 1280,
                height: 720,
            },
        },
        channelTitle: 'Video item test title',
        title: 'A Terrifying Night We’ll NEVER Forget',
    },
    contentDetails: {
        duration: 'PT20M27S',
    },
    statistics: {
        viewCount: '4380293',
    },
    channelInfo: {
        snippet: {
            title: 'Video item test title',
            thumbnails: {
                default: {
                    url: 'http://test-url',
                    width: 88,
                    height: 88,
                },
                medium: {
                    url: 'http://test-url',
                    width: 240,
                    height: 240,
                },
            },
        },
    },
};

describe('VideoItem component', () => {
    it('should render all items', async () => {
        const {getByText, getByTestId, findByRole, getByRole} = renderWithProviders(
            <VideoItem video={mockedVideo} videoId={mockedVideo.id} />,
        );

        const videoPreview = await findByRole('img', {name: mockedVideo.snippet.title});
        expect(videoPreview).toBeInTheDocument();

        const videoItemCardLink = getByTestId(`Video ${mockedVideo.id} card link`);
        expect(videoItemCardLink).toBeInTheDocument();
        // TODO: change href after adding Video Page
        expect(videoItemCardLink).toHaveAttribute('href', `https://www.youtube.com/watch?v=${mockedVideo.id}`);

        const videoTitle = getByRole('heading', {level: 5});
        expect(videoTitle).toHaveTextContent(mockedVideo.snippet.title);
        expect(videoTitle).toBeInTheDocument();

        const channelPhoto = getByRole('img', {name: mockedVideo.channelInfo.snippet.title});
        expect(channelPhoto).toBeInTheDocument();

        const channelTitle = getByText(mockedVideo.channelInfo.snippet.title);
        expect(channelTitle).toBeInTheDocument();

        const viewCount = getByText(
            Intl.NumberFormat('en', {
                notation: 'compact',
            }).format(+mockedVideo.statistics.viewCount),
        );
        expect(viewCount).toBeInTheDocument();

        const publishedAt = getByText(moment(mockedVideo.snippet.publishedAt).fromNow());
        expect(publishedAt).toBeInTheDocument();
    });
});
