
import { Icon } from '../components/ui/Icons.tsx';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface LinkItem {
  label: string;
  status: boolean;
  href: string;
}

type LinkItemsObject = {
  [key: string]: {
    status: boolean;
    href: string;
  };
};

export const linkItems: LinkItem[]  = [
  { label: 'nosotros', status: true, href: '/nosotros' },
  { label: 'servicios', status: true, href: '/servicios' },
  { label: 'proyectos', status: true, href: '/proyectos' },
  { label: 'clientes', status: true, href: '/clientes' },
  { label: 'blog', status: false, href: '/blog' },
  { label: 'contacto', status: true, href: '/contacto' },
];

// Transformación del array en un objeto
export const linkItemsObject: LinkItemsObject = linkItems.reduce((acc, { label, ...rest }) => {
  acc[label.toLocaleLowerCase()] = { ...rest };
  return acc;
}, {} as LinkItemsObject);


export const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/sasfec', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/sasfec', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/sudamericana-de-software', label: 'LinkedIn' },
  { Icon: Icon.X, href: 'https://x.com/sasfec', label: 'Twitter' },
];