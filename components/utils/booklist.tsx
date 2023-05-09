type book = {
	category: string;
	title: string;
	caption: string;
	description: string;
	image: string;
	published: string;
	link: string;
};

const booklist = [
	{
		category: 'scholarship',
		title: 'Life Writing and Schizophrenia',
		caption: 'Encounters at the Edge of Meaning',
		description: `How do you write your life story when readers expect you not to make sense? How do you write a case history that makes sense when, face to face with schizophrenia, your ability to tell a diagnostic story begins to fall apart? This book examines work in several genres of life writing–autobiography, memoir, case history, autobiographical fiction–focused either on what it means to live with schizophrenia or what it means to understand and ‘treat’ people who have received that diagnosis. Challenging the romanticized connection between literature and madness, Life Writing and Schizophrenia explores how writers who hear voices and experience delusions write their identities into narrative, despite popular and medical representations of schizophrenia as chaos, violence, and incoherence. The study juxtaposes these narratives to case histories by clinicians writing their encounters with those diagnosed with schizophrenia, encounters that call their own narrative authority and coherence into question.`,
		image: '/assets/images/life-writing-and-schizophrenia.jpg',
		published: 'January 1st, 2013',
		link: 'https://brill.com/display/title/28350?language=en'
	},
	{
		category: 'scholarship',
		title: 'The Writing on the Wall',
		caption: `Women's Autobiography and the Asylum`,
		description: `"She's mad!" But who defines madness? This book uses the autobiographies of five institutionalized women—Elizabeth Packard, Lydia Smith, Clarissa Lathrop, Jane Hillyer, and Zelda Fitzgerald—to explore questions of madness and female identity in late nineteenth- and early twentieth-centery America.`,
		image: '/assets/images/the-writing-on-the-wall.jpg',
		published: 'December 1st, 1994',
		link: 'https://www.amazon.com/Writing-Wall-WOMENS-AUTOBIOGRAPHY-ASYLUM/dp/0252063899'
	},
	{
		category: 'essay',
		title: 'Madness And Literature',
		caption: 'What Fiction Can Do for the \n Understanding of Mental Illness',
		description: `Mental illness has been a favourite topic for authors throughout the history of literature, while psychologists and psychiatrists such as Sigmund Freud and Karl Jaspers have in turn been interested in and influenced by literature. Pioneers within philosophy, psychiatry and literature share the endeavour to explore and explain the human mind and behaviour, including what a society deems as being outside perceived normality. \n\n Using a theoretical approach that is eclectic and transdisciplinary, this volume engages with literature’s multifarious ways of probing minds and bodies in a state of mental ill health. The cases and the theory are in dialogue with a clinical approach, addressing issues and diagnoses such as trauma, psychosis, bipolar disorder, eating disorders, self-harm, hoarding disorder, PTSD and Digital Sexual Assault. \n\n The chapters in Part I address literary representations of madness with a historical awareness, outlining the socio-political potentials of madness literature. Part II investigates how representations of mental illness in literature can offer unique insights into the subjective experience of alternative states of mind. Part III reflects on how literary cases can be applied to help inform mental health education, how they can be used therapeutically and how they are giving credence to new diagnoses. Throughout the book, the contributors consider how the language and discourses of literature—both stylistically and theoretically—can teach us something new about what it means to be mentally unwell.`,
		image: '/assets/images/madness-and-literature.jpg',
		published: 'October 3rd, 2022',
		link: 'https://www.exeterpress.co.uk/products/madness-and-literature'
	}
];

export default booklist;
