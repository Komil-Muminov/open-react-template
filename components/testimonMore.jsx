import React from "react";

export const testimonMore = () => {
	return (
		<>
			<section className="testimonials-more-page" id="testimonMore">
				<div className="more-page-container">
					<div
						className="flex flex-col h-full p-6 bg-gray-800"
						data-aos="fade-up"
					>
						<div>
							<div className="flex flex-col mb-4">
								<div className="person-wrapper flex items-center  gap-3">
									<Image
										className="rounded-full"
										src={TesTestimonialImage01}
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
			</section>
		</>
	);
};
