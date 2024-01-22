import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const socialMediaLinks = [
    {
      name: 'Instagram',
      url: "#",
      icon: <InstagramIcon fontSize="small" />,
    },
    {
      name: 'Facebook',
      url: "#",
      icon: <FacebookIcon fontSize="small" />,
    },
    {
      name: 'Twitter',
      url: "#",
      icon: <TwitterIcon fontSize="small" />,
    },
    {
      name: 'YouTube',
      url: "#",
      icon: <YouTubeIcon fontSize="small" />,
    },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      text: '(225) 555-0118',
    },
    {
      icon: <MailOutlineIcon />,
      text: 'michelle.rivera@example.com',
    },
  ];

  export { socialMediaLinks, contactInfo }