
if(window.i18next){
	window.i18next
	.use(window.i18nextXHRBackend);

	
	window.i18next.init({
		debug: true,
		lng: 'fr', // If not given, i18n will detect the browser language.
		fallbackLng: 'fr', // Default is dev
		//ns: ['englishLocale', 'frenchLocale'],
		//defaultNS: 'englishLocale',
		backend: {
			loadPath: '/app/i18/locales/{{lng}}/{{ns}}.json'
		},		
		useCookie: false,
		useLocalStorage: false
	}, function (err, t) {
		console.log('resources loaded');
	});	
} // end of if



