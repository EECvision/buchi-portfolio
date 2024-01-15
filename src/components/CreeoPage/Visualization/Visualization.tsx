import classes from "./Visualization.module.css";
import VisualizationImage from "../../../assets/visualization.webp";
import creeoVisual from "../../../assets/creeo-visual.webp";
import processMap from "../../../assets/process-map.webp";
import process from "../../../assets/process.webp";
import ideas from "../../../assets/ideas.webp";
import stickyNotes from "../../../assets/notes.webp";

const Visualization = () => {
  return (
    <div className={classes.container}>
      <img className={classes.heading} src={VisualizationImage} alt="" />
      <img className={classes.image} src={creeoVisual} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>The</span>
              <span>Challenge</span>
            </div>
          </div>
          <div className={classes.text}>
            NFT creators find it difficult hand-drawing{" "}
            <span>thousands of unique NFT</span> artworks for their projects.
            <span>Non-technical</span> artists find it daunting to create,
            deploy and manage their NFT smart contracts. Creators often rely on
            the collaboration of a software developer to{" "}
            <span>generate metadata</span> which slows down the creative
            process.
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage2}`}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>The</span>
              <span>Goal</span>
            </div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.text}>
              NFT creators find it difficult hand-drawing{" "}
              <span>thousands of unique NFT</span> artworks for their projects.
              <span>Non-technical</span> artists find it daunting to create,
              deploy and manage their NFT smart contracts. Creators often rely
              on the collaboration of a software developer to{" "}
              <span>generate metadata</span> which slows down the creative
              process.
            </div>
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage3}`}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>The</span>
              <span>Process</span>
            </div>
          </div>
          <div className={classes.processMap}>
            <img src={processMap} alt="" />
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage4}`}>
          <div className={classes.left}>
            <img className={classes.processImage} src={process} alt="" />
          </div>
          <div className={classes.right}>
            <div className={classes.text}>
              <div className={classes.title}>
                User Research objectives for Creeo web application.
              </div>
              <ul>
                <li>
                  Understand the processes and emotions that people experience
                  around the problem Creeo is trying to solve
                </li>
                <li>
                  Identify common user behaviours and experiences with tasks
                  that Creeo is trying to solve
                </li>
                <li>
                  Understand user needs and frustrations as they relate to Art
                  and NFT creation
                </li>
                <li>
                  Identify and understand scenarios that make users want to use
                  Creeo
                </li>
                <li>
                  Understand what culminates in a happy user experience for
                  Creeo users
                </li>
              </ul>
            </div>

            <div className={classes.text}>
              <div className={classes.title}>User Research summery</div>I needed
              to understand how artists create and deploy these thousands of PFP
              artworks as NFTs, and what their creative process looks like for
              such quantity of art.So, I reached out to four random NFT artists
              on twitter with some questions and found out that most of their
              processes were highly <span>repetitive</span>.
            </div>
            <br />
            <div className={classes.text}>
              I didn’t stop there, I conducted proper <span>user research</span>{" "}
              this time including more artists and NFT creators, I also sent out{" "}
              <span>questionnaires</span> to help me uncover more user pain
              points.
            </div>
            <div className={classes.link}>Link to full user Research here.</div>

            <div className={classes.designImages}>
              <img src={stickyNotes} alt="" />
              <img src={ideas} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
