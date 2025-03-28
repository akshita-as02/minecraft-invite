// import emailjs from "@emailjs/browser";

// export default function App() {
//   const sendEmail = () => {
//     const templateParams = {
//       to_name: "Your Boyfriend’s Name",
//       from_name: "Your Name",
//       message: "Hey! Join our Minecraft date night: https://meet.google.com/new",
//     };

//     emailjs
//       .send("service_jyagfo4", "template_b0nacog", templateParams, "A3ljAatihyAqf3qB-")
//       .then((response) => {
//         alert("Google Meet invite sent! 🎉");
//       })
//       .catch((error) => {
//         console.error("Email send error:", error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen bg-green-900 text-center">
//       <h1 className="text-2xl text-white mb-6 border-4 border-white p-4 bg-black rounded-lg shadow-md">
//         Do you want to have a Minecraft date night with me? 🏡⛏️
//       </h1>
//       <div className="flex space-x-6">
//         <button
//           onClick={sendEmail}
//           className="px-6 py-4 text-green-900 bg-yellow-300 border-4 border-black shadow-lg hover:bg-yellow-400 active:translate-y-1 transition rounded-md"
//         >
//           Yes ✅
//         </button>
//         <button className="px-6 py-4 text-white bg-red-600 border-4 border-black shadow-lg hover:bg-red-700 active:translate-y-1 transition rounded-md">
//           No ❌
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// function App() {
//   const [emailSent, setEmailSent] = useState(false);

//   const sendEmail = () => {
//     const templateParams = {
//       to_name: "Your Boyfriend's Name",  // Customize this
//       from_name: "Akshita 💖",
//       to_email: "akshita03.as@gmail.com", // Replace this
//     };

//     emailjs
//       .send(
//         "service_jyagfo4", "template_b0nacog", templateParams, "A3ljAatihyAqf3qB-"
//       )
//       .then(() => {
//         setEmailSent(true); // Update state to show success message
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-center">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Do you want to have a Minecraft date night with me? 💖🎮
//       </h1>
//       <div className="mt-6">
//         {emailSent ? (
//           <p className="text-xl text-green-700 font-semibold">
//             ✅ Check your mail for the invite! 🎉
//           </p>
//         ) : (
//           <>
//             <button
//               onClick={sendEmail}
//               className="px-6 py-3 m-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700"
//             >
//               Yes ✅
//             </button>
//             <button className="px-6 py-3 m-2 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-700">
//               No ❌
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// //import { createMeetLink } from "./googleAuth"; // Import Google Meet function

// function App() {
//   const [emailSent, setEmailSent] = useState(false);

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
//   const handleYesClick = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/create-meet", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();

//       if (data.meetLink) {
//         sendEmail(data.meetLink); // Send email with Meet link
//       } else {
//         alert("Failed to create Meet link. Try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong. Try again later.");
//     }
//   };


//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-center">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Do you want to have a Minecraft date night with me? 💖🎮
//       </h1>
//       <div className="mt-6">
//         {emailSent ? (
//           <p className="text-xl text-green-700 font-semibold">
//             ✅ Check your mail for the invite! 🎉
//           </p>
//         ) : (
//           <>
//             <button
//               onClick={handleYesClick}
//               className="px-6 py-3 m-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700"
//             >
//               Yes ✅
//             </button>
//             <button className="px-6 py-3 m-2 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-700">
//               No ❌
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Canvas } from "@react-three/fiber";
// import { Float, useGLTF } from "@react-three/drei";

// function BeeModel() {
//   const { scene } = useGLTF("/src/animations/minecraft_heart.glb");
//   return <primitive object={scene} scale={0.5} position={[1, 2, 0]} />;
// }

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
//     <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-center relative">
//       <div class="background-container">
//         <img src="/src/assets/pink_tree.png" class="pink-tree" alt="Pink Tree"></img>
//         <img src="/src/assets/grass.png" class="grass-image" alt="Grass Image"></img>
//       </div>

//       {/* <Canvas className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//           <BeeModel />
//         </Float>
//       </Canvas> */}
//       <h1 className="font-bold text-purple-700 relative z-10">
//       {/* <span class="typewriter-effect"> */}
//         {emailSent ? "✅ Check your mail for the invite! 🎉" : showSadMessage ? "Why you do this to me 😭" : "Do you want to have a Minecraft date night with me? 💖🎮"}
//       {/* </span> */}
//       </h1>
//       {!emailSent && !showSadMessage && (
//         <div className="mt-6 relative z-10">
//           <div style={{width: '100%', height: '100%', position: 'relative'}}>
//     <div style={{width: 154, height: 59, left: 0, top: 4, position: 'absolute', background: '#3DFFC5'}} />
//     <div style={{width: 158, height: 4, left: 0, top: 0, position: 'absolute', background: '#54BF9B'}} />
//     <div style={{width: 63, height: 4, left: 154, top: 63, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', background: '#3A9A7A'}} />
//     <div style={{left: 33, top: 22, position: 'absolute', color: 'black', fontSize: 22, fontFamily: 'Press Start 2P', fontWeight: '400', wordWrap: 'break-word'}}>yes🎀</div>
// </div>

//           <button
//             onClick={handleNoClick}
//             className="pushable-red"
//           >
//             <span className="front">
//               No❌
//             </span>
//           </button>

//         </div>
//       )}
//     </div>

//   );
// }

// export default App;


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
//     <div className="flex flex-col items-center justify-center h-screen bg-green-200 text-center relative">
//       <img
//         src="/src/animations/Bee_Flying_BE.webp" // Replace with your bee GIF file path
//         // alt="Minecraft Bee"
//         className="absolute top-0 left-0 w-full h-full object-contain"
//       />
//       <h1 className="text-4xl font-bold text-blue-600 relative z-10">
//         {emailSent ? "✅ Check your mail for the invite! 🎉" : showSadMessage ? "Why you do this to me 😭" : "Do you want to have a Minecraft date night with me? 💖🎮"}
//       </h1>
//       {!emailSent && !showSadMessage && (
//         <div className="mt-6 relative z-10">
//           <button
//             onClick={handleYesClick}
//             className="px-6 py-3 m-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700"
//           >
//             Yes ✅
//           </button>
//           <button
//             onClick={handleNoClick}
//             className="px-6 py-3 m-2 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-700"
//           >
//             No ❌
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
