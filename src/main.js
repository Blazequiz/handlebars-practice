import './style.css'
import templateSource from './templates/template-1.hbs?raw'
import Handlebars from 'handlebars'
import { products } from './data/data.js'

const template = Handlebars.compile(templateSource);
const markup = template({products: products});
console.log(markup)
document.querySelector("#app").innerHTML = markup;


