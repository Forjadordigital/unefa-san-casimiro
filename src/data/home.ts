export type NavigationItem = {
	label: string;
	href: string;
};

export type QuickLink = {
	title: string;
	description: string;
	href: string;
	icon: string;
};

export type Notice = {
	title: string;
	summary: string;
	category: 'Inscripción' | 'Académico' | 'Administrativo' | 'Evento' | 'Comunicado' | 'Emergente';
	publishedAt: string;
	deadline?: string;
	priority: 'normal' | 'high' | 'urgent';
	href: string;
};

export type AcademicProgram = {
	name: string;
	slug: string;
	level: string;
	modality: string;
	summary: string;
	isActive: boolean;
	lastReviewedAt: string;
};

export type NewsItem = {
	title: string;
	summary: string;
	category: string;
	publishedAt: string;
	href: string;
};

export type EventItem = {
	title: string;
	date: string;
	type: string;
	location: string;
	time?: string;
	href?: string;
};

export type ContactInfo = {
	address: string;
	addressStatus: string;
	phone: string;
	email: string;
	attentionHours: string;
	mapHref: string;
};

export const siteIdentity = {
	shortName: 'UNEFA',
	extensionName: 'Extensión San Casimiro',
	nucleusName: 'Núcleo Aragua',
	fullName:
		'Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana',
	location: 'San Casimiro, estado Aragua, Venezuela',
};

export const navigationItems: NavigationItem[] = [
	{ label: 'Inicio', href: '/' },
	{ label: 'La Extensión', href: '#la-extension' },
	{ label: 'Oferta Académica', href: '#oferta-academica' },
	{ label: 'Noticias', href: '#noticias' },
	{ label: 'Aspirantes', href: '#aspirantes' },
	{ label: 'Estudiantes', href: '#avisos' },
	{ label: 'Contacto', href: '#contacto' },
];

export const heroContent = {
	title: 'UNEFA Extensión San Casimiro',
	subtitle: 'Formación universitaria al servicio de San Casimiro, Aragua y Venezuela.',
	description:
		'Conoce nuestra oferta académica, actividades institucionales, avisos para estudiantes y canales de contacto.',
	primaryCta: { label: 'Ver oferta académica', href: '#oferta-academica' },
	secondaryCta: { label: 'Información para aspirantes', href: '#aspirantes' },
};

export const quickLinks: QuickLink[] = [
	{
		title: 'Oferta académica',
		description: 'Conoce las carreras y programas disponibles en la extensión.',
		href: '#oferta-academica',
		icon: '▦',
	},
	{
		title: 'Aspirantes',
		description: 'Revisa información de ingreso, requisitos y orientación inicial.',
		href: '#aspirantes',
		icon: '→',
	},
	{
		title: 'Noticias y avisos',
		description: 'Mantente al día con comunicados y actividades institucionales.',
		href: '#avisos',
		icon: '!',
	},
	{
		title: 'Ubicación',
		description: 'Encuentra la sede y los canales de atención disponibles.',
		href: '#contacto',
		icon: '⌖',
	},
];

export const notices: Notice[] = [
	{
		title: 'Aviso pendiente de validación institucional',
		summary:
			'Este espacio queda preparado para publicar comunicados oficiales con fecha, categoría y prioridad verificadas por la extensión.',
		category: 'Comunicado',
		publishedAt: '8 de junio de 2026',
		priority: 'normal',
		href: '#avisos',
	},
];

export const academicPrograms: AcademicProgram[] = [
	{
		name: 'Administración y Gestión Municipal',
		slug: 'administracion-gestion-municipal',
		level: 'Programa por validar',
		modality: 'Modalidad por confirmar',
		summary:
			'Formación orientada a la gestión pública local y el fortalecimiento de procesos administrativos comunitarios.',
		isActive: true,
		lastReviewedAt: 'Oferta de referencia OPSU. Validar internamente antes de publicar como definitiva.',
	},
	{
		name: 'Análisis y Diseño de Sistemas',
		slug: 'analisis-diseno-sistemas',
		level: 'Técnica / por validar',
		modality: 'Modalidad por confirmar',
		summary:
			'Programa enfocado en fundamentos de análisis, documentación y construcción de soluciones informáticas.',
		isActive: true,
		lastReviewedAt: 'Oferta de referencia OPSU. Validar internamente antes de publicar como definitiva.',
	},
	{
		name: 'Economía Social',
		slug: 'economia-social',
		level: 'Programa por validar',
		modality: 'Modalidad por confirmar',
		summary:
			'Formación vinculada con procesos económicos comunitarios, organización social y desarrollo local.',
		isActive: true,
		lastReviewedAt: 'Oferta de referencia OPSU. Validar internamente antes de publicar como definitiva.',
	},
	{
		name: 'Ingeniería de Sistemas',
		slug: 'ingenieria-sistemas',
		level: 'Ingeniería',
		modality: 'Modalidad por confirmar',
		summary:
			'Formación orientada al análisis, diseño, desarrollo y gestión de soluciones tecnológicas.',
		isActive: true,
		lastReviewedAt: 'Oferta de referencia OPSU. Validar internamente antes de publicar como definitiva.',
	},
	{
		name: 'Ingeniería Mecánica',
		slug: 'ingenieria-mecanica',
		level: 'Ingeniería',
		modality: 'Modalidad por confirmar',
		summary:
			'Formación asociada a principios de diseño, mantenimiento y análisis de sistemas mecánicos.',
		isActive: true,
		lastReviewedAt: 'Oferta de referencia OPSU. Validar internamente antes de publicar como definitiva.',
	},
];

export const latestNews: NewsItem[] = [];

export const upcomingEvents: EventItem[] = [];

export const aspirantsSteps = [
	'Conoce la oferta académica disponible.',
	'Revisa los requisitos de ingreso cuando sean publicados oficialmente.',
	'Consulta procesos activos y fechas académicas confirmadas.',
	'Contacta a la extensión por canales institucionales validados.',
];

export const campusLifeHighlights = [
	{
		title: 'Actividades académicas',
		description: 'Espacio preparado para registrar clases abiertas, charlas y jornadas formativas.',
	},
	{
		title: 'Vinculación comunitaria',
		description: 'Sección lista para destacar actividades con la comunidad de San Casimiro.',
	},
	{
		title: 'Galería local',
		description: 'Usar fotografías reales autorizadas cuando estén disponibles.',
	},
];

export const contactInfo: ContactInfo = {
	address:
		'Sector Dos Quebradas, Calle Monseñor Lucas Castillo, edificio UNEFA, San Casimiro, estado Aragua, Venezuela.',
	addressStatus: 'Dirección base de referencia. Validar antes de publicar.',
	phone: 'Teléfono oficial por confirmar.',
	email: 'Correo institucional por confirmar.',
	attentionHours: 'Horario de atención por confirmar con coordinación.',
	mapHref: 'https://www.google.com/maps/search/?api=1&query=UNEFA%20San%20Casimiro%20Aragua',
};

export const institutionalLinks: NavigationItem[] = [
	{ label: 'Portal principal UNEFA', href: 'https://www.unefa.edu.ve/' },
	{ label: 'Oferta académica', href: '#oferta-academica' },
	{ label: 'Aspirantes', href: '#aspirantes' },
	{ label: 'Contacto', href: '#contacto' },
];

export const homeStructuredData = {
	'@context': 'https://schema.org',
	'@type': 'CollegeOrUniversity',
	name: `${siteIdentity.fullName} - ${siteIdentity.extensionName}`,
	alternateName: 'UNEFA San Casimiro',
	address: {
		'@type': 'PostalAddress',
		streetAddress: contactInfo.address,
		addressLocality: 'San Casimiro',
		addressRegion: 'Aragua',
		addressCountry: 'VE',
	},
};
