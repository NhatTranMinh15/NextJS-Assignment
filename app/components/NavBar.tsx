'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

type NavLink = {
    link: string;
    value: string | null;
    name: string;
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
        link: "//single-standard",
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
        link: "about",
        name: "About",
        children: null,
        value: 'about'
    }, {
        link: "contact",
        name: "Contact",
        children: null,
        value: 'contact'
    },
]

const Nav = (nav: NavLink, segment: string | null) => {
    return (
        <li key={nav.link + nav.name} className={(nav.children ? "has-children " : " ") + (segment === nav.value ? "current" : "")}>
            <Link href={nav.link} title="">{nav.name}</Link>
            {
                nav.children ? nav.children.map(n => {
                    return <ul key={"category-menu"} className="sub-menu">
                        {Nav(n, segment)}
                    </ul>
                }) : ""

            }
        </li>
    )

}

const NavBar = ({ children }: Props) => {
    const segment = useSelectedLayoutSegment()
    return (
        <nav id="main-nav-wrap">
            <ul className="main-navigation sf-menu">

                {
                    navLinks.map(nav => {
                        return Nav(nav, segment)
                    })
                }



                {/* <li className={segment === null ? "current" : ""}>
                    <Link href="/" title="">Home</Link>
                </li> */}
                {/* <li className={"has-children " + (segment === "category" ? "current" : "")}>
                    <Link className='has-children' href="category" title="">Categories</Link>
                    <ul key={"category-menu"} className="sub-menu">
                        {subCategories.map((subCate, index) => {
                            return <li key={subCate.link + subCate.name + index} ><Link href={subCate.link}>{subCate.name}</Link></li>
                        })}
                    </ul>
                </li> */}
                <li className={"has-children " + (segment === "blog" ? "current" : "")}>
                    <Link href="blog/single-standard" title="">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="blog/single-video">Video Post</Link></li>
                        <li><Link href="blog/single-audio">Audio Post</Link></li>
                        <li><Link href="blog/single-gallery">Gallery Post</Link></li>
                        <li><Link href="blog/single-standard">Standard Post</Link></li>
                    </ul>
                </li>
                {/* <li className={segment === "style-guide" ? "current" : ""}><Link href="style-guide" title="">Styles</Link></li> */}
                {/* <li className={segment === 'about' ? "current" : ""}><Link href="about" title="">About</Link></li> */}
                {/* <li className={segment === "contact" ? "current" : ""}><Link href="contact" title="">Contact</Link></li> */}
                {children}
            </ul>
        </nav>
    )
}

export default NavBar