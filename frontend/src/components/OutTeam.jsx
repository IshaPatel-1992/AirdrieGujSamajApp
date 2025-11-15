import React, { useState } from "react";

// Import member images
import jayeshImg from "../assets/AboutUs/team/JayeshPandya.jpg";
import kamalImg from "../assets/AboutUs/team/KamalPatel.jpg";
import jayanImg from "../assets/AboutUs/team/JayanNaikerImg1.png";
import rudreshImg from "../assets/AboutUs/team/RudreshSoniImg1.png";
import eshitaImg from "../assets/AboutUs/team/EshitaShah.jpg";
import vaidehiImg from "../assets/AboutUs/team/VaidehiChokshiImg1.png";
import mayushImg from "../assets/AboutUs/team/MayushPatel.jpg";
import manImg from "../assets/AboutUs/team/MansukhRaval.jpg";
import DashrathImg from "../assets/AboutUs/team/DasharathDesai1.jpg";
import sunilImg from "../assets/AboutUs/team/SunilPatel.jpg";
import ishaImg from "../assets/AboutUs/team/IshaPatel.jpg";
import adityaImg from "../assets/AboutUs/team/AdityaRavalEdited.png";

export default function OurTeam() {
  const teamSections = [
    {
      title: "Executive Board",
      intro: "Our Executive Board leads the Airdrie Gujarati Samaj with dedication and vision. They guide our community initiatives, cultural events, and programs to promote unity and engagement.",
      members: [
        {
          name: "Jayesh Pandya",
          role: "President",
          img: jayeshImg,
          bio: "Jayesh Pandya is the pioneering President of the Airdrie Gujarati Samaj and a dedicated entrepreneur. He holds a Bachelor of Science degree and is known for his leadership, community involvement, and commitment to promoting Gujarati culture in Airdrie."
        },
        {
          name: "Kamal Patel",
          role: "Vice President",
          img: kamalImg,
          bio: "Kamal Patel serves as the Vice President of Airdrie Gujarati Samaj and brings years of experience to provide solutions. By profession, he is a Corporate Marketing Executive and helps support cultural events, community gatherings, and initiatives that celebrate Gujarati heritage."
        },
        {
          name: "Jayan Naiker",
          role: "General Secretary",
          img: jayanImg,
          bio: "As General Secretary, Jayan Naiker is passionate about uniting the community through events, volunteer programs, and celebrations that keep Gujarati traditions alive. A professional REALTOR® in Airdrie and Calgary, he applies the same dedication and personal approach to both his career and community service."
        },
        {
          name: "Rudresh Soni",
          role: "Treasurer",
          img: rudreshImg,
          bio: "Rudresh Soni serves as Treasurer, providing strong financial stewardship. By profession, he is a pharmacist, dedicated to transparency and accountability, supporting events and initiatives that celebrate Gujarati heritage."
        },
      ],
    },
    {
      title: "Cultural Activities",
      intro: "Our Cultural Coordinators organize events and programs that celebrate Gujarati heritage, traditions, and creativity, engaging all members across generations.",
      members: [
        {
          name: "Eshita Shah",
          role: "Cultural Director",
          img: eshitaImg,
          bio: "As a Cultural Director, I lead initiatives that celebrate traditions and foster unity, I take pride in uplifting others and bringing people together through cultural events and programs. My focus is on creating inclusive experiences that honor our heritage while embracing diversity."
        },
        {
          name: "Vaidehi Chokshi",
          role: "Coordinator",
          img: vaidehiImg,
          bio: "Vaidehi brings over 10 years of IT experience and administrative skills to support the community, while also contributing her talents as a part-time aesthetician and makeup artist."
        },
      ],
    },
    {
      title: "Senior Activity Coordinators",
      intro: "Our Senior Activity Coordinators engage and support our elders through programs, gatherings, and cultural events that strengthen connections and foster inclusion.",
      members: [
        {
          name: "Mayush Patel",
          role: "Coordinator",
          img: mayushImg,
          bio: "Mayush Patel organizes senior-focused events and programs that bring joy, connection, and engagement. His dedication helps keep the community united and thriving."
        },
        {
          name: "Mansukh Raval",
          role: "Coordinator",
          img: manImg,
          bio: "Mansukh Raval brings enthusiasm and compassion to his role, supporting initiatives that promote community bonding and cultural preservation for seniors."
        },
        {
          name: "Dashrath Desai",
          role: "Coordinator",
          img: DashrathImg,
          bio: "Dashrath Desai is a dedicated community leader who organizes events that bring people together and strengthen Gujarati heritage. Guided by the Samaj’s motto, 'Grow Together, Glow Together,' he fosters collaboration, compassion, and unity."
        },
      ],
    },
    {
      title: "Food Coordinators",
      intro: "Our Food Coordinators ensure that every event is welcoming and memorable. Through thoughtful planning, coordination, and service, they bring the community together over shared meals.",
      members: [
        {
          name: "Sunil Patel",
          role: "Coordinator",
          img: sunilImg,
          bio: "Sunil Patel ensures delicious and well-organized food arrangements for all major events. He plans menus, coordinates volunteers, and oversees service, creating a warm and memorable experience that fosters community spirit."
        },
      ],
    },
    {
      title: "Special Invited Members",
      intro: "Our Special Members contribute their expertise and volunteer support to enhance community programs, technology initiatives, and member engagement.",
      members: [
        { name: "Aditya Raval", role: "Member", img: adityaImg , bio: "Aditya Raval is a long time member of the Airdrie Gujarati Samaj and a dedicated local business owner committed to strengthening community connections in Airdrie. With a deep appreciation for Gujarati culture and a passion for bringing people together, Adi helped establish the Samaj with the vision of creating a welcoming space where families can celebrate traditions, support one another, and build lasting relationships."},
        {
          name: "Jay Shah",
          role: "Member",
          bio: "Jay Shah contributes his IT expertise to support digital initiatives while volunteering in community programs, using technology to streamline processes and enhance engagement."
        },
        {
          name: "Isha Patel",
          role: "Member",
          img: ishaImg,
          bio: "Isha Patel is a Full Stack Developer and IT Specialist who supports the community with technology solutions, making processes smoother and more user-friendly."
        },
        { name: "Roshan Patel", role: "Member", bio: "Roshan Patel is a dedicated member of the Airdrie Gujarati Samaj IT Committee, providing continuous technical support and innovation to strengthen our community's digital presence. With a passion for simplifying technology and improving user experience, his commitment and behind-the-scenes efforts help our community stay connected and organized throughout the year." },
      ],
    },
  ];

  const getInitials = (fullName) => {
  const parts = fullName.trim().split(" ");
  const first = parts[0]?.[0] || "";
  const last = parts[parts.length - 1]?.[0] || "";
  return (first + last).toUpperCase();
};


  return (
    <section className="py-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center mb-10 drop-shadow-lg" style={{ color: "#d4503e" }}>
          Our Team
        </h2>

        {teamSections.map((section, idx) => (
          <div key={idx} className="mb-20 animate-fadeIn" style={{ animationDelay: `${idx * 200}ms` }}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-saffron mb-6 text-center">
              {section.title}
            </h3>

            {section.intro && (
              <p className="text-center text-brand-text mb-8 max-w-3xl mx-auto">
                {section.intro}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.members.map((member, index) => {
                const [expanded, setExpanded] = useState(false);
                const isLong = member.bio && member.bio.length > 150;
                const displayBio = expanded || !isLong ? member.bio : `${member.bio.slice(0, 150)}...`;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
                  >
                    {member.img ? (
                      <div className="w-28 h-28 p-1 rounded-full bg-gradient-to-r from-brand-mint to-brand-saffron mb-4">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full border-2 border-white"
                        />
                      </div>
                    ) : (
                      <div className="w-28 h-28 rounded-full bg-brand-mint text-orange-600 flex items-center justify-center text-4xl font-bold mb-4 shadow-md">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}

                    <h4 className="text-xl font-bold text-brand mb-1">{member.name}</h4>
                    <p className="text-brand-saffron font-semibold mb-2">{member.role}</p>
                    <p className="text-brand-text text-sm italic mb-1">{displayBio}</p>

                    {isLong && (
                      <button
                        className="text-brand-saffron text-sm font-semibold hover:underline"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-brand-saffron hover:bg-brand-yellow text-brand-text font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 text-lg md:text-xl inline-block"
          >
            📩 Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
