const nyan = require('@das.laboratory/nyan')();
const opts = {
	colors: true, // use colors instead of just raw ascii
	pure: true // use solid colors only
};

function template() {
	nyan(opts);
}

export default template;
