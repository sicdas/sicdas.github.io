var speak_section = document.getElementById("speak");


function generateProfile(speaker, id){
	return 				'<div class="card">'
                        +'<div id="heading_'+id+'">'
                          +'<div class="schedule-slot-time">'
                            +'<span>'+speaker.schedule+'</span>'
                            +'Conferencia'
                          +'</div>'
                          +'<div class="collapsed card-header" data-toggle="collapse" data-target="#collapse_'+id+'" aria-expanded="false" aria-controls="collapse_'+id+'">'
                            +'<div class="images-box">'
                              +'<img class="img-fluid" src="assets/img/speaker/'+speaker.image+'" alt="">'
                            +'</div>                     '
                            +'<h4>'+speaker.name+'</h4>'
                            +'<h5 class="name">'+speaker.profile+'</h5>'
                          +'</div>'
                        +'</div>'
                        +'<div id="collapse_'+id+'" class="collapse" aria-labelledby="heading_'+id+'" data-parent="#accordion">'
                          +'<div class="card-body">'
                            +'<p>'+speaker.profile+'</p>'
                          +'</div>'
                        +'</div>'
                      +'</div>';
}



let list_speakers = [
  {
    "name": "Díez Sanmartín Covadonga",
    "profile": "Ingeniera informática de la Universidad Complutense de Madrid -ESPAÑA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "diez.png"
  },
  {
    "name": "Ervin Jesús Álvarez Sánchez ",
    "profile": "Coordinador del doctorado en ingeniería en la Universidad de Veracruz-MEXICO",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "ervin.png"
  },
    {
    "name": "Jorge Zavaleta",
    "profile": "Investigador en Ciencia de Datos con Beca del Consejo Nacional de Desarrollo Científico y Tecnológico (CNPq)- BRASIL.",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "jorge.png"
  },
    {
    "name": "Celia Martín Cubillo",
    "profile": "Ingeniera biomédica personal interno del Hospital Universitario La Paz de Madrid-ESPAÑA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "celia.png"
  },
    {
    "name": "Herminio Paucar Curasma",
    "profile": "Investigador del Instituto de Ciencias Matematicas y Computación (ICMC) de la Universidad de São Paulo (USP) -BRASIL",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "herminio.png"
  },
    {
    "name": "Berrondo Otermin Maialen",
    "profile": "Investigadora de la Universidad Complutense de Madrid – ESPAÑA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "berrondo.png"
  },
  {
    "name": "Daisy Albuquerque",
    "profile": "Estudiante de Doctorado en el Programa de Postgrado de UNIRIO-BRASIL",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "daisy.png"
  }, 
  {
    "name": "Veeramanickam M.R.M",
    "profile": "Investigador Departamento de Ingeniería Informática. Universidad de Chitkara -INDIA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "veeramanickam.png"
  }, 
  {
    "name": "Sandip Kumar Roy",
    "profile": "Vicep, IDM Technologies, Facultad adjunta, SP Jain School of Global Management, Dubai -EMIRATOS ARABES",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "sandip.png"
  }, 
  {
    "name": "Preeta Sharan",
    "profile": "Departamento de ECE The Oxford College og Engineering -INDIA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "preeta.png"
  }, 
  {
    "name": "Franky Jamin",
    "profile": "Rector / Presidente de la Universidad Matana -INDONESIA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "franky.png"
  }, 
    {
    "name": "Jamil Hasan",
    "profile": "Profesor Asociado, Departamento de Ciencias de la Computación, Universidad de Idaho – ESTADOS UNIDOS",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "jamil.png"
  }, 
    {
    "name": "Ciro Rodríguez",
    "profile": "Miembro del GI-ITDATA , Renacyt, Docente Principal de la FISI-UNMSM, PERÚ",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "ciro.png"
  },
    {
    "name": "Ashish Bagwari",
    "profile": "Researcher of Uttarakhand Technical University -INDIA",
    "schedule": '13:00:00',
    "lecture": "Without topic",
    "image": "ashish.png"
  },
  ];

var fullText = "";
for (var i = 0; i < list_speakers.length; i++) {
	fullText = fullText + generateProfile(list_speakers[i],i);	
}

speak_section.innerHTML = fullText; 

