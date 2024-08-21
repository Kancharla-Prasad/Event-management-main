import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import SubEventCard from "../../components/SubEventsCard";
function Eventinfo() {
  const events = {
    name: "Tech Conference 2024",
    location: "San Francisco, CA",
    date: "24 spet 2024",
    description:
      "https://www.bing.com/images/search?view=detailV2&ccid=IDq8cZVc&id=D959F96F54A44038B145CAC14583280BA926038C&thid=OIP.IDq8cZVcGfgwgkR1Bt0RywHaEo&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f4723250.jpg&exph=1200&expw=1920&q=image&simid=608034041267486763&FORM=IRPRST&ck=DBBBEE52A854524AE9DC119233EEEC90&selectedIndex=9&itb=0https://www.bing.com/images/search?view=detailV2&ccid=IDq8cZVc&id=D959F96F54A44038B145CAC14583280BA926038C&thid=OIP.IDq8cZVcGfgwgkR1Bt0RywHaEo&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f4723250.jpg&exph=1200&expw=1920&q=image&simid=608034041267486763&FORM=IRPRST&ck=DBBBEE52A854524AE9DC119233EEEC90&selectedIndex=9&itb=0",
    image:
      "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    subEvents: [
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        instructions: `➡️ Objective : Teams will compete to find hidden clues scattered across the campus. 
          Each clue will lead to the next location, with the final clue leading to the treasure. 
          The first team to find the treasure wins. 
          ➡️Preparation: Create a Map: Divide the campus into zones (e.g., library, sports complex, cafeteria, dormitories, etc.).Create Clues: Write creative clues that point to specific locations on campus.
          Ensure each clue leads logically to the next location.Hide Clues: Place the clues at the designated locations.
           Make sure they are hidden well but not impossible to find.Form Teams: Organize participants into teams of 4-6 members. 
           Each team will work together to solve the clues and find the treasure.Set a Time Limit: Depending on the size of the campus, set a time limit for the hunt (e.g., 2-3 hours).Rules:Starting Point: All teams will gather at a central starting point (e.g., the main entrance of the university or a common area).First Clue: Each team will be given the first clue at the starting point. The clue will lead them to the first location.Clues and 
           Checkpoints:At each checkpoint, there will be a clue that leads to the next location.Some checkpoints may have challenges(e.g., solving a puzzle, performing a task) before the next clue is revealed.
           Teamwork: Team members must stay together during the entire hunt. No splitting up to cover more ground.No Interference: Teams should not interfere with other teams or move their clues.Clue Safety: If a team finds a clue that does not belong to them (e.g., another team’s clue), they should leave it where it is.Hint System: If a team gets stuck on a clue, they can ask for a hint. However, asking for a hint may result in a time penalty (e.g., 5-minute delay).Winning the Game:Final Clue: 
           The final clue will lead to the treasure (e.g., a hidden prize, a symbolic treasure chest).Winning Criteria: The first team to reach the treasure and return to the starting point wins the game.Time-Based Winners: If no team finds the treasure within the time limit, the team that has advanced the furthest or solved the most clues wins.Safety 

           Guidelines:Stay on Campus: Teams must stay within the designated areas on campus. No off-campus locations will be used.
           
           Respect the Environment: Teams should respect campus property and not disturb classes, events, or other activities.Follow the Rules: Any team caught breaking the rules (e.g., splitting up, tampering with other teams' clues) will be disqualified.Materials Needed:Clue cards or sheets with hints and puzzles.A map of the campus for each team (optional).The final treasure (e.g., a prize, trophy, or symbolic item).Optional: Supplies for challenges (e.g., puzzles, physical tasks).Example Clue:“Where students go to read and think, find your next clue near the kitchen sink.”(This could lead participants to the library's break room or cafeteria.)Tips for Organizers:Test the Clues: Before the event, test the clues yourself to ensure they are challenging but solvable.Use Creative Challenges: Mix up the types of challenges—puzzles, physical tasks, riddles—to keep things interesting.Prepare for Rainy Days: Have a backup plan in case of bad weather. Consider indoor locations as alternatives.This treasure hunt game will challenge participants to think critically, collaborate with their team, and explore their campus in a fun and interactive way!`,
        registration_price: 150.0,
      },
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        registration_price: 150.0,
      },
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        registration_price: 150.0,
      },
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        registration_price: 150.0,
      },
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        registration_price: 150.0,
      },
      {
        name: "AI Workshop",
        location: "Room A1",
        time: "2024-10-15T11:00:00Z",
        image:
          "https://th.bing.com/th/id/OIP.9nXsUmBntvg_xZ_39pljogHaDt?w=334&h=175&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        registration_price: 150.0,
      },
    ],
  };
  const { eventName } = useParams();

  return (
    <>
      <Card
        sx={{
          maxWidth: 1000,
          margin: "auto",
          marginTop: "3rem",
          overflow: "visible",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={events.image}
            alt="event image"
            height={250}
            sx={{ objectFit: "contain" }}
          />
          <CardContent sx={{ overflow: "visible" }}>
            <Typography gutterBottom variant="h5">
              {events.name}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "1rem auto 1rem auto",
              }}
            >
              <Typography gutterBottom component="div">
                {events.location}
              </Typography>
              <Typography gutterBottom component="div">
                {events.date}
              </Typography>
            </div>

            <Typography
              sx={{
                textAlign: "start",
                overflow: "visible",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {events.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(450px,1fr))",
          marginBottom: "5rem",
        }}
      >
        {events.subEvents.map((subEvent) => {
          return <SubEventCard subEvent={subEvent} />;
        })}
      </div>
    </>
  );
}

export default Eventinfo;
