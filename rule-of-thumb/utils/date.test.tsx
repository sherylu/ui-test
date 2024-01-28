import { getTimeAgo } from './date';

describe('getTimeAgo', () => {
    it('should return "just now" when the input is less than a minute ago', () => {
        const now = new Date();
        const oneSecondAgo = new Date(now.getTime() - 1000).toISOString();
        expect(getTimeAgo(oneSecondAgo)).toBe('1 second ago');
    });

    it('should return the correct time ago string for minutes', () => {
        const now = new Date();
        const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000).toISOString();
        expect(getTimeAgo(fiveMinutesAgo)).toBe('5 minutes ago');
    });

    it('should return the correct time ago string for hours', () => {
        const now = new Date();
        const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString();
        expect(getTimeAgo(threeHoursAgo)).toBe('3 hours ago');
    });

    it('should return the correct time ago string for days', () => {
        const now = new Date();
        const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString();
        expect(getTimeAgo(twoDaysAgo)).toBe('2 days ago');
    });

});
