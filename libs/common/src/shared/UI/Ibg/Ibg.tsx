import classes from './Ibg.module.scss';

export const Ibg = ({
  src,
  alt,
  modClass,
  ...otherProps
}: {
  src: string;
  alt: string;
  modClass: string;
}) => {
  return (
    <div className={`${classes.clIbg} ${modClass}`}>
      <img src={src!} alt={alt!} {...otherProps} />
    </div>
  );
};
