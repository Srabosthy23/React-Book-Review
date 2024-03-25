const FaqAboutBook = () => {
            return (
                <section className=" mt-10 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">How can I improve my reading speed?</summary>
                                <div className="px-4 pb-4">
                                    <p>You can improve your reading speed through practice and techniques such as minimizing subvocalization, using a pointer or your finger to guide your eyes, and avoiding regression (re-reading passages unnecessarily).</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What are some effective strategies for retaining what I read?</summary>
                                <div className="px-4 pb-4">
                                    <p>Effective strategies for retaining information include active reading (e.g., taking notes, highlighting key points), summarizing sections after reading them, and reviewing material periodically.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What is the best time of day to read?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>The best time to read varies for each individual. Some prefer reading in the morning to start their day, while others enjoy reading in the evening as a way to unwind before bed. Experiment with different times to find what works best for you.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Should I read multiple books at once?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Reading multiple books at once is a personal preference. Some find it enriching to read multiple books concurrently, while others prefer focusing on one book at a time. Experiment to see what approach helps you maintain engagement and enjoyment.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What are the benefits of reading fiction vs. non-fiction?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Fiction can foster empathy, creativity, and emotional intelligence, while non-fiction can provide knowledge, insights, and practical skills. Both genres offer unique benefits, and the choice depends on your preferences and goals.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            );
        };

export default FaqAboutBook;