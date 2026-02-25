import { motion } from "framer-motion";

export default function Project2Item({ project, index, onOpen }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="project-type2-item">
      <motion.div
        className={`project-base ${isLeft ? "left" : "right"}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectInfo project={project} onOpen={onOpen} />
        <ProjectImgObject projectId={project.id} />
      </motion.div>
    </div>
  );
}

function ProjectInfo({ project, onOpen }) {
  return (
    <div className="project-info">
      <div className="project-tags">
        <span className="type">{project.type}</span>
        <span className="year">{project.year}</span>
      </div>

      <h3>{project.title}</h3>

      <button className="project-btn" onClick={onOpen}>PROJECT VIEW</button>
    </div>
  );
}

function ProjectImgObject({ projectId }) {
  const id = String(projectId).padStart(2, "0")
  const mainImg = `${import.meta.env.BASE_URL}assets/images/project${id}.png`
  // const subImg = Array.from({length: 4}, (_, i) =>
  //   `${import.meta.env.BASE_URL}assets/images/project${id}_0${i + 1}.png`
  // )

  return (
    <div className="project-frame">
      <div className="project-img-scene">
        <motion.img
          src={mainImg}
          className="main-img"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 160,
            damping: 14,
          }}
        />

        {/* {subImg.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            className={`sub-img sub-${i}`}
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: 0.25 + i * 0.15,
              type: "spring",
              stiffness: 160,
              damping: 14,
            }}
          />
        ))} */}
      </div>
    </div>
  );
}