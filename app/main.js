
import Sample from './js/models/Sample.js'
import style from './sass/style.scss'

const sample = new Sample

console.log(sample.getUnix())
console.log('success')

window.sample = sample
window.sample2 = {
	config: sample,
}

window.sample3 = {}
window.sample3.text = "test"
