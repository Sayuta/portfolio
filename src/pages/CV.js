import React from 'react'
import { ThemeProvider } from 'react-bootstrap';
import Skill from '../components/Skill';
import Stars from '../components/Stars';
import './CV.css';



const Skills = [
    {name: "HTML", exp: 5},
    {name: "CSS", exp: 3},
    {name: "Javascript", exp: 4},
    {name: "PHP", exp: 5},
    {name: "React.js", exp: 3},
    {name: "C#", exp: 4},
    {name: "C++", exp: 1},
    {name: "MySQL", exp: 4},
    {name: "Java", exp: 2},
    {name: "ASM", exp: 1},
];
const Assets = [
    {name: "JQuery", exp: 4}, 
    {name: "Symfony", exp: 3}, 
    {name: "React.js", exp: 3}, 
    {name: "Wordpress", exp: 3},  
    {name: "Bootstrap", exp: 4},    
    {name: "Magento", exp: 1},   
    {name: "Unix OS", exp: 2},   
    {name: "Unity Engine", exp: 4},   
];

var SkillsList = [];
var AssetsList = [];



for(var i = 0; i < Skills.length; i++){
    SkillsList.push(<Skill name={Skills[i].name} exp={Skills[i].exp}/>);
}
for(var i = 0; i < Assets.length; i++){
    AssetsList.push(<Skill name={Assets[i].name} exp={Assets[i].exp}/>);
}

const CV = () => {
    return (
    <div className="page">
        <div className="container pt-4">
            <div className="row text-center">
                <h1>Curriculum vitae</h1>
                <p><i className="fw-light">“Give a man a fish, you will feed him for one day. Teach him how to fish and you will feed him forever”</i></p>
                <hr/>
            </div>
            <div className="row">
            <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="col">
                            <div className="col text-center">
                                <img src="./kop-say.png" />
                                <h2>Sayuta Jaspers</h2>
                                <h4>Junior Software Developer</h4>
                            </div>
                            <p>
                            Lupinestraat 131<br/>
                            6466 SE Kerkrade<br/>
                            (+31) 06 29 31 97 07<br/>
                            sayuta40@hotmail.com<br/>
                            www.linkedin.com/in/sayuta-jaspers<br/><br/>

                            Rijbewijs: B<br/>
                            Eigen vervoer: Ja<br/>
                            </p>
                        </div>
                    </div>              
                    <div className="row">
                    <h5>Skills</h5>
                    {SkillsList}
                    </div>
                    <div className="row pt-4">
                    <h5>Assets</h5>
                    {AssetsList}
                    </div>
                    <div className="d-md-none d-block">.</div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <h2>Introduction</h2>
                    <p>Mijn naam is Sayuta. Dat klinkt wellicht als een leuke gamertag, maar het is mijn voornaam en daarbij heb ik indonesische roots. Ik heb altijd graag iets met software gedaan en zou heel graag in deze branche werkzaam willen zijn. Na diverse werkervaringen opgedaan te hebben, ben ik extra gemotiveerd om nu met software development verder te gaan. Ik zie mijzelf ook niet als een standaard 8-5 programmeur maar eerder de leergierige programmeur die doorgaat totdat de puntjes op de i staan.</p>
                    <h2>Experience</h2>
                        <div className="col">
                            <div className="fs-5 mb-0 title">DSV Global Transport and Logistics, Brunssum</div>
                            <b><i>Allround logistiek medewerker</i></b><br/>
                            <i>April 2019 - September 2020</i><br/>
                            <ul>
                                <li>► Meewerken aan de processen binnen een warenhuis.</li>
                                <li>► Lossen, opbergen, picken en laden van goederen.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="fs-5 mb-0 title">POWERAREA, Kerkrade</div>
                            <b><i>Allround medewerker Leisure</i></b><br/>
                            <i>December 2017 - December 2018</i><br/>
                            <ul>
                                <li>► Het begeleiden van activiteiten zoals karten, paintball en escaperooms.</li>
                                <li>► Het onderhouden en bedienen van bar en receptie.</li>
                                <li>► Nieuwe medewerkers inwerken.</li>
                                <li>► Aansturen van collega’s en zaak sluiten na dienst.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="fs-5 mb-0 title">ELCO B.V, Kerkrade</div>
                            <b><i>Medewerker Productie</i></b><br/>
                            <i>Juli 2017 - December 2017</i><br/>
                            <ul>
                                <li>► Montage bedrijfs- CV ketels. Hoofdzakelijk het maken van het skelet, de kamers op elkaar te stapelen en het assembleren ervan.</li>
                                <li>► Installatie gas en ontstekingsmechanisme.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="fs-5 mb-0 title">GSD ICT-Services, Brunssum</div>
                            <b><i>Applicatie ontwikkelaar (stage)</i></b><br/>
                            <i>Februari 2017 - Juli 2017</i><br/>
                            <ul>
                                <li>► Documenteren van...</li>
                                <li>► Realiseren van...</li>
                                <li>► Implementeren van...</li>
                                <li>► Onderhouden van...</li>
                                <li>... Web applicaties</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="fs-5 mb-0 title">Trides, Echt</div>
                            <b><i>Applicatie ontwikkelaar (stage)</i></b><br/>
                            <i>Juli 2015 - Februari 2016</i><br/>
                            <ul>
                                <li>► Documenteren van...</li>
                                <li>► Realiseren van...</li>
                                <li>► Implementeren van...</li>
                                <li>► Onderhouden van...</li>
                                <li>... Web applicaties</li>
                            </ul>
                        </div>
                    <h2>Certificates</h2>
                    <div className="col">
                        <ul>
                            <li>► Bedrijfshulpverlening ~ 2019 - December 2020</li>
                            <li>► Hef- en Reachtruck certificaat ~ 2019 - 2024</li>
                            <li>► Microsoft Office Specialist Word 2013</li>
                            <li>► Microsoft Office Specialist Excel 2013</li>
                        </ul>
                    </div>
                    <h2>Diplomas</h2>
                    <div className="col">
                            <div className="fs-5 mb-0"><b>Gildeopleidingen</b>, Roermond — <i>Diploma</i></div>
                            <i>2014 - 2017</i><br/>
                            <p>MBO Applicatie ontwikkelaar niveau 4</p>
                    </div>
                    <div className="col">
                            <div className="fs-5 mb-0"><b>Herlecollege</b>, Heerlen — <i>Diploma</i></div>
                            <i>2006 - 2010</i><br/>
                            <p>VMBO Theoretische Leerweg</p>
                    </div>
                    <h2>Languages</h2>
                    <p><b>Nederlands</b><br/>
                    <Stars amount={5}/></p>
                    <p><b>Engels</b><br/>
                    <Stars amount={5}/></p>
                    <p><b>Duits</b><br/>
                    <Stars amount={3}/></p>
                    <h2>Hobbies</h2>
                    <p>In mijn vrije tijd speel ik graag gitaar of game met mijn vrienden. Ik heb een aantal jaren geleden mijn eigen rig gebouwd en die doet het nog prima.</p>
                    <p>Ik kijk graag japanse tekenfilms en ik ben bezig om japans te leren. Mijn droom is dan ook om ooit eens naar Japan te gaan op vakantie.</p>
                    <p>Wanneer ik voor mijn computer zit ben ik meestal wel bezig met iets van software. Ik heb daarbij ook een grote interesse in ethical hacking en memory hacking (games).</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CV;
