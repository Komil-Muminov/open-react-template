export const metadata = {
	title: "Home - Open PRO",
	description: "Page description",
};

import Navigation from "@/components/Navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<Features />
			<Zigzag />
			<Testimonials />

			<Newsletter />
		</>
	);
}
