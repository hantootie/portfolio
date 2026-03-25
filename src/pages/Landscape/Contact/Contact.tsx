import instaIcon from '../../../assets/Insta.png';
import linkedinIcon from '../../../assets/Linkedin.png';
import emailIcon from '../../../assets/Email.png';
import FadeImage from '../../../components/FadeImage/FadeImage';

const contactIcons = [
    {
        imagePath: instaIcon,
        label: 'chae_scribb1e',
        link: 'https://www.instagram.com/chae_scribb1e?igsh=ejk5bGR2aWprMDVj'
    },
    {
        imagePath: linkedinIcon,
        label: 'chaehyeon-han',
        link: 'https://www.linkedin.com/in/chaehyeon-han?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    {
        imagePath: emailIcon,
        label: 'hanchae0519@gmail.com',
        link: 'mailto:hanchae0519@gmail.com'
    }
]

const Contact: React.FC = () => {
    return (
        <div className="rock-salt-text">
            <div className="text-5xl mb-10">
                Contact
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    contactIcons.map((contactIcon) => (
                        <div >
                            <a href={contactIcon.link} target="_blank" rel="noopener noreferrer">
                                <FadeImage 
                                    src={contactIcon.imagePath}
                                    className='hover:opacity-70 hover:-translate-y-0.25 transition-all duration-200'
                                />
                            </a>
                            <div className="md:text-xl lg:text-2xl flex justify-center ">
                                {contactIcon.label}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Contact;