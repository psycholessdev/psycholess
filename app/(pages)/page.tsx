import './style.css'
import Header from "@/app/ui/components/header/Header"
import Avatar from "@/app/(pages)/components/Avatar"
import Skill from "./components/Skill"
import LinkButton from "@/app/(pages)/components/LinkButton"
import nodejsIcon from "./images/software/nodejs.png"
import javascriptIcon from "./images/software/javascript.png"
import typescriptIcon from "./images/software/typescript.png"
import reactIcon from "./images/software/react.png"
import phpIcon from "./images/software/php.png"
import mysqlIcon from "./images/software/mysql.png"
import nextjsIcon from "./images/software/nextjs.png"
import tailwindIcon from "./images/software/tailwind.png"

export default function Home() {
    return (
        <>
            <Header/>
            <div className="w-full h-[100vh] flex flex-col">
                <div className="w-full h-full flex flex-col pt-[93px]">

                    <div className="w-full h-full flex justify-end">
                        <div className="w-full h-full grid-pattern"/>
                        <Avatar/>
                    </div>

                    <div className="w-full h-auto flex flex-col box-border mx-[84px] py-[50px]">
                        <div
                            className="font-inknut text-7xl text-white font-medium leading-[100%] pb-[25px] select-none">Fullstack
                            Web Developer
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/JavaScript"
                                image={javascriptIcon}
                                name="Javascript">
                                <b>JavaScript:</b> The lifeblood of interactive websites. JavaScript makes your website dynamic, allowing for engaging animations, interactive forms, and a better overall user experience. This leads to happier customers who are more likely to convert. Think of it as the engine that brings your website to life.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/TypeScript"
                                image={typescriptIcon}
                                name="Typescript">
                                <b>TypeScript</b> A robust version of JavaScript that helps us build complex websites with fewer errors. This means faster development, a more reliable website, and ultimately, less time and money spent on fixing problems down the road. It&apos;s like having a quality control system built into the development process.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/PHP"
                                image={phpIcon}
                                name="PHP">
                                <b>PHP</b> A powerful language often used for server-side logic, powering things like contact forms, user logins, and e-commerce functionality. PHP helps us build secure and efficient websites that can handle user input and dynamic content, keeping your data safe and your website running smoothly.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/Node.js"
                                image={nodejsIcon}
                                name="Node.js">
                                <b>Node.js</b> Allows us to use JavaScript on the server-side, enabling fast and scalable websites and applications. This translates to better performance for your website, even under heavy traffic, giving your customers a seamless experience.  It also streamlines development, saving time and costs.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/Next.js"
                                image={nextjsIcon}
                                name="Next.js">
                                <b>Next.js</b> A framework built on React that allows us to create faster, more SEO-friendly websites. This means your website will load quickly for visitors and rank higher in search engine results, bringing in more potential customers. It&apos;s like giving your website a boost in speed and visibility.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/React_(software)"
                                image={reactIcon}
                                name="React">
                                <b>React</b> A powerful library for building interactive user interfaces. React helps us create websites that are dynamic, responsive, and easy to navigate. This leads to a more engaging user experience, keeping visitors on your site longer and increasing conversions.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/MySQL"
                                image={mysqlIcon}
                                name="MySQL">
                                <b>MySQL</b> reliable database system for storing and managing your website&apos;s data. MySQL ensures your customer data, product information, and website content are stored securely and efficiently. This allows for quick retrieval of information, ensuring a smooth and personalized experience for your users, and secure data management.
                            </Skill>
                            <Skill
                                officialSite="https://en.wikipedia.org/wiki/Tailwind_CSS"
                                image={tailwindIcon}
                                name="Tailwind">
                                <b>Tailwind CSS</b> A modern approach to styling websites that allows for rapid development and consistent design. We can create a custom, visually appealing website that reflects your brand quickly and efficiently. It prioritizes a modern and responsive design.
                            </Skill>
                        </div>
                    </div>
                </div>
                <hr className="mx-[50px] text-[#333333]"/>
                <div
                    className="flex gap-3 w-full py-[30px] px-[84px] bg-[linear-gradient(0deg,rgba(26,26,26,1)_0%,rgba(26,26,26,0)_100%)]">
                    <LinkButton
                        href="https://t.me/imapsycholess"
                        icon="/icons/telegram-icon.png"
                        label="Telegram"
                        newTab={true}
                    />
                    <LinkButton
                        href="https://github.com/req-dev"
                        icon="/icons/github-icon.png"
                        label="GitHub"
                        newTab={true}
                    />
                </div>
            </div>
        </>
    )
}
