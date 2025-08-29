import { IJob } from './interfaces/job';
import { IProject } from './interfaces/project';
import './style.css'

const tecnologies:string[] = ['Angular', 'NestJS', 'MySQL', 'TypeScript', 'TailwindCSS'];

const projects:IProject[] = [
  {title: 'Leidy Inmobiliaria', description: 'Página web para que los clientes puedan conocer a la empresa, sus beneficios, productos brindados y sus respectivos contactos', tecnologies: ['Angular', 'Firebase', 'TailwindCSS'], githubLink: null, liveLink: 'https://leidyinmobiliaria.com'},
  {title: 'XML Sunat', description: 'Paquete de Node para la firma de comprobantes electrónicos (XML) para la SUNAT', tecnologies: ['NodeJS', 'TypeScript'], githubLink: 'https://github.com/jim-ux16/supernova_team_xml_sunat.git', liveLink: 'https://www.npmjs.com/package/@supernova-team/xml-sunat'}
];

const jobs:IJob[] = [
  {title: 'Desarolllador Web', company: 'Leidy Inmobiliaria', startMonthYear: 'Jul. 2024', endMonthYear: 'Ago. 2025'},
  {title: 'Practicante Desarrollo', company: 'Sunarp', startMonthYear: 'Set. 2023', endMonthYear: 'Jun. 2024'},
  {title: 'Practicante Desarrollo', company: 'Ortopedia Vicet', startMonthYear: 'Oct. 2021', endMonthYear: 'Ene. 2022'},
];

const tecnologyListNode = document.getElementById('tecnologies-list') as HTMLUListElement;
const projectListNode = document.getElementById('project-list') as HTMLUListElement;
const jobListNode = document.getElementById('job-list') as HTMLUListElement;

tecnologies.forEach((tecnology) => {
  tecnologyListNode.innerHTML +=
  `<li class="rounded-lg bg-gray-900 p-2 border border-gray-600 text-gray-200 shadow">${tecnology}</li>`
});

projects.forEach((project) => {

  projectListNode.innerHTML += 
  `<li>
    <article class=" container bg-gray-900/30 backdrop-blur-md mx-auto rounded-lg p-8 shadow-lg border border-gray-700 hover:shadow-blue-500/50 transition-all ease-in-out duration-500 relative">

      <div class="absolute top-8 right-8 flex gap-3 text-xl text-gray-500 ">
        ${project.githubLink 
          ?  
          `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">
          <i class="pi pi-github hover:text-white transition-all ease-in-out duration-500"></i>
        </a>` 
        : 
        
        ''}
        <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer">
          <i class="pi pi-external-link hover:text-white transition-all ease-in-out duration-500"></i>
        </a>
      </div>

      <header class="flex gap-3 items-center">
        <i class="pi pi-code text-violet-500 text-2xl"></i>
        <h3 class="text-white font-semibold sm:text-xl text-lg">${project.title}</h3>
      </header>
      <p class="text-gray-400 mt-5 font-light">${project.description}</p>
      <ul class="flex flex-wrap gap-3 mt-5"> 
        ${
          project.tecnologies.map((tec:string) => {
            return `<li class="rounded-lg bg-gray-900 p-2 border border-gray-600 text-gray-200 shadow">${tec}</li>`
          }).join('')
        }
      </ul>
    </article>
  </li>
  `


})

jobs.forEach((job) => {

  jobListNode.innerHTML +=`
  <li class="flex gap-3">
    <i class="pi pi-briefcase text-violet-500 text-2xl"></i>
    <div class="">
      <h3 class="text-xl font-semibold text-white">${job.title} @ ${job.company}</h3>
      <span class="text-gray-300 mt-2">${job.startMonthYear} - ${job.endMonthYear}</span>
    </div>
  </li>
  `

});

