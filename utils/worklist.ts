type work = {
	category: string;
	sub: string;
	title: string;
	caption: string;
	description: string;
	preview: string;
	image: string;
	published: string;
	link: string;
	table: string[];
};

const worklist: work[] = [
	{
		category: 'scholarship',
		sub: 'books',
		title: 'Life Writing and Schizophrenia',
		caption: 'Encounters at the Edge of Meaning',
		description: `How do you write your life story when readers expect you not to make sense? How do you write a case history that makes sense when, face to face with schizophrenia, your ability to tell a diagnostic story begins to fall apart? This book examines work in several genres of life writing–autobiography, memoir, case history, autobiographical fiction–focused either on what it means to live with schizophrenia or what it means to understand and ‘treat’ people who have received that diagnosis. Challenging the romanticized connection between literature and madness, Life Writing and Schizophrenia explores how writers who hear voices and experience delusions write their identities into narrative, despite popular and medical representations of schizophrenia as chaos, violence, and incoherence. The study juxtaposes these narratives to case histories by clinicians writing their encounters with those diagnosed with schizophrenia, encounters that call their own narrative authority and coherence into question.`,
		preview: `How do you write your life story when readers expect you not to make sense? How do you write a case history that makes sense when, face to face with schizophrenia, your ability to tell a diagnostic story begins to fall apart?`,
		image: '/assets/images/life-writing-and-schizophrenia.jpg',
		published: 'January 1st, 2013',
		link: 'https://brill.com/display/title/28350?language=en',
		table: []
	},
	{
		category: 'scholarship',
		sub: 'books',
		title: 'The Writing on the Wall',
		caption: `Women's Autobiography and the Asylum`,
		description: `"She's mad!" But who defines madness? This book uses the autobiographies of five institutionalized women—Elizabeth Packard, Lydia Smith, Clarissa Lathrop, Jane Hillyer, and Zelda Fitzgerald—to explore questions of madness and female identity in late nineteenth- and early twentieth-centery America.`,
		preview: `"She's mad!" But who defines madness? This book uses the autobiographies of five institutionalized women—Elizabeth Packard, Lydia Smith, Clarissa Lathrop, Jane Hillyer, and Zelda Fitzgerald—to explore questions of madness and female identity in late nineteenth- and early twentieth-centery America.`,
		image: '/assets/images/the-writing-on-the-wall.jpg',
		published: 'December 1st, 1994',
		link: 'https://www.amazon.com/Writing-Wall-WOMENS-AUTOBIOGRAPHY-ASYLUM/dp/0252063899',
		table: []
	},
	{
		category: 'scholarship',
		sub: 'essays & articles',
		title: 'Madness And Literature',
		caption: 'What Fiction Can Do for the \n Understanding of Mental Illness',
		description: `Mental illness has been a favourite topic for authors throughout the history of literature, while psychologists and psychiatrists such as Sigmund Freud and Karl Jaspers have in turn been interested in and influenced by literature. Pioneers within philosophy, psychiatry and literature share the endeavour to explore and explain the human mind and behaviour, including what a society deems as being outside perceived normality. \n\n Using a theoretical approach that is eclectic and transdisciplinary, this volume engages with literature’s multifarious ways of probing minds and bodies in a state of mental ill health. The cases and the theory are in dialogue with a clinical approach, addressing issues and diagnoses such as trauma, psychosis, bipolar disorder, eating disorders, self-harm, hoarding disorder, PTSD and Digital Sexual Assault. \n\n The chapters in Part I address literary representations of madness with a historical awareness, outlining the socio-political potentials of madness literature. Part II investigates how representations of mental illness in literature can offer unique insights into the subjective experience of alternative states of mind. Part III reflects on how literary cases can be applied to help inform mental health education, how they can be used therapeutically and how they are giving credence to new diagnoses. Throughout the book, the contributors consider how the language and discourses of literature—both stylistically and theoretically—can teach us something new about what it means to be mentally unwell.`,
		preview: `Mental illness has been a favourite topic for authors throughout the history of literature, while psychologists and psychiatrists such as Sigmund Freud and Karl Jaspers have in turn been interested in and influenced by literature. Pioneers within philosophy, psychiatry and literature share the endeavour to explore and explain the human mind and behaviour, including what a society deems as being outside perceived normality. \n\n Using a theoretical approach that is eclectic and transdisciplinary, this volume engages with literature’s multifarious ways of probing minds and bodies in a state of mental ill health. The cases and the theory are in dialogue with a clinical approach, addressing issues and diagnoses such as trauma, psychosis, bipolar disorder, eating disorders, self-harm, hoarding disorder, PTSD and Digital Sexual Assault. \n\n The chapters in Part I address literary representations of madness with a historical awareness, outlining the socio-political potentials of madness literature. Part II investigates how representations of mental illness in literature can offer unique insights into the subjective experience of alternative states of mind. Part III reflects on how literary cases can be applied to help inform mental health education, how they can be used therapeutically and how they are giving credence to new diagnoses. Throughout the book, the contributors consider how the language and discourses of literature—both stylistically and theoretically—can teach us something new about what it means to be mentally unwell.`,
		image: '/assets/images/madness-and-literature.jpg',
		published: 'October 3rd, 2022',
		link: 'https://www.exeterpress.co.uk/products/madness-and-literature',
		table: [`Part I: Literary History and Socio-Political Perspectives`, `Layla and Majnun in Historical and Contemporary Conceptions of Madness in Islamic Psychology Alan Weber`, `The Anti-Psychiatry Ethos in Samuel Beckett’s Murphy Shoshana Benjamin`, `Apartheid’s Garden: Dismantling Madness in J.M. Coetzee’s Life & Times of Michael K Sebastian C. Galbo`, `Sniffs and Dribblers: Poppy Shakespeare and the Identities of Madness Clare Allan`, `Part II: Literary Theory and Experiencing Mental Illness`, `Reading Shattering Minds and Extended Selves in Virginia Woolf’s Mrs Dalloway Anna Ovaska`, `Spill the Words: Speechlessness and Creativity in the Writing of Janet Frame Mary Elene Wood`, `Pronominal Shifts and the Confusion of Self with Not-Self Alice Hervé`, `Rethinking Clinical and Critical Perspectives on Psychosis in Kathy Acker’s Writing Charley Baker`, `Countering the DSM in Poetry about Bipolar Disorder Lasse Raaby Gammelgaard`, `Seeing Feeling: Dissociation and Post-Traumatic Memory in the Graphic Novel Perfect Hair Penni Russon`, `Part III: Literary Instrumentality and Clinical Psychopathology`, `Writing Therapy, Writing Data: Therapeutic Writing as a Methodological and Ethical Approach in Researching Digital Sexual Assault Signe Uldbjerg`, `A Question of Context: Sites for Cultural Negotiation in Narratives of Manic Depression Megan Milota`, `Conscripting Dante: History, Anachronism, and the Uses of Literary Precedents in the ‘New’ Diagnosis of Hoarding Disorder David Orr`, `Opening Up the Discourse of Male Eating Disorders: Personal Experience in German and English Narratives Heike Bartel`]
	},
	{
		category: 'scholarship',
		sub: 'essays & articles',
		title: 'Affective Materialities',
		caption: 'Reorienting the Body in Modernist Literature',
		description: `Affective Materialities reexamines modernist theorizations of the body and opens up the artistic, political, and ethical possibilities at the intersection of affect theory and ecocriticism, two recent directions in literary studies not typically brought into conversation. \n\nModernist creativity, the volume proposes, may return to us notions of the feeling, material body that contemporary scholarship has lost touch with, bodies that suggest alternative relations to others and to the world. Contributors argue that modernist writers frequently bridge the dichotomy between body and world by portraying bodies that merge with or are re-created by their surroundings into an amalgam of self and place. Chapters focus on this treatment of the body through works by canonical modernists including William Carlos Williams, Virginia Woolf, and E. M. Forster alongside lesser-studied writers Janet Frame, Herbert Read, and Nella Larsen. \n\nShowing the ways the body in literature can be a lens for understanding the fluidities of race, gender, and sexuality, as well as species and subjectivity, this volume maps the connections among modernist aesthetics, histories of the twentieth-century body, and the concerns of modernism that can also speak to urgent concerns of today.`,
		preview: `Affective Materialities reexamines modernist theorizations of the body and opens up the artistic, political, and ethical possibilities at the intersection of affect theory and ecocriticism, two recent directions in literary studies not typically brought into conversation. \n\nModernist creativity, the volume proposes, may return to us notions of the feeling, material body that contemporary scholarship has lost touch with, bodies that suggest alternative relations to others and to the world. Contributors argue that modernist writers frequently bridge the dichotomy between body and world by portraying bodies that merge with or are re-created by their surroundings into an amalgam of self and place. Chapters focus on this treatment of the body through works by canonical modernists including William Carlos Williams, Virginia Woolf, and E. M. Forster alongside lesser-studied writers Janet Frame, Herbert Read, and Nella Larsen. \n\nShowing the ways the body in literature can be a lens for understanding the fluidities of race, gender, and sexuality, as well as species and subjectivity, this volume maps the connections among modernist aesthetics, histories of the twentieth-century body, and the concerns of modernism that can also speak to urgent concerns of today.`,
		image: '/assets/images/affective-materialities.jpg',
		published: 'April 2nd, 2019',
		link: 'https://upf.com/book.asp?id=9780813056289',
		table: [`Into the Ether: An Invitation to Bodily Reorientations 1 Molly Volanth Hall and Kara Watts`, `Flesh over Granite: Walt Whitman’s Embodied Presence in William Carlos Williams’s “History” 33 Karen Guendel`, `E. M. Forster among the Ruins 55 Stuart Christie`, `“‘I’m not sick,’ I said. ‘I’m wounded’”: Disrupting Wounded Masculinity through the Lyrical Spaces of War 79 Cheryl Hindrichs`, `Frustrated Energies in Modernism’s Female Arrangements 103 Judith Paltin`, `“Things were in people, people were in things”: Language, Ecology, and the Body in H.D. 123 Kim Sigouin`, `Cold Crystal: The Ecology of Affect in Herbert Read’s The Green Child 147 William Kupinse`, `“I wanna be your puppy”: Djuna Barnes’s Nightwood and the Queer Cute Body 172 Anna Christine`, `The Brain and the Living World in Janet Frame’s Faces in the Water 192 Mary Elene Wood`, `“Becoming Animal, Becoming Other”: Modernism, Millennial Jurisprudence, and the Limits of Materialist Subjectivity 213 Kathryn Van Wert`, `Black Girls and Lady Police: Blank Affect and the Ecology of the Gym 236 Robin Hackett`]
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: 'Chapter One from novel The Blue Edge (2023)',
		caption: 'Honorable Mention Gutsy Great Novelist Chapter One Prize',
		description: ``,
		preview: ``,
		image: '',
		published: '2023',
		link: 'https://gutsygreatnovelist.com/winners-2023/',
		table: []
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: '“Emissary From the Burning World,”',
		caption: 'Club Plum Journal (4: 2, April 2023)',
		description: ``,
		preview: ``,
		image: '',
		published: 'April 2nd, 2023',
		link: 'https://clubplumliteraryjournal.com/mary-wood/',
		table: []
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: '“Oracle, Puppetmaster, Tailor,”',
		caption: 'Midway Journal (15: 2, April 15, 2021)',
		description: ``,
		preview: ``,
		image: '',
		published: 'April 15th, 2021',
		link: 'https://midwayjournal.com/oracle-puppetmaster-tailor/',
		table: []
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: '“Just Jump It”',
		caption: 'in The Capra Review (Spring 2018)',
		description: ``,
		preview: ``,
		image: '',
		published: 'Spring 2018',
		link: '',
		table: []
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: '“Tsunami,”',
		caption: 'in The Missouri Review (23:3, 2000)',
		description: ``,
		preview: ``,
		image: '',
		published: 'March 2000',
		link: '',
		table: []
	},
	{
		category: 'creative work',
		sub: 'creative work',
		title: '"Maps of Beauty and Disease,"',
		caption: 'in British Journal of Medical Ethics (under the pseudonym Mary E. Ladd) (36:8, August 2010)',
		description: ``,
		preview: ``,
		image: '',
		published: 'August 8th, 2010',
		link: '',
		table: []
	}
];

export default worklist;
