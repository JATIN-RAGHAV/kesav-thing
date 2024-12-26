import { MailtrapClient } from "mailtrap";

const sendEmail = (subject: string, text: string, category: string) => {
	const TOKEN = "063b053a17122fbf1db8f76a72335040";

	const client = new MailtrapClient({
		token: TOKEN,
	});

	const sender = {
		email: "hello@demomailtrap.com",
		name: "Mailtrap Test",
	};
	const recipients = [
		{
			email: "jrag137@gmail.com",
		}
	];

	client
		.send({
			from: sender,
			to: recipients,
			subject: subject,
			text: text,
			category: category,
		})
		.then(console.log, console.error);
}

export default sendEmail;
