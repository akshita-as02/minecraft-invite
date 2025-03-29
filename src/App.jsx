// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// function App() {
//   const [emailSent, setEmailSent] = useState(false);
//   const [showSadMessage, setShowSadMessage] = useState(false);

//   // Function to send email
//   const sendEmail = () => {
//     const meetLink = "https://meet.google.com/fbe-cozj-vdp"; // Use the permanent link
//     const templateParams = {
//       to_name: "Your Boyfriend's Name",
//       from_name: "Akshita 💖",
//       to_email: "akshita03.as@gmail.com, akshizzz02@gmail.com", // Both emails
//       message: `Hey! Join our Minecraft date night here: ${meetLink} 💕🎮`,
//     };

//     emailjs
//       .send(
//         "service_jyagfo4",
//         "template_b0nacog",
//         templateParams,
//         "A3ljAatihyAqf3qB-" // Your EmailJS public key
//       )
//       .then(() => {
//         setEmailSent(true); // Show success message
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//       });
//   };

//   // Handle "Yes" Button Click
//   const handleYesClick = () => {
//     sendEmail();
//   };

//   // Handle "No" Button Click
//   const handleNoClick = () => {
//     setShowSadMessage(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen w-full text-center relative" style={{ background: 'linear-gradient(180deg, #6FB5FF 0%, #FFD6AA 57%, #FAB4EA 100%)' }}>
//       <div class="background-container">
//         <img src="/src/assets/Bee_BE.webp" alt="bee image" class="bee-image"/>
//         <img src="/src/assets/bg-stuff.png" alt="Background Image" class="background-image" />
//       </div>

//           <h1 className="relative z-10">
//             {emailSent ? "✅ Check your mail for the invite! 🎉" : showSadMessage ? "Why you do this to me? 😭" : "Do you want to have a Minecraft date night with me? 💖🎮"}
//           </h1>
//           {!emailSent && !showSadMessage && (
//             <div className="mt-6 relative z-10 flex gap-6 items-center button-container">

//               <button className="pixel-button yes-button" onClick={handleYesClick}>yes🎀</button>
//               <button className="pixel-button no-button" onClick={handleNoClick}>no❌</button>

//             </div>
//           )
//           }
//         </div >
//       );

// }

//       export default App;

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";


function App() {
  const [emailSent, setEmailSent] = useState(false);
  const [showSadMessage, setShowSadMessage] = useState(false);
  const [showHiMessage, setShowHiMessage] = useState(true); // New state to control Hi message visibility
  const [showQuestion, setShowQuestion] = useState(false); // State to control when the question appears
  const [meetLink, setMeetLink] = useState({ meet_link: "" });
  const [partnerInfo, setPartnerInfo] = useState({
    boyfriend_name: "",
    boyfriend_email: "",
    your_name: "",
    your_email: "",
  });

  // Fetch JSON data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const meetResponse = await fetch("/details/meet_info.json");
        const meetData = await meetResponse.json();
        // Set the meet_link state to the value from the JSON
        setMeetLink(meetData.meet_link); 
        console.log("Meet Info:", meetData);
        const partnerResponse = await fetch("/details/partner_info.json");
        const partnerData = await partnerResponse.json();
        setPartnerInfo(partnerData);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    }

    fetchData();
  }, []);


  // Function to send email
  const sendEmail = () => {
    if (!meetLink || !partnerInfo.boyfriend_email || !partnerInfo.your_email || !partnerInfo.your_name) {
      console.error("Missing required data for email.");
      return;
    }

    const templateParams = {
      to_name: partnerInfo.boyfriend_name,
      from_name: partnerInfo.your_name,
      to_email: `${partnerInfo.your_email}, ${partnerInfo.boyfriend_email}`,
      message: `${meetLink} 🎮`,
    };
    console.log("Email templateParams:", templateParams); // Log the final templateParams object
    emailjs
      .send(
        "service_jyagfo4",
        "template_b0nacog",
        templateParams,
        "A3ljAatihyAqf3qB-" // Your EmailJS public key
      )
      .then(() => {
        setEmailSent(true); // Show success message
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  // Handle "Yes" Button Click
  const handleYesClick = () => {
    sendEmail();
  };

  // Handle "No" Button Click
  const handleNoClick = () => {
    setShowSadMessage(true);
  };

  // Handle the transition to main question after Hi message fades out
  useEffect(() => {
    // After 6 seconds (the duration of fade-in and fade-out)
    const timer = setTimeout(() => {
      setShowHiMessage(false); // Hide Hi message
      setShowQuestion(true); // Show main question
    }, 6000); // Same as the fade-out duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-center relative" style={{ background: 'linear-gradient(180deg, #6FB5FF 0%, #FFD6AA 57%, #FAB4EA 100%)' }}>
      <div className="background-container">
        <img src="/assets/Bee_BE.webp" alt="bee image" className="bee-image" />
        <img src="/assets/bg-stuff.png" alt="Background Image" className="background-image" />
      </div>

      {showHiMessage && (
        <div className="hi-message">
          Hi there!
        </div>
      )}

      {showQuestion && (
        <h1 className="relative z-10">
          {emailSent ? "✅ Check your mail for the invite! 🎉" : showSadMessage ? "Why you do this to me? 😭" : "Do you want to have a Minecraft date night with me? 💖🎮"}
        </h1>
      )}

      {!emailSent && !showSadMessage && showQuestion && (
        <div className="mt-6 relative z-10 flex gap-6 items-center button-container">
          <button className="pixel-button yes-button" onClick={handleYesClick}>yes🎀</button>
          <button className="pixel-button no-button" onClick={handleNoClick}>no❌</button>
        </div>
      )}
    </div>
  );
}

export default App;
