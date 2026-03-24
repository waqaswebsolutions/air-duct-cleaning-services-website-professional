import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'

export default function SocialLinks() {
  const links = [
    { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <div className="flex gap-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-accent p-2 rounded-full transition"
            aria-label={link.label}
          >
            <Icon size={18} />
          </a>
        )
      })}
    </div>
  )
}