import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

// Set up OAuth2 Client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Function to generate a new Google Meet link
export const createMeetLink = async () => {
  try {
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Create a meeting event
    const event = {
      summary: "Minecraft Date Night 💕",
      description: "Join us for a fun Minecraft date night! 🎮",
      start: { dateTime: new Date().toISOString(), timeZone: "America/New_York" },
      end: { dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), timeZone: "America/New_York" },
      conferenceData: { createRequest: { requestId: "minecraft-date-night" } },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    return response.data.hangoutLink; // Returns the Meet link
  } catch (error) {
    console.error("Error creating Meet link:", error);
    return null;
  }
};
