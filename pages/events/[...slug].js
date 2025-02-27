import { useRouter } from "next/router";
import { useEffect } from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../ui/button/button";
function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }
  if (
    isNaN(slug[0]) ||
    isNaN(slug[1]) ||
    +slug[0] > 2030 ||
    +slug[1] < 1 ||
    +slug[1] > 12
  ) {
    return (
      <>
        <p>Invalid filter. Please adjust your values!</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: +slug[0],
    month: +slug[1],
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter!</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }
  const date = new Date(+slug[0], +slug[1] - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
