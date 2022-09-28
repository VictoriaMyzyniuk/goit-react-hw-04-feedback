import { PropTypes } from 'prop-types';
import { SectionCommon, Header } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCommon>
      {title && <Header>{title}</Header>}
      {children}
    </SectionCommon>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
