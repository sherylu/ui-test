export const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = [
        { label: "year", duration: 31536000 },
        { label: "month", duration: 2592000 },
        { label: "day", duration: 86400 },
        { label: "hour", duration: 3600 },
        { label: "minute", duration: 60 },
        { label: "second", duration: 1 },
    ];

    for (const interval of intervals) {
        const intervalCount = Math.floor(seconds / interval.duration);
        if (intervalCount > 1) {
            return intervalCount + " " + interval.label + "s ago";
        } if(intervalCount === 1) {
            return intervalCount + " " + interval.label + " ago";
        }
    }

    return Math.floor(seconds) + " seconds ago";
}
