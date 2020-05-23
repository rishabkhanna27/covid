import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import styles from './About.module.css';
import {FooterPage} from '../../Footerfile/Footer'

import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import imag1 from '../../slideshow/1.jpg';
import imag2 from '../../slideshow/2.jpg';
import imag3 from '../../slideshow/3.jpg';
import imag4 from '../../slideshow/4.png';
import imag5 from '../../slideshow/5.png';
import imag6 from '../../slideshow/6.jpg';
export class About extends Component{
    render(){
        return(
            <div className={styles.container}>
               
        <div className={styles.slide}>
          <div>
             <p className={styles.head}><u><b>COVID-19</b></u></p></div>
             <Carousel>
<Carousel.Item>
    <img className="d-block w-100" src={imag1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={imag2} alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={imag3} alt="Third slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={imag4} alt="Fourth slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={imag5} alt="Fifth slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={imag6} alt="Sixth slide"/>
  </Carousel.Item>
</Carousel>  
</div>
<br></br>
<div>

<CardDeck className={styles.cardss}>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img1} />
    <Card.Body>
    <h3>INTRODUCTION</h3><br></br>
    The COVID-19 pandemic, also known as the coronavirus pandemic, 
      is an ongoing pandemic of coronavirus disease 2019 (COVID‑19) caused 
      by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).
      <Card.Title>  <Button href="#a" className="btn" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img2} />
    <Card.Body>
    <h3>SYMPTOMS</h3><br></br>
    Symptoms of COVID-19 can be relatively non-specific and infected people may be asymptomatic. 
    The two most common symptoms are fever (88 per cent) and dry cough (68 per cent).<br></br><br></br>
      <Card.Title>  <Button href="#b" className="btn" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img3} />
    <Card.Body>
    <h3>PREVENTION</h3><br></br>
    Strategies for preventing transmission of the disease include maintaining 
    overall good personal hygiene, washing hands, avoiding touching the eyes, nose, or mouth with unwashed hands etc.<br></br><br></br>
      <Card.Title>  <Button href="#c" className="btn" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

</CardDeck>

</div>
<div id="a" className={styles.main} ><p className={styles.header}><b><u>INTRODUCTION TO COVID‑19</u></b></p><br></br>
            <p className={styles.text}><b>The COVID-19 pandemic, also known as the coronavirus pandemic, is an ongoing pandemic of coronavirus disease 2019 (COVID‑19)
 caused by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).The outbreak was first identified in Wuhan, China,
 in December 2019. The World Health Organization declared the outbreak a Public Health Emergency of International Concern on 30 January, and a pandemic on 11 March. As of 14 May 2020, more than 4.37 million cases of COVID-19 have been reported in over 188 countries and territories, resulting in more than 297,000 deaths. More than 1.56 million people have recovered.

The virus is primarily spread between people during close contact, most often via small droplets produced by coughing,
 sneezing, and talking.The droplets usually fall to the ground or onto surfaces rather than travelling through air over long distances. Less commonly, people may become infected by touching a contaminated surface and then touching their face.It is most contagious during the first three days after the onset of symptoms, although spread is possible before symptoms appear,
  and from people who do not show symptoms..</b></p><br></br><br></br>
</div>
<div id="b" className={styles.main} ><p className={styles.header}><b><u>SYMPTOMS OF COVID‑19</u></b></p><br></br>
            <p className={styles.text}><b>Symptoms of coronavirus can be relatively non-specific and infected people may be asymptomatic.  The
                 two most common symptoms are fever (88 per cent) and dry cough (68 per cent). Less common 
symptoms include fatigue, respiratory sputum production (phlegm), loss of the sense of smell,
loss of taste, shortness of breath, muscle and joint pain, sore throat, headache, chills, vomiting,
 coughing out blood, and diarrhea.
Approximately one in five people become seriously ill and has difficulty breathing.Emergency symptoms include 
difficulty breathing, persistent chest pain or pressure, sudden confusion, difficulty waking, and bluish face or
 lips; immediate medical attention is advised if these symptoms are present.Further development of the disease
  can lead to complications including pneumonia, acute respiratory distress syndrome, sepsis, septic shock, and
   kidney failure.
Some infected people have no symptoms, known as asymptomatic or presymptomatic carriers.
Transmission from such a carrier can occur. Health authorities have issued public notices that people with 
se contact to confirmed infected people should be quarantined and closely monitored.Chinese estimates
the asymptomatic ratio range from few to 44 per cent.The usual incubation period (the time between infection
 and symptom onset) ranges from one to 14 days, and is most commonly five days.</b></p><br></br><br></br>
 </div>
 <div id="c" className={styles.main} ><p className={styles.header}><b><u>PREVENTION OF COVID‑19</u></b></p><br></br>
 <p className={styles.text}><b>
 Strategies for preventing transmission of the disease include maintaining overall good personal hygiene,
washing hands, avoiding touching the eyes, nose, or mouth with unwashed hands, and coughing or sneezing into a 
tissue, and putting the tissue directly into a waste container. Those who may already have the infection have been
advised to wear a surgical mask in public.Physical distancing measures are also recommended to prevent 
transmission.Health care providers taking care of someone who may be infected are recommended to use 
standard precautions, contact precautions, and eye protection.
Many governments have restricted or advised against all non-essential travel to and from countries and areas affected
the outbreak.The virus has already spread within communities in large parts of the world, with many not knowing
re or how they were infected.<br></br>Basic measures to keep in mind:<div className={styles.points} ><br></br>1) Hand washing<br></br>2) Surface cleaning<br></br>3) Face masks and respiratory hygiene<br></br>
4)Social distancing  <br></br>   5)Self Isolation</div>
 </b></p>
 </div>
 <FooterPage/>

</div>

        )
    }
}
export default About;