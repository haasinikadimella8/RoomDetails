import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function RoomList() {
  const rooms = [101, 102, 103];

  return (
    <div>
      <h1>Room Details</h1>
      <h2>Available Rooms</h2>

      {rooms.map((room) => (
        <div key={room}>
          <Link to={`/room/${room}`}>
            Room {room}
          </Link>
        </div>
      ))}
    </div>
  );
}

function RoomDetails() {
  const { roomNo } = useParams();

  return (
    <div>
      <h1>Room Details</h1>
      <h2>Room Number: {roomNo}</h2>
      <Link to="/">Back to Room List</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/room/:roomNo" element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;