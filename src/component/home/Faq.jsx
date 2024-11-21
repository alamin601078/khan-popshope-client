

const Faq = () => {
    return (
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8"    >
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4"    >
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I track my order?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Once your order is shipped, you will receive an email with tracking information. You can use the tracking number to monitor the status of your order on the couriers website. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you offer free shipping?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We offer free shipping on orders over a certain amount. Please refer to our shipping policy page for specific details about eligibility for free shipping. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are your products authentic?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, all the products we sell are 100% authentic and come directly from trusted manufacturers and suppliers. </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Faq;