
import moment from 'moment'

class Sample {

	constructor() {
		console.log(moment())
	}

	getUnix() {
		return moment().unix()
	}
}

export default Sample
