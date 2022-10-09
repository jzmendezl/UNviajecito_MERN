import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/header'
import { useUsers } from '../context/userContext'
import '../resources/css/aboutUs.css'

import userIcon from '../resources/img/user_icon.svg'
import ATIcon from '../resources/img/Atlassian_white.svg'
import GHIcon from '../resources/img/Github_white.svg'
import GMIcon from '../resources/img/Gmail_white.svg'
import LdIcon from '../resources/img/LinkedIN_white.svg'





export default function AboutUsPage() {

  let navigate = useNavigate()
  const { isLogged } = useUsers()

  useEffect(() => {
    if (!isLogged()) {
      navigate('/')
    }
  }, [isLogged, navigate])


  return (
    <div className='pageAboutUs'>
      <Header />

      <div id='bodyAU'>
        <p id='titleAU'>Unviajecito</p>
        <p id='txtBodyAU'>
          <br /> <br />
          Somos un grupo que busca darle apoyo a las personas que buscan compartir un medio de transporte desde o hacia la UN, el fin es simplemente el poder crear un medio en el cual la comunidad universitaria pueda verse beneficiada en gran medida. <br /> <br /> Contamos con un sistema en el cual un usuario pueda registrarse y a través de su cuenta vincular un vehículo, luego en la zona de búsquedas se pueden agregar rutas si tienes un vehículo vinculado y puedes ofrecer una tarifa, una forma de contactarte y demás funcionalidades que puedes revisar. Lo mejor es que tu puedes ser tanto un conductor como un usuario y buscar las rutas que puedas necesitar y aplicar a ellas.<br /> <br />
          Esperamos que este proyecto sea de su agrado y si tienes alguna inquietud no dudes en contactarnos.
        </p>
      </div>

      <div className='viewUS'>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Joe Mendez</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/jzmendezl">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:jzmendezl@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://www.linkedin.com/in/joezmendezl/">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Brian Chaparro</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/bchaparro11">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:bchaparro@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://co.linkedin.com/in/brian-chaparro-cetina-1530b71ba">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Camilo Fierro</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/LinkCFF">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:cfierro@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://www.linkedin.com/">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Juan Caicedo</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/jcaicedoro">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:jcaicedoro@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://www.linkedin.com/">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Karen Medina</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/KarenMedina">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:kamedinava@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://www.linkedin.com/">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>

        <div className='linksUs'>
          <img src={userIcon} alt="" className='PhotoUS' />
          <p>Alejandra Jimenez</p>
          <div className='socialUS'>
            <button className='btnIconAU'>
              <a href="https://malejaj.atlassian.net/jira/software/projects/UN/boards/1">
                <img src={ATIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://github.com/malejaj">
                <img src={GHIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="mailto:majimenezh@unal.edu.co">
                <img src={GMIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
            <button className='btnIconAU'>
              <a href="https://www.linkedin.com/">
                <img src={LdIcon} alt="" className='imgSocialUS' />
              </a>
            </button>
          </div>
        </div>
        
      </div>

    </div>
  )
}


// LinkCFF