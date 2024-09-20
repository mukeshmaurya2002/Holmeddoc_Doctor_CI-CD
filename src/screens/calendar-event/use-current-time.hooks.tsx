import { useEffect, useState } from 'react';

function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();

        // Convert to 12-hour format
        const in12HourFormat = hours > 12 ? hours - 12 : hours;
        const ampm = hours >= 12 ? 'pm' : 'am';

        // Adjust hours for midnight (12 AM) and noon (12 PM)
        hours = in12HourFormat === 0 ? 12 : in12HourFormat;

        const minutes = now.getMinutes();

        const formattedTime = `${hours}:${padZero(minutes)} ${ampm}`;
        return formattedTime;
    }

    function padZero(num: number) {
        return num < 10 ? `0${num}` : num;
    }

    return currentTime;
}

export default useCurrentTime;
