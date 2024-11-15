'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ReactNode } from 'react'
import { TLink } from '../models/General'
import { Session } from 'next-auth'
import Search from './Search'


type NavLink = TLink & {
    value: string | null;
    children: NavLink[] | null
}

const subCategories: NavLink[] = [
    {
        link: "/category",
        name: "Wordpress",
        children: null,
        value: 'category'
    },
    {
        link: "/category",
        name: "HTML",
        children: null,
        value: 'category'
    },
    {
        link: "/category",
        name: "Photography",
        children: null,
        value: 'category'
    },
    {
        link: "/category",
        name: "UI",
        children: null,
        value: 'category'
    },
    {
        link: "/category",
        name: "Mockups",
        children: null,
        value: 'category'
    },
    {
        link: "/category",
        name: "Branding",
        children: null,
        value: 'category'
    },
]
const subBlogs: NavLink[] = [
    {
        link: "/blog/single-video",
        name: "Video Post",
        children: null,
        value: 'blog'
    },
    {
        link: "/blog/single-audio",
        name: "Audio Post",
        children: null,
        value: 'blog'
    },
    {
        link: "/blog/single-gallery",
        name: "Gallery Post",
        children: null,
        value: 'blog'
    },
    {
        link: "/blog/single-standard",
        name: "Standard Post",
        children: null,
        value: 'blog'
    },
]

const navLinks: NavLink[] = [
    {
        link: "/",
        name: "Home",
        children: null,
        value: null
    },
    {
        link: "/category",
        name: "Category",
        children: subCategories,
        value: 'category'
    },
    {
        link: "/blog/single-standard",
        name: "Blog",
        children: subBlogs,
        value: 'blog'
    },
    {
        link: "/style-guide",
        name: "Style",
        children: null,
        value: 'style-guide'
    }, {
        link: "/about",
        name: "About",
        children: null,
        value: 'about'
    }, {
        link: "/contact",
        name: "Contact",
        children: null,
        value: 'contact'
    }
]

type Props = {
    children: ReactNode,
}

const Nav = (nav: NavLink, segment: string | null) => {
    return (
        <li key={nav.link + nav.name} className={(nav.children ? "has-children " : " ") + (segment === nav.value ? "current" : "")}>
            <Link href={nav.link} title="">{nav.name}</Link>
            {
                nav.children ?
                    <ul key={"category-menu"} className="sub-menu">
                        {
                            nav.children.map(n => (Nav(n, null)))
                        }
                    </ul>
                    : ""
            }
        </li>
    )

}

const NavBar = ({ children }: Props) => {
    const segment = useSelectedLayoutSegment()
    return (
        <nav id="main-nav-wrap" className='flex flex-row float-right items-center'>
            <Search></Search>
            <ul className="main-navigation mb-0">
                {
                    navLinks.map(nav => {
                        return Nav(nav, segment)
                    })
                }
                <li className={"has-children " + ((segment === "admin") || (segment === "auth") ? "current" : "")}>
                    {children}
                </li>

            </ul>
        </nav>
    )
}

export default NavBar