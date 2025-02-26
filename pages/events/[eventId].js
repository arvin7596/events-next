import { useRouter } from "next/router";

function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return <div>EventPage {eventId}</div>;
}

export default EventPage;
