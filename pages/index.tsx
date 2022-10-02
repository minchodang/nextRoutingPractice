import type { NextPage } from 'next';
import { getFeaturedEvents } from '../dummy-data';
import { EventList } from '@components/events/EventList';

const Home: NextPage = () => {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    );
};

export default Home;
