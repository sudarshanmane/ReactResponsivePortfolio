const SectionHeading = ({ eyebrow, title, description, icon: Icon }) => (
  <div className="section-heading">
    <span className="section-eyebrow">
      {Icon && <Icon size={15} strokeWidth={1.8} />}
      {eyebrow}
    </span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

export default SectionHeading;
