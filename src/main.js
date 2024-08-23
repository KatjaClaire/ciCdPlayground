import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Katja Koerner',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'(automated) pipeline for robust integration of changes into deployable code'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'GitHub Actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'more about Jenkins and the basics of CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'painting', 
			'crafting',
			'reading books',
			'music'
		]
	}
});
