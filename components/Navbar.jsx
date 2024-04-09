import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                    <Link href="/">
                        <Image src="/assets/logo.svg" width={139} height={26} alt="Logo" />
                    </Link>
                <ul className="flex items-center space-x-5">
                    <li>
                        <Link href="#" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <Image src="/assets/ring.svg" width={24} height={24} alt="Ring" />
                        </Link>
                    </li>
                    <li>
                        <Link  href="#" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <Image src="/assets/icons/sun.svg" width={24} height={24} alt="Sun" />
                        </Link>
                    </li>
                    <li>
                        <Link  href="#" className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <Image src="/assets/shopping-cart.svg" width={24} height={24} alt="Shopping Cart" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
