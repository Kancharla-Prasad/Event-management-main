import React from "react";
import EventCard from "../../components/EventCard";

export default function UpcomingEvents() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))",
        }}
      >
        <EventCard />

        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}
