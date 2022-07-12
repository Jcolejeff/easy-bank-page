import icon1 from "./images/icon-online.svg";
import icon2 from "./images/icon-budgeting.svg";
import icon3 from "./images/icon-onboarding.svg";
import icon4 from "./images/icon-api.svg";
import image1 from "./images/image-currency2.jpg";
import image2 from "./images/image-restaurant.jpg";
import image3 from "./images/image-plane.jpg";
import image4 from "./images/image-confetti.jpg";
const services = [
	{
		id: 1,
		icon: icon1,

		title: "Online Banking",
		text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
	},
	{
		id: 2,
		icon: icon2,
		title: "Simple Budgeting",
		text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Fast Onboarding",
		text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away",
	},
	{
		id: 4,
		icon: icon4,
		title: " Open API",
		text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
];

export const articles = [
	{
		id: 1,
		image: image1,
		author: "Claire Robinson",
		title: "Receive money in any currency with no fees",
		text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
	},
	{
		id: 2,
		image: image2,
		author: "Wilson Hutton",
		title: "Treat yourself without worrying about money",
		text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
	},
	{
		id: 3,
		image: image3,
		author: "Wilson Hutton",
		title: " Take your Easybank card wherever you go",
		text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
	},
	{
		id: 4,
		image: image4,
		author: " Claire Robinson",
		title: " Our invite-only Beta accounts are now live!",
		text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
	},
];
export default services;
