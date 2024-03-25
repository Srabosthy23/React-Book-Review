const Review = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-8 shadow-sm rounded-xl mt-10 lg:p-12 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience by Reading Books?</span>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-sky-400">Leave feedback</button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <button className="btn w-full hover:bg-green-500">Maybe Later</button>
            </div>
        </div>
    );
};

export default Review;