import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
function Events() {
  const featuredEvents = getAllEvents();
  const router = useRouter();
  const filteredEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventSearch onSearch={filteredEvents} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Events;
