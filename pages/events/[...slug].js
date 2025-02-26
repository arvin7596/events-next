import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>FilteredEventsPage {slug}</div>;
}

export default FilteredEventsPage;
