const leadershipTeam = [
  {
    name: 'Tony Grimes',
    position: 'Operations Director',
    bio: 'Tony has been instrumental in guiding AJS Scaffolding’s growth since its inception. His focus on operational excellence ensures that we consistently deliver top-quality services to our clients. He is further supported by our dedicated Managers and Chargehands.',
    linkedin: ' https://www.linkedin.com/in/tony-grimes-1a6b1b300/',
  },
  {
    name: 'James Williams',
    position: 'Commercial & Technical Director',
    linkedin: 'https://www.linkedin.com/in/james-williams-419b51b5/',
    bio: 'James is responsible for overseeing our commercial operations, ensuring projects are delivered on budget and on time. His keen understanding of the industry helps AJS Scaffolding maintain its competitive edge. James has extensive experience in scaffolding and engineering.',
  },
  {
    name: 'Dan McGregor',
    position: 'Director of Business Development',
    linkedin: 'https://www.linkedin.com/in/dan-mcgregor-fcmi-7b669082/',
    bio: 'Dan brings a wealth of experience in driving business growth, and successfully grew another scaffolding business prior to joining AJS. His background is within construction and maintenance, and he holds an MBA. His focus is built upon client relationships and long-term strategic partnerships, bringing innovative flare and continuous development to the business.',
  },
];

const otherSeniorMembers = [
  {
    name: 'Charlotte Cockayne',
    position: 'Key Account Manager',
  },
  {
    name: 'Kayleigh Knott',
    position: 'Office Manager',
  },
  {
    name: 'Ross Rimmer',
    position: 'Commercial Manager',
  },
];

const MeetTheTeam = () => {
  return (
    <div className="min-h-screen bg-background text-textSecondary">
      <header
        className="bg-cover bg-center h-64 text-textPrimary flex items-center justify-center"
        style={{ backgroundImage: 'url(/path-to-header-image.jpg)' }}>
        <h1 className="text-4xl font-bold text-secondary">Leadership Team</h1>
      </header>
      <div className="leadership-team mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="team-member p-4 bg-white rounded shadow-lg">
              <h2 className="text-2xl font-semibold text-primary">{member.name}</h2>
              <p className="text-lg text-secondary">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="other-senior-members mt-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-secondary">Senior Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {otherSeniorMembers.map((member, index) => (
            <div key={index} className="team-member p-4 bg-white rounded shadow-lg">
              <h2 className="text-2xl font-semibold text-primary">{member.name}</h2>
              <p className="text-lg text-secondary">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="additional-info mt-8 text-center">
        <p className="text-lg text-gray-700">As well as our site Supervisors, and specialist consultants.</p>
      </div>
    </div>
  );
};

export default MeetTheTeam;
