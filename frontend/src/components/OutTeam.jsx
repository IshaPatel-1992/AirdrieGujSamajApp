import React from "react";

// import available member images
import jayeshImg from "../assets/AboutUs/team/JayeshPandya.jpg";
import kamalImg from "../assets/AboutUs/team/KamalPatel.jpg";
import jayanImg from "../assets/AboutUs/team/JayanNaiker.jpg";
import rudreshImg from "../assets/AboutUs/team/RudreshSoni.jpg";
import ishitaImg from "../assets/AboutUs/team/IshitaShah.jpg";
import vaidehiImg from "../assets/AboutUs/team/VaidehiChokshi.jpg";
import mayushImg from "../assets/AboutUs/team/MayushPatel.jpg";
import manImg from "../assets/AboutUs/team/MansukhRaval.jpg";
import DashrathImg from "../assets/AboutUs/team/DashrathDesai.jpg";
import sunilImg from "../assets/AboutUs/team/SunilPatel.jpg";
import ishaImg from "../assets/AboutUs/team/IshaPatel.jpg";

export default function OurTeam() {
  const teamSections = [
    {
      title: "Executive Board",
      members: [
        { name: "Jayesh Pandya", role: "President", img: jayeshImg },
        { name: "Kamal Patel", role: "Vice President", img: kamalImg },
        { name: "Jayan Naiker", role: "Secretary", img: jayanImg },
        { 
          name: "Rudresh Soni", 
          role: "Treasurer", 
          img: rudreshImg,
          bio: "Rudresh Soni serves as the Treasurer of Airdrie Gujarati Samaj and brings strong financial stewardship to our community. By profession, he is a pharmacist and is dedicated to maintaining transparency, accountability, and integrity in all financial matters. His efforts help support our cultural events, community gatherings, and initiatives that celebrate Gujarati heritage in Airdrie."
        },
      ],
    },
    {
      title: "Cultural Activities",
      members: [
        { 
          name: "Ishita Shah", 
          role: "Coordinator", 
          img: ishitaImg,
          bio: "As a Cultural Director, I lead initiatives that celebrate traditions and foster unity. I take pride in uplifting others and bringing people together through shared cultural experiences. My focus is on creating inclusive, meaningful programs that strengthen all generations and honour our heritage."
        },
        { 
          name: "Vaidehi Chokshi", 
          role: "Coordinator", 
          img: vaidehiImg,
          bio: "Vaidehi has over 10 years of experience in the IT industry and supports our community with her technical and administrative skills. She is also a talented part-time aesthetician and makeup artist."
        },
      ],
    },
    {
      title: "Senior Activity Coordinators",
      members: [
        { name: "Mayush Patel", role: "Coordinator", img: mayushImg },
        { name: "Mansukh Raval", role: "Coordinator", img: manImg },
        { name: "Dashrath Desai", role: "Coordinator", img: DashrathImg },
      ],
    },
    {
      title: "Food Coordinator",
      members: [{ name: "Sunil Patel", role: "Coordinator", img: sunilImg }],
    },
    {
      title: "Special Invited Members",
      members: [
        { name: "Aditya Raval", role: "Member" },
        { name: "Jay Shah", role: "Member" },
        { name: "Isha Patel", 
          role: "Member", 
          img: ishaImg, 
          bio: "Isha Patel is a Full Stack Developer and IT Specialist who supports the community with technology solutions and digital services, helping make processes smoother, user-friendly, and efficient as an active member of the Airdrie Gujarati Samaj." },
        { name: "Roshan Patel", role: "Member" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 animate-fadeIn">

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 text-brand tracking-tight">
          Our Team
        </h2>

        {teamSections.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-saffron mb-10 text-center">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {section.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 object-cover rounded-full mb-4 shadow-md border-4 border-brand-mint"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-brand-mint text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}

                  <h4 className="text-xl font-bold text-brand mb-1">
                    {member.name}
                  </h4>
                  <p className="text-brand-saffron font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-brand-text text-sm italic">
                    {member.bio || "More details coming soon..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-brand-saffron hover:bg-brand-yellow text-brand-text font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 text-lg md:text-xl inline-block"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
