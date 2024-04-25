var list_skills;
var languageJson = "json-es/";

const xhttp_titles = new XMLHttpRequest();
xhttp_titles.open("GET", languageJson + "titulos.json", true);

xhttp_titles.send();
xhttp_titles.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    list_titles = JSON.parse(this.responseText);
    $("#expe").html(list_titles.expe);
    $("#educ").html(list_titles.educ);
  }
};

const xhttp_idiomas = new XMLHttpRequest();
xhttp_idiomas.open("GET", languageJson + "idiomas.json", true);

xhttp_idiomas.send();
xhttp_idiomas.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    list_idiomas = JSON.parse(this.responseText);
    var idiomas = `<h4>Idiomas</h4>
    <div class="text-left">
      <ul>`;
    list_idiomas.map((x) => {
      idiomas += `<li>
      <b>${x.title}</b>
      <ul>
        <li>
          ${x.data.hablado}:
          <span class="bola1"></span>
          <span class="bola2"></span>
          <span class="bola2"></span>
          <span class="bola2"></span>
          <span class="bola2"></span>
        </li>
        <li>
          ${x.data.escrito}:
          <span class="bola1"></span>
          <span class="bola1"></span>
          <span class="bola1"></span>
          <span class="bola2"></span>
          <span class="bola2"></span>
        </li>
      </ul>
    </li>`;
    });
    idiomas += `</ul></div>`;
    $("#languaje").html(idiomas);
  }
};

const xhttp_personalidad = new XMLHttpRequest();
xhttp_personalidad.open("GET", languageJson + "personalidad.json", true);

xhttp_personalidad.send();
xhttp_personalidad.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    list_personalidad = JSON.parse(this.responseText);
    var personalidad = `<h4 class="">${list_personalidad.title}</h4>
    <div
      class="flex_column flex_wrap flex_center p-2 "
      style="padding-left: 50px !important"
    >`;
    list_personalidad.data.map((x) => {
      personalidad += `<div class="text-left">
      <i class="fas fa-check mx-2"></i><span>${x.name}</span>
    </div>`;
    });
    personalidad += "</div>";
    $("#personality").html(personalidad);
  }
};

const xhttp_capacitaciones = new XMLHttpRequest();
xhttp_capacitaciones.open("GET", languageJson + "capacitaciones.json", true);

xhttp_capacitaciones.send();
xhttp_capacitaciones.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    list_capacitaciones = JSON.parse(this.responseText);
    var capacitaciones = `<h4 class="">${list_capacitaciones.title}</h4>
    <div
      class="flex_column flex_wrap flex_center p-2 "
      style="padding-left: 50px !important"
    >`;
    list_capacitaciones.data.map((x) => {
      capacitaciones += `<div class="text-left">
      <i class="fas fa-check mx-2"></i><span>${x.name}</span>
    </div>`;
    });
    capacitaciones += "</div>";
    $("#capacitaciones").html(capacitaciones);
  }
};

const xhttp_skills = new XMLHttpRequest();
xhttp_skills.open("GET", languageJson + "skill.json", true);

xhttp_skills.send();
xhttp_skills.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    list_skills = JSON.parse(this.responseText);
    var skills = "";
    list_skills.map((x) => {
      skills += ` <div class="m-1 flex_column flex_center_vertical">
                                    <img class='img_skills' src="img/skills/${x.icon}" alt="" id="id_${x.name}">
                                    <label class='label_opt' for="id_${x.name}">${x.name}</label>
                                </div>`;
    });
    $("#skills").html(skills);
  }
};

const xhttp_activitys = new XMLHttpRequest();
xhttp_activitys.open("GET", languageJson + "actividades.json", true);

xhttp_activitys.send();
xhttp_activitys.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
    list_activitys = JSON.parse(this.responseText);
    var activitys = `<h4>${list_activitys.title}</h4>
    <div class="flex_row flex_wrap flex_around p-2" id="activitys">`;
    list_activitys.data.map((x) => {
      activitys += ` <div class="m-1 flex_column flex_center_vertical">
            <label class='chips' for="id_${x.name}">${x.name}</label>
        </div>`;
    });
    activitys += "</div>";
    $("#activitys").html(activitys);
  }
};
const xhttp_experiencias = new XMLHttpRequest();
xhttp_experiencias.open("GET", languageJson + "experiencias.json", true);

xhttp_experiencias.send();
xhttp_experiencias.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
    list_skills = JSON.parse(this.responseText);
    var activitys = "";
    list_skills.map((x) => {
      let flag_ref = "";
      if (x.referencia) {
        flag_ref = `<span><b>${x.labels.referencias}: </b> ${x.referencia}</span>`;
      }

      let flag_tec = "";
      if (x.tecnologias) {
        flag_tec = `<span><b>${x.labels.tecnologías}: </b> ${x.tecnologias}</span>`;
      }
      activitys += `<div class="text-left item-work">
                            <div>
                                <span style="font-size:22px; font-weight: bold;"><i class="fas fa-building"></i> ${x.empresa}</span> <span>
                                    <i class="fas fa-map-marker-alt" style="margin-left:15px"></i> ${x.ubicacion}</span>
                            </div>
                            <div>
                                <span><b>${x.labels.industria}:</b> ${x.industria}</span>
                            </div>
                            <div>
                                <span><b>${x.labels.fecha}:</b> ${x.desde} - ${x.hasta}</span>
                            </div>
                            <div>
                                <span><b>${x.labels.puesto}:</b> ${x.puesto}</span> · <span><b>${x.labels.modalidad}: </b> ${x.modalidad_de_trabajo}</span>
                            </div>
                            <div>
                                <span><b>${x.labels.tareas}: </b> ${x.tareas}</span>
                            </div>
                            <div>
                                ${flag_tec}
                            </div>
                            <div>
                                ${flag_ref}
                            </div>
                        </div>`;
    });
    $("#experiencias").html(activitys);
  }
};

const xhttp_educacion = new XMLHttpRequest();
xhttp_educacion.open("GET", languageJson + "estudios.json", true);

xhttp_educacion.send();
xhttp_educacion.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
    list_skills = JSON.parse(this.responseText);
    var activitys = "";
    list_skills.map((x) => {
      activitys += `<div class="text-left item-edutacion">
            <div>
                <span style="font-size:22px; font-weight: bold;"><i class="fas fa-graduation-cap"></i> ${x.titulo}</span> · <span>
                ${x.desde} - ${x.hasta}</span>
            </div>
            <div>
                <span><b>${x.labels.institucion}:</b> ${x.institucion}</span> - <span><b>${x.labels.nivel}:</b> ${x.nivel}</span>
            </div>
        </div>`;
    });
    $("#educacion").html(activitys);
  }
};

function LoadModal(id_app) {
  const xhttp_portafolio2 = new XMLHttpRequest();
  xhttp_portafolio2.open("GET", languageJson + "portafolios.json", true);

  xhttp_portafolio2.send();
  xhttp_portafolio2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      list_skills = JSON.parse(this.responseText);
      list_skills.map((x) => {
        if (id_app == x.icon) {
          $("#title_app").html(`<b>${x.title}</b>`);
          $("#img_app").attr(
            "src",
            "img/portafolios/videos/" + x.icon + ".gif"
          );
          $("#descrip").html(x.description);
          $("#descrip_extend").html(x.descrip_extend);
          let tecnologys = x.tecnologys.split(":");
          var html_tec = "<b>";
          var flag = 0;
          tecnologys.map((tec) => {
            if (flag == 0) {
              html_tec += `${tec}`;
              flag = 1;
            } else html_tec += ` - ${tec}`;
          });

          html_tec += "</b>";
          $("#tecnologys").html(html_tec);
        }
      });
    }
  };
  $("#modal_app").modal("show");
}
