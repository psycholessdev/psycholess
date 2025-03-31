import './style.css'
import Header from "@/app/ui/components/header/Header"
import Avatar from "@/app/(pages)/components/Avatar"
import Skill from "./components/Skill"
import LinkButton from "./components/LinkButton"
import Borders from "./components/Borders"
import AnimeSketch from "./components/AnimeSketch"
import Fact from "./components/Fact"
import * as motion from "motion/react-client"

export default function Home() {
    return (
        <>
            <Header/>
            <div className="w-full flex flex-col">
                <div className="w-full h-full flex flex-col lg:pt-[93px] pt-[66px]">
                    <div className="w-full flex justify-end">
                        <div className="w-full h-full flex items-center md:p-[50px] p-[20px]">

                        </div>
                        <Avatar/>
                    </div>

                    <div
                        className="h-auto flex flex-col box-border lg:mx-[84px] sm:mx-[40px] mx-[25px] lg:pb-[20px] pb-[10px]">
                        <h1
                            className="font-inknut bg-clip-text [-webkit-text-fill-color:transparent] bg-[linear-gradient(180deg,#ffffff,#adadad)] lg:text-7xl md:text-5xl sm:text-5xl text-4xl text-white font-medium leading-[100%] select-none">Full-stack
                            Web Developer
                        </h1>
                        <div className="relative">
                            <AnimeSketch/>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut'
                            }}
                            className="font-ubuntu lg:text-2xl md:text-xl text-sm text-[#88888C] mt-2">
                            A full-stack web developer is a person who can develop both client and server software
                        </motion.div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                    delay: 0.1
                            }}>
                                <Borders className="lg:my-[25px] md:my-[20px] sm:my-[24px] my-[25px] hover:bg-[#2e2e2e4d]">
                                    <div className="flex flex-wrap md:gap-[22px] gap-[10px] sm:justify-start justify-center">
                                        <Fact icon="/icons/person.svg" title="Dmitriy" />
                                        <Fact icon="/icons/country.svg" title="Russia">
                                            Residing in Russia, open to relocation globally.
                                        </Fact>
                                        <Fact icon="/icons/keyboard.svg" title="Computer Sience">
                                            Proficient in building scalable and efficient web applications using a modern technology stack.
                                        </Fact>
                                        <Fact icon="/icons/language.svg" title="Russian, English">
                                            Russian C2 (Native speaker)<br/>
                                            English B2 (Upper-Intermediate)
                                        </Fact>
                                        <Fact icon="/icons/time.svg" title="2 years of Experience">
                                            2+ years building web applications with JavaScript/TypeScript, React, Node.js, and backend technologies.
                                        </Fact>
                                        <Fact icon="/icons/database.svg" title="Database Proficiency">
                                            Experience in database design and management with MySQL and PostgreSQL
                                        </Fact>
                                        <Fact icon="/images/skills-software/forward-slash.png" title="API Design and Development">
                                            Designed and implemented RESTful APIs following best practices for scalability and maintainability.
                                        </Fact>
                                        <Fact icon="/icons/wrench.svg" title="Highly experienced with: JS/TS, React"/>
                                    </div>
                                </Borders>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: 'easeInOut',
                                    delay: 0.2
                                }}>
                                <h2
                                    className="font-ubuntu text-xl text-white mb-3">Skills
                                </h2>
                                <div className="flex flex-wrap items-center w-full gap-[6px]">
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/JavaScript"
                                        image="/images/skills-software/javascript.png"
                                        name="Javascript">
                                        <b>JavaScript:</b> The lifeblood of interactive websites. JavaScript makes your website
                                        dynamic, allowing for engaging animations, interactive forms, and a better overall user
                                        experience. This leads to happier customers who are more likely to convert. Think of it
                                        as the engine that brings your website to life.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/TypeScript"
                                        image="/images/skills-software/typescript.png"
                                        name="Typescript">
                                        <b>TypeScript</b> A robust version of JavaScript that helps us build complex websites
                                        with fewer errors. This means faster development, a more reliable website, and
                                        ultimately, less time and money spent on fixing problems down the road. It&apos;s like
                                        having a quality control system built into the development process.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/PHP"
                                        image="/images/skills-software/php.png"
                                        name="PHP">
                                        <b>PHP</b> A powerful language often used for server-side logic, powering things like
                                        contact forms, user logins, and e-commerce functionality. PHP helps us build secure and
                                        efficient websites that can handle user input and dynamic content, keeping your data
                                        safe and your website running smoothly.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Docker_(software)"
                                        image="/images/skills-software/docker.png"
                                        name="Docker">
                                        <b>Docker</b> helps us deliver your website reliably and consistently. It&apos;s like a
                                        shipping container for your website&apos;s code and everything it needs to run. This means
                                        your website will work the same way, no matter where it&apos;s hosted, reducing the chance of
                                        errors and making updates smoother and faster. This translates to less downtime and a
                                        more reliable online experience for your customers.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Node.js"
                                        image="/images/skills-software/nodejs.png"
                                        name="Node.js">
                                        <b>Node.js</b> Allows us to use JavaScript on the server-side, enabling fast and
                                        scalable websites and applications. This translates to better performance for your
                                        website, even under heavy traffic, giving your customers a seamless experience. It also
                                        streamlines development, saving time and costs.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Next.js"
                                        image="/images/skills-software/nextjs.png"
                                        name="Next.js">
                                        <b>Next.js</b> A framework built on React that allows us to create faster, more
                                        SEO-friendly websites. This means your website will load quickly for visitors and rank
                                        higher in search engine results, bringing in more potential customers. It&apos;s like
                                        giving your website a boost in speed and visibility.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/React_(software)"
                                        image="/images/skills-software/react.png"
                                        name="React">
                                        <b>React</b> A powerful library for building interactive user interfaces. React helps us
                                        create websites that are dynamic, responsive, and easy to navigate. This leads to a more
                                        engaging user experience, keeping visitors on your site longer and increasing
                                        conversions.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Tailwind_CSS"
                                        image="/images/skills-software/tailwind.png"
                                        name="Tailwind">
                                        <b>Tailwind CSS</b> A modern approach to styling websites that allows for rapid
                                        development and consistent design. We can create a custom, visually appealing website
                                        that reflects your brand quickly and efficiently. It prioritizes a modern and responsive
                                        design.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/SQL"
                                        image="/images/skills-software/database_icon.png"
                                        name="SQL">
                                        Think of <b>SQL</b> as the language we use to manage and organize all the information on your website, like product details, customer information, and inventory. It&lsquo;s the engine that allows us to quickly access, update, and analyze your data. This means faster loading times for your customers, accurate information displayed on your site, and the ability for you to easily track your business performance.  By using SQL, we ensure your website is efficient, reliable, and data-driven, helping you make informed business decisions
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/MySQL"
                                        image="/images/skills-software/mysql.png"
                                        name="MySQL">
                                        <b>MySQL</b> reliable database system for storing and managing your website&apos;s data.
                                        MySQL ensures your customer data, product information, and website content are stored
                                        securely and efficiently. This allows for quick retrieval of information, ensuring a
                                        smooth and personalized experience for your users, and secure data management.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/PostgreSQL"
                                        image="/images/skills-software/postgresql.png"
                                        name="PostgreSQL">
                                        <b>PostgreSQL</b> is a powerful and reliable database that securely stores all the
                                        information on your website – everything from product details to customer orders. It&apos;s
                                        built to handle large amounts of data and ensures your website runs smoothly and
                                        efficiently, even as your business grows. It can store information and keep your data
                                        safe.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Git"
                                        image="/images/skills-software/git.png"
                                        name="Git">
                                        <b>Git</b> is a system we use to carefully track all the changes we make to your
                                        website&apos;s code. It&apos;s like a safety net that allows us to easily undo mistakes,
                                        experiment with new features, and work together efficiently as a team. This ensures a
                                        smoother development process, reduces the risk of errors, and ultimately delivers a
                                        higher-quality website for you.
                                    </Skill>
                                    <Skill
                                        officialSite="https://www.linkedin.com/company/linearapp"
                                        image="/images/skills-software/linear-app.png"
                                        name="Linear">
                                        <b>Linear</b> is a project management system that helps us stay organized and efficient while building and maintaining your website. It&lsquo;s like a central hub where we track every task, bug fix, and new feature. This means better communication, fewer missed deadlines, and ultimately, a faster turnaround time for your project.  With Linear, you can rest assured that your website is being developed in a structured and transparent way, leading to a more reliable and feature-rich online presence.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/REST"
                                        image="/images/skills-software/cloud-white.png"
                                        name="RESTful API">
                                        <b>RESTful APIs</b> are like standardized messengers that allow your website and other applications (like mobile apps or other websites) to communicate smoothly and efficiently.  We use them to connect different parts of your website or to integrate your website with other services, such as payment gateways, social media platforms, or marketing tools.  This allows for a seamless user experience, enhanced functionality, and easier scalability as your business grows.  It also means we can easily update and maintain your website without disrupting other services.
                                    </Skill>
                                    <Skill
                                        officialSite="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                                        image="/images/skills-software/forward-slash.png"
                                        name="DRY principle">
                                        <b>DRY Principle</b> (Don&apos;t Repeat Yourself) is our commitment to writing clean, efficient code for your website.  It means we avoid repeating the same code in multiple places.  This saves time and effort during development and makes your website easier to maintain and update in the future.  Imagine it like building with reusable blocks instead of creating everything from scratch each time.  Ultimately, this results in a more robust, cost-effective website that&apos;s easier to adapt as your business needs change.
                                    </Skill>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="mx-[50px] text-[#333333]"/>
                <div
                    className="flex gap-3 w-full lg:py-[30px] md:py-[20px] py-[12px] lg:mx-[84px] sm:mx-[40px] mx-[25px]">
                    <LinkButton
                        href="https://t.me/psycholessdev"
                        icon="/icons/telegram-icon.png"
                        label="Telegram"
                        newTab={true}
                    />
                    <LinkButton
                        href="https://github.com/psycholessdev"
                        icon="/icons/github-icon.png"
                        label="GitHub"
                        newTab={true}
                    />
                </div>
            </div>
        </>
    )
}
