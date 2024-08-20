const btnServices=document.getElementById("btn_services");
const sectionServices=document.getElementById("services");
const mapBtn=document.getElementById("our_office_map");
const mapImg=document.getElementById("maps");

btnServices.addEventListener('click', () => {
    sectionServices.scrollIntoView({ behavior: 'smooth' });
  });

mapBtn.addEventListener('click', () => {
    mapImg.scrollIntoView({behavior: 'smooth' });
})