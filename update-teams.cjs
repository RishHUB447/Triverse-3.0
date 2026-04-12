const fs = require('fs');
const targetSectionTemplate = fs.readFileSync('src/components/teams/SponsorshipSection.astro', 'utf8');

const sections = [
  { file: 'TechSection.astro', json: 'tech.json', title: 'TECH' },
  { file: 'OperationalSection.astro', json: 'operations.json', title: 'OPERATIONS' },
  { file: 'DesignSection.astro', json: 'design.json', title: 'DESIGN' },
  { file: 'ContentSection.astro', json: 'content.json', title: 'CONTENT' },
  { file: 'MultimediaSection.astro', json: 'multimedia.json', title: 'MULTIMEDIA' },
  { file: 'SocialMediaSection.astro', json: 'socialmedia.json', title: 'SOCIAL MEDIA' },
];

sections.forEach(sec => {
  let newContent = targetSectionTemplate;
  
  newContent = newContent.replace('import sponsorshipData from "../../data/sponsorship.json";', `import data from "../../data/${sec.json}";`);
  newContent = newContent.replace(/sponsorshipData\.map/g, 'data.map');
  
  newContent = newContent.replace('>SPONSORSHIP<', `>${sec.title}<`);
  
  const modifiedCard = `<SponsorshipCard 
                            id={member.id ? String(member.id).padStart(2, '0') : String(index + 1).padStart(2, '0')}
                            code={member.code || "CORE."}
                            name={member.name}
                            role={member.role || "CORE MEMBER"}
                            iconType={member.iconType || "hex"}
                            color={member.color || "#00f5d4"}
                            image={member.image}
                        />`;
  
  let parts = newContent.split('<SponsorshipCard');
  let secondPart = parts[1].split('/>');
  secondPart.shift(); // remove everything until first />
  newContent = parts[0] + modifiedCard + secondPart.join('/>');
  
  newContent = newContent.replace(/sponsorship-section/g, `${sec.title.toLowerCase().replace(' ', '-')}-section`);
  
  fs.writeFileSync(`src/components/teams/${sec.file}`, newContent);
});

console.log('Updated sections successfully.');
