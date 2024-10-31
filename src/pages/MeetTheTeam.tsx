import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/male1.webp',
    bio: 'John has over 20 years of experience in the scaffolding industry...',
  },
  {
    name: 'Jane Smith',
    position: 'CFO',
    image: '/images/female1.webp',
    bio: 'Jane is responsible for the financial operations and strategy...',
  },
  {
    name: 'Alice Johnson',
    position: 'Project Manager',
    image: '/images/female2.webp ',
    bio: 'Alice oversees all project management activities...',
  },
  // Add more team members as needed
];

const MeetTheTeam = () => {
  return (
    <div className="min-h-screen bg-background text-textSecondary">
      <header className="bg-cover bg-center h-64 text-textPrimary flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </header>
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.position}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MeetTheTeam;
