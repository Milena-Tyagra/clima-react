export const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {title && <span className="uppercase text-3xl font-light" >{title}</span>}
      {subtitle && <span className="font-extralight  text-xl">{subtitle}</span>}
    </div>
  );
};
