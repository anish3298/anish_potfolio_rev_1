import KypCertificationImage from '../../../src/assets/certificates/KYP-certification.png';
import SkillBridgeCertificationImage from '../../../src/assets/certificates/skillbridge-certification.png';
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
  }
];

export default certificates;
