import Image from "next/image";

type IntroScreenProps = {
  onProceed: () => void; // function prop from parent
};

export default function IntroScreen({ onProceed }: IntroScreenProps) {
    return (
        <>
            <div className="intro-homescreen-wrapper">
                  <div className="intro-homescreen">
                      <div className="intro-homescreen-bg"></div>
                      <Image className="intro-big-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
                      <Image className="intro-little-star" src="/chromestar.png" alt="Little Star" height="944" width="1423" />
                      <Image className="intro-big-star" src="/chromestar.png" alt="Big Star" height="944" width="1423" />
                      <Image className="intro-little-star" src="/chromestar.png" alt="Little Star" height="944" width="1423" />
                  </div>
                  <div className="intro-text-content">
                      <Image className="homescreen-logo" height="90" width="712" src="/chromestars-stars-logo.png" alt="CHROMESTARS logo" />
                      <p> CHROMESTARS™ invites you to the ultimate underground racing circuit—a multi-week battle of speed, skill, and strategy. 
                          This isn’t just about being fast; it’s about proving you have what it takes to rise above the rest. 
                          <br /><br />
                          Do you have what it takes to rule the streets? <b>The crown is waiting.</b>
                      </p>
                      <div onClick={onProceed} className="form__btn">ENTER</div>
                  </div>
            </div>
        </>
    )
}