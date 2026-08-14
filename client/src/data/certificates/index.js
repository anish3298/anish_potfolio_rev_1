import KypCertificationImage from '../../../src/assets/certificates/KYP-certification.png';
import SkillBridgeCertificationImage from '../../../src/assets/certificates/skillbridge-certification.png';
import Intern_c from '../../../src/assets/certificates/intern_c.png';
const certificates = [
  {
    id: 'kyp-certification',
    title: 'KYP Certification',
    organization: 'Information Technology, Language & Soft Skills',
    issueDate: '2023-10',
    credentialId: 'KYP-1234',
    credentialUrl: '#',
    description: 'Completed certification covering IT fundamentals, communication, and professional skills.',
    image: KypCertificationImage
  },
  {
    id: 'skillbridge-certification',
    title: 'SkillBridge Certification',
    organization: 'Verbal & Professional Skills',
    issueDate: '2025-11',
    credentialId: 'SB-5678',
    credentialUrl: '#',
    description: 'Certification focused on professional communication, collaboration, and career readiness.',
    image: SkillBridgeCertificationImage
  },
  {
    id: 'Intern_c',
    title: 'Internship Certification',
    organization: 'Web Development Intern at HexSoftwares',
    issueDate: '2025-08',
    credentialId: 'HEX ID = HX30S07674',
    credentialUrl: '#',
    description: 'Web Development Intern at HexSoftwares, where I gained hands-on experience developing database-driven web applications using PHP, MySQL, JavaScript, HTML, and CSS. I worked on FlexiLeave, implementing role-based access, leave management, task management, department management, and an admin dashboard while following an Agile development workflow.',
    image: Intern_c
  }
];

export default certificates;
