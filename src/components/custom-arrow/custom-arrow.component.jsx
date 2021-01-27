import './custom-arrow.styles.scss';

const CustomArrow = ({ typeArrow = '', children, ...otherProps}) => {
  return (
    <div className={`custom-arrow ${typeArrow}`} {...otherProps}>
      <span>{children}</span>
    </div>
  );
};

export default CustomArrow;