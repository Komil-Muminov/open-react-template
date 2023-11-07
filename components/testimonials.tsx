"use client";
import Image from "next/image";
import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
export default function Testimonials() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-t border-gray-800">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">Don't take our word for it</h2>
						<p className="text-xl text-gray-400">
							Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
							semper quis lectus nulla at volutpat diam ut venenatis tellus—in
							ornare.
						</p>
					</div>

					{/* Testimonials */}
					<div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
						{/* 1st testimonial */}
						<div
							className="flex flex-col h-full p-6 bg-gray-800 rounded-lg"
							data-aos="fade-up"
						>
							<div>
								<div className="flex flex-col mb-4">
									<div className="person-wrapper flex items-center  gap-3">
										<Image
											className="rounded-full"
											src={TestimonialImage01}
											width={48}
											height={48}
											alt="Testimonial 01"
										/>
										<cite className="text-gray-200 not-italic">
											Anastasia Dan
										</cite>{" "}
									</div>
								</div>
							</div>
							<blockquote className="text-lg text-gray-400 grow">
								—Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium mollitia corporis nesciunt, hic delectus modi
								reiciendis commodi est quae sunt similique quis molestias
								quibusdam illum quia ratione repellat ipsum expedita!
							</blockquote>
							<div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
								<a
									className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
									href="#0"
								>
									Подробнее
								</a>
							</div>
						</div>

						{/* 2nd testimonial */}
						<div
							className="flex flex-col h-full p-6 bg-gray-800 rounded-lg"
							data-aos="fade-up"
						>
							<div>
								<div className="flex flex-col mb-4">
									<div className="person-wrapper flex items-center  gap-3">
										<Image
											className="rounded-full"
											src={TestimonialImage01}
											width={48}
											height={48}
											alt="Testimonial 01"
										/>
										<cite className="text-gray-200 not-italic">
											Anastasia Dan
										</cite>{" "}
									</div>
								</div>
							</div>
							<blockquote className="text-lg text-gray-400 grow">
								—Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium mollitia corporis nesciunt, hic delectus modi
								reiciendis commodi est quae sunt similique quis molestias
								quibusdam illum quia ratione repellat ipsum expedita!
							</blockquote>
							<div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
								-{" "}
								<a
									className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
									href="#0"
								>
									Подробнее
								</a>
							</div>
						</div>

						{/* 3rd testimonial */}
						<div
							className="flex flex-col h-full p-6 bg-gray-800 rounded-lg"
							data-aos="fade-up"
						>
							<div>
								<div className="flex flex-col mb-4">
									<div className="person-wrapper flex items-center  gap-3">
										<Image
											className="rounded-full"
											src={TestimonialImage01}
											width={48}
											height={48}
											alt="Testimonial 01"
										/>
										<cite className="text-gray-200 not-italic">
											Anastasia Dan
										</cite>{" "}
									</div>
								</div>
							</div>
							<blockquote className="text-lg text-gray-400 grow">
								—Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium mollitia corporis nesciunt, hic delectus modi
								reiciendis commodi est quae sunt similique quis molestias
								quibusdam illum quia ratione repellat ipsum expedita!
							</blockquote>
							<div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
								-{" "}
								<a
									className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
									href="#0"
								>
									Подробнее
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
